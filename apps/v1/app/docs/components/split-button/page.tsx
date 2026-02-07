import { Metadata } from "next"
import { SplitButtonDemo } from "@/components/showcase/split-button-demo"

export const metadata: Metadata = {
  title: "Split Button",
  description: "Split button component with dropdown menu",
}

export default function SplitButtonPage() {
  return (
    <div className="relative">
      <div className="aurora-bg" />
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Split Button</h1>
          <p className="text-lg text-muted-foreground">
            A split button component with a primary action and dropdown menu for additional options.
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Example</h2>
            <div className="rounded-lg border border-border/60 bg-background/60 backdrop-blur-md p-6">
              <SplitButtonDemo />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
