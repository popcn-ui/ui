"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Zap } from "lucide-react"

function BadgeDemo() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="aurora">
          <Sparkles className="mr-1 h-3 w-3" />
          Aurora
        </Badge>
        <Badge variant="aurora" glow>
          <Zap className="mr-1 h-3 w-3" />
          Glow
        </Badge>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="glass">Glass</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="secondary">Secondary</Badge>
      </div>
    </div>
  )
}

export { BadgeDemo }
