"use client"

import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { Button } from "@/components/ui/button"
import { User } from "lucide-react"

export default function ItemPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Item</h1>
        <p className="text-lg text-muted-foreground">
          List item component with media, content, and actions.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
        <CodeBlock code="npx popcn add item" />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
        <div className="space-y-6">
          <ComponentPreview
            title="Simple Item"
            code={`<Item>
  <ItemContent>
    <ItemTitle>Item Title</ItemTitle>
    <ItemDescription>Item description</ItemDescription>
  </ItemContent>
</Item>`}
          >
            <Item>
              <ItemContent>
                <ItemTitle>Item Title</ItemTitle>
                <ItemDescription>Item description</ItemDescription>
              </ItemContent>
            </Item>
          </ComponentPreview>

          <ComponentPreview
            title="With Media"
            code={`<Item>
  <ItemMedia variant="icon">
    <User className="h-4 w-4" />
  </ItemMedia>
  <ItemContent>
    <ItemTitle>User Name</ItemTitle>
    <ItemDescription>user@example.com</ItemDescription>
  </ItemContent>
</Item>`}
          >
            <Item>
              <ItemMedia variant="icon">
                <User className="h-4 w-4" />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>User Name</ItemTitle>
                <ItemDescription>user@example.com</ItemDescription>
              </ItemContent>
            </Item>
          </ComponentPreview>

          <ComponentPreview
            title="With Actions"
            code={`<Item>
  <ItemContent>
    <ItemTitle>Item Title</ItemTitle>
    <ItemDescription>Item description</ItemDescription>
  </ItemContent>
  <ItemActions>
    <Button size="sm">Action</Button>
  </ItemActions>
</Item>`}
          >
            <Item>
              <ItemContent>
                <ItemTitle>Item Title</ItemTitle>
                <ItemDescription>Item description</ItemDescription>
              </ItemContent>
              <ItemActions>
                <Button size="sm" variant="glass">Action</Button>
              </ItemActions>
            </Item>
          </ComponentPreview>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Components</h2>
        <PropsTable
          props={[
            {
              name: "Item",
              type: "component",
              default: "-",
              description: "Main item container",
            },
            {
              name: "ItemGroup",
              type: "component",
              default: "-",
              description: "Group of items",
            },
            {
              name: "ItemMedia",
              type: "component",
              default: "-",
              description: "Media section (icon/image)",
            },
            {
              name: "ItemContent",
              type: "component",
              default: "-",
              description: "Content section",
            },
            {
              name: "ItemTitle",
              type: "component",
              default: "-",
              description: "Item title",
            },
            {
              name: "ItemDescription",
              type: "component",
              default: "-",
              description: "Item description",
            },
            {
              name: "ItemActions",
              type: "component",
              default: "-",
              description: "Action buttons",
            },
          ]}
        />
      </section>
    </div>
  )
}
