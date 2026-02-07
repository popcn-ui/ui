"use client"

import { Field, FieldContent, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"

export default function FieldPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Field</h1>
        <p className="text-lg text-muted-foreground">
          Layout helpers for labeled form controls.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
        <CodeBlock code="npx popcn add field" />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Example</h2>
        <ComponentPreview
          title="Field Row"
          code={`<Field orientation="horizontal">
  <FieldLabel>Email</FieldLabel>
  <FieldContent>
    <Input placeholder="you@aurora.dev" />
    <FieldDescription>We'll never share your email.</FieldDescription>
  </FieldContent>
</Field>`}
        >
          <Field orientation="horizontal">
            <FieldLabel>Email</FieldLabel>
            <FieldContent>
              <Input placeholder="you@aurora.dev" />
              <FieldDescription>We'll never share your email.</FieldDescription>
            </FieldContent>
          </Field>
        </ComponentPreview>
      </section>
    </div>
  )
}
