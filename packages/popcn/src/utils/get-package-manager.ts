import * as fs from "fs"
import * as path from "path"

export type PackageManager = "npm" | "pnpm" | "yarn" | "bun"

export function getPackageManager(cwd: string = process.cwd()): PackageManager {
  // Check for lock files
  if (fs.existsSync(path.join(cwd, "bun.lockb"))) {
    return "bun"
  }
  if (fs.existsSync(path.join(cwd, "pnpm-lock.yaml"))) {
    return "pnpm"
  }
  if (fs.existsSync(path.join(cwd, "yarn.lock"))) {
    return "yarn"
  }
  if (fs.existsSync(path.join(cwd, "package-lock.json"))) {
    return "npm"
  }

  // Check for package.json packageManager field
  const packageJsonPath = path.join(cwd, "package.json")
  if (fs.existsSync(packageJsonPath)) {
    try {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"))
      if (packageJson.packageManager) {
        if (packageJson.packageManager.startsWith("pnpm")) return "pnpm"
        if (packageJson.packageManager.startsWith("yarn")) return "yarn"
        if (packageJson.packageManager.startsWith("bun")) return "bun"
      }
    } catch {
      // Ignore parse errors
    }
  }

  return "npm"
}

export function getInstallCommand(pm: PackageManager): string {
  switch (pm) {
    case "pnpm":
      return "pnpm add"
    case "yarn":
      return "yarn add"
    case "bun":
      return "bun add"
    default:
      return "npm install"
  }
}

export function getDevInstallCommand(pm: PackageManager): string {
  switch (pm) {
    case "pnpm":
      return "pnpm add -D"
    case "yarn":
      return "yarn add -D"
    case "bun":
      return "bun add -d"
    default:
      return "npm install -D"
  }
}
