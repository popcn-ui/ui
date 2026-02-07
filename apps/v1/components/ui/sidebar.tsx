"use client"

import * as React from "react"
import { PanelLeftIcon, XIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent } from "@/components/ui/sheet"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  side?: "left" | "right"
  variant?: "default" | "inset"
  collapsible?: "offcanvas" | "icon" | "none"
}

function Sidebar({
  children,
  className,
  open: controlledOpen,
  onOpenChange,
  side = "left",
  variant = "default",
  collapsible = "offcanvas",
  ...props
}: SidebarProps) {
  const [internalOpen, setInternalOpen] = React.useState(true)
  const open = controlledOpen ?? internalOpen
  const setOpen = onOpenChange ?? setInternalOpen

  if (collapsible === "offcanvas") {
    return (
      <>
        <Button
          variant="ghost"
          size="sm"
          motion="none"
          onClick={() => setOpen(true)}
          className="fixed left-4 top-4 z-50"
        >
          <PanelLeftIcon className="h-4 w-4" />
        </Button>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetContent
            side={side}
            className={cn(
              "w-64 p-0",
              variant === "inset" && "bg-muted/50",
              className
            )}
          >
            <div className="flex h-full flex-col">{children}</div>
          </SheetContent>
        </Sheet>
      </>
    )
  }

  return (
    <aside
      className={cn(
        "flex h-full flex-col border-r border-border/60 bg-background",
        side === "right" && "border-l border-r-0",
        variant === "inset" && "bg-muted/50",
        !open && collapsible === "icon" && "w-16",
        open && collapsible === "icon" && "w-64",
        className
      )}
      {...props}
    >
      {children}
    </aside>
  )
}

function SidebarHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex h-16 items-center border-b border-border/60 px-4", className)}
      {...props}
    >
      {children}
    </div>
  )
}

function SidebarContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex-1 overflow-y-auto p-4", className)}
      {...props}
    >
      {children}
    </div>
  )
}

function SidebarFooter({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex h-16 items-center border-t border-border/60 px-4", className)}
      {...props}
    >
      {children}
    </div>
  )
}

function SidebarGroup({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("space-y-2", className)} {...props}>
      {children}
    </div>
  )
}

function SidebarGroupLabel({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "px-2 py-1 text-xs font-semibold text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

function SidebarGroupContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("space-y-1", className)} {...props}>
      {children}
    </div>
  )
}

function SidebarMenuItem({
  className,
  children,
  active,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { active?: boolean }) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors",
        active
          ? "bg-primary/10 text-primary"
          : "text-foreground hover:bg-muted/50",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

function SidebarMenuButton({
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-muted/50",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

function SidebarTrigger({
  className,
  onClick,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <Button
      variant="ghost"
      size="sm"
      motion="none"
      className={cn("h-8 w-8 p-0", className)}
      onClick={onClick}
      {...props}
    >
      <PanelLeftIcon className="h-4 w-4" />
    </Button>
  )
}

export {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  type SidebarProps,
}
