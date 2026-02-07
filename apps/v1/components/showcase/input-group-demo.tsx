"use client"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Sparkles } from "lucide-react"

function InputGroupDemo() {
  return (
    <InputGroup>
      <InputGroupAddon>
        <Sparkles /> aurora.dev
      </InputGroupAddon>
      <InputGroupInput placeholder="Username" />
      <InputGroupButton variant="ghost" size="icon-xs">
        <Sparkles />
      </InputGroupButton>
    </InputGroup>
  )
}

export { InputGroupDemo }
