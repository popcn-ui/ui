"use client"

import * as React from "react"
import { ChevronRightIcon, FolderIcon, FileIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

interface TreeNode {
  id: string
  label: string
  icon?: React.ReactNode
  children?: TreeNode[]
  disabled?: boolean
  data?: Record<string, any>
}

interface TreeViewProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onSelect" | "onToggle"> {
  data: TreeNode[]
  defaultExpanded?: string[]
  defaultSelected?: string
  onSelect?: (nodeId: string) => void
  onToggle?: (nodeId: string, expanded: boolean) => void
  renderNode?: (node: TreeNode) => React.ReactNode
}

function TreeView({
  data,
  defaultExpanded = [],
  defaultSelected,
  onSelect,
  onToggle,
  renderNode,
  className,
  ...props
}: TreeViewProps) {
  const [expanded, setExpanded] = React.useState<Set<string>>(
    new Set(defaultExpanded)
  )
  const [selected, setSelected] = React.useState<string | undefined>(
    defaultSelected
  )

  const handleToggle = (nodeId: string) => {
    const newExpanded = new Set(expanded)
    const isExpanded = expanded.has(nodeId)

    if (isExpanded) {
      newExpanded.delete(nodeId)
    } else {
      newExpanded.add(nodeId)
    }

    setExpanded(newExpanded)
    onToggle?.(nodeId, !isExpanded)
  }

  const handleSelect = (nodeId: string) => {
    setSelected(nodeId)
    onSelect?.(nodeId)
  }

  const renderTreeNode = (node: TreeNode, level: number = 0) => {
    const hasChildren = node.children && node.children.length > 0
    const isExpanded = expanded.has(node.id)
    const isSelected = selected === node.id

    if (renderNode) {
      return renderNode(node)
    }

    if (hasChildren) {
      return (
        <Collapsible
          key={node.id}
          open={isExpanded}
          onOpenChange={() => handleToggle(node.id)}
        >
          <div
            className={cn(
              "flex items-center gap-2 px-2 py-1.5 rounded-md text-sm transition-colors",
              "hover:bg-muted/50",
              isSelected && "bg-primary/10 text-primary",
              node.disabled && "opacity-50 cursor-not-allowed",
              !node.disabled && "cursor-pointer"
            )}
            style={{ paddingLeft: `${level * 1.5 + 0.5}rem` }}
            onClick={() => !node.disabled && handleSelect(node.id)}
          >
            <CollapsibleTrigger className="shrink-0" asChild>
              <button
                type="button"
                className="shrink-0"
                onClick={(e) => {
                  e.stopPropagation()
                  handleToggle(node.id)
                }}
              >
                <ChevronRightIcon
                  className={cn(
                    "h-4 w-4 transition-transform",
                    isExpanded && "rotate-90"
                  )}
                />
              </button>
            </CollapsibleTrigger>
            {node.icon || (
              <FolderIcon className="h-4 w-4 text-muted-foreground" />
            )}
            <span className="flex-1">{node.label}</span>
          </div>
          <CollapsibleContent className="mt-1">
            {node.children?.map((child) => renderTreeNode(child, level + 1))}
          </CollapsibleContent>
        </Collapsible>
      )
    }

    return (
      <div
        key={node.id}
        className={cn(
          "flex items-center gap-2 px-2 py-1.5 rounded-md text-sm transition-colors",
          "hover:bg-muted/50",
          isSelected && "bg-primary/10 text-primary",
          node.disabled && "opacity-50 cursor-not-allowed",
          !node.disabled && "cursor-pointer"
        )}
        style={{ paddingLeft: `${level * 1.5 + 0.5}rem` }}
        onClick={() => !node.disabled && handleSelect(node.id)}
      >
        <div className="w-4 shrink-0" />
        {node.icon || (
          <FileIcon className="h-4 w-4 text-muted-foreground" />
        )}
        <span className="flex-1">{node.label}</span>
      </div>
    )
  }

  return (
    <div
      className={cn(
        "rounded-lg border border-border/60 bg-background/60 backdrop-blur-md p-2",
        className
      )}
      {...props}
    >
      {data.map((node) => renderTreeNode(node))}
    </div>
  )
}

export { TreeView, type TreeViewProps, type TreeNode }
