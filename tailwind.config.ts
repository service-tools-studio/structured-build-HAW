import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        heading: ["var(--font-heading)", "ui-serif", "Georgia", "serif"],
        inter: ["var(--font-inter)"],
        manrope: ["var(--font-manrope)"],
        instrument: ["var(--font-instrument)"],
        montserrat: ["var(--font-montserrat)"],
      },
      colors: {
        bg: "hsl(var(--bg) / <alpha-value>)",
        fg: "hsl(var(--fg) / <alpha-value>)",
        muted: "hsl(var(--muted) / <alpha-value>)",
        border: "hsl(var(--border) / <alpha-value>)",
        primary: "hsl(var(--primary) / <alpha-value>)",
        accent: "hsl(var(--accent) / <alpha-value>)",
      },
      boxShadow: {
        soft: "0 10px 25px rgba(0,0,0,0.06)",
      },
      borderRadius: {
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
