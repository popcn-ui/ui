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
    <div className="border border-border/50 rounded-xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 bg-muted/20">
        <h3 className="text-sm font-medium">{title}</h3>
        <button
          onClick={() => setShowCode(!showCode)}
          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          {showCode ? "Preview" : "Code"}
        </button>
      </div>
      {showCode ? (
        <div className="p-4">
          <CodeBlock code={code} />
        </div>
      ) : (
        <div className="p-8 flex items-center justify-center gap-4 bg-background/50">
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
        <h1 className="text-4xl font-bold mb-4">Button</h1>
        <p className="text-lg text-muted-foreground">
          Aurora-styled button with gradient variants and motion presets.
        </p>
      </div>

      {/* Installation */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
        <CodeBlock code="npx popcn add button" />
      </section>

      {/* Interactive Playground */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Playground</h2>
        <div className="glass rounded-xl p-6">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium mb-2">Variant</label>
              <div className="flex flex-wrap gap-2">
                {(["aurora", "glass", "ghost"] as Variant[]).map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
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
              <label className="block text-sm font-medium mb-2">Motion</label>
              <div className="flex flex-wrap gap-2">
                {(["pop", "float", "shine", "snap", "none"] as Motion[]).map(
                  (m) => (
                    <button
                      key={m}
                      onClick={() => setMotion(m)}
                      className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                        motion === m
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted/50 text-muted-foreground hover:bg-muted"
                      }`}
                    >
                      {m}
                    </button>
                  )
                )}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Size</label>
              <div className="flex flex-wrap gap-2">
                {(["sm", "md", "lg"] as Size[]).map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
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

          <div className="flex items-center justify-center p-12 rounded-lg bg-background/50 border border-border/50 mb-4">
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
        <h2 className="text-2xl font-semibold mb-4">Variants</h2>
        <div className="space-y-6">
          <PreviewCard
            title="Aurora (default)"
            code={`<Button variant="aurora">Aurora Button</Button>`}
          >
            <Button variant="aurora">Aurora Button</Button>
          </PreviewCard>

          <PreviewCard
            title="Glass"
            code={`<Button variant="glass">Glass Button</Button>`}
          >
            <Button variant="glass">Glass Button</Button>
          </PreviewCard>

          <PreviewCard
            title="Ghost"
            code={`<Button variant="ghost">Ghost Button</Button>`}
          >
            <Button variant="ghost">Ghost Button</Button>
          </PreviewCard>
        </div>
      </section>

      {/* Motions */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Motion Presets</h2>
        <div className="space-y-6">
          <PreviewCard
            title="Pop (default)"
            code={`<Button motion="pop">Pop</Button>`}
          >
            <Button motion="pop">Click for Pop</Button>
          </PreviewCard>

          <PreviewCard
            title="Float"
            code={`<Button motion="float">Float</Button>`}
          >
            <Button motion="float">Floating</Button>
          </PreviewCard>

          <PreviewCard
            title="Shine"
            code={`<Button motion="shine">Shine</Button>`}
          >
            <Button motion="shine">Shine</Button>
          </PreviewCard>

          <PreviewCard
            title="Snap"
            code={`<Button motion="snap">Snap</Button>`}
          >
            <Button motion="snap">Press & Hold</Button>
          </PreviewCard>
        </div>
      </section>

      {/* Sizes */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Sizes</h2>
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
        <h2 className="text-2xl font-semibold mb-4">With Icons</h2>
        <PreviewCard
          title="Icon Buttons"
          code={`<Button leftIcon={<Download />}>Download</Button>
<Button rightIcon={<ChevronRight />}>Continue</Button>
<Button leftIcon={<Send />} rightIcon={<ChevronRight />}>Send</Button>`}
        >
          <Button leftIcon={<Download className="h-4 w-4" />}>Download</Button>
          <Button rightIcon={<ChevronRight className="h-4 w-4" />}>
            Continue
          </Button>
          <Button
            leftIcon={<Heart className="h-4 w-4" />}
            variant="glass"
          >
            Like
          </Button>
        </PreviewCard>
      </section>

      {/* Props */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Props</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50">
                <th className="text-left py-3 px-4 font-semibold">Prop</th>
                <th className="text-left py-3 px-4 font-semibold">Type</th>
                <th className="text-left py-3 px-4 font-semibold">Default</th>
                <th className="text-left py-3 px-4 font-semibold">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              <tr>
                <td className="py-3 px-4 font-mono text-primary">variant</td>
                <td className="py-3 px-4 font-mono text-muted-foreground">
                  &quot;aurora&quot; | &quot;glass&quot; | &quot;ghost&quot;
                </td>
                <td className="py-3 px-4 font-mono text-muted-foreground">
                  &quot;aurora&quot;
                </td>
                <td className="py-3 px-4 text-muted-foreground">
                  Visual style variant
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-primary">size</td>
                <td className="py-3 px-4 font-mono text-muted-foreground">
                  &quot;sm&quot; | &quot;md&quot; | &quot;lg&quot;
                </td>
                <td className="py-3 px-4 font-mono text-muted-foreground">
                  &quot;md&quot;
                </td>
                <td className="py-3 px-4 text-muted-foreground">Button size</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-primary">motion</td>
                <td className="py-3 px-4 font-mono text-muted-foreground">
                  &quot;pop&quot; | &quot;float&quot; | &quot;shine&quot; | &quot;snap&quot; | &quot;none&quot;
                </td>
                <td className="py-3 px-4 font-mono text-muted-foreground">
                  &quot;pop&quot;
                </td>
                <td className="py-3 px-4 text-muted-foreground">
                  Animation preset
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-primary">leftIcon</td>
                <td className="py-3 px-4 font-mono text-muted-foreground">
                  ReactNode
                </td>
                <td className="py-3 px-4 font-mono text-muted-foreground">-</td>
                <td className="py-3 px-4 text-muted-foreground">
                  Icon on the left
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-primary">rightIcon</td>
                <td className="py-3 px-4 font-mono text-muted-foreground">
                  ReactNode
                </td>
                <td className="py-3 px-4 font-mono text-muted-foreground">-</td>
                <td className="py-3 px-4 text-muted-foreground">
                  Icon on the right
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-primary">disabled</td>
                <td className="py-3 px-4 font-mono text-muted-foreground">
                  boolean
                </td>
                <td className="py-3 px-4 font-mono text-muted-foreground">
                  false
                </td>
                <td className="py-3 px-4 text-muted-foreground">
                  Disable the button
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Usage */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Usage</h2>
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
