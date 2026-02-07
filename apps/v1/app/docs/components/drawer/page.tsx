"use client"

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"

export default function DrawerPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Drawer</h1>
        <p className="text-lg text-muted-foreground">
          Slide-in panels for focused tasks.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
        <CodeBlock code="npx popcn add drawer" />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Example</h2>
        <ComponentPreview
          title="Bottom Drawer"
          code={`<Drawer>
  <DrawerTrigger asChild>
    <Button variant="aurora">Open drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Aurora settings</DrawerTitle>
      <DrawerDescription>Adjust theme presets.</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <Button variant="glass">Save</Button>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`}
        >
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="aurora">Open drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Aurora settings</DrawerTitle>
                <DrawerDescription>Adjust theme presets.</DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <Button variant="glass">Save</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </ComponentPreview>
      </section>
    </div>
  )
}
