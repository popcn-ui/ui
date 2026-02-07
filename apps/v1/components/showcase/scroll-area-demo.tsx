"use client"

import * as React from "react"
import { ScrollArea } from "@/components/ui/scroll-area"

function ScrollAreaDemo() {
  return (
    <div className="w-full max-w-sm">
      <ScrollArea className="h-48 w-full rounded-md border p-4">
        <div className="space-y-2">
          {Array.from({ length: 15 }, (_, i) => (
            <div key={i} className="text-sm">
              Item {i + 1}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}

export { ScrollAreaDemo }
