"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"

const slides = ["Aurora", "Cosmic", "Neon", "Sunset"]

export default function CarouselPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Carousel</h1>
        <p className="text-lg text-muted-foreground">
          Swipeable carousel with navigation controls.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
        <CodeBlock code="npx popcn add carousel" />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Example</h2>
        <ComponentPreview
          title="Basic Carousel"
          code={`<Carousel className="w-full max-w-md">
  <CarouselContent>
    {slides.map((slide) => (
      <CarouselItem key={slide}>
        <div className="glass rounded-xl p-10 text-center">
          {slide}
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}
        >
          <Carousel className="w-full max-w-md">
            <CarouselContent>
              {slides.map((slide) => (
                <CarouselItem key={slide}>
                  <div className="glass rounded-xl p-10 text-center text-lg font-semibold">
                    {slide}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </ComponentPreview>
      </section>
    </div>
  )
}
