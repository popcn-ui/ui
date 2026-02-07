"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const notificationBadgeVariants = cva(
  [
    "inline-flex items-center justify-center",
    "rounded-full font-semibold text-xs",
    "min-w-[1.25rem] h-5 px-1.5",
    "bg-primary text-primary-foreground",
    "shadow-sm",
  ],
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        aurora: "bg-aurora text-primary-foreground shadow-[0_0_8px_rgba(var(--ap-primary),0.4)]",
        destructive: "bg-destructive text-destructive-foreground",
        outline: "border border-primary bg-transparent text-primary",
      },
      size: {
        sm: "h-4 min-w-[1rem] px-1 text-[0.625rem]",
        md: "h-5 min-w-[1.25rem] px-1.5 text-xs",
        lg: "h-6 min-w-[1.5rem] px-2 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

interface NotificationBadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof notificationBadgeVariants> {
  count?: number
  maxCount?: number
  showZero?: boolean
  dot?: boolean
}

function NotificationBadge({
  className,
  variant,
  size,
  count,
  maxCount = 99,
  showZero = false,
  dot = false,
  ...props
}: NotificationBadgeProps) {
  const displayCount = React.useMemo(() => {
    if (dot) return null
    if (count === undefined || count === null) return null
    if (!showZero && count === 0) return null
    return count > maxCount ? `${maxCount}+` : String(count)
  }, [count, maxCount, showZero, dot])

  if (!dot && displayCount === null) {
    return null
  }

  return (
    <span
      className={cn(notificationBadgeVariants({ variant, size }), className)}
      {...props}
    >
      {dot ? (
        <span className="h-2 w-2 rounded-full bg-current" />
      ) : (
        displayCount
      )}
    </span>
  )
}

export {
  NotificationBadge,
  notificationBadgeVariants,
  type NotificationBadgeProps,
}
