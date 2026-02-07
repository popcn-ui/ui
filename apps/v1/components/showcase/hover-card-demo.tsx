"use client"

import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger className="underline"> @aurora </HoverCardTrigger>
      <HoverCardContent>
        <p className="font-medium">AuroraPop</p>
        <p className="text-sm text-muted-foreground">Gradient-driven UI toolkit.</p>
      </HoverCardContent>
    </HoverCard>
  )
}

export { HoverCardDemo }
