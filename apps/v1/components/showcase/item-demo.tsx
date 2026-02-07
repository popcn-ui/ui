"use client"

import * as React from "react"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { Button } from "@/components/ui/button"
import { User, Mail } from "lucide-react"

function ItemDemo() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <ItemGroup>
        <Item>
          <ItemMedia variant="icon">
            <User className="h-4 w-4" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>John Doe</ItemTitle>
            <ItemDescription>john@example.com</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button size="sm" variant="ghost">Edit</Button>
          </ItemActions>
        </Item>
        <Item>
          <ItemMedia variant="icon">
            <Mail className="h-4 w-4" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Jane Smith</ItemTitle>
            <ItemDescription>jane@example.com</ItemDescription>
          </ItemContent>
        </Item>
      </ItemGroup>
    </div>
  )
}

export { ItemDemo }
