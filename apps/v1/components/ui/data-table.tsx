"use client"

import * as React from "react"
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface DataTableProps<TData> {
  data: TData[]
  columns: ColumnDef<TData>[]
  searchable?: boolean
  pagination?: boolean
  pageSize?: number
  className?: string
}

interface ColumnDef<TData> {
  accessorKey?: keyof TData | string
  header: string | React.ReactNode
  cell?: (row: TData) => React.ReactNode
  enableSorting?: boolean
}

function DataTable<TData extends Record<string, any>>({
  data,
  columns,
  searchable = false,
  pagination = true,
  pageSize = 10,
  className,
}: DataTableProps<TData>) {
  const [search, setSearch] = React.useState("")
  const [currentPage, setCurrentPage] = React.useState(1)
  const [sorting, setSorting] = React.useState<{
    column: string | null
    direction: "asc" | "desc" | null
  }>({ column: null, direction: null })

  const filteredData = React.useMemo(() => {
    let result = [...data]

    // Search filter
    if (searchable && search) {
      result = result.filter((row) =>
        Object.values(row).some((value) =>
          String(value).toLowerCase().includes(search.toLowerCase())
        )
      )
    }

    // Sorting
    if (sorting.column && sorting.direction) {
      result.sort((a, b) => {
        const aValue = a[sorting.column!]
        const bValue = b[sorting.column!]
        if (aValue < bValue) return sorting.direction === "asc" ? -1 : 1
        if (aValue > bValue) return sorting.direction === "asc" ? 1 : -1
        return 0
      })
    }

    return result
  }, [data, search, sorting, searchable])

  const paginatedData = React.useMemo(() => {
    if (!pagination) return filteredData
    const start = (currentPage - 1) * pageSize
    const end = start + pageSize
    return filteredData.slice(start, end)
  }, [filteredData, currentPage, pageSize, pagination])

  const totalPages = Math.ceil(filteredData.length / pageSize)

  const handleSort = (columnKey: string) => {
    setSorting((prev) => {
      if (prev.column === columnKey) {
        if (prev.direction === "asc") {
          return { column: columnKey, direction: "desc" }
        }
        if (prev.direction === "desc") {
          return { column: null, direction: null }
        }
      }
      return { column: columnKey, direction: "asc" }
    })
  }

  return (
    <div className={cn("space-y-4", className)}>
      {searchable && (
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex h-9 w-full rounded-md border border-border bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
      )}

      <div className="rounded-md border border-border/60">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column, index) => (
                <TableHead
                  key={index}
                  className={cn(
                    column.enableSorting && "cursor-pointer select-none hover:bg-muted/50"
                  )}
                  onClick={() =>
                    column.enableSorting && column.accessorKey
                      ? handleSort(String(column.accessorKey))
                      : undefined
                  }
                >
                  <div className="flex items-center gap-2">
                    {typeof column.header === "string" ? (
                      <span>{column.header}</span>
                    ) : (
                      column.header
                    )}
                    {column.enableSorting &&
                      sorting.column === String(column.accessorKey) && (
                        <span className="text-xs text-muted-foreground">
                          {sorting.direction === "asc" ? "↑" : "↓"}
                        </span>
                      )}
                  </div>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center text-muted-foreground"
                >
                  No results found.
                </TableCell>
              </TableRow>
            ) : (
              paginatedData.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {columns.map((column, colIndex) => (
                    <TableCell key={colIndex}>
                      {column.cell
                        ? column.cell(row)
                        : column.accessorKey
                          ? String(row[column.accessorKey] ?? "")
                          : ""}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {pagination && totalPages > 1 && (
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Showing {(currentPage - 1) * pageSize + 1} to{" "}
            {Math.min(currentPage * pageSize, filteredData.length)} of{" "}
            {filteredData.length} results
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              motion="none"
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
            >
              <ChevronsLeftIcon className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              motion="none"
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeftIcon className="h-4 w-4" />
            </Button>
            <div className="text-sm text-muted-foreground">
              Page {currentPage} of {totalPages}
            </div>
            <Button
              variant="ghost"
              size="sm"
              motion="none"
              onClick={() =>
                setCurrentPage((prev) => Math.min(totalPages, prev + 1))
              }
              disabled={currentPage === totalPages}
            >
              <ChevronRightIcon className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              motion="none"
              onClick={() => setCurrentPage(totalPages)}
              disabled={currentPage === totalPages}
            >
              <ChevronsRightIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export { DataTable, type DataTableProps, type ColumnDef }
