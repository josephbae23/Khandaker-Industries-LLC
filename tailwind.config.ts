import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  "#eef1f7",
          100: "#d5dcea",
          200: "#aab8d5",
          300: "#7f94c0",
          400: "#5471ab",
          500: "#2a4d8f",
          600: "#1e3a72",
          700: "#162b56",
          800: "#0e1d3a",
          900: "#070e1d",
          950: "#030912",
        },
        gold: {
          50:  "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#c9980a",
          600: "#b07d08",
          700: "#8a6006",
          800: "#634404",
          900: "#3d2802",
        },
        sand: {
          50:  "#fdf9f3",
          100: "#f5ead9",
          200: "#ead4b3",
          300: "#deba88",
          400: "#d09f5c",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body:    ["var(--font-inter)", "system-ui", "sans-serif"],
        arabic:  ["var(--font-cairo)", "Arial", "sans-serif"],
        mono:    ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "hero-pattern":
          "radial-gradient(ellipse at 20% 50%, rgba(42,77,143,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(201,152,10,0.08) 0%, transparent 50%)",
        "gold-gradient":
          "linear-gradient(135deg, #c9980a 0%, #fbbf24 50%, #c9980a 100%)",
        "navy-gradient":
          "linear-gradient(135deg, #0e1d3a 0%, #1e3a72 50%, #0e1d3a 100%)",
      },
      boxShadow: {
        gold:   "0 4px 24px rgba(201, 152, 10, 0.25)",
        navy:   "0 8px 40px rgba(14, 29, 58, 0.35)",
        card:   "0 2px 16px rgba(14, 29, 58, 0.08), 0 1px 4px rgba(14,29,58,0.04)",
        "card-hover": "0 8px 40px rgba(14, 29, 58, 0.16), 0 2px 8px rgba(14,29,58,0.08)",
      },
      animation: {
        "fade-up":    "fadeUp 0.7s ease forwards",
        "fade-in":    "fadeIn 0.5s ease forwards",
        "slide-in-r": "slideInRight 0.6s ease forwards",
        "slide-in-l": "slideInLeft 0.6s ease forwards",
        shimmer:      "shimmer 2s infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInRight: {
          "0%":   { opacity: "0", transform: "translateX(32px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInLeft: {
          "0%":   { opacity: "0", transform: "translateX(-32px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
