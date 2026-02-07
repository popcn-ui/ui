"use client"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command"
import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { Sparkles, Zap } from "lucide-react"

export default function CommandPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Command</h1>
        <p className="text-lg text-muted-foreground">
          Command palette with searchable actions.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
        <CodeBlock code="npx popcn add command" />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Example</h2>
        <ComponentPreview
          title="Quick Actions"
          code={`<Command>
  <CommandInput placeholder="Search actions..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="General">
      <CommandItem>
        <Sparkles /> New project
        <CommandShortcut>⌘N</CommandShortcut>
      </CommandItem>
      <CommandItem>
        <Zap /> Quick deploy
        <CommandShortcut>⌘D</CommandShortcut>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`}
        >
          <Command className="rounded-lg border border-border/60">
            <CommandInput placeholder="Search actions..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="General">
                <CommandItem>
                  <Sparkles /> New project
                  <CommandShortcut>⌘N</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <Zap /> Quick deploy
                  <CommandShortcut>⌘D</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </ComponentPreview>
      </section>
    </div>
  )
}
