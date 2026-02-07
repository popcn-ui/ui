"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

function PageHeader({ className, children, ...props }: PageHeaderProps) {
  return (
    <section
      className={cn(
        "mx-auto flex max-w-4xl flex-col items-center gap-4 text-center",
        className
      )}
      {...props}
    >
      {children}
    </section>
  )
}

interface PageHeaderHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

function PageHeaderHeading({
  className,
  children,
  ...props
}: PageHeaderHeadingProps) {
  return (
    <h1
      className={cn(
        "text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  )
}

interface PageHeaderDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

function PageHeaderDescription({
  className,
  children,
  ...props
}: PageHeaderDescriptionProps) {
  return (
    <p
      className={cn(
        "max-w-2xl text-lg text-muted-foreground sm:text-xl",
        className
      )}
      {...props}
    >
      {children}
    </p>
  )
}

interface PageActionsProps extends React.HTMLAttributes<HTMLDivElement> {}

function PageActions({ className, children, ...props }: PageActionsProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4 sm:flex-row",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export { PageHeader, PageHeaderHeading, PageHeaderDescription, PageActions }
