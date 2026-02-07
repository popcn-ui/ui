import * as fs from "fs"
import * as path from "path"
import {
  componentsConfigSchema,
  validateConfig,
  getConfigErrors,
  type ComponentsConfig,
} from "../schemas/config.js"

export type { ComponentsConfig }

const CONFIG_FILE = "components.json"

export function getConfigPath(cwd: string = process.cwd()): string {
  return path.join(cwd, CONFIG_FILE)
}

export function configExists(cwd: string = process.cwd()): boolean {
  return fs.existsSync(getConfigPath(cwd))
}

export function getConfig(cwd: string = process.cwd()): ComponentsConfig | null {
  const configPath = getConfigPath(cwd)

  if (!fs.existsSync(configPath)) {
    return null
  }

  try {
    const content = fs.readFileSync(configPath, "utf-8")
    const data = JSON.parse(content)
    return validateConfig(data)
  } catch {
    return null
  }
}

export function getConfigWithErrors(
  cwd: string = process.cwd()
): { config: ComponentsConfig | null; errors: string[] } {
  const configPath = getConfigPath(cwd)

  if (!fs.existsSync(configPath)) {
    return { config: null, errors: ["components.json not found"] }
  }

  try {
    const content = fs.readFileSync(configPath, "utf-8")
    const data = JSON.parse(content)
    const errors = getConfigErrors(data)

    if (errors.length > 0) {
      return { config: null, errors }
    }

    return { config: validateConfig(data), errors: [] }
  } catch (err) {
    return {
      config: null,
      errors: [`Failed to parse components.json: ${err}`],
    }
  }
}

export function writeConfig(
  config: ComponentsConfig,
  cwd: string = process.cwd()
): void {
  const configPath = getConfigPath(cwd)
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2))
}

export function resolveAlias(alias: string, cwd: string = process.cwd()): string {
  if (alias.startsWith("@/")) {
    return path.join(cwd, alias.slice(2))
  }
  return path.join(cwd, alias)
}

export { componentsConfigSchema, validateConfig, getConfigErrors }
