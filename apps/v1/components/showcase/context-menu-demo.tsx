"use client"

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

function ContextMenuDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="glass rounded-lg p-4 text-sm">
        Right click
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuLabel>Actions</ContextMenuLabel>
        <ContextMenuItem>Duplicate</ContextMenuItem>
        <ContextMenuItem>Share</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem checked>Show status</ContextMenuCheckboxItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}

export { ContextMenuDemo }
