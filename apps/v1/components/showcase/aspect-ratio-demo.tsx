"use client"

import { AspectRatio } from "@/components/ui/aspect-ratio"

function AspectRatioDemo() {
  return (
    <div className="w-full max-w-sm">
      <AspectRatio ratio={16 / 9}>
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
          alt="Aurora"
          className="h-full w-full rounded-lg object-cover"
        />
      </AspectRatio>
    </div>
  )
}

export { AspectRatioDemo }
