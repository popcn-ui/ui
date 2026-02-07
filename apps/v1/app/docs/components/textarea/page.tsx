"use client"

import { Textarea } from "@/components/ui/textarea"
import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"

export default function TextareaPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Textarea</h1>
        <p className="text-lg text-muted-foreground">
          Textarea component for multi-line input.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
        <CodeBlock code="npx popcn add textarea" />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
        <div className="space-y-6">
          <ComponentPreview
            title="Default"
            code={`<Textarea placeholder="Enter your message..." />`}
          >
            <Textarea placeholder="Enter your message..." />
          </ComponentPreview>

          <ComponentPreview
            title="With Rows"
            code={`<Textarea placeholder="Enter your message..." rows={6} />`}
          >
            <Textarea placeholder="Enter your message..." rows={6} />
          </ComponentPreview>

          <ComponentPreview
            title="Disabled"
            code={`<Textarea placeholder="Disabled textarea" disabled />`}
          >
            <Textarea placeholder="Disabled textarea" disabled />
          </ComponentPreview>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Props</h2>
        <PropsTable
          props={[
            {
              name: "placeholder",
              type: "string",
              default: "-",
              description: "Placeholder text",
            },
            {
              name: "rows",
              type: "number",
              default: "-",
              description: "Number of rows",
            },
            {
              name: "disabled",
              type: "boolean",
              default: "false",
              description: "Disable the textarea",
            },
          ]}
        />
      </section>
    </div>
  )
}
