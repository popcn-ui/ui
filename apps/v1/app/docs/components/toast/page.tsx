"use client"

import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"

export default function ToastPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Toast</h1>
        <p className="text-lg text-muted-foreground">
          Toast notifications using Sonner with glass styling.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
        <CodeBlock code="npx popcn add sonner" />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Setup</h2>
        <p className="text-muted-foreground mb-4">
          Add the Toaster component to your root layout.
        </p>
        <CodeBlock
          code={`import { Toaster } from "@/components/ui/sonner"

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}`}
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
        <div className="space-y-6">
          <ComponentPreview
            title="Default Toast"
            code={`import { toast } from "sonner"

<Button onClick={() => toast("Event has been created")}>
  Show Toast
</Button>`}
          >
            <Button
              variant="glass"
              onClick={() => toast("Event has been created")}
            >
              Show Toast
            </Button>
          </ComponentPreview>

          <ComponentPreview
            title="With Description"
            code={`toast("Event created", {
  description: "Sunday, December 3, 2023 at 9:00 AM",
})`}
          >
            <Button
              variant="glass"
              onClick={() =>
                toast("Event created", {
                  description: "Sunday, December 3, 2023 at 9:00 AM",
                })
              }
            >
              With Description
            </Button>
          </ComponentPreview>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Variants</h2>
        <div className="space-y-6">
          <ComponentPreview
            title="Success"
            code={`toast.success("Successfully saved!")`}
          >
            <Button
              variant="glass"
              onClick={() => toast.success("Successfully saved!")}
            >
              Success Toast
            </Button>
          </ComponentPreview>

          <ComponentPreview
            title="Error"
            code={`toast.error("Something went wrong")`}
          >
            <Button
              variant="glass"
              onClick={() => toast.error("Something went wrong")}
            >
              Error Toast
            </Button>
          </ComponentPreview>

          <ComponentPreview
            title="Warning"
            code={`toast.warning("Please check your input")`}
          >
            <Button
              variant="glass"
              onClick={() => toast.warning("Please check your input")}
            >
              Warning Toast
            </Button>
          </ComponentPreview>

          <ComponentPreview
            title="Info"
            code={`toast.info("New update available")`}
          >
            <Button
              variant="glass"
              onClick={() => toast.info("New update available")}
            >
              Info Toast
            </Button>
          </ComponentPreview>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">With Action</h2>
        <ComponentPreview
          title="Action Button"
          code={`toast("File deleted", {
  action: {
    label: "Undo",
    onClick: () => console.log("Undo clicked"),
  },
})`}
        >
          <Button
            variant="aurora"
            onClick={() =>
              toast("File deleted", {
                action: {
                  label: "Undo",
                  onClick: () => toast.success("Undo successful"),
                },
              })
            }
          >
            With Action
          </Button>
        </ComponentPreview>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Promise</h2>
        <ComponentPreview
          title="Loading State"
          code={`toast.promise(
  new Promise((resolve) => setTimeout(resolve, 2000)),
  {
    loading: "Loading...",
    success: "Data loaded",
    error: "Error loading data",
  }
)`}
        >
          <Button
            variant="aurora"
            onClick={() =>
              toast.promise(
                new Promise((resolve) => setTimeout(resolve, 2000)),
                {
                  loading: "Loading...",
                  success: "Data loaded",
                  error: "Error loading data",
                }
              )
            }
          >
            Promise Toast
          </Button>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">API</h2>
        <PropsTable
          props={[
            {
              name: "toast(message)",
              type: "function",
              default: "-",
              description: "Show a default toast",
            },
            {
              name: "toast.success()",
              type: "function",
              default: "-",
              description: "Show a success toast",
            },
            {
              name: "toast.error()",
              type: "function",
              default: "-",
              description: "Show an error toast",
            },
            {
              name: "toast.promise()",
              type: "function",
              default: "-",
              description: "Show a toast with loading/success/error states",
            },
          ]}
        />
      </section>
    </div>
  )
}
