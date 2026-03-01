"use client"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"

export default function TabsPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="mb-4 text-4xl font-bold">Tabs</h1>
        <p className="text-muted-foreground text-lg">
          Tabbed interface with aurora underline and glass pill variants.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Installation</h2>
        <CodeBlock code="npx popcn add tabs" />
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Basic Usage</h2>
        <ComponentPreview
          title="Default Tabs"
          code={`<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    <p>Account settings content here.</p>
  </TabsContent>
  <TabsContent value="password">
    <p>Password settings content here.</p>
  </TabsContent>
</Tabs>`}
        >
          <Tabs defaultValue="account" className="w-full max-w-md">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <p className="text-muted-foreground p-4 text-sm">Account settings content here.</p>
            </TabsContent>
            <TabsContent value="password">
              <p className="text-muted-foreground p-4 text-sm">Password settings content here.</p>
            </TabsContent>
          </Tabs>
        </ComponentPreview>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Variants</h2>
        <div className="space-y-6">
          <ComponentPreview
            title="Aurora Underline"
            code={`<Tabs defaultValue="tab1" variant="underline">
  <TabsList variant="underline">
    <TabsTrigger value="tab1" variant="underline">Overview</TabsTrigger>
    <TabsTrigger value="tab2" variant="underline">Analytics</TabsTrigger>
    <TabsTrigger value="tab3" variant="underline">Reports</TabsTrigger>
  </TabsList>
</Tabs>`}
          >
            <Tabs defaultValue="tab1" className="w-full max-w-md">
              <TabsList variant="underline">
                <TabsTrigger value="tab1" variant="underline">
                  Overview
                </TabsTrigger>
                <TabsTrigger value="tab2" variant="underline">
                  Analytics
                </TabsTrigger>
                <TabsTrigger value="tab3" variant="underline">
                  Reports
                </TabsTrigger>
              </TabsList>
              <TabsContent value="tab1">
                <p className="text-muted-foreground p-4 text-sm">Overview content</p>
              </TabsContent>
              <TabsContent value="tab2">
                <p className="text-muted-foreground p-4 text-sm">Analytics content</p>
              </TabsContent>
              <TabsContent value="tab3">
                <p className="text-muted-foreground p-4 text-sm">Reports content</p>
              </TabsContent>
            </Tabs>
          </ComponentPreview>

          <ComponentPreview
            title="Glass Pills"
            code={`<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Music</TabsTrigger>
    <TabsTrigger value="tab2">Podcasts</TabsTrigger>
    <TabsTrigger value="tab3">Live</TabsTrigger>
  </TabsList>
</Tabs>`}
          >
            <Tabs defaultValue="tab1" className="w-full max-w-md">
              <TabsList>
                <TabsTrigger value="tab1">Music</TabsTrigger>
                <TabsTrigger value="tab2">Podcasts</TabsTrigger>
                <TabsTrigger value="tab3">Live</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1">
                <p className="text-muted-foreground p-4 text-sm">Music content</p>
              </TabsContent>
              <TabsContent value="tab2">
                <p className="text-muted-foreground p-4 text-sm">Podcasts content</p>
              </TabsContent>
              <TabsContent value="tab3">
                <p className="text-muted-foreground p-4 text-sm">Live content</p>
              </TabsContent>
            </Tabs>
          </ComponentPreview>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">Props</h2>
        <PropsTable
          props={[
            {
              name: "variant",
              type: '"default" | "underline"',
              default: '"default"',
              description: "Visual style variant for TabsList and TabsTrigger",
            },
            {
              name: "defaultValue",
              type: "string",
              default: "-",
              description: "The value of the tab to be active by default",
            },
          ]}
        />
      </section>
    </div>
  )
}
