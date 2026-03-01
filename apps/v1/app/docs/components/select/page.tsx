"use client"

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"

export default function SelectPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="mb-4 text-4xl font-bold">Select</h1>
        <p className="text-muted-foreground text-lg">
          Dropdown select with glass panel and aurora gradient effects.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Installation</h2>
        <CodeBlock code="npx popcn add select" />
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Basic Usage</h2>
        <ComponentPreview
          title="Simple Select"
          code={`<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="orange">Orange</SelectItem>
  </SelectContent>
</Select>`}
        >
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="orange">Orange</SelectItem>
            </SelectContent>
          </Select>
        </ComponentPreview>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">With Label</h2>
        <ComponentPreview
          title="Form Field"
          code={`<div className="grid gap-2">
  <Label htmlFor="theme">Theme</Label>
  <Select>
    <SelectTrigger id="theme" className="w-[180px]">
      <SelectValue placeholder="Select theme" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="cosmic">Cosmic</SelectItem>
      <SelectItem value="sunset">Sunset</SelectItem>
      <SelectItem value="neon">Neon</SelectItem>
    </SelectContent>
  </Select>
</div>`}
        >
          <div className="grid gap-2">
            <Label htmlFor="theme">Theme</Label>
            <Select>
              <SelectTrigger id="theme" className="w-[180px]">
                <SelectValue placeholder="Select theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cosmic">Cosmic</SelectItem>
                <SelectItem value="sunset">Sunset</SelectItem>
                <SelectItem value="neon">Neon</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </ComponentPreview>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">With Groups</h2>
        <ComponentPreview
          title="Grouped Options"
          code={`<Select>
  <SelectTrigger className="w-[200px]">
    <SelectValue placeholder="Select timezone" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>North America</SelectLabel>
      <SelectItem value="est">Eastern (EST)</SelectItem>
      <SelectItem value="cst">Central (CST)</SelectItem>
      <SelectItem value="pst">Pacific (PST)</SelectItem>
    </SelectGroup>
    <SelectGroup>
      <SelectLabel>Europe</SelectLabel>
      <SelectItem value="gmt">GMT</SelectItem>
      <SelectItem value="cet">Central European (CET)</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`}
        >
          <Select>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select timezone" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>North America</SelectLabel>
                <SelectItem value="est">Eastern (EST)</SelectItem>
                <SelectItem value="cst">Central (CST)</SelectItem>
                <SelectItem value="pst">Pacific (PST)</SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Europe</SelectLabel>
                <SelectItem value="gmt">GMT</SelectItem>
                <SelectItem value="cet">Central European (CET)</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">Props</h2>
        <PropsTable
          props={[
            {
              name: "value",
              type: "string",
              default: "-",
              description: "Controlled value",
            },
            {
              name: "onValueChange",
              type: "(value: string) => void",
              default: "-",
              description: "Callback when value changes",
            },
            {
              name: "disabled",
              type: "boolean",
              default: "false",
              description: "Disable the select",
            },
          ]}
        />
      </section>
    </div>
  )
}
