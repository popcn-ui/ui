"use client"

import { Button } from "@/components/ui/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group"
import { Sparkles } from "lucide-react"

function ButtonGroupDemo() {
  return (
    <ButtonGroup>
      <Button variant="glass" size="sm" motion="none">
        Day
      </Button>
      <Button variant="glass" size="sm" motion="none">
        Week
      </Button>
      <Button variant="glass" size="sm" motion="none">
        Month
      </Button>
      <ButtonGroupSeparator />
      <ButtonGroupText>
        <Sparkles />
        Aurora
      </ButtonGroupText>
    </ButtonGroup>
  )
}

export { ButtonGroupDemo }
