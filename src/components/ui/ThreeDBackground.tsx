"use client";

import React, { useEffect, useRef } from "react";

export function ThreeDBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // 3D Particles
    const PARTICLE_COUNT = Math.min(Math.floor(window.innerWidth / 18), 75);
    const particles: Array<{
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
      radius: number;
      color: string;
    }> = [];

    const colorsDark = [
      "rgba(226, 58, 156, ", // Xora magenta
      "rgba(34, 211, 238, ",  // Cyan
      "rgba(127, 147, 240, ", // Electric Navy
      "rgba(168, 85, 247, ",  // Violet
    ];

    const colorsLight = [
      "rgba(226, 58, 156, ", // Xora magenta
      "rgba(49, 69, 201, ",  // Navy 500
      "rgba(6, 182, 212, ",  // Cyan
      "rgba(99, 102, 241, ", // Indigo
    ];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: (Math.random() - 0.5) * width * 1.4,
        y: (Math.random() - 0.5) * height * 1.4,
        z: Math.random() * 800 + 200,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        vz: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2 + 1.2,
        color: colorsDark[Math.floor(Math.random() * colorsDark.length)],
      });
    }

    const fov = 400;

    const render = () => {
      // Smooth mouse follow
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      const isDark = document.documentElement.classList.contains("dark");
      ctx.clearRect(0, 0, width, height);

      const colorPalette = isDark ? colorsDark : colorsLight;
      const mouseOffsetX = (mouseX - width / 2) * 0.25;
      const mouseOffsetY = (mouseY - height / 2) * 0.25;

      const projectedPoints: Array<{ x: number; y: number; scale: number; alpha: number; color: string }> = [];

      // Update and project 3D points
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        // Boundaries wrap in 3D box
        if (p.x < -width * 0.8) p.x = width * 0.8;
        if (p.x > width * 0.8) p.x = -width * 0.8;
        if (p.y < -height * 0.8) p.y = height * 0.8;
        if (p.y > height * 0.8) p.y = -height * 0.8;
        if (p.z < 100) p.z = 1000;
        if (p.z > 1000) p.z = 100;

        const scale = fov / (fov + p.z);
        const projX = (p.x - mouseOffsetX) * scale + width / 2;
        const projY = (p.y - mouseOffsetY) * scale + height / 2;

        const depthAlpha = Math.max(0.1, Math.min(0.85, (1000 - p.z) / 900)) * (isDark ? 0.9 : 0.45);
        const color = colorPalette[i % colorPalette.length];

        projectedPoints.push({
          x: projX,
          y: projY,
          scale,
          alpha: depthAlpha,
          color,
        });

        // Draw particle node
        ctx.beginPath();
        ctx.arc(projX, projY, p.radius * scale * 1.8, 0, Math.PI * 2);
        ctx.fillStyle = `${color}${depthAlpha})`;
        ctx.fill();

        // Node subtle glow
        if (isDark && scale > 0.4) {
          ctx.beginPath();
          ctx.arc(projX, projY, p.radius * scale * 3.5, 0, Math.PI * 2);
          ctx.fillStyle = `${color}${depthAlpha * 0.2})`;
          ctx.fill();
        }
      }

      // Draw 3D connecting lines between close points
      const maxDistance = 140;
      for (let i = 0; i < projectedPoints.length; i++) {
        for (let j = i + 1; j < projectedPoints.length; j++) {
          const p1 = projectedPoints[i];
          const p2 = projectedPoints[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * 0.25 * Math.min(p1.alpha, p2.alpha);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = isDark
              ? `rgba(168, 85, 247, ${lineAlpha * 1.2})`
              : `rgba(49, 69, 201, ${lineAlpha * 0.7})`;
            ctx.lineWidth = 0.8 * Math.min(p1.scale, p2.scale);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Dynamic 3D ambient glows */}
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-xora-500/10 blur-[120px] transition-colors duration-700 dark:bg-xora-500/15" />
      <div className="absolute top-1/2 -left-40 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-navy-500/10 blur-[140px] transition-colors duration-700 dark:bg-navy-600/20" />
      <div className="absolute -bottom-40 right-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[130px] transition-colors duration-700 dark:bg-cyan-500/15" />

      {/* 3D Canvas Mesh */}
      <canvas ref={canvasRef} className="h-full w-full opacity-80 dark:opacity-95" />
    </div>
  );
}
