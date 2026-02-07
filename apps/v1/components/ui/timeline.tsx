"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const timelineVariants = cva("relative", {
  variants: {
    orientation: {
      vertical: "flex flex-col",
      horizontal: "flex flex-row",
    },
  },
  defaultVariants: {
    orientation: "vertical",
  },
})

interface TimelineProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof timelineVariants> {}

function Timeline({
  className,
  orientation,
  children,
  ...props
}: TimelineProps) {
  return (
    <div
      className={cn(timelineVariants({ orientation }), className)}
      {...props}
    >
      {children}
    </div>
  )
}

interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean
  completed?: boolean
}

function TimelineItem({
  className,
  active = false,
  completed = false,
  children,
  ...props
}: TimelineItemProps) {
  return (
    <div
      className={cn(
        "relative flex gap-4",
        "before:absolute before:left-[11px] before:top-8 before:h-full before:w-0.5",
        "before:bg-border/60",
        "last:before:hidden",
        completed && "before:bg-primary",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

function TimelineDot({
  className,
  active,
  completed,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  active?: boolean
  completed?: boolean
}) {
  return (
    <div
      className={cn(
        "relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2",
        completed
          ? "border-primary bg-primary"
          : active
            ? "border-primary bg-background"
            : "border-border/60 bg-background"
      )}
      {...props}
    >
      {completed && (
        <div className="h-2 w-2 rounded-full bg-primary-foreground" />
      )}
      {active && !completed && (
        <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
      )}
    </div>
  )
}

function TimelineContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex-1 pb-8", className)} {...props} />
  )
}

function TimelineTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-sm font-semibold text-foreground mb-1", className)}
      {...props}
    />
  )
}

function TimelineDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

function TimelineTime({
  className,
  ...props
}: React.HTMLAttributes<HTMLTimeElement>) {
  return (
    <time
      className={cn("text-xs text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  Timeline,
  TimelineItem,
  TimelineDot,
  TimelineContent,
  TimelineTitle,
  TimelineDescription,
  TimelineTime,
  timelineVariants,
  type TimelineProps,
  type TimelineItemProps,
}
