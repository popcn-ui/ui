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
import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"

export default function ContextMenuPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="mb-4 text-4xl font-bold">Context Menu</h1>
        <p className="text-muted-foreground text-lg">Right-click menus with groups and toggles.</p>
      </div>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Installation</h2>
        <CodeBlock code="npx popcn add context-menu" />
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">Example</h2>
        <ComponentPreview
          title="Right click the panel"
          code={`<ContextMenu>
  <ContextMenuTrigger className="glass rounded-lg p-6">
    Right click me
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuLabel>Actions</ContextMenuLabel>
    <ContextMenuItem>Duplicate</ContextMenuItem>
    <ContextMenuItem>Share</ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuCheckboxItem checked>
      Show status
    </ContextMenuCheckboxItem>
  </ContextMenuContent>
</ContextMenu>`}
        >
          <ContextMenu>
            <ContextMenuTrigger className="glass rounded-lg p-6 text-sm">
              Right click me
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuLabel>Actions</ContextMenuLabel>
              <ContextMenuItem>Duplicate</ContextMenuItem>
              <ContextMenuItem>Share</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuCheckboxItem checked>Show status</ContextMenuCheckboxItem>
            </ContextMenuContent>
          </ContextMenu>
        </ComponentPreview>
      </section>
    </div>
  )
}
