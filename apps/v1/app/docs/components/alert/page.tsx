"use client"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { AlertTriangle, Sparkles } from "lucide-react"

export default function AlertPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="mb-4 text-4xl font-bold">Alert</h1>
        <p className="text-muted-foreground text-lg">Inline alerts for status and messaging.</p>
      </div>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Installation</h2>
        <CodeBlock code="npx popcn add alert" />
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Variants</h2>
        <div className="space-y-6">
          <ComponentPreview
            title="Default"
            code={`<Alert>
  <Sparkles />
  <AlertTitle>Aurora Active</AlertTitle>
  <AlertDescription>Cosmic theme is enabled.</AlertDescription>
</Alert>`}
          >
            <Alert>
              <Sparkles />
              <AlertTitle>Aurora Active</AlertTitle>
              <AlertDescription>Cosmic theme is enabled.</AlertDescription>
            </Alert>
          </ComponentPreview>

          <ComponentPreview
            title="Destructive"
            code={`<Alert variant="destructive">
  <AlertTriangle />
  <AlertTitle>Action required</AlertTitle>
  <AlertDescription>Please review your settings.</AlertDescription>
</Alert>`}
          >
            <Alert variant="destructive">
              <AlertTriangle />
              <AlertTitle>Action required</AlertTitle>
              <AlertDescription>Please review your settings.</AlertDescription>
            </Alert>
          </ComponentPreview>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">Props</h2>
        <PropsTable
          props={[
            {
              name: "variant",
              type: '"default" | "destructive"',
              default: '"default"',
              description: "Visual style variant",
            },
          ]}
        />
      </section>
    </div>
  )
}
