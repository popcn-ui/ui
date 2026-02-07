"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"

export default function CalendarPage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Calendar</h1>
        <p className="text-lg text-muted-foreground">
          Date selection with aurora-friendly styling.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
        <CodeBlock code="npx popcn add calendar" />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Example</h2>
        <ComponentPreview
          title="Single Date"
          code={`<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
/>`}
        >
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
          />
        </ComponentPreview>
      </section>
    </div>
  )
}
