"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { WifiOff } from "lucide-react";


type LoadingScreenProps = {
  onComplete?: () => void;
  minDuration?: number; // milliseconds
};

export function LoadingScreen({
  onComplete,
  minDuration = 2200,
}: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);
  const [isOffline, setIsOffline] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Monitor network status
  useEffect(() => {
    setIsOffline(!navigator.onLine);
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  useEffect(() => {
    // Check session storage to only run once per session
    const hasLoaded = sessionStorage.getItem("xora_initial_loaded");
    if (hasLoaded) {
      setShouldRender(false);
      onComplete?.();
      return;
    }

    // Lock body scroll while loading screen is active
    document.body.style.overflow = "hidden";

    if (shouldReduceMotion) {
      setProgress(100);
      const timer = setTimeout(() => {
        sessionStorage.setItem("xora_initial_loaded", "true");
        setIsDone(true);
        document.body.style.overflow = "";
        setTimeout(() => {
          setShouldRender(false);
          onComplete?.();
        }, 300);
      }, 500);
      return () => clearTimeout(timer);
    }

    const startTime = performance.now();
    let animationFrameId: number;

    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const linearProgress = Math.min(elapsed / minDuration, 1);

      // Smooth custom easing curve
      const easedProgress =
        linearProgress < 0.7
          ? Math.pow(linearProgress / 0.7, 1.2) * 75
          : 75 + Math.pow((linearProgress - 0.7) / 0.3, 0.85) * 25;

      const currentPercent = Math.min(Math.round(easedProgress), 100);
      setProgress(currentPercent);

      if (linearProgress < 1) {
        animationFrameId = requestAnimationFrame(updateProgress);
      } else {
        setProgress(100);
        setTimeout(() => {
          sessionStorage.setItem("xora_initial_loaded", "true");
          setIsDone(true);
          document.body.style.overflow = "";
          setTimeout(() => {
            setShouldRender(false);
            onComplete?.();
          }, 600);
        }, 400);
      }
    };

    const startTimeout = setTimeout(() => {
      animationFrameId = requestAnimationFrame(updateProgress);
    }, 200);

    return () => {
      clearTimeout(startTimeout);
      cancelAnimationFrame(animationFrameId);
      document.body.style.overflow = "";
    };
  }, [minDuration, onComplete, shouldReduceMotion]);

  // Dynamic real-time loading step message
  const getLoadingMessage = () => {
    if (isOffline) {
      return "Offline Mode — displaying cached resources...";
    }
    if (progress < 30) {
      return "Initializing platform services...";
    }
    if (progress < 75) {
      return "Fetching the latest data, please wait...";
    }
    if (progress < 100) {
      return "Optimizing live workspace & assets...";
    }
    return "Ready. Welcome to XORA Technologies.";
  };

  if (!shouldRender) return null;

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="xora-loading-screen"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-between bg-white px-6 py-10 selection:bg-xora-500 selection:text-white"
          aria-live="polite"
          aria-label="Loading XORA Technologies"
        >
          {/* Top Live Status Bar */}
          <div className="flex w-full max-w-md items-center justify-between text-[11px] font-medium text-navy-500">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-navy-50 px-3 py-1 dark:bg-navy-900">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="font-semibold text-navy-800 dark:text-navy-200">Realtime</span>
            </div>

            {/* Live Motto */}
            <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-navy-600 dark:text-navy-300">
              <span className="text-xora-600">.Fast</span>
              <span>·</span>
              <span className="text-navy-800">.Smarter</span>
              <span>·</span>
              <span className="text-cyan-600">.Always ON</span>
            </div>
          </div>

          {/* Center Area: Logo + Progress */}
          <div className="relative z-10 flex w-full max-w-[480px] flex-col items-center">
            {/* Subtle Ambient Glow */}
            <div
              className="pointer-events-none absolute h-[320px] w-[320px] rounded-full bg-gradient-to-tr from-xora-500/10 via-xora-100/25 to-navy-500/10 blur-[80px]"
              aria-hidden="true"
            />

            {/* Reduced Compact Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 6 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.65,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="relative w-full max-w-[180px] sm:max-w-[220px] md:max-w-[250px]"
            >
              <Image
                src="/logo.png"
                alt="XORA TECHNOLOGIES"
                width={800}
                height={327}
                priority
                className="h-auto w-full object-contain"
                draggable={false}
              />
            </motion.div>

            {/* Loading text and Progress section */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.15,
                ease: "easeOut",
              }}
              className="mt-6 flex w-full flex-col items-center sm:mt-7"
            >
              {/* Dynamic Status Text & Percentage */}
              <div className="flex w-full max-w-[160px] items-center justify-between px-0.5 text-[11px] sm:max-w-[190px] md:max-w-[210px] sm:text-xs">
                <span className="font-display font-medium text-navy-700">
                  Loading<span className="animate-pulse">...</span>
                </span>
                <span className="font-mono font-bold text-xora-600">
                  {progress}%
                </span>
              </div>

              {/* Small Compact Straight Horizontal Progress Line */}
              <div className="relative mt-1.5 h-[2px] w-full max-w-[160px] overflow-hidden rounded-full bg-navy-100/80 sm:max-w-[190px] md:max-w-[210px]">
                <motion.div
                  className="relative h-full rounded-full bg-gradient-to-r from-xora-500 via-xora-600 to-navy-900"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "linear" }}
                >
                  <div className="absolute right-0 top-1/2 h-2.5 w-3.5 -translate-y-1/2 rounded-full bg-xora-400/90 blur-[1.5px]" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                </motion.div>
              </div>

              {/* 1. Real-time Status Message */}
              <p className="mt-2 text-center text-[11px] font-medium text-navy-500 transition-all duration-300">
                {getLoadingMessage()}
              </p>

              {/* 3. Offline Mode Banner */}
              {isOffline && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 inline-flex items-center gap-1.5 rounded-xl border border-amber-200 bg-amber-50/90 px-3 py-1 text-[10px] text-amber-800"
                >
                  <WifiOff className="h-3 w-3 shrink-0 text-amber-600" />
                  <span>
                    <strong>Offline Mode:</strong> Showing cached data.
                  </span>
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* Bottom Tagline */}
          <div className="text-center">
            <p className="font-display text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-navy-400">
              Innovate · Build · Grow
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
