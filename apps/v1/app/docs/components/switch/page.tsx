"use client"

import { useState } from "react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"

export default function SwitchPage() {
  const [enabled, setEnabled] = useState(false)

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Switch</h1>
        <p className="text-lg text-muted-foreground">
          Toggle switch with aurora glow effect when enabled.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
        <CodeBlock code="npx popcn add switch" />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
        <div className="space-y-6">
          <ComponentPreview
            title="Default"
            code={`<Switch />`}
          >
            <Switch />
          </ComponentPreview>

          <ComponentPreview
            title="With Label"
            code={`<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>`}
          >
            <div className="flex items-center space-x-2">
              <Switch id="airplane-mode" />
              <Label htmlFor="airplane-mode">Airplane Mode</Label>
            </div>
          </ComponentPreview>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">States</h2>
        <div className="space-y-6">
          <ComponentPreview
            title="Checked"
            code={`<Switch checked />`}
          >
            <Switch checked />
          </ComponentPreview>

          <ComponentPreview
            title="Disabled"
            code={`<div className="flex gap-4">
  <Switch disabled />
  <Switch disabled checked />
</div>`}
          >
            <div className="flex gap-4">
              <Switch disabled />
              <Switch disabled checked />
            </div>
          </ComponentPreview>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Controlled</h2>
        <ComponentPreview
          title="Controlled Switch"
          code={`const [enabled, setEnabled] = useState(false)

<div className="flex items-center space-x-2">
  <Switch
    id="notifications"
    checked={enabled}
    onCheckedChange={setEnabled}
  />
  <Label htmlFor="notifications">
    Notifications {enabled ? "On" : "Off"}
  </Label>
</div>`}
        >
          <div className="flex items-center space-x-2">
            <Switch
              id="notifications"
              checked={enabled}
              onCheckedChange={setEnabled}
            />
            <Label htmlFor="notifications">
              Notifications {enabled ? "On" : "Off"}
            </Label>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Props</h2>
        <PropsTable
          props={[
            {
              name: "checked",
              type: "boolean",
              default: "-",
              description: "Controlled checked state",
            },
            {
              name: "onCheckedChange",
              type: "(checked: boolean) => void",
              default: "-",
              description: "Callback when checked state changes",
            },
            {
              name: "disabled",
              type: "boolean",
              default: "false",
              description: "Disable the switch",
            },
          ]}
        />
      </section>
    </div>
  )
}
