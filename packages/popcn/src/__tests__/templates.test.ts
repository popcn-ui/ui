import { describe, it, expect } from "vitest"
import { AURORAPOP_CSS, UTILS_TS, TAILWIND_CONFIG_EXTENSION } from "../utils/templates.js"

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
      expect(TAILWIND_CONFIG_EXTENSION).toContain("--ap-primary")
      expect(TAILWIND_CONFIG_EXTENSION).toContain("--ap-secondary")
      expect(TAILWIND_CONFIG_EXTENSION).toContain("--ap-background")
      expect(TAILWIND_CONFIG_EXTENSION).toContain("--ap-foreground")
    })

    it("should contain keyframes definitions", () => {
      expect(TAILWIND_CONFIG_EXTENSION).toContain("ap-float")
      expect(TAILWIND_CONFIG_EXTENSION).toContain("ap-bounce")
      expect(TAILWIND_CONFIG_EXTENSION).toContain("ap-wiggle")
      expect(TAILWIND_CONFIG_EXTENSION).toContain("ap-jelly")
      expect(TAILWIND_CONFIG_EXTENSION).toContain("ap-pulse-ring")
    })

    it("should contain animation definitions", () => {
      expect(TAILWIND_CONFIG_EXTENSION).toContain('"ap-float"')
      expect(TAILWIND_CONFIG_EXTENSION).toContain('"ap-bounce"')
    })

    it("should contain transition duration tokens", () => {
      expect(TAILWIND_CONFIG_EXTENSION).toContain('"ap-1"')
      expect(TAILWIND_CONFIG_EXTENSION).toContain('"ap-2"')
      expect(TAILWIND_CONFIG_EXTENSION).toContain('"ap-3"')
    })

    it("should contain transition timing functions", () => {
      expect(TAILWIND_CONFIG_EXTENSION).toContain('"ap-pop"')
      expect(TAILWIND_CONFIG_EXTENSION).toContain('"ap-soft"')
      expect(TAILWIND_CONFIG_EXTENSION).toContain('"ap-snap"')
      expect(TAILWIND_CONFIG_EXTENSION).toContain('"ap-spring"')
    })

    it("should contain darkMode configuration", () => {
      expect(TAILWIND_CONFIG_EXTENSION).toContain("darkMode")
    })
  })
})
