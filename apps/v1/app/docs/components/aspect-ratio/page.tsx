"use client"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"

export default function AspectRatioPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Aspect Ratio</h1>
        <p className="text-lg text-muted-foreground">
          Maintain consistent ratios for media layouts.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
        <CodeBlock code="npx popcn add aspect-ratio" />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Example</h2>
        <ComponentPreview
          title="16:9 Media"
          code={`<AspectRatio ratio={16 / 9}>
  <Image
    src="/images/aurora.jpg"
    alt="Aurora"
    fill
    className="rounded-lg object-cover"
  />
</AspectRatio>`}
        >
          <div className="w-full max-w-lg">
            <AspectRatio ratio={16 / 9}>
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
                alt="Aurora"
                className="h-full w-full rounded-lg object-cover"
              />
            </AspectRatio>
          </div>
        </ComponentPreview>
      </section>
    </div>
  )
}
