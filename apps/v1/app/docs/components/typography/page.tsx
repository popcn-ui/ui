import { Metadata } from "next"
import { TypographyDemo } from "@/components/showcase/typography-demo"

export const metadata: Metadata = {
  title: "Typography",
  description: "Typography component for consistent text styling",
}

export default function TypographyPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Typography</h1>
        <p className="text-muted-foreground mt-2">
          Typography component for consistent text styling with various variants
          for headings, paragraphs, lists, and more.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Example</h2>
          <div className="glass rounded-xl p-6">
            <TypographyDemo />
          </div>
        </div>
      </div>
    </div>
  )
}
