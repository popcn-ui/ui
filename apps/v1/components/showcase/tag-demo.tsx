"use client"

import { useState } from "react"
import { Tag } from "@/components/ui/tag"

const initialTags = [
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
]

export function TagDemo() {
  const [tags, setTags] = useState(initialTags)

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-medium">Default Tags</label>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag
              key={tag}
              removable
              onRemove={() => removeTag(tag)}
            >
              {tag}
            </Tag>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Variants</label>
        <div className="flex flex-wrap gap-2">
          <Tag variant="default">Default</Tag>
          <Tag variant="aurora">Aurora</Tag>
          <Tag variant="outline">Outline</Tag>
          <Tag variant="secondary">Secondary</Tag>
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Sizes</label>
        <div className="flex flex-wrap items-center gap-2">
          <Tag size="sm">Small</Tag>
          <Tag size="md">Medium</Tag>
          <Tag size="lg">Large</Tag>
        </div>
      </div>
    </div>
  )
}
