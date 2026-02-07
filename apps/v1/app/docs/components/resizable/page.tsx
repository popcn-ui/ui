"use client"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"

export default function ResizablePage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Resizable</h1>
        <p className="text-lg text-muted-foreground">
          Resizable panel component.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
        <CodeBlock code="npx popcn add resizable" />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
        <ComponentPreview
          title="Horizontal Panels"
          code={`<ResizablePanelGroup orientation="horizontal" className="max-w-md rounded-lg border">
  <ResizablePanel defaultSize={50}>
    <div className="flex h-full items-center justify-center p-6">
      <span className="font-semibold">One</span>
    </div>
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={50}>
    <div className="flex h-full items-center justify-center p-6">
      <span className="font-semibold">Two</span>
    </div>
  </ResizablePanel>
</ResizablePanelGroup>`}
        >
          <ResizablePanelGroup orientation="horizontal" className="max-w-md rounded-lg border h-48">
            <ResizablePanel defaultSize={50}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">One</span>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={50}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Two</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Components</h2>
        <PropsTable
          props={[
            {
              name: "ResizablePanelGroup",
              type: "component",
              default: "-",
              description: "Container for resizable panels",
            },
            {
              name: "ResizablePanel",
              type: "component",
              default: "-",
              description: "Resizable panel",
            },
            {
              name: "ResizableHandle",
              type: "component",
              default: "-",
              description: "Handle for resizing",
            },
          ]}
        />
      </section>
    </div>
  )
}
