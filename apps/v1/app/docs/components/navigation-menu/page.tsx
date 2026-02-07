"use client"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"

export default function NavigationMenuPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Navigation Menu</h1>
        <p className="text-lg text-muted-foreground">
          Navigation menu with dropdowns and links.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
        <CodeBlock code="npx popcn add navigation-menu" />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
        <ComponentPreview
          title="Simple Navigation"
          code={`<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Components</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink href="#" className="block p-4">
          Button
        </NavigationMenuLink>
        <NavigationMenuLink href="#" className="block p-4">
          Input
        </NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink href="#" className="px-4 py-2">
        Documentation
      </NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`}
        >
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink href="#" className="block p-4">
                    Button
                  </NavigationMenuLink>
                  <NavigationMenuLink href="#" className="block p-4">
                    Input
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#" className="px-4 py-2">
                  Documentation
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Components</h2>
        <PropsTable
          props={[
            {
              name: "NavigationMenu",
              type: "component",
              default: "-",
              description: "Main navigation menu container",
            },
            {
              name: "NavigationMenuList",
              type: "component",
              default: "-",
              description: "List of navigation items",
            },
            {
              name: "NavigationMenuItem",
              type: "component",
              default: "-",
              description: "Navigation menu item",
            },
            {
              name: "NavigationMenuTrigger",
              type: "component",
              default: "-",
              description: "Trigger for dropdown menu",
            },
            {
              name: "NavigationMenuContent",
              type: "component",
              default: "-",
              description: "Dropdown content",
            },
            {
              name: "NavigationMenuLink",
              type: "component",
              default: "-",
              description: "Navigation link",
            },
          ]}
        />
      </section>
    </div>
  )
}
