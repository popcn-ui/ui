"use client"

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"

export default function CardPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="mb-4 text-4xl font-bold">Card</h1>
        <p className="text-muted-foreground text-lg">
          Card container with glass, aurora-border, and solid variants.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Installation</h2>
        <CodeBlock code="npx popcn add card" />
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Variants</h2>
        <div className="space-y-6">
          <ComponentPreview
            title="Glass (default)"
            code={`<Card variant="glass">
  <CardHeader>
    <CardTitle>Glass Card</CardTitle>
    <CardDescription>With glassmorphism effect</CardDescription>
  </CardHeader>
  <CardContent>Card content goes here.</CardContent>
</Card>`}
          >
            <Card variant="glass" className="w-full max-w-sm">
              <CardHeader>
                <CardTitle>Glass Card</CardTitle>
                <CardDescription>With glassmorphism effect</CardDescription>
              </CardHeader>
              <CardContent>Card content goes here.</CardContent>
            </Card>
          </ComponentPreview>

          <ComponentPreview
            title="Aurora"
            code={`<Card variant="aurora">
  <CardHeader>
    <CardTitle>Aurora Card</CardTitle>
    <CardDescription>With gradient border</CardDescription>
  </CardHeader>
  <CardContent>Card content goes here.</CardContent>
</Card>`}
          >
            <Card variant="aurora" className="w-full max-w-sm">
              <CardHeader>
                <CardTitle>Aurora Card</CardTitle>
                <CardDescription>With gradient border</CardDescription>
              </CardHeader>
              <CardContent>Card content goes here.</CardContent>
            </Card>
          </ComponentPreview>

          <ComponentPreview
            title="With Glow"
            code={`<Card variant="glass" glow>
  <CardHeader>
    <CardTitle>Glow Effect</CardTitle>
  </CardHeader>
  <CardContent>Hover to see the glow.</CardContent>
</Card>`}
          >
            <Card variant="glass" glow className="w-full max-w-sm">
              <CardHeader>
                <CardTitle>Glow Effect</CardTitle>
              </CardHeader>
              <CardContent>Hover to see the glow.</CardContent>
            </Card>
          </ComponentPreview>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">With Footer</h2>
        <ComponentPreview
          title="Full Card"
          code={`<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description here</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Main content of the card.</p>
  </CardContent>
  <CardFooter>
    <Button variant="aurora">Action</Button>
  </CardFooter>
</Card>`}
        >
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card description here</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Main content of the card.</p>
            </CardContent>
            <CardFooter>
              <Button variant="aurora" size="sm">
                Action
              </Button>
            </CardFooter>
          </Card>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">Props</h2>
        <PropsTable
          props={[
            {
              name: "variant",
              type: '"glass" | "aurora" | "solid"',
              default: '"glass"',
              description: "Visual style variant",
            },
            {
              name: "glow",
              type: "boolean",
              default: "false",
              description: "Enable glow effect on hover",
            },
          ]}
        />
      </section>
    </div>
  )
}
