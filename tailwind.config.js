/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef1fe",
          100: "#d7defc",
          200: "#aebcf9",
          300: "#7f93f0",
          400: "#4f67e4",
          500: "#3145c9",
          600: "#2636ab",
          700: "#1f2c8f",
          800: "#1a2573",
          900: "#141d5c",
          950: "#0d1440",
        },
        xora: {
          50: "#fdf1f8",
          100: "#fbe4f2",
          200: "#f8c8e4",
          300: "#f39cd0",
          400: "#ec61b4",
          500: "#e23a9c",
          600: "#c91a83",
          700: "#a80f6b",
          800: "#8a1058",
          900: "#73124d",
          950: "#46052d",
        },
        cyan: {
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "navy-gradient": "linear-gradient(135deg, #141d5c 0%, #1a2573 50%, #2636ab 100%)",
        "xora-gradient": "linear-gradient(135deg, #e23a9c 0%, #c91a83 100%)",
        "hero-grid":
          "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
        "grid-light":
          "linear-gradient(rgba(20,29,92,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(20,29,92,0.05) 1px, transparent 1px)",
      },
      boxShadow: {
        card: "0 10px 40px -12px rgba(20, 29, 92, 0.15)",
        "card-hover": "0 20px 50px -12px rgba(20, 29, 92, 0.25)",
        glow: "0 0 40px -8px rgba(226, 58, 156, 0.45)",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "float-slower": "float 12s ease-in-out infinite",
        "fade-up": "fadeUp 0.7s ease-out both",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
