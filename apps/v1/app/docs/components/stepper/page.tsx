import { Metadata } from "next"
import { StepperDemo } from "@/components/showcase/stepper-demo"

export const metadata: Metadata = {
  title: "Stepper",
  description: "Stepper component for multi-step processes",
}

export default function StepperPage() {
  return (
    <div className="relative">
      <div className="aurora-bg" />
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Stepper</h1>
          <p className="text-lg text-muted-foreground">
            A stepper component for multi-step processes with navigation and progress indication.
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Example</h2>
            <div className="rounded-lg border border-border/60 bg-background/60 backdrop-blur-md p-6">
              <StepperDemo />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
