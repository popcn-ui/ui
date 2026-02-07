import {
  registryComponentSchema,
  registryIndexSchema,
  registryStyleSchema,
  registryThemeSchema,
  type RegistryComponent,
  type RegistryIndex,
  type RegistryStyle,
  type RegistryTheme,
  type RegistryFile,
} from "../schemas/registry.js"

export type { RegistryComponent, RegistryIndex, RegistryStyle, RegistryTheme, RegistryFile }

const DEFAULT_REGISTRY_URL = "https://popcnui.com/api/registry"

export function getRegistryUrl(): string {
  return process.env.POPCN_REGISTRY_URL || DEFAULT_REGISTRY_URL
}

export class RegistryError extends Error {
  constructor(
    message: string,
    public readonly code: "NOT_FOUND" | "NETWORK" | "VALIDATION" | "UNKNOWN"
  ) {
    super(message)
    this.name = "RegistryError"
  }
}

export async function fetchRegistry(): Promise<RegistryIndex> {
  const url = getRegistryUrl()

  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new RegistryError(
        `Failed to fetch registry: ${response.statusText}`,
        response.status === 404 ? "NOT_FOUND" : "NETWORK"
      )
    }

    const data = await response.json()
    const result = registryIndexSchema.safeParse(data)

    if (!result.success) {
      throw new RegistryError(
        `Invalid registry format: ${result.error.errors[0]?.message}`,
        "VALIDATION"
      )
    }

    return result.data
  } catch (err) {
    if (err instanceof RegistryError) throw err
    throw new RegistryError(
      `Network error: ${err instanceof Error ? err.message : "Unknown error"}`,
      "NETWORK"
    )
  }
}

export async function fetchComponent(name: string): Promise<RegistryComponent> {
  const url = `${getRegistryUrl()}/ui/${name}`

  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new RegistryError(
        `Component "${name}" not found`,
        response.status === 404 ? "NOT_FOUND" : "NETWORK"
      )
    }

    const data = await response.json()
    const result = registryComponentSchema.safeParse(data)

    if (!result.success) {
      throw new RegistryError(
        `Invalid component format for "${name}": ${result.error.errors[0]?.message}`,
        "VALIDATION"
      )
    }

    return result.data
  } catch (err) {
    if (err instanceof RegistryError) throw err
    throw new RegistryError(
      `Failed to fetch component "${name}": ${err instanceof Error ? err.message : "Unknown error"}`,
      "NETWORK"
    )
  }
}

export async function fetchStyle(name: string): Promise<RegistryStyle> {
  const url = `${getRegistryUrl()}/styles/${name}`

  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new RegistryError(
        `Style "${name}" not found`,
        response.status === 404 ? "NOT_FOUND" : "NETWORK"
      )
    }

    const data = await response.json()
    const result = registryStyleSchema.safeParse(data)

    if (!result.success) {
      throw new RegistryError(
        `Invalid style format for "${name}": ${result.error.errors[0]?.message}`,
        "VALIDATION"
      )
    }

    return result.data
  } catch (err) {
    if (err instanceof RegistryError) throw err
    throw new RegistryError(
      `Failed to fetch style "${name}": ${err instanceof Error ? err.message : "Unknown error"}`,
      "NETWORK"
    )
  }
}

export async function fetchTheme(name: string): Promise<RegistryTheme> {
  const url = `${getRegistryUrl()}/themes/${name}`

  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new RegistryError(
        `Theme "${name}" not found`,
        response.status === 404 ? "NOT_FOUND" : "NETWORK"
      )
    }

    const data = await response.json()
    const result = registryThemeSchema.safeParse(data)

    if (!result.success) {
      throw new RegistryError(
        `Invalid theme format for "${name}": ${result.error.errors[0]?.message}`,
        "VALIDATION"
      )
    }

    return result.data
  } catch (err) {
    if (err instanceof RegistryError) throw err
    throw new RegistryError(
      `Failed to fetch theme "${name}": ${err instanceof Error ? err.message : "Unknown error"}`,
      "NETWORK"
    )
  }
}

export async function fetchUtils(): Promise<RegistryComponent> {
  const url = `${getRegistryUrl()}/utils`

  try {
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()
      const result = registryComponentSchema.safeParse(data)
      if (result.success) {
        return result.data
      }
    }
  } catch {
    // Fallback to embedded utils
  }

  // Fallback utils
  return {
    name: "utils",
    type: "util",
    files: [
      {
        path: "lib/utils.ts",
        type: "util",
        content: `import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
`,
      },
    ],
    dependencies: ["clsx", "tailwind-merge"],
  }
}
