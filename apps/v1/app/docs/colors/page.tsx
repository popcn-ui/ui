"use client"

import { useState } from "react"
import { CodeBlock } from "@/components/docs/code-block"
import { Copy, Check } from "lucide-react"

interface ColorSwatchProps {
  name: string
  variable: string
  description: string
}

function ColorSwatch({ name, variable, description }: ColorSwatchProps) {
  const [copied, setCopied] = useState(false)

  const copyVariable = () => {
    navigator.clipboard.writeText(`var(${variable})`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      className="group glass rounded-lg p-4 cursor-pointer hover:border-primary/50 transition-colors"
      onClick={copyVariable}
    >
      <div
        className="h-16 rounded-lg mb-3 border border-border/30"
        style={{ backgroundColor: `rgb(var(${variable}))` }}
      />
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="font-medium text-sm">{name}</p>
          <p className="text-xs text-muted-foreground font-mono">{variable}</p>
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        </div>
        <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-muted/50 rounded">
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4 text-muted-foreground" />
          )}
        </button>
      </div>
    </div>
  )
}

function AuroraGradientPreview() {
  return (
    <div className="glass rounded-xl p-6">
      <div
        className="h-24 rounded-lg bg-gradient-to-r from-[rgb(var(--ap-aurora-1))] via-[rgb(var(--ap-aurora-2))] to-[rgb(var(--ap-aurora-3))]"
      />
      <p className="text-sm text-muted-foreground mt-4">
        Aurora gradient flowing through aurora-1, aurora-2, and aurora-3 colors.
      </p>
    </div>
  )
}

export default function ColorsPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Colors</h1>
        <p className="text-lg text-muted-foreground">
          popcn/ui uses CSS custom properties for all colors, enabling easy theming
          and runtime color changes. Colors are defined in RGB format for Tailwind
          alpha value compatibility.
        </p>
      </div>

      {/* Core Colors */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Core Colors</h2>
        <p className="text-muted-foreground mb-6">
          The foundation of the color system. These colors are used throughout all
          components.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ColorSwatch
            name="Background"
            variable="--ap-background"
            description="Main background color"
          />
          <ColorSwatch
            name="Foreground"
            variable="--ap-foreground"
            description="Main text color"
          />
          <ColorSwatch
            name="Primary"
            variable="--ap-primary"
            description="Primary brand color for buttons, links"
          />
          <ColorSwatch
            name="Primary Foreground"
            variable="--ap-primary-foreground"
            description="Text on primary backgrounds"
          />
          <ColorSwatch
            name="Secondary"
            variable="--ap-secondary"
            description="Secondary accent color"
          />
          <ColorSwatch
            name="Secondary Foreground"
            variable="--ap-secondary-foreground"
            description="Text on secondary backgrounds"
          />
        </div>
      </section>

      {/* Aurora Gradient */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Aurora Gradient</h2>
        <p className="text-muted-foreground mb-6">
          The signature aurora effect uses three gradient colors that create
          flowing, animated backgrounds.
        </p>
        <AuroraGradientPreview />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <ColorSwatch
            name="Aurora 1"
            variable="--ap-aurora-1"
            description="Gradient start color"
          />
          <ColorSwatch
            name="Aurora 2"
            variable="--ap-aurora-2"
            description="Gradient middle color"
          />
          <ColorSwatch
            name="Aurora 3"
            variable="--ap-aurora-3"
            description="Gradient end color"
          />
        </div>
      </section>

      {/* Utility Colors */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Utility Colors</h2>
        <p className="text-muted-foreground mb-6">
          Support colors for borders, muted text, focus rings, and other UI
          elements.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ColorSwatch
            name="Muted"
            variable="--ap-muted"
            description="Subtle background for hover states"
          />
          <ColorSwatch
            name="Muted Foreground"
            variable="--ap-muted-foreground"
            description="Subdued text color"
          />
          <ColorSwatch
            name="Border"
            variable="--ap-border"
            description="Default border color"
          />
          <ColorSwatch
            name="Ring"
            variable="--ap-ring"
            description="Focus ring color"
          />
        </div>
      </section>

      {/* CSS Variable Usage */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Usage</h2>
        <p className="text-muted-foreground mb-4">
          Colors use RGB format to support Tailwind&apos;s opacity modifier syntax.
        </p>
        <CodeBlock
          code={`/* Direct usage in CSS */
.element {
  background-color: rgb(var(--ap-primary));
  color: rgb(var(--ap-primary-foreground));
}

/* With opacity using Tailwind syntax */
.element {
  background-color: rgb(var(--ap-primary) / 0.5);
  border-color: rgb(var(--ap-border) / 0.3);
}

/* In Tailwind classes */
<div className="bg-[rgb(var(--ap-primary))]">
  Primary background
</div>

<div className="bg-[rgb(var(--ap-primary)/0.5)]">
  50% opacity primary
</div>`}
        />
      </section>

      {/* Tailwind Configuration */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Tailwind Configuration</h2>
        <p className="text-muted-foreground mb-4">
          popcn/ui extends Tailwind&apos;s color palette with semantic color classes.
        </p>
        <CodeBlock
          code={`// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--ap-background) / <alpha-value>)",
        foreground: "rgb(var(--ap-foreground) / <alpha-value>)",
        primary: {
          DEFAULT: "rgb(var(--ap-primary) / <alpha-value>)",
          foreground: "rgb(var(--ap-primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "rgb(var(--ap-secondary) / <alpha-value>)",
          foreground: "rgb(var(--ap-secondary-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "rgb(var(--ap-muted) / <alpha-value>)",
          foreground: "rgb(var(--ap-muted-foreground) / <alpha-value>)",
        },
        border: "rgb(var(--ap-border) / <alpha-value>)",
        ring: "rgb(var(--ap-ring) / <alpha-value>)",
      },
    },
  },
}`}
        />
      </section>

      {/* Color Tokens Reference */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">All Color Tokens</h2>
        <p className="text-muted-foreground mb-4">
          Complete list of CSS variables used by popcn/ui.
        </p>
        <CodeBlock
          code={`:root {
  /* Core */
  --ap-background: 10 10 20;
  --ap-foreground: 250 250 255;

  /* Primary */
  --ap-primary: 99 102 241;
  --ap-primary-foreground: 255 255 255;

  /* Secondary */
  --ap-secondary: 168 85 247;
  --ap-secondary-foreground: 255 255 255;

  /* Aurora Gradient */
  --ap-aurora-1: 99 102 241;
  --ap-aurora-2: 139 92 246;
  --ap-aurora-3: 56 189 248;

  /* Utility */
  --ap-muted: 30 30 45;
  --ap-muted-foreground: 161 161 170;
  --ap-border: 63 63 70;
  --ap-ring: 99 102 241;

  /* Radius */
  --ap-radius: 0.75rem;
}`}
        />
      </section>
    </div>
  )
}
