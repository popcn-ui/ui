import type { Metadata } from "next"
import { ColorPickerDemo } from "@/components/showcase/color-picker-demo"

export const metadata: Metadata = {
  title: "Color Picker",
  description: "Color picker component with RGB and HSL sliders",
}

export default function ColorPickerPage() {
  return (
    <div className="relative">
      <div className="aurora-bg" />
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="mb-4 text-4xl font-bold tracking-tight">Color Picker</h1>
          <p className="text-muted-foreground text-lg">
            A color picker component with RGB and HSL sliders for selecting colors.
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="mb-4 text-2xl font-semibold">Example</h2>
            <div className="border-border/60 bg-background/60 rounded-lg border p-6 backdrop-blur-md">
              <ColorPickerDemo />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
