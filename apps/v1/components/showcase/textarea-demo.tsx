"use client"

import * as React from "react"
import { Textarea } from "@/components/ui/textarea"

function TextareaDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <Textarea placeholder="Enter your message..." />
      <Textarea placeholder="Enter your message..." rows={4} />
    </div>
  )
}

export { TextareaDemo }
