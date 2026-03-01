"use client"

import { useState } from "react"
import { Progress } from "@/components/ui/progress"
import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"

export default function ProgressPage() {
  const [progress, setProgress] = useState(33)

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="mb-4 text-4xl font-bold">Progress</h1>
        <p className="text-muted-foreground text-lg">Progress bar component.</p>
      </div>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Installation</h2>
        <CodeBlock code="npx popcn add progress" />
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Basic Usage</h2>
        <div className="space-y-6">
          <ComponentPreview title="Default" code={`<Progress value={33} />`}>
            <Progress value={33} />
          </ComponentPreview>

          <ComponentPreview
            title="Different Values"
            code={`<div className="space-y-2">
  <Progress value={0} />
  <Progress value={25} />
  <Progress value={50} />
  <Progress value={75} />
  <Progress value={100} />
</div>`}
          >
            <div className="space-y-2">
              <Progress value={0} />
              <Progress value={25} />
              <Progress value={50} />
              <Progress value={75} />
              <Progress value={100} />
            </div>
          </ComponentPreview>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Controlled</h2>
        <ComponentPreview
          title="Animated Progress"
          code={`const [progress, setProgress] = useState(33)

<Progress value={progress} />`}
        >
          <div className="space-y-2">
            <Progress value={progress} />
            <div className="flex gap-2">
              <button
                onClick={() => setProgress(Math.max(0, progress - 10))}
                className="rounded border px-3 py-1 text-sm"
              >
                Decrease
              </button>
              <button
                onClick={() => setProgress(Math.min(100, progress + 10))}
                className="rounded border px-3 py-1 text-sm"
              >
                Increase
              </button>
            </div>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">Props</h2>
        <PropsTable
          props={[
            {
              name: "value",
              type: "number",
              default: "-",
              description: "Progress value (0-100)",
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
