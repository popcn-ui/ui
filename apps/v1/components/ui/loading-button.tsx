"use client"

import * as React from "react"
import { LoaderIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button, ButtonProps, buttonVariants } from "@/components/ui/button"

interface LoadingButtonProps extends ButtonProps {
  loading?: boolean
  loadingText?: string
  loadingIcon?: React.ReactNode
}

const LoadingButton = React.forwardRef<HTMLButtonElement, LoadingButtonProps>(
  (
    {
      className,
      variant,
      size,
      loading = false,
      loadingText,
      loadingIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <Button
        className={cn(className)}
        variant={variant}
        size={size}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <span className="mr-2">
            {loadingIcon || (
              <LoaderIcon className="h-4 w-4 animate-spin" />
            )}
          </span>
        )}
        {loading && loadingText ? loadingText : children}
      </Button>
    )
  }
)

LoadingButton.displayName = "LoadingButton"

export { LoadingButton, type LoadingButtonProps }
