"use client"

import { Spinner } from "@/components/ui/spinner"
import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"

export default function SpinnerPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Spinner</h1>
        <p className="text-lg text-muted-foreground">
          Loading spinner component.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
        <CodeBlock code="npx popcn add spinner" />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
        <div className="space-y-6">
          <ComponentPreview
            title="Default"
            code={`<Spinner />`}
          >
            <Spinner />
          </ComponentPreview>

          <ComponentPreview
            title="Sizes"
            code={`<div className="flex items-center gap-4">
  <Spinner className="size-4" />
  <Spinner className="size-6" />
  <Spinner className="size-8" />
</div>`}
          >
            <div className="flex items-center gap-4">
              <Spinner className="size-4" />
              <Spinner className="size-6" />
              <Spinner className="size-8" />
            </div>
          </ComponentPreview>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Props</h2>
        <PropsTable
          props={[
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
