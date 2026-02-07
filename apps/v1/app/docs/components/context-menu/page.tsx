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
        <h1 className="text-4xl font-bold mb-4">Context Menu</h1>
        <p className="text-lg text-muted-foreground">
          Right-click menus with groups and toggles.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
        <CodeBlock code="npx popcn add context-menu" />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Example</h2>
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
              <ContextMenuCheckboxItem checked>
                Show status
              </ContextMenuCheckboxItem>
            </ContextMenuContent>
          </ContextMenu>
        </ComponentPreview>
      </section>
    </div>
  )
}
