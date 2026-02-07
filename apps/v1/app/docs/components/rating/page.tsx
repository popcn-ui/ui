import { Metadata } from "next"
import { RatingDemo } from "@/components/showcase/rating-demo"

export const metadata: Metadata = {
  title: "Rating",
  description: "Rating component with star display",
}

export default function RatingPage() {
  return (
    <div className="relative">
      <div className="aurora-bg" />
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Rating</h1>
          <p className="text-lg text-muted-foreground">
            A rating component with star display, supporting interactive and read-only modes.
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Example</h2>
            <div className="rounded-lg border border-border/60 bg-background/60 backdrop-blur-md p-6">
              <RatingDemo />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
