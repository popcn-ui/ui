"use client"

import { Spinner } from "@/components/ui/spinner"
import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"

export default function SpinnerPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="mb-4 text-4xl font-bold">Spinner</h1>
        <p className="text-muted-foreground text-lg">Loading spinner component.</p>
      </div>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Installation</h2>
        <CodeBlock code="npx popcn add spinner" />
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Basic Usage</h2>
        <div className="space-y-6">
          <ComponentPreview title="Default" code={`<Spinner />`}>
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
        <h2 className="mb-4 text-2xl font-semibold">Props</h2>
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
