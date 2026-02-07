"use client"

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"

export default function AvatarPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Avatar</h1>
        <p className="text-lg text-muted-foreground">
          User avatar with image and fallback support.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
        <CodeBlock code="npx popcn add avatar" />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
        <div className="space-y-6">
          <ComponentPreview
            title="With Image"
            code={`<Avatar>
  <AvatarImage src="/avatars/01.svg" alt="User" />
  <AvatarFallback>AP</AvatarFallback>
</Avatar>`}
          >
            <Avatar>
              <AvatarImage src="/avatars/01.svg" alt="User" />
              <AvatarFallback>AP</AvatarFallback>
            </Avatar>
          </ComponentPreview>

          <ComponentPreview
            title="Fallback Only"
            code={`<Avatar>
  <AvatarFallback>JD</AvatarFallback>
</Avatar>`}
          >
            <Avatar>
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </ComponentPreview>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">With Accent Ring</h2>
        <ComponentPreview
          title="Accent Ring"
          code={`<Avatar className="ring-2 ring-primary/30 ring-offset-2 ring-offset-background">
  <AvatarImage src="/avatars/01.svg" alt="User" />
  <AvatarFallback>AP</AvatarFallback>
</Avatar>`}
        >
          <Avatar className="ring-2 ring-primary/30 ring-offset-2 ring-offset-background">
            <AvatarImage src="/avatars/01.svg" alt="User" />
            <AvatarFallback>AP</AvatarFallback>
          </Avatar>
        </ComponentPreview>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Sizes</h2>
        <ComponentPreview
          title="Different Sizes"
          code={`<div className="flex items-center gap-4">
  <Avatar className="h-8 w-8">
    <AvatarFallback>SM</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarFallback>MD</AvatarFallback>
  </Avatar>
  <Avatar className="h-14 w-14">
    <AvatarFallback>LG</AvatarFallback>
  </Avatar>
</div>`}
        >
          <div className="flex items-center gap-4">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="text-xs">SM</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>MD</AvatarFallback>
            </Avatar>
            <Avatar className="h-14 w-14">
              <AvatarFallback>LG</AvatarFallback>
            </Avatar>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Props</h2>
        <PropsTable
          props={[
            {
              name: "className",
              type: "string",
              default: "undefined",
              description: "Use utility classes (e.g. ring) to customize appearance",
            },
          ]}
        />
      </section>
    </div>
  )
}
