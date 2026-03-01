import type { RegistryIndex } from "../utils/registry.js"

export function formatComponentList(
  registry: RegistryIndex,
  _options?: { category?: string }
): string {
  const components = registry.components

  if (components.length === 0) {
    return "No components found."
  }

  const lines: string[] = [`# popcn/ui Components (${components.length} total)\n`]

  for (const comp of components) {
    const deps = comp.registryDependencies?.length
      ? ` (depends on: ${comp.registryDependencies.join(", ")})`
      : ""
    lines.push(`- **${comp.name}** — ${comp.description ?? "No description"}${deps}`)
  }

  lines.push("")
  lines.push(`Add command: \`npx popcn add <name>\``)

  return lines.join("\n")
}

export function formatComponentDetail(component: {
  name: string
  type: string
  description?: string
  files: Array<{ path: string; type: string; content: string }>
  dependencies?: string[]
  devDependencies?: string[]
  registryDependencies?: string[]
}): string {
  const lines: string[] = [`# ${component.name}\n`, component.description ?? "No description.", ""]

  if (component.dependencies?.length) {
    lines.push(`## Dependencies`)
    lines.push(`\`${component.dependencies.join("`, `")}\``)
    lines.push("")
  }

  if (component.registryDependencies?.length) {
    lines.push(`## Registry Dependencies`)
    lines.push(
      `These components will also be installed: ${component.registryDependencies.join(", ")}`
    )
    lines.push("")
  }

  lines.push(`## Add Command`)
  lines.push(`\`\`\`bash`)
  lines.push(`npx popcn add ${component.name}`)
  lines.push(`\`\`\``)
  lines.push("")

  for (const file of component.files) {
    lines.push(`## File: ${file.path}\n`)
    lines.push("```tsx")
    lines.push(file.content)
    lines.push("```")
    lines.push("")
  }

  return lines.join("\n")
}

export function formatSearchResults(
  results: Array<{
    name: string
    description?: string
    registryDependencies?: string[]
  }>,
  query: string
): string {
  if (results.length === 0) {
    return `No components found matching "${query}".`
  }

  const lines: string[] = [
    `Found ${results.length} component${results.length === 1 ? "" : "s"} matching "${query}":\n`,
  ]

  for (const item of results) {
    lines.push(`- **${item.name}** — ${item.description ?? "No description"}`)
    lines.push(`  Add: \`npx popcn add ${item.name}\``)
  }

  return lines.join("\n")
}

export function formatSetupGuide(): string {
  return `# popcn/ui Setup Guide

## 1. Initialize your project

\`\`\`bash
npx popcn init
\`\`\`

This will:
- Create \`components/ui/\` directory
- Add CSS custom properties to your \`globals.css\`
- Configure Tailwind CSS
- Install \`clsx\` and \`tailwind-merge\` utilities

## 2. Choose a skin

During init, choose one of:
- **Aurora** (default) — Gradient-driven design with aurora glow effects
- **NeumoPop** — Soft neumorphism with pop accents
- **GlassPop** — Apple-style liquid glass

## 3. Choose a theme

- **Cosmic** (default) — Indigo / Purple / Sky
- **Sunset** — Pink / Orange / Yellow
- **Neon** — Cyan / Magenta / Lime
- **Mono** — Grayscale minimal

## 4. Add components

\`\`\`bash
npx popcn add button         # add a single component
npx popcn add button card dialog  # add multiple at once
npx popcn list               # see all available components
\`\`\`

## 5. Use components

\`\`\`tsx
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <Button variant="aurora" motionClick="pop">
      Click me
    </Button>
  )
}
\`\`\`

## Requirements
- React 18+ / Next.js 13+
- Tailwind CSS 3
- Node.js 18+
`
}
