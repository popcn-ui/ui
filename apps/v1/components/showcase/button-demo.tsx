"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Zap, Star } from "lucide-react"

function ButtonDemo() {
  return (
    <div className="flex flex-col gap-4">
      {/* Variants */}
      <div className="flex flex-wrap items-center gap-3">
        <Button variant="aurora" motion="pop" size="sm">
          Aurora
        </Button>
        <Button variant="glass" motion="shine" size="sm">
          Glass
        </Button>
        <Button variant="ghost" motion="snap" size="sm">
          Ghost
        </Button>
      </div>
      {/* Motions */}
      <div className="flex flex-wrap items-center gap-3">
        <Button variant="aurora" motion="pop" size="sm" leftIcon={<Zap className="h-4 w-4" />}>
          Pop
        </Button>
        <Button variant="aurora" motion="float" size="sm" leftIcon={<Star className="h-4 w-4" />}>
          Float
        </Button>
        <Button variant="aurora" motion="shine" size="sm" leftIcon={<Sparkles className="h-4 w-4" />}>
          Shine
        </Button>
      </div>
      {/* With Icons */}
      <div className="flex flex-wrap items-center gap-3">
        <Button variant="glass" size="sm" rightIcon={<ArrowRight className="h-4 w-4" />}>
          Learn More
        </Button>
      </div>
    </div>
  )
}

export { ButtonDemo }
