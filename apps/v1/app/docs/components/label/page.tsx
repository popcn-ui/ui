"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"

export default function LabelPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Label</h1>
        <p className="text-lg text-muted-foreground">
          Accessible label component for form elements.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
        <CodeBlock code="npx popcn add label" />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
        <ComponentPreview
          title="With Input"
          code={`<div className="grid gap-2 w-full max-w-sm">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="Enter your email" />
</div>`}
        >
          <div className="grid gap-2 w-full max-w-sm">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
        </ComponentPreview>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">With Checkbox</h2>
        <ComponentPreview
          title="Checkbox Label"
          code={`<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>`}
        >
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Accept terms and conditions</Label>
          </div>
        </ComponentPreview>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">With Required Indicator</h2>
        <ComponentPreview
          title="Required Field"
          code={`<div className="grid gap-2 w-full max-w-sm">
  <Label htmlFor="name">
    Name <span className="text-destructive">*</span>
  </Label>
  <Input id="name" placeholder="Enter your name" />
</div>`}
        >
          <div className="grid gap-2 w-full max-w-sm">
            <Label htmlFor="name">
              Name <span className="text-destructive">*</span>
            </Label>
            <Input id="name" placeholder="Enter your name" />
          </div>
        </ComponentPreview>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Disabled State</h2>
        <ComponentPreview
          title="Disabled Field"
          code={`<div className="grid gap-2 w-full max-w-sm">
  <Label htmlFor="disabled" className="opacity-50">
    Disabled field
  </Label>
  <Input id="disabled" disabled placeholder="Cannot edit" />
</div>`}
        >
          <div className="grid gap-2 w-full max-w-sm">
            <Label htmlFor="disabled" className="opacity-50">
              Disabled field
            </Label>
            <Input id="disabled" disabled placeholder="Cannot edit" />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Props</h2>
        <PropsTable
          props={[
            {
              name: "htmlFor",
              type: "string",
              default: "-",
              description: "The id of the form element the label is associated with",
            },
            {
              name: "className",
              type: "string",
              default: "-",
              description: "Additional CSS classes",
            },
          ]}
        />
      </section>
    </div>
  )
}
