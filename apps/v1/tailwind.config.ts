import type { Config } from "tailwindcss"

export default {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--ap-background) / <alpha-value>)",
        foreground: "rgb(var(--ap-foreground) / <alpha-value>)",
        card: {
          DEFAULT: "rgb(var(--ap-background) / <alpha-value>)",
          foreground: "rgb(var(--ap-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "rgb(var(--ap-background) / <alpha-value>)",
          foreground: "rgb(var(--ap-foreground) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "rgb(var(--ap-primary) / <alpha-value>)",
          foreground: "rgb(var(--ap-primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "rgb(var(--ap-secondary) / <alpha-value>)",
          foreground: "rgb(var(--ap-secondary-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--ap-muted) / <alpha-value>)",
          foreground: "rgb(var(--ap-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "rgb(var(--ap-muted) / <alpha-value>)",
          foreground: "rgb(var(--ap-muted-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "rgb(239 68 68 / <alpha-value>)",
          foreground: "rgb(255 255 255 / <alpha-value>)",
        },
        border: "rgb(var(--ap-border) / <alpha-value>)",
        ring: "rgb(var(--ap-ring) / <alpha-value>)",
        input: "rgb(var(--ap-border) / <alpha-value>)",
      },
      borderRadius: {
        DEFAULT: "var(--ap-radius)",
      },
      keyframes: {
        // Existing keyframes
        "ap-float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
        "ap-shine": {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        "ap-pop": {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)" },
        },
        "ap-glow-pulse": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        "aurora-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        // New GenZ animation keyframes
        "ap-bounce": {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "30%": { transform: "translateY(-8px) scale(1.02)" },
          "50%": { transform: "translateY(-4px) scale(1)" },
          "70%": { transform: "translateY(-2px) scale(1.01)" },
        },
        "ap-wiggle": {
          "0%, 100%": { transform: "translateX(0)" },
          "10%": { transform: "translateX(-4px)" },
          "20%": { transform: "translateX(4px)" },
          "30%": { transform: "translateX(-4px)" },
          "40%": { transform: "translateX(4px)" },
          "50%": { transform: "translateX(-2px)" },
          "60%": { transform: "translateX(2px)" },
          "70%": { transform: "translateX(-1px)" },
          "80%": { transform: "translateX(1px)" },
        },
        "ap-pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "0.8" },
          "100%": { transform: "scale(1.5)", opacity: "0" },
        },
        "ap-slide-up": {
          "0%": { transform: "translateY(16px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "ap-slide-down": {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(16px)", opacity: "0" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "ap-scale-in": {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "ap-scale-out": {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(0.9)", opacity: "0" },
        },
        "ap-squish": {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.95, 0.97)" },
          "100%": { transform: "scale(1)" },
        },
        "ap-jelly": {
          "0%": { transform: "scale(1, 1)" },
          "25%": { transform: "scale(0.95, 1.05)" },
          "50%": { transform: "scale(1.05, 0.95)" },
          "75%": { transform: "scale(0.98, 1.02)" },
          "100%": { transform: "scale(1, 1)" },
        },
        "ap-confetti": {
          "0%": { transform: "translateY(0) rotate(0deg)", opacity: "1" },
          "100%": { transform: "translateY(-100px) rotate(720deg)", opacity: "0" },
        },
        "caret-blink": {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        // Existing animations
        "ap-float": "ap-float 3s ease-in-out infinite",
        "ap-shine": "ap-shine 8s ease-in-out infinite",
        "ap-pop": "ap-pop 0.2s ease-out",
        "ap-glow-pulse": "ap-glow-pulse 2s ease-in-out infinite",
        "aurora-shift": "aurora-shift 15s ease infinite",
        // New GenZ animations
        "ap-bounce": "ap-bounce var(--ap-dur-3, 300ms) var(--ap-ease-pop)",
        "ap-wiggle": "ap-wiggle var(--ap-dur-4, 500ms) var(--ap-ease-snap)",
        "ap-pulse-ring": "ap-pulse-ring var(--ap-dur-4, 500ms) var(--ap-ease-soft) forwards",
        "ap-slide-up": "ap-slide-up var(--ap-dur-3, 300ms) var(--ap-ease-spring)",
        "ap-slide-down": "ap-slide-down var(--ap-dur-2, 200ms) var(--ap-ease-soft)",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "ap-scale-in": "ap-scale-in var(--ap-dur-2, 200ms) var(--ap-ease-pop)",
        "ap-scale-out": "ap-scale-out var(--ap-dur-2, 200ms) var(--ap-ease-soft)",
        "ap-squish": "ap-squish var(--ap-dur-1, 100ms) var(--ap-ease-snap)",
        "ap-jelly": "ap-jelly var(--ap-dur-3, 300ms) var(--ap-ease-spring)",
        "ap-confetti": "ap-confetti var(--ap-dur-5, 800ms) var(--ap-ease-soft) forwards",
        "caret-blink": "caret-blink 1.2s ease-out infinite",
      },
      transitionDuration: {
        "ap-1": "var(--ap-dur-1)",
        "ap-2": "var(--ap-dur-2)",
        "ap-3": "var(--ap-dur-3)",
        "ap-4": "var(--ap-dur-4)",
        "ap-5": "var(--ap-dur-5)",
      },
      transitionTimingFunction: {
        "ap-pop": "var(--ap-ease-pop)",
        "ap-soft": "var(--ap-ease-soft)",
        "ap-snap": "var(--ap-ease-snap)",
        "ap-spring": "var(--ap-ease-spring)",
      },
      backgroundImage: {
        "aurora-gradient":
          "linear-gradient(var(--ap-grad-angle, 135deg), rgb(var(--ap-aurora-1)), rgb(var(--ap-aurora-2)), rgb(var(--ap-aurora-3)))",
      },
    },
  },
  plugins: [],
} satisfies Config
