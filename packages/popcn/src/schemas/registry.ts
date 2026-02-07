import { z } from "zod"

export const registryItemTypeSchema = z.enum([
  "ui",
  "component",
  "util",
  "style",
  "theme",
  "hook",
  "lib",
])

export const registryFileSchema = z.object({
  path: z.string(),
  type: z.string(),
  content: z.string(),
})

export const registryComponentSchema = z.object({
  name: z.string(),
  type: registryItemTypeSchema,
  description: z.string().optional(),
  files: z.array(registryFileSchema),
  dependencies: z.array(z.string()).optional(),
  devDependencies: z.array(z.string()).optional(),
  registryDependencies: z.array(z.string()).optional(),
})

export const registryStyleSchema = z.object({
  name: z.string(),
  type: z.literal("style"),
  description: z.string().optional(),
  cssVars: z.object({
    dark: z.record(z.string()),
    light: z.record(z.string()),
  }),
  tailwindConfig: z.record(z.unknown()).optional(),
})

export const registryThemeSchema = z.object({
  name: z.string(),
  type: z.literal("theme"),
  label: z.string().optional(),
  description: z.string().optional(),
  cssVars: z.record(z.string()),
})

export const registryIndexSchema = z.object({
  version: z.string(),
  components: z.array(
    z.object({
      name: z.string(),
      type: z.string(),
      description: z.string().optional(),
      dependencies: z.array(z.string()).optional(),
      registryDependencies: z.array(z.string()).optional(),
    })
  ),
  styles: z.array(
    z.object({
      name: z.string(),
      type: z.string(),
      description: z.string().optional(),
    })
  ),
  themes: z.array(
    z.object({
      name: z.string(),
      type: z.string(),
      description: z.string().optional(),
    })
  ),
})

export type RegistryFile = z.infer<typeof registryFileSchema>
export type RegistryComponent = z.infer<typeof registryComponentSchema>
export type RegistryStyle = z.infer<typeof registryStyleSchema>
export type RegistryTheme = z.infer<typeof registryThemeSchema>
export type RegistryIndex = z.infer<typeof registryIndexSchema>

export function validateRegistryComponent(
  data: unknown
): RegistryComponent | null {
  const result = registryComponentSchema.safeParse(data)
  return result.success ? result.data : null
}

export function validateRegistryIndex(data: unknown): RegistryIndex | null {
  const result = registryIndexSchema.safeParse(data)
  return result.success ? result.data : null
}
