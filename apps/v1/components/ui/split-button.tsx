"use client"

import * as React from "react"
import { ChevronDownIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button, ButtonProps } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface SplitButtonProps extends Omit<ButtonProps, "onClick"> {
  onClick?: () => void
  dropdownItems?: Array<{
    label: string
    onClick: () => void
    disabled?: boolean
    separator?: boolean
  }>
  dropdownLabel?: string
}

function SplitButton({
  onClick,
  dropdownItems = [],
  dropdownLabel,
  children,
  className,
  ...props
}: SplitButtonProps) {
  return (
    <div className="inline-flex">
      <Button
        onClick={onClick}
        className={cn("rounded-r-none border-r-0", className)}
        {...props}
      >
        {children}
      </Button>
      {dropdownItems.length > 0 && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant={props.variant}
              size={props.size}
              className={cn(
                "rounded-l-none border-l border-l-border/60 px-2",
                className
              )}
              {...props}
            >
              <ChevronDownIcon className="h-4 w-4" />
              <span className="sr-only">{dropdownLabel || "More options"}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {dropdownItems.map((item, index) => (
              <React.Fragment key={index}>
                {item.separator && index > 0 && <DropdownMenuSeparator />}
                <DropdownMenuItem
                  onClick={item.onClick}
                  disabled={item.disabled}
                >
                  {item.label}
                </DropdownMenuItem>
              </React.Fragment>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  )
}

export { SplitButton, type SplitButtonProps }
