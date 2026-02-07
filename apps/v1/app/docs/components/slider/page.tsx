"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"

export default function SliderPage() {
  const [value, setValue] = useState([50])

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Slider</h1>
        <p className="text-lg text-muted-foreground">
          Slider component for range selection.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
        <CodeBlock code="npx popcn add slider" />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
        <div className="space-y-6">
          <ComponentPreview
            title="Default"
            code={`<Slider defaultValue={[50]} max={100} step={1} />`}
          >
            <Slider defaultValue={[50]} max={100} step={1} className="w-full max-w-sm" />
          </ComponentPreview>

          <ComponentPreview
            title="Range"
            code={`<Slider defaultValue={[20, 80]} max={100} step={1} />`}
          >
            <Slider defaultValue={[20, 80]} max={100} step={1} className="w-full max-w-sm" />
          </ComponentPreview>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Controlled</h2>
        <ComponentPreview
          title="Controlled Slider"
          code={`const [value, setValue] = useState([50])

<Slider value={value} onValueChange={setValue} max={100} step={1} />`}
        >
          <div className="space-y-2 w-full max-w-sm">
            <Slider value={value} onValueChange={setValue} max={100} step={1} />
            <p className="text-sm text-muted-foreground">Value: {value[0]}</p>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Props</h2>
        <PropsTable
          props={[
            {
              name: "value",
              type: "number[]",
              default: "-",
              description: "Controlled value",
            },
            {
              name: "onValueChange",
              type: "(value: number[]) => void",
              default: "-",
              description: "Callback when value changes",
            },
            {
              name: "defaultValue",
              type: "number[]",
              default: "-",
              description: "Default value",
            },
            {
              name: "min",
              type: "number",
              default: "0",
              description: "Minimum value",
            },
            {
              name: "max",
              type: "number",
              default: "100",
              description: "Maximum value",
            },
            {
              name: "step",
              type: "number",
              default: "1",
              description: "Step value",
            },
          ]}
        />
      </section>
    </div>
  )
}
