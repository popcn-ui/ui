"use client"

import * as React from "react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"

function CollapsibleDemo() {
  const [open, setOpen] = React.useState(false)

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="w-full max-w-sm">
      <CollapsibleTrigger asChild>
        <Button variant="glass" size="sm">
          {open ? "Hide details" : "Show details"}
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-3 text-sm text-muted-foreground">
        Aurora gradients stay smooth across themes.
      </CollapsibleContent>
    </Collapsible>
  )
}

export { CollapsibleDemo }
