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

const data = [
  { name: "Mon", aurora: 32, neon: 18 },
  { name: "Tue", aurora: 40, neon: 26 },
  { name: "Wed", aurora: 28, neon: 30 },
]

const config: ChartConfig = {
  aurora: { label: "Aurora", color: "rgb(var(--ap-aurora-1))" },
  neon: { label: "Neon", color: "rgb(var(--ap-aurora-3))" },
}

function ChartDemo() {
  return (
    <ChartContainer config={config} className="w-full max-w-sm">
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
  )
}

export { ChartDemo }
