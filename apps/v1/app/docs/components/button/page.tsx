"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CodeBlock } from "@/components/docs/code-block"
import { ChevronRight, Download, Send, Heart } from "lucide-react"

type Variant = "aurora" | "glass" | "ghost"
type Motion = "pop" | "float" | "shine" | "snap" | "none"
type Size = "sm" | "md" | "lg"

function PreviewCard({
  title,
  children,
  code,
}: {
  title: string
  children: React.ReactNode
  code: string
}) {
  const [showCode, setShowCode] = useState(false)

  return (
    <div className="border-border/50 overflow-hidden rounded-xl border">
      <div className="border-border/50 bg-muted/20 flex items-center justify-between border-b px-4 py-3">
        <h3 className="text-sm font-medium">{title}</h3>
        <button
          onClick={() => setShowCode(!showCode)}
          className="text-muted-foreground hover:text-foreground text-xs transition-colors"
        >
          {showCode ? "Preview" : "Code"}
        </button>
      </div>
      {showCode ? (
        <div className="p-4">
          <CodeBlock code={code} />
        </div>
      ) : (
        <div className="bg-background/50 flex items-center justify-center gap-4 p-8">
          {children}
        </div>
      )}
    </div>
  )
}

export default function ButtonPage() {
  const [variant, setVariant] = useState<Variant>("aurora")
  const [motion, setMotion] = useState<Motion>("pop")
  const [size, setSize] = useState<Size>("md")

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="mb-4 text-4xl font-bold">Button</h1>
        <p className="text-muted-foreground text-lg">
          Aurora-styled button with gradient variants and motion presets.
        </p>
      </div>

      {/* Installation */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Installation</h2>
        <CodeBlock code="npx popcn add button" />
      </section>

      {/* Interactive Playground */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Playground</h2>
        <div className="glass rounded-xl p-6">
          <div className="mb-8 grid gap-6 md:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm font-medium">Variant</label>
              <div className="flex flex-wrap gap-2">
                {(["aurora", "glass", "ghost"] as Variant[]).map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                      variant === v
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted/50 text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Motion</label>
              <div className="flex flex-wrap gap-2">
                {(["pop", "float", "shine", "snap", "none"] as Motion[]).map((m) => (
                  <button
                    key={m}
                    onClick={() => setMotion(m)}
                    className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                      motion === m
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted/50 text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Size</label>
              <div className="flex flex-wrap gap-2">
                {(["sm", "md", "lg"] as Size[]).map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                      size === s
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted/50 text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-background/50 border-border/50 mb-4 flex items-center justify-center rounded-lg border p-12">
            <Button variant={variant} motion={motion} size={size}>
              Button
            </Button>
          </div>

          <CodeBlock
            code={`<Button variant="${variant}" motion="${motion}" size="${size}">
  Button
</Button>`}
          />
        </div>
      </section>

      {/* Variants */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Variants</h2>
        <div className="space-y-6">
          <PreviewCard
            title="Aurora (default)"
            code={`<Button variant="aurora">Aurora Button</Button>`}
          >
            <Button variant="aurora">Aurora Button</Button>
          </PreviewCard>

          <PreviewCard title="Glass" code={`<Button variant="glass">Glass Button</Button>`}>
            <Button variant="glass">Glass Button</Button>
          </PreviewCard>

          <PreviewCard title="Ghost" code={`<Button variant="ghost">Ghost Button</Button>`}>
            <Button variant="ghost">Ghost Button</Button>
          </PreviewCard>
        </div>
      </section>

      {/* Motions */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Motion Presets</h2>
        <div className="space-y-6">
          <PreviewCard title="Pop (default)" code={`<Button motion="pop">Pop</Button>`}>
            <Button motion="pop">Click for Pop</Button>
          </PreviewCard>

          <PreviewCard title="Float" code={`<Button motion="float">Float</Button>`}>
            <Button motion="float">Floating</Button>
          </PreviewCard>

          <PreviewCard title="Shine" code={`<Button motion="shine">Shine</Button>`}>
            <Button motion="shine">Shine</Button>
          </PreviewCard>

          <PreviewCard title="Snap" code={`<Button motion="snap">Snap</Button>`}>
            <Button motion="snap">Press & Hold</Button>
          </PreviewCard>
        </div>
      </section>

      {/* Sizes */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Sizes</h2>
        <PreviewCard
          title="All Sizes"
          code={`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`}
        >
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </PreviewCard>
      </section>

      {/* With Icons */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">With Icons</h2>
        <PreviewCard
          title="Icon Buttons"
          code={`<Button leftIcon={<Download />}>Download</Button>
<Button rightIcon={<ChevronRight />}>Continue</Button>
<Button leftIcon={<Send />} rightIcon={<ChevronRight />}>Send</Button>`}
        >
          <Button leftIcon={<Download className="h-4 w-4" />}>Download</Button>
          <Button rightIcon={<ChevronRight className="h-4 w-4" />}>Continue</Button>
          <Button leftIcon={<Heart className="h-4 w-4" />} variant="glass">
            Like
          </Button>
        </PreviewCard>
      </section>

      {/* Props */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Props</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-border/50 border-b">
                <th className="px-4 py-3 text-left font-semibold">Prop</th>
                <th className="px-4 py-3 text-left font-semibold">Type</th>
                <th className="px-4 py-3 text-left font-semibold">Default</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody className="divide-border/50 divide-y">
              <tr>
                <td className="text-primary px-4 py-3 font-mono">variant</td>
                <td className="text-muted-foreground px-4 py-3 font-mono">
                  &quot;aurora&quot; | &quot;glass&quot; | &quot;ghost&quot;
                </td>
                <td className="text-muted-foreground px-4 py-3 font-mono">&quot;aurora&quot;</td>
                <td className="text-muted-foreground px-4 py-3">Visual style variant</td>
              </tr>
              <tr>
                <td className="text-primary px-4 py-3 font-mono">size</td>
                <td className="text-muted-foreground px-4 py-3 font-mono">
                  &quot;sm&quot; | &quot;md&quot; | &quot;lg&quot;
                </td>
                <td className="text-muted-foreground px-4 py-3 font-mono">&quot;md&quot;</td>
                <td className="text-muted-foreground px-4 py-3">Button size</td>
              </tr>
              <tr>
                <td className="text-primary px-4 py-3 font-mono">motion</td>
                <td className="text-muted-foreground px-4 py-3 font-mono">
                  &quot;pop&quot; | &quot;float&quot; | &quot;shine&quot; | &quot;snap&quot; |
                  &quot;none&quot;
                </td>
                <td className="text-muted-foreground px-4 py-3 font-mono">&quot;pop&quot;</td>
                <td className="text-muted-foreground px-4 py-3">Animation preset</td>
              </tr>
              <tr>
                <td className="text-primary px-4 py-3 font-mono">leftIcon</td>
                <td className="text-muted-foreground px-4 py-3 font-mono">ReactNode</td>
                <td className="text-muted-foreground px-4 py-3 font-mono">-</td>
                <td className="text-muted-foreground px-4 py-3">Icon on the left</td>
              </tr>
              <tr>
                <td className="text-primary px-4 py-3 font-mono">rightIcon</td>
                <td className="text-muted-foreground px-4 py-3 font-mono">ReactNode</td>
                <td className="text-muted-foreground px-4 py-3 font-mono">-</td>
                <td className="text-muted-foreground px-4 py-3">Icon on the right</td>
              </tr>
              <tr>
                <td className="text-primary px-4 py-3 font-mono">disabled</td>
                <td className="text-muted-foreground px-4 py-3 font-mono">boolean</td>
                <td className="text-muted-foreground px-4 py-3 font-mono">false</td>
                <td className="text-muted-foreground px-4 py-3">Disable the button</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Usage */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Usage</h2>
        <CodeBlock
          code={`import { Button } from "@/components/ui/button"

export default function Example() {
  return (
    <div className="flex gap-4">
      <Button variant="aurora" motion="pop">
        Primary Action
      </Button>
      <Button variant="glass" motion="shine">
        Secondary
      </Button>
      <Button variant="ghost">
        Cancel
      </Button>
    </div>
  )
}`}
        />
      </section>
    </div>
  )
}
