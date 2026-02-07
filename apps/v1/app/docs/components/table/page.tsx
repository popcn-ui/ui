"use client"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"

export default function TablePage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Table</h1>
        <p className="text-lg text-muted-foreground">
          Table component with rows and cells.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
        <CodeBlock code="npx popcn add table" />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
        <ComponentPreview
          title="Simple Table"
          code={`<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Role</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>John Doe</TableCell>
      <TableCell>Active</TableCell>
      <TableCell>Admin</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Jane Smith</TableCell>
      <TableCell>Active</TableCell>
      <TableCell>User</TableCell>
    </TableRow>
  </TableBody>
</Table>`}
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Role</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>John Doe</TableCell>
                <TableCell>Active</TableCell>
                <TableCell>Admin</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Jane Smith</TableCell>
                <TableCell>Active</TableCell>
                <TableCell>User</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </ComponentPreview>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">With Footer</h2>
        <ComponentPreview
          title="Table with Footer"
          code={`<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Item</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Item 1</TableCell>
      <TableCell className="text-right">$100</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Item 2</TableCell>
      <TableCell className="text-right">$200</TableCell>
    </TableRow>
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell>Total</TableCell>
      <TableCell className="text-right">$300</TableCell>
    </TableRow>
  </TableFooter>
</Table>`}
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Item</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Item 1</TableCell>
                <TableCell className="text-right">$100</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Item 2</TableCell>
                <TableCell className="text-right">$200</TableCell>
              </TableRow>
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell>Total</TableCell>
                <TableCell className="text-right">$300</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Components</h2>
        <PropsTable
          props={[
            {
              name: "Table",
              type: "component",
              default: "-",
              description: "Main table container",
            },
            {
              name: "TableHeader",
              type: "component",
              default: "-",
              description: "Table header section",
            },
            {
              name: "TableBody",
              type: "component",
              default: "-",
              description: "Table body section",
            },
            {
              name: "TableFooter",
              type: "component",
              default: "-",
              description: "Table footer section",
            },
            {
              name: "TableRow",
              type: "component",
              default: "-",
              description: "Table row",
            },
            {
              name: "TableHead",
              type: "component",
              default: "-",
              description: "Table header cell",
            },
            {
              name: "TableCell",
              type: "component",
              default: "-",
              description: "Table cell",
            },
          ]}
        />
      </section>
    </div>
  )
}
