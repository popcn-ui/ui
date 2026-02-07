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
        <h1 className="text-4xl font-bold mb-4">Alert</h1>
        <p className="text-lg text-muted-foreground">
          Inline alerts for status and messaging.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
        <CodeBlock code="npx popcn add alert" />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Variants</h2>
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
        <h2 className="text-2xl font-semibold mb-4">Props</h2>
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
