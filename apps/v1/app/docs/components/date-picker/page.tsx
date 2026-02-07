import { Metadata } from "next"
import { DatePickerDemo } from "@/components/showcase/date-picker-demo"

export const metadata: Metadata = {
  title: "Date Picker",
  description: "Date picker component with calendar popover",
}

export default function DatePickerPage() {
  return (
    <div className="relative">
      <div className="aurora-bg" />
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Date Picker</h1>
          <p className="text-lg text-muted-foreground">
            A date picker component with calendar popover for selecting single dates or date ranges.
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Example</h2>
            <div className="rounded-lg border border-border/60 bg-background/60 backdrop-blur-md p-6">
              <DatePickerDemo />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
