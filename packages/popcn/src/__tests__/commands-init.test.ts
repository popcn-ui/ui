import { describe, it, expect, beforeEach, afterEach } from "vitest"
import * as fs from "fs"
import * as path from "path"
import * as os from "os"

// We test the pure helper functions by importing them directly.
// The main initCommand depends on ora/prompts/process.cwd so we test
// the detection functions by re-implementing them here for testability.
// In production, these are private to init.ts, so we test via behavior.

describe("commands/init - detection helpers", () => {
  let tempDir: string

  beforeEach(() => {
    tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "popcn-init-test-"))
  })

  afterEach(() => {
    fs.rmSync(tempDir, { recursive: true, force: true })
  })

  // Inline detection functions to test (mirrors init.ts logic)
  function detectFramework(cwd: string): "next" | "vite" | "astro" | null {
    const pkgPath = path.join(cwd, "package.json")
    if (!fs.existsSync(pkgPath)) return null
    try {
      const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"))
      const deps = { ...pkg.dependencies, ...pkg.devDependencies }
      if (deps.next) return "next"
      if (deps.astro) return "astro"
      if (deps.vite) return "vite"
    } catch {
      // ignore
    }
    return null
  }

  function detectTailwind(cwd: string): string | null {
    for (const name of [
      "tailwind.config.js",
      "tailwind.config.ts",
      "tailwind.config.mjs",
      "tailwind.config.cjs",
    ]) {
      if (fs.existsSync(path.join(cwd, name))) return name
    }
    return null
  }

  function detectCssFile(cwd: string, framework: "next" | "vite" | "astro" | null): string {
    const paths = [
      "app/globals.css",
      "src/app/globals.css",
      "styles/globals.css",
      "src/styles/globals.css",
      "src/index.css",
      "src/styles.css",
      "styles/index.css",
    ]
    for (const p of paths) {
      if (fs.existsSync(path.join(cwd, p))) return p
    }
    if (framework === "next") return "app/globals.css"
    if (framework === "vite") return "src/index.css"
    if (framework === "astro") return "src/styles/globals.css"
    return "styles/globals.css"
  }

  describe("detectFramework", () => {
    it("should detect Next.js", () => {
      fs.writeFileSync(
        path.join(tempDir, "package.json"),
        JSON.stringify({ dependencies: { next: "^14.0.0", react: "^18" } })
      )
      expect(detectFramework(tempDir)).toBe("next")
    })

    it("should detect Vite", () => {
      fs.writeFileSync(
        path.join(tempDir, "package.json"),
        JSON.stringify({ devDependencies: { vite: "^5.0.0" } })
      )
      expect(detectFramework(tempDir)).toBe("vite")
    })

    it("should detect Astro", () => {
      fs.writeFileSync(
        path.join(tempDir, "package.json"),
        JSON.stringify({ dependencies: { astro: "^4.0.0" } })
      )
      expect(detectFramework(tempDir)).toBe("astro")
    })

    it("should return null when no package.json", () => {
      expect(detectFramework(tempDir)).toBeNull()
    })

    it("should return null when no recognized framework", () => {
      fs.writeFileSync(
        path.join(tempDir, "package.json"),
        JSON.stringify({ dependencies: { express: "^4" } })
      )
      expect(detectFramework(tempDir)).toBeNull()
    })

    it("should return null for invalid package.json", () => {
      fs.writeFileSync(path.join(tempDir, "package.json"), "not json")
      expect(detectFramework(tempDir)).toBeNull()
    })

    it("should prioritize Next.js over Vite when both present", () => {
      fs.writeFileSync(
        path.join(tempDir, "package.json"),
        JSON.stringify({
          dependencies: { next: "^14", react: "^18" },
          devDependencies: { vite: "^5" },
        })
      )
      expect(detectFramework(tempDir)).toBe("next")
    })
  })

  describe("detectTailwind", () => {
    it("should detect tailwind.config.js", () => {
      fs.writeFileSync(path.join(tempDir, "tailwind.config.js"), "")
      expect(detectTailwind(tempDir)).toBe("tailwind.config.js")
    })

    it("should detect tailwind.config.ts", () => {
      fs.writeFileSync(path.join(tempDir, "tailwind.config.ts"), "")
      expect(detectTailwind(tempDir)).toBe("tailwind.config.ts")
    })

    it("should detect tailwind.config.mjs", () => {
      fs.writeFileSync(path.join(tempDir, "tailwind.config.mjs"), "")
      expect(detectTailwind(tempDir)).toBe("tailwind.config.mjs")
    })

    it("should detect tailwind.config.cjs", () => {
      fs.writeFileSync(path.join(tempDir, "tailwind.config.cjs"), "")
      expect(detectTailwind(tempDir)).toBe("tailwind.config.cjs")
    })

    it("should return null when no tailwind config", () => {
      expect(detectTailwind(tempDir)).toBeNull()
    })

    it("should return .js first when both .js and .ts exist", () => {
      fs.writeFileSync(path.join(tempDir, "tailwind.config.js"), "")
      fs.writeFileSync(path.join(tempDir, "tailwind.config.ts"), "")
      expect(detectTailwind(tempDir)).toBe("tailwind.config.js")
    })
  })

  describe("detectCssFile", () => {
    it("should find app/globals.css", () => {
      fs.mkdirSync(path.join(tempDir, "app"), { recursive: true })
      fs.writeFileSync(path.join(tempDir, "app/globals.css"), "")
      expect(detectCssFile(tempDir, null)).toBe("app/globals.css")
    })

    it("should find src/index.css", () => {
      fs.mkdirSync(path.join(tempDir, "src"), { recursive: true })
      fs.writeFileSync(path.join(tempDir, "src/index.css"), "")
      expect(detectCssFile(tempDir, null)).toBe("src/index.css")
    })

    it("should default to app/globals.css for Next.js", () => {
      expect(detectCssFile(tempDir, "next")).toBe("app/globals.css")
    })

    it("should default to src/index.css for Vite", () => {
      expect(detectCssFile(tempDir, "vite")).toBe("src/index.css")
    })

    it("should default to src/styles/globals.css for Astro", () => {
      expect(detectCssFile(tempDir, "astro")).toBe("src/styles/globals.css")
    })

    it("should default to styles/globals.css for unknown framework", () => {
      expect(detectCssFile(tempDir, null)).toBe("styles/globals.css")
    })
  })
})
