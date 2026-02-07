"use client"

import { useState } from "react"
import { Toggle } from "@/components/ui/toggle"
import { Bold, Italic, Underline } from "lucide-react"
import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"

export default function TogglePage() {
  const [bold, setBold] = useState(false)
  const [italic, setItalic] = useState(false)
  const [underline, setUnderline] = useState(false)

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Toggle</h1>
        <p className="text-lg text-muted-foreground">
          Toggle button with aurora styling variants.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
        <CodeBlock code="npx popcn add toggle" />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
        <div className="space-y-6">
          <ComponentPreview
            title="Default"
            code={`<Toggle>Toggle</Toggle>`}
          >
            <Toggle>Toggle</Toggle>
          </ComponentPreview>

          <ComponentPreview
            title="With Icon"
            code={`<Toggle>
  <Bold className="h-4 w-4" />
</Toggle>`}
          >
            <Toggle>
              <Bold className="h-4 w-4" />
            </Toggle>
          </ComponentPreview>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Variants</h2>
        <div className="space-y-6">
          <ComponentPreview
            title="Default"
            code={`<Toggle variant="default">Default</Toggle>`}
          >
            <Toggle variant="default">Default</Toggle>
          </ComponentPreview>

          <ComponentPreview
            title="Outline"
            code={`<Toggle variant="outline">Outline</Toggle>`}
          >
            <Toggle variant="outline">Outline</Toggle>
          </ComponentPreview>

          <ComponentPreview
            title="Aurora"
            code={`<Toggle variant="aurora">Aurora</Toggle>`}
          >
            <Toggle variant="aurora">Aurora</Toggle>
          </ComponentPreview>

          <ComponentPreview
            title="Glass"
            code={`<Toggle variant="glass">Glass</Toggle>`}
          >
            <Toggle variant="glass">Glass</Toggle>
          </ComponentPreview>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Sizes</h2>
        <div className="space-y-6">
          <ComponentPreview
            title="Small"
            code={`<Toggle size="sm">Small</Toggle>`}
          >
            <Toggle size="sm">Small</Toggle>
          </ComponentPreview>

          <ComponentPreview
            title="Default"
            code={`<Toggle size="default">Default</Toggle>`}
          >
            <Toggle size="default">Default</Toggle>
          </ComponentPreview>

          <ComponentPreview
            title="Large"
            code={`<Toggle size="lg">Large</Toggle>`}
          >
            <Toggle size="lg">Large</Toggle>
          </ComponentPreview>

          <ComponentPreview
            title="Icon"
            code={`<Toggle size="icon">
  <Bold className="h-4 w-4" />
</Toggle>`}
          >
            <Toggle size="icon">
              <Bold className="h-4 w-4" />
            </Toggle>
          </ComponentPreview>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Controlled</h2>
        <ComponentPreview
          title="Controlled Toggle"
          code={`const [bold, setBold] = useState(false)

<Toggle
  pressed={bold}
  onPressedChange={setBold}
>
  <Bold className="h-4 w-4" />
</Toggle>`}
        >
          <Toggle pressed={bold} onPressedChange={setBold}>
            <Bold className="h-4 w-4" />
          </Toggle>
        </ComponentPreview>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Multiple Toggles</h2>
        <ComponentPreview
          title="Text Formatting"
          code={`const [bold, setBold] = useState(false)
const [italic, setItalic] = useState(false)
const [underline, setUnderline] = useState(false)

<div className="flex items-center gap-2">
  <Toggle pressed={bold} onPressedChange={setBold}>
    <Bold className="h-4 w-4" />
  </Toggle>
  <Toggle pressed={italic} onPressedChange={setItalic}>
    <Italic className="h-4 w-4" />
  </Toggle>
  <Toggle pressed={underline} onPressedChange={setUnderline}>
    <Underline className="h-4 w-4" />
  </Toggle>
</div>`}
        >
          <div className="flex items-center gap-2">
            <Toggle pressed={bold} onPressedChange={setBold}>
              <Bold className="h-4 w-4" />
            </Toggle>
            <Toggle pressed={italic} onPressedChange={setItalic}>
              <Italic className="h-4 w-4" />
            </Toggle>
            <Toggle pressed={underline} onPressedChange={setUnderline}>
              <Underline className="h-4 w-4" />
            </Toggle>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Props</h2>
        <PropsTable
          props={[
            {
              name: "pressed",
              type: "boolean",
              default: "-",
              description: "Controlled pressed state",
            },
            {
              name: "onPressedChange",
              type: "(pressed: boolean) => void",
              default: "-",
              description: "Callback when pressed state changes",
            },
            {
              name: "variant",
              type: '"default" | "outline" | "aurora" | "glass"',
              default: '"default"',
              description: "Toggle variant style",
            },
            {
              name: "size",
              type: '"default" | "sm" | "lg" | "icon"',
              default: '"default"',
              description: "Toggle size",
            },
            {
              name: "disabled",
              type: "boolean",
              default: "false",
              description: "Disable the toggle",
            },
          ]}
        />
      </section>
    </div>
  )
}
