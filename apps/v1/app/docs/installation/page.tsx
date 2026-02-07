"use client"

import { useState } from "react"
import { CodeBlock } from "@/components/docs/code-block"

type Framework = "next" | "vite" | "astro"

const frameworkCommands: Record<Framework, { create: string; dev: string }> = {
  next: {
    create: "npx create-next-app@latest my-app --typescript --tailwind",
    dev: "cd my-app && npm run dev",
  },
  vite: {
    create: "npm create vite@latest my-app -- --template react-ts",
    dev: "cd my-app && npm install && npm install -D tailwindcss postcss autoprefixer && npx tailwindcss init -p && npm run dev",
  },
  astro: {
    create: "npm create astro@latest my-app -- --template basics",
    dev: "cd my-app && npx astro add react tailwind && npm run dev",
  },
}

export default function InstallationPage() {
  const [framework, setFramework] = useState<Framework>("next")

  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Installation</h1>
        <p className="text-lg text-muted-foreground">
          Get started with popcn/ui in your project.
        </p>
      </div>

      {/* Framework Tabs */}
      <div className="mb-8">
        <div className="flex gap-2 mb-4">
          {(["next", "vite", "astro"] as Framework[]).map((fw) => (
            <button
              key={fw}
              onClick={() => setFramework(fw)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                framework === fw
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted/30 text-muted-foreground hover:bg-muted/50"
              }`}
            >
              {fw === "next" ? "Next.js" : fw === "vite" ? "Vite" : "Astro"}
            </button>
          ))}
        </div>
      </div>

      {/* Steps */}
      <div className="space-y-12">
        {/* Step 1 */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
              1
            </div>
            <h2 className="text-xl font-semibold">Create a new project</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            Start by creating a new {framework === "next" ? "Next.js" : framework === "vite" ? "Vite + React" : "Astro"} project with TypeScript and Tailwind CSS.
          </p>
          <CodeBlock code={frameworkCommands[framework].create} />
        </section>

        {/* Step 2 */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
              2
            </div>
            <h2 className="text-xl font-semibold">Initialize popcn/ui</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            Run the init command to set up your project with AuroraPop design tokens.
          </p>
          <CodeBlock code="npx popcn init" />
          <p className="text-sm text-muted-foreground mt-4">
            This will:
          </p>
          <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
            <li>Create a <code className="text-primary bg-primary/10 px-1 rounded">components.json</code> configuration file</li>
            <li>Set up AuroraPop CSS tokens in your global stylesheet</li>
            <li>Create the <code className="text-primary bg-primary/10 px-1 rounded">cn()</code> utility function</li>
          </ul>
        </section>

        {/* Step 3 */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
              3
            </div>
            <h2 className="text-xl font-semibold">Install dependencies</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            Install the required dependencies for the components.
          </p>
          <CodeBlock code="npm install class-variance-authority clsx tailwind-merge" />
        </section>

        {/* Step 4 */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
              4
            </div>
            <h2 className="text-xl font-semibold">Add components</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            Start adding components to your project.
          </p>
          <CodeBlock code="npx popcn add button" />
        </section>

        {/* Step 5 */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
              5
            </div>
            <h2 className="text-xl font-semibold">Use the component</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            Import and use the component in your project.
          </p>
          <CodeBlock
            code={`import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <Button variant="aurora" motion="pop">
      Click me
    </Button>
  )
}`}
            language="tsx"
          />
        </section>
      </div>

      {/* Manual Installation */}
      <section className="mt-16 pt-8 border-t border-border/50">
        <h2 className="text-2xl font-bold mb-4">Manual Installation</h2>
        <p className="text-muted-foreground mb-6">
          If you prefer to set things up manually, follow these steps:
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">1. Add Tailwind CSS</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Make sure Tailwind CSS is installed and configured in your project.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">2. Add CSS Variables</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Add the AuroraPop CSS variables to your global stylesheet.
            </p>
            <CodeBlock
              code={`:root {
  --ap-background: 10 10 20;
  --ap-foreground: 255 255 255;
  --ap-primary: 99 102 241;
  --ap-primary-foreground: 255 255 255;
  --ap-secondary: 168 85 247;
  --ap-secondary-foreground: 255 255 255;
  --ap-aurora-1: 99 102 241;
  --ap-aurora-2: 139 92 246;
  --ap-aurora-3: 56 189 248;
  --ap-border: 63 63 70;
  --ap-muted: 39 39 42;
  --ap-muted-foreground: 161 161 170;
  --ap-ring: 99 102 241;
  --ap-radius: 0.5rem;
}`}
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">3. Configure Tailwind</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Extend your Tailwind config with the AuroraPop theme.
            </p>
            <CodeBlock
              code={`// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--ap-background) / <alpha-value>)",
        foreground: "rgb(var(--ap-foreground) / <alpha-value>)",
        primary: {
          DEFAULT: "rgb(var(--ap-primary) / <alpha-value>)",
          foreground: "rgb(var(--ap-primary-foreground) / <alpha-value>)",
        },
        // ... other colors
      },
    },
  },
}`}
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">4. Add the cn utility</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Create a utility function for merging class names.
            </p>
            <CodeBlock
              code={`// lib/utils.ts
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
