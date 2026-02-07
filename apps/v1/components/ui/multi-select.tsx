"use client"

import * as React from "react"
import { XIcon, CheckIcon, ChevronDownIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Badge } from "@/components/ui/badge"

interface MultiSelectOption {
  label: string
  value: string
  disabled?: boolean
}

interface MultiSelectProps {
  options: MultiSelectOption[]
  value?: string[]
  onValueChange?: (value: string[]) => void
  placeholder?: string
  disabled?: boolean
  className?: string
  maxCount?: number
}

function MultiSelect({
  options,
  value = [],
  onValueChange,
  placeholder = "Select items...",
  disabled = false,
  className,
  maxCount,
}: MultiSelectProps) {
  const [open, setOpen] = React.useState(false)

  const selectedOptions = React.useMemo(() => {
    return options.filter((option) => value.includes(option.value))
  }, [options, value])

  const handleSelect = (optionValue: string) => {
    if (disabled) return

    const newValue = value.includes(optionValue)
      ? value.filter((v) => v !== optionValue)
      : [...value, optionValue]

    if (maxCount && newValue.length > maxCount) {
      return
    }

    onValueChange?.(newValue)
  }

  const handleRemove = (optionValue: string, e: React.MouseEvent) => {
    e.stopPropagation()
    if (disabled) return
    onValueChange?.(value.filter((v) => v !== optionValue))
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-between text-left font-normal min-h-10 h-auto",
            !value.length && "text-muted-foreground",
            className
          )}
          disabled={disabled}
        >
          <div className="flex flex-wrap gap-1 flex-1">
            {selectedOptions.length === 0 ? (
              <span>{placeholder}</span>
            ) : (
              selectedOptions.map((option) => (
                <Badge
                  key={option.value}
                  variant="secondary"
                  className="mr-1 mb-1"
                >
                  {option.label}
                  <button
                    className="ml-1 ring-offset-background rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleRemove(option.value, e as any)
                      }
                    }}
                    onMouseDown={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                    }}
                    onClick={(e) => handleRemove(option.value, e)}
                  >
                    <XIcon className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                  </button>
                </Badge>
              ))
            )}
          </div>
          <ChevronDownIcon className="h-4 w-4 opacity-50 shrink-0" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[--radix-popover-trigger-width] p-0" align="start">
        <div className="max-h-60 overflow-auto">
          {options.map((option) => {
            const isSelected = value.includes(option.value)
            return (
              <div
                key={option.value}
                className={cn(
                  "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors",
                  isSelected && "bg-accent text-accent-foreground",
                  !isSelected && "hover:bg-accent hover:text-accent-foreground",
                  option.disabled && "pointer-events-none opacity-50"
                )}
                onClick={() => !option.disabled && handleSelect(option.value)}
              >
                <div className="flex items-center gap-2 flex-1">
                  <div
                    className={cn(
                      "flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                      isSelected && "bg-primary text-primary-foreground"
                    )}
                  >
                    {isSelected && <CheckIcon className="h-3 w-3" />}
                  </div>
                  <span>{option.label}</span>
                </div>
              </div>
            )
          })}
        </div>
        {maxCount && (
          <div className="border-t border-border/60 px-2 py-1.5 text-xs text-muted-foreground">
            {value.length} / {maxCount} selected
          </div>
        )}
      </PopoverContent>
    </Popover>
  )
}

export { MultiSelect, type MultiSelectProps, type MultiSelectOption }
