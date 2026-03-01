"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"

const data = [
  { name: "Mon", aurora: 32, neon: 18 },
  { name: "Tue", aurora: 40, neon: 26 },
  { name: "Wed", aurora: 28, neon: 30 },
  { name: "Thu", aurora: 52, neon: 22 },
  { name: "Fri", aurora: 36, neon: 34 },
]

const config: ChartConfig = {
  aurora: { label: "Aurora", color: "rgb(var(--ap-aurora-1))" },
  neon: { label: "Neon", color: "rgb(var(--ap-aurora-3))" },
}

export default function ChartPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="mb-4 text-4xl font-bold">Chart</h1>
        <p className="text-muted-foreground text-lg">
          Recharts helpers for consistent styling and tooltips.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Installation</h2>
        <CodeBlock code="npx popcn add chart" />
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">Example</h2>
        <ComponentPreview
          title="Bar Chart"
          code={`<ChartContainer config={config}>
  <BarChart data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <ChartTooltip content={<ChartTooltipContent />} />
    <ChartLegend content={<ChartLegendContent />} />
    <Bar dataKey="aurora" fill="var(--color-aurora)" radius={6} />
    <Bar dataKey="neon" fill="var(--color-neon)" radius={6} />
  </BarChart>
</ChartContainer>`}
        >
          <ChartContainer config={config}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar dataKey="aurora" fill="var(--color-aurora)" radius={6} />
              <Bar dataKey="neon" fill="var(--color-neon)" radius={6} />
            </BarChart>
          </ChartContainer>
        </ComponentPreview>
      </section>
    </div>
  )
}
