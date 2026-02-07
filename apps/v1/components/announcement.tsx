"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface AnnouncementProps {
  className?: string
  children?: React.ReactNode
  href?: string
  icon?: React.ReactNode
  showArrow?: boolean
}

function Announcement({
  className,
  children,
  href,
  icon,
  showArrow = true,
}: AnnouncementProps) {
  const content = (
    <>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
      )}
    </>
  )

  const sharedClassName = cn(
    "group inline-flex items-center gap-2",
    "rounded-full border border-border/50 bg-muted/30 backdrop-blur-sm",
    "px-4 py-1.5 text-sm",
    "transition-colors hover:bg-muted/50 hover:border-border",
    className
  )

  if (href) {
    return (
      <Link href={href} className={sharedClassName}>
        {content}
      </Link>
    )
  }

  return (
    <div className={sharedClassName} role="status">
      {content}
    </div>
  )
}

export { Announcement }
