import { describe, it, expect } from "vitest"
import {
  AURORAPOP_CSS,
  UTILS_TS,
  TAILWIND_CONFIG_EXTENSION,
  getTailwindConfigContent,
} from "../utils/templates.js"

describe("utils/templates", () => {
  describe("AURORAPOP_CSS", () => {
    it("should contain tailwind directives", () => {
      expect(AURORAPOP_CSS).toContain("@tailwind base;")
      expect(AURORAPOP_CSS).toContain("@tailwind components;")
      expect(AURORAPOP_CSS).toContain("@tailwind utilities;")
    })

    it("should contain all core CSS tokens", () => {
      const tokens = [
        "--ap-primary",
        "--ap-secondary",
        "--ap-aurora-1",
        "--ap-aurora-2",
        "--ap-aurora-3",
        "--ap-grad-angle",
        "--ap-shine-angle",
        "--ap-shine-width",
        "--ap-dur-1",
        "--ap-dur-2",
        "--ap-dur-3",
        "--ap-dur-4",
        "--ap-dur-5",
        "--ap-ease-pop",
        "--ap-ease-soft",
        "--ap-ease-snap",
        "--ap-ease-spring",
        "--ap-motion",
        "--ap-motion-scale",
      ]
      for (const token of tokens) {
        expect(AURORAPOP_CSS).toContain(token)
      }
    })

    it("should contain all theme presets", () => {
      expect(AURORAPOP_CSS).toContain("theme-sunset")
      expect(AURORAPOP_CSS).toContain("theme-neon")
      expect(AURORAPOP_CSS).toContain("theme-mono")
    })

    it("should contain dark and light theme definitions", () => {
      expect(AURORAPOP_CSS).toContain('[data-theme="dark"]')
      expect(AURORAPOP_CSS).toContain('[data-theme="light"]')
    })

    it("should contain utility classes", () => {
      expect(AURORAPOP_CSS).toContain(".text-aurora")
      expect(AURORAPOP_CSS).toContain(".bg-aurora")
      expect(AURORAPOP_CSS).toContain(".shine-effect::before")
      expect(AURORAPOP_CSS).toContain(".glass")
    })

    it("should contain gradient direction utilities", () => {
      const directions = ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
      for (const dir of directions) {
        expect(AURORAPOP_CSS).toContain(`.ap-grad-${dir}`)
      }
    })

    it("should contain hover utilities", () => {
      expect(AURORAPOP_CSS).toContain(".ap-hover-float")
      expect(AURORAPOP_CSS).toContain(".ap-hover-glow")
      expect(AURORAPOP_CSS).toContain(".ap-hover-scale")
      expect(AURORAPOP_CSS).toContain(".ap-hover-tilt")
    })

    it("should contain enter/exit animations", () => {
      expect(AURORAPOP_CSS).toContain(".ap-enter-pop")
      expect(AURORAPOP_CSS).toContain(".ap-enter-slide")
      expect(AURORAPOP_CSS).toContain(".ap-enter-bounce")
      expect(AURORAPOP_CSS).toContain(".ap-exit-fade")
      expect(AURORAPOP_CSS).toContain(".ap-exit-slide")
    })

    it("should respect prefers-reduced-motion", () => {
      expect(AURORAPOP_CSS).toContain("prefers-reduced-motion: reduce")
    })

    it("should have shine effect opacity synced with globals.css (0.35)", () => {
      expect(AURORAPOP_CSS).toContain("rgba(255, 255, 255, 0.35)")
      expect(AURORAPOP_CSS).not.toContain("rgba(255, 255, 255, 0.2)")
    })
  })

  describe("UTILS_TS", () => {
    it("should export cn function", () => {
      expect(UTILS_TS).toContain("export function cn")
    })

    it("should import clsx and tailwind-merge", () => {
      expect(UTILS_TS).toContain('from "clsx"')
      expect(UTILS_TS).toContain('from "tailwind-merge"')
    })

    it("should use twMerge with clsx", () => {
      expect(UTILS_TS).toContain("twMerge(clsx(inputs))")
    })
  })

  describe("TAILWIND_CONFIG_EXTENSION", () => {
    it("should contain color definitions using CSS variables", () => {
      const colors = TAILWIND_CONFIG_EXTENSION.theme.extend.colors
      expect(colors.primary.DEFAULT).toContain("--ap-primary")
      expect(colors.secondary.DEFAULT).toContain("--ap-secondary")
      expect(colors.background).toContain("--ap-background")
      expect(colors.foreground).toContain("--ap-foreground")
    })

    it("should contain all required color aliases", () => {
      const colors = TAILWIND_CONFIG_EXTENSION.theme.extend.colors
      expect(colors).toHaveProperty("card")
      expect(colors).toHaveProperty("popover")
      expect(colors).toHaveProperty("accent")
      expect(colors).toHaveProperty("destructive")
      expect(colors).toHaveProperty("input")
    })

    it("should contain keyframes definitions", () => {
      const keyframes = TAILWIND_CONFIG_EXTENSION.theme.extend.keyframes
      expect(keyframes).toHaveProperty("ap-float")
      expect(keyframes).toHaveProperty("ap-bounce")
      expect(keyframes).toHaveProperty("ap-wiggle")
      expect(keyframes).toHaveProperty("ap-jelly")
      expect(keyframes).toHaveProperty("ap-pulse-ring")
      expect(keyframes).toHaveProperty("accordion-down")
      expect(keyframes).toHaveProperty("accordion-up")
      expect(keyframes).toHaveProperty("caret-blink")
    })

    it("should contain animation definitions", () => {
      const animation = TAILWIND_CONFIG_EXTENSION.theme.extend.animation
      expect(animation).toHaveProperty("ap-float")
      expect(animation).toHaveProperty("ap-bounce")
      expect(animation).toHaveProperty("accordion-down")
      expect(animation).toHaveProperty("accordion-up")
      expect(animation).toHaveProperty("caret-blink")
    })

    it("should contain transition duration tokens", () => {
      const duration = TAILWIND_CONFIG_EXTENSION.theme.extend.transitionDuration
      expect(duration).toHaveProperty("ap-1")
      expect(duration).toHaveProperty("ap-2")
      expect(duration).toHaveProperty("ap-3")
    })

    it("should contain transition timing functions", () => {
      const timing = TAILWIND_CONFIG_EXTENSION.theme.extend.transitionTimingFunction
      expect(timing).toHaveProperty("ap-pop")
      expect(timing).toHaveProperty("ap-soft")
      expect(timing).toHaveProperty("ap-snap")
      expect(timing).toHaveProperty("ap-spring")
    })

    it("should contain darkMode configuration", () => {
      expect(TAILWIND_CONFIG_EXTENSION).toHaveProperty("darkMode")
    })
  })

  describe("getTailwindConfigContent", () => {
    it("should generate TypeScript config for .ts files", () => {
      const content = getTailwindConfigContent("next", "tailwind.config.ts")
      expect(content).toContain('import type { Config } from "tailwindcss"')
      expect(content).toContain("satisfies Config")
      expect(content).toContain("--ap-primary")
      expect(content).toContain("accordion-down")
      expect(content).toContain("caret-blink")
    })

    it("should generate JavaScript config for .js files", () => {
      const content = getTailwindConfigContent("next", "tailwind.config.js")
      expect(content).toContain("@type {import('tailwindcss').Config}")
      expect(content).not.toContain("satisfies Config")
    })

    it("should include correct content paths for Next.js", () => {
      const content = getTailwindConfigContent("next", "tailwind.config.ts")
      expect(content).toContain("./app/**/*.{js,ts,jsx,tsx,mdx}")
      expect(content).toContain("./components/**/*.{js,ts,jsx,tsx,mdx}")
    })

    it("should include correct content paths for Vite", () => {
      const content = getTailwindConfigContent("vite", "tailwind.config.ts")
      expect(content).toContain("./index.html")
      expect(content).toContain("./src/**/*.{js,ts,jsx,tsx}")
    })

    it("should include correct content paths for Astro", () => {
      const content = getTailwindConfigContent("astro", "tailwind.config.ts")
      expect(content).toContain("./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}")
    })
  })
})
