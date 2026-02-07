import { z } from "zod"

export const componentsConfigSchema = z.object({
  $schema: z.string().optional(),
  style: z.string().default("aurorapop"),
  skin: z.enum(["aurora", "neumopop", "glasspop"]).default("aurora"),
  theme: z.string().default("cosmic"),
  tailwind: z.object({
    config: z.string(),
    css: z.string(),
  }),
  aliases: z.object({
    components: z.string(),
    utils: z.string(),
    lib: z.string(),
  }),
  registryUrl: z.string().url().optional(),
})

export type ComponentsConfig = z.infer<typeof componentsConfigSchema>

export function validateConfig(data: unknown): ComponentsConfig | null {
  const result = componentsConfigSchema.safeParse(data)
  if (result.success) {
    return result.data
  }
  return null
}

export function getConfigErrors(data: unknown): string[] {
  const result = componentsConfigSchema.safeParse(data)
  if (result.success) {
    return []
  }
  return result.error.errors.map(
    (err) => `${err.path.join(".")}: ${err.message}`
  )
}
