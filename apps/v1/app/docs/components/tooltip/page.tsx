"use client"

import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"

export default function TooltipPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="mb-4 text-4xl font-bold">Tooltip</h1>
        <p className="text-muted-foreground text-lg">
          Popup hint with glass panel effect. Built on Radix UI Tooltip.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Installation</h2>
        <CodeBlock code="npx popcn add tooltip" />
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Basic Usage</h2>
        <ComponentPreview
          title="Simple Tooltip"
          code={`<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="glass">Hover me</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>This is a tooltip</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`}
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="glass">Hover me</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>This is a tooltip</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </ComponentPreview>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Positions</h2>
        <ComponentPreview
          title="Different Sides"
          code={`<div className="flex gap-4">
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="ghost">Top</Button>
    </TooltipTrigger>
    <TooltipContent side="top">Tooltip on top</TooltipContent>
  </Tooltip>

  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="ghost">Right</Button>
    </TooltipTrigger>
    <TooltipContent side="right">Tooltip on right</TooltipContent>
  </Tooltip>

  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="ghost">Bottom</Button>
    </TooltipTrigger>
    <TooltipContent side="bottom">Tooltip on bottom</TooltipContent>
  </Tooltip>

  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="ghost">Left</Button>
    </TooltipTrigger>
    <TooltipContent side="left">Tooltip on left</TooltipContent>
  </Tooltip>
</div>`}
        >
          <TooltipProvider>
            <div className="flex gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost">Top</Button>
                </TooltipTrigger>
                <TooltipContent side="top">Tooltip on top</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost">Right</Button>
                </TooltipTrigger>
                <TooltipContent side="right">Tooltip on right</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost">Bottom</Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">Tooltip on bottom</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost">Left</Button>
                </TooltipTrigger>
                <TooltipContent side="left">Tooltip on left</TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </ComponentPreview>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">With Delay</h2>
        <ComponentPreview
          title="Custom Delay"
          code={`<TooltipProvider delayDuration={500}>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="aurora">Delayed tooltip</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Shows after 500ms delay</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`}
        >
          <TooltipProvider delayDuration={500}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="aurora">Delayed tooltip</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Shows after 500ms delay</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">Props</h2>
        <PropsTable
          props={[
            {
              name: "side",
              type: '"top" | "right" | "bottom" | "left"',
              default: '"top"',
              description: "The preferred side of the trigger to render against",
            },
            {
              name: "sideOffset",
              type: "number",
              default: "4",
              description: "The distance in pixels from the trigger",
            },
            {
              name: "delayDuration",
              type: "number",
              default: "700",
              description: "The duration in ms before the tooltip appears (on TooltipProvider)",
            },
          ]}
        />
      </section>
    </div>
  )
}
