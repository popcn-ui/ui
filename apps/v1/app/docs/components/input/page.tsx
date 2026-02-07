"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"

export default function InputPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Input</h1>
        <p className="text-lg text-muted-foreground">
          Form input with aurora, glass, and ghost variants.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
        <CodeBlock code="npx popcn add input" />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Variants</h2>
        <div className="space-y-6">
          <ComponentPreview
            title="Glass (default)"
            code={`<Input variant="glass" placeholder="Enter text..." />`}
          >
            <Input variant="glass" placeholder="Enter text..." className="max-w-sm" />
          </ComponentPreview>

          <ComponentPreview
            title="Aurora"
            code={`<Input variant="aurora" placeholder="Aurora input..." />`}
          >
            <Input variant="aurora" placeholder="Aurora input..." className="max-w-sm" />
          </ComponentPreview>

          <ComponentPreview
            title="Ghost"
            code={`<Input variant="ghost" placeholder="Ghost input..." />`}
          >
            <Input variant="ghost" placeholder="Ghost input..." className="max-w-sm" />
          </ComponentPreview>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">With Label</h2>
        <ComponentPreview
          title="Form Field"
          code={`<div className="grid gap-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="Enter email..." />
</div>`}
        >
          <div className="grid gap-2 w-full max-w-sm">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter email..." />
          </div>
        </ComponentPreview>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Props</h2>
        <PropsTable
          props={[
            {
              name: "variant",
              type: '"aurora" | "glass" | "ghost"',
              default: '"glass"',
              description: "Visual style variant",
            },
          ]}
        />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Usage</h2>
        <CodeBlock
          code={`import { Input } from "@/components/ui/input"

export default function Example() {
  return (
    <Input
      variant="glass"
      placeholder="Enter your name..."
    />
  )
}`}
        />
      </section>
    </div>
  )
}
