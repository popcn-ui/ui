"use client"

import { DataTable, type ColumnDef } from "@/components/ui/data-table"

const data = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "User" },
  { id: 4, name: "Alice Williams", email: "alice@example.com", role: "Admin" },
  { id: 5, name: "Charlie Brown", email: "charlie@example.com", role: "User" },
]

const columns: ColumnDef<typeof data[0]>[] = [
  {
    accessorKey: "name",
    header: "Name",
    enableSorting: true,
  },
  {
    accessorKey: "email",
    header: "Email",
    enableSorting: true,
  },
  {
    accessorKey: "role",
    header: "Role",
    enableSorting: true,
  },
]

export function DataTableDemo() {
  return (
    <div className="w-full">
      <DataTable data={data} columns={columns} searchable pagination pageSize={3} />
    </div>
  )
}
