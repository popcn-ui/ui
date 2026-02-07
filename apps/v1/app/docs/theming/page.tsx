"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CodeBlock } from "@/components/docs/code-block"

type Theme = "cosmic" | "sunset" | "neon"

export default function ThemingPage() {
  const [theme, setTheme] = useState<Theme>("cosmic")

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Theming</h1>
        <p className="text-lg text-muted-foreground">
          popcn/ui comes with three beautiful theme presets. Each theme defines
          aurora gradient colors that flow through all components.
        </p>
      </div>

      {/* Theme Switcher */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Theme Presets</h2>
        <div className="flex gap-4 mb-6">
          {(["cosmic", "sunset", "neon"] as Theme[]).map((t) => (
            <button
              key={t}
              onClick={() => setTheme(t)}
              className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${
                theme === t
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted/30 text-muted-foreground hover:bg-muted/50"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Preview */}
        <div className={`theme-${theme} glass rounded-xl p-8`}>
          <div className="flex flex-wrap gap-4 items-center mb-6">
            <Button variant="aurora">Aurora Button</Button>
            <Button variant="glass">Glass Button</Button>
            <Badge variant="aurora">Badge</Badge>
            <Badge variant="glass">Glass</Badge>
          </div>
          <Card variant="aurora" className="max-w-md">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                This card uses the {theme} theme preset with aurora border effects.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CSS Variables */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">CSS Variables</h2>
        <p className="text-muted-foreground mb-4">
          Themes are defined using CSS custom properties. Add a theme class to
          switch colors.
        </p>
        <CodeBlock
          code={`/* Apply theme class to container */
<div className="theme-sunset">
  <Button variant="aurora">Sunset Button</Button>
</div>

/* Or use data attribute */
<div data-theme="neon">
  <Card variant="aurora">Neon Card</Card>
</div>`}
        />
      </section>

      {/* Cosmic Theme */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Cosmic (Default)</h2>
        <p className="text-muted-foreground mb-4">
          Indigo, Purple, and Sky blues create a cosmic aurora effect.
        </p>
        <CodeBlock
          code={`:root {
  --ap-primary: 99 102 241;      /* Indigo */
  --ap-secondary: 168 85 247;    /* Purple */
  --ap-aurora-1: 99 102 241;     /* Indigo */
  --ap-aurora-2: 139 92 246;     /* Violet */
  --ap-aurora-3: 56 189 248;     /* Sky */
}`}
        />
      </section>

      {/* Sunset Theme */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Sunset</h2>
        <p className="text-muted-foreground mb-4">
          Pink, Orange, and Yellow for a warm sunset gradient.
        </p>
        <CodeBlock
          code={`.theme-sunset {
  --ap-primary: 236 72 153;      /* Pink */
  --ap-secondary: 251 146 60;    /* Orange */
  --ap-aurora-1: 236 72 153;     /* Pink */
  --ap-aurora-2: 251 146 60;     /* Orange */
  --ap-aurora-3: 250 204 21;     /* Yellow */
}`}
        />
      </section>

      {/* Neon Theme */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Neon</h2>
        <p className="text-muted-foreground mb-4">
          Cyan, Magenta, and Lime for a vibrant neon effect.
        </p>
        <CodeBlock
          code={`.theme-neon {
  --ap-primary: 6 182 212;       /* Cyan */
  --ap-secondary: 217 70 239;    /* Magenta */
  --ap-aurora-1: 6 182 212;      /* Cyan */
  --ap-aurora-2: 217 70 239;     /* Magenta */
  --ap-aurora-3: 163 230 53;     /* Lime */
}`}
        />
      </section>

      {/* Custom Theme */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Creating Custom Themes</h2>
        <p className="text-muted-foreground mb-4">
          Create your own theme by defining the aurora color variables.
        </p>
        <CodeBlock
          code={`/* Custom Ocean theme */
.theme-ocean {
  --ap-primary: 20 184 166;      /* Teal */
  --ap-secondary: 59 130 246;    /* Blue */
  --ap-aurora-1: 20 184 166;     /* Teal */
  --ap-aurora-2: 34 211 238;     /* Cyan */
  --ap-aurora-3: 59 130 246;     /* Blue */
  --ap-ring: 20 184 166;
}`}
        />
      </section>
    </div>
  )
}
