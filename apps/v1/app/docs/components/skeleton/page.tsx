"use client"

import { Skeleton } from "@/components/ui/skeleton"
import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"

export default function SkeletonPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Skeleton</h1>
        <p className="text-lg text-muted-foreground">
          Loading placeholder with aurora shimmer animation effect.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
        <CodeBlock code="npx popcn add skeleton" />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
        <div className="space-y-6">
          <ComponentPreview
            title="Default"
            code={`<Skeleton className="h-4 w-[250px]" />`}
          >
            <Skeleton className="h-4 w-[250px]" />
          </ComponentPreview>

          <ComponentPreview
            title="Circle"
            code={`<Skeleton className="h-12 w-12 rounded-full" />`}
          >
            <Skeleton className="h-12 w-12 rounded-full" />
          </ComponentPreview>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Card Loading</h2>
        <ComponentPreview
          title="Card Skeleton"
          code={`<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>`}
        >
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        </ComponentPreview>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Content Loading</h2>
        <ComponentPreview
          title="Content Skeleton"
          code={`<div className="space-y-4">
  <Skeleton className="h-8 w-[300px]" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-[80%]" />
  </div>
  <div className="flex gap-2">
    <Skeleton className="h-10 w-24" />
    <Skeleton className="h-10 w-24" />
  </div>
</div>`}
        >
          <div className="space-y-4 w-full max-w-md">
            <Skeleton className="h-8 w-[300px]" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[80%]" />
            </div>
            <div className="flex gap-2">
              <Skeleton className="h-10 w-24" />
              <Skeleton className="h-10 w-24" />
            </div>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Props</h2>
        <PropsTable
          props={[
            {
              name: "className",
              type: "string",
              default: "-",
              description: "Additional CSS classes for sizing and shape",
            },
          ]}
        />
      </section>
    </div>
  )
}
