"use client"

import { CodeBlock } from "@/components/ui/code-block"

const exampleCode = `import { Button } from "@/components/ui/button"

export function MyComponent() {
  return (
    <Button variant="aurora" size="lg">
      Click me
    </Button>
  )
}`

export function CodeBlockDemo() {
  return (
    <div className="w-full space-y-4">
      <CodeBlock code={exampleCode} language="tsx" filename="my-component.tsx" showLineNumbers />
      <CodeBlock code="npm install popcn-ui" language="bash" />
    </div>
  )
}
