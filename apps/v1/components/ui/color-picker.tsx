"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

interface ColorPickerProps {
  value?: string
  onChange?: (color: string) => void
  disabled?: boolean
  className?: string
  format?: "hex" | "rgb" | "hsl"
}

function ColorPicker({
  value = "#000000",
  onChange,
  disabled = false,
  className,
  format = "hex",
}: ColorPickerProps) {
  const [color, setColor] = React.useState(value)
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    setColor(value)
  }, [value])

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : { r: 0, g: 0, b: 0 }
  }

  const rgbToHsl = (r: number, g: number, b: number) => {
    r /= 255
    g /= 255
    b /= 255
    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    let h = 0,
      s = 0
    const l = (max + min) / 2

    if (max !== min) {
      const d = max - min
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
      switch (max) {
        case r:
          h = ((g - b) / d + (g < b ? 6 : 0)) / 6
          break
        case g:
          h = ((b - r) / d + 2) / 6
          break
        case b:
          h = ((r - g) / d + 4) / 6
          break
      }
    }

    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100),
    }
  }

  const rgb = hexToRgb(color)
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b)

  const handleHexChange = (hex: string) => {
    if (/^#[0-9A-F]{6}$/i.test(hex)) {
      setColor(hex)
      onChange?.(hex)
    }
  }

  const handleRgbChange = (channel: "r" | "g" | "b", value: number) => {
    const newRgb = { ...rgb, [channel]: value }
    const newHex = `#${[newRgb.r, newRgb.g, newRgb.b]
      .map((x) => {
        const hex = x.toString(16)
        return hex.length === 1 ? "0" + hex : hex
      })
      .join("")}`
    setColor(newHex)
    onChange?.(newHex)
  }

  const handleHslChange = (channel: "h" | "s" | "l", value: number) => {
    const newHsl = { ...hsl, [channel]: value }
    const hslToRgb = (h: number, s: number, l: number) => {
      s /= 100
      l /= 100
      const c = (1 - Math.abs(2 * l - 1)) * s
      const x = c * (1 - Math.abs(((h / 60) % 2) - 1))
      const m = l - c / 2
      let r = 0,
        g = 0,
        b = 0

      if (0 <= h && h < 60) {
        r = c
        g = x
        b = 0
      } else if (60 <= h && h < 120) {
        r = x
        g = c
        b = 0
      } else if (120 <= h && h < 180) {
        r = 0
        g = c
        b = x
      } else if (180 <= h && h < 240) {
        r = 0
        g = x
        b = c
      } else if (240 <= h && h < 300) {
        r = x
        g = 0
        b = c
      } else if (300 <= h && h < 360) {
        r = c
        g = 0
        b = x
      }

      return {
        r: Math.round((r + m) * 255),
        g: Math.round((g + m) * 255),
        b: Math.round((b + m) * 255),
      }
    }

    const newRgb = hslToRgb(newHsl.h, newHsl.s, newHsl.l)
    const newHex = `#${[newRgb.r, newRgb.g, newRgb.b]
      .map((x) => {
        const hex = x.toString(16)
        return hex.length === 1 ? "0" + hex : hex
      })
      .join("")}`
    setColor(newHex)
    onChange?.(newHex)
  }

  const formatColor = () => {
    switch (format) {
      case "rgb":
        return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`
      case "hsl":
        return `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`
      default:
        return color
    }
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className={cn("w-full justify-start gap-2", className)}
          disabled={disabled}
        >
          <div
            className="h-4 w-4 rounded border border-border/60"
            style={{ backgroundColor: color }}
          />
          <span className="font-mono text-sm">{formatColor()}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-4" align="start">
        <div className="space-y-4">
          {/* Color Preview */}
          <div
            className="h-32 w-full rounded-lg border border-border/60"
            style={{ backgroundColor: color }}
          />

          {/* Hex Input */}
          <div className="space-y-2">
            <label className="text-xs font-medium">Hex</label>
            <Input
              value={color}
              onChange={(e) => handleHexChange(e.target.value)}
              className="font-mono"
              placeholder="#000000"
            />
          </div>

          {/* RGB Sliders */}
          <div className="space-y-3">
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span>Red</span>
                <span>{rgb.r}</span>
              </div>
              <Slider
                value={[rgb.r]}
                onValueChange={([value]) => handleRgbChange("r", value)}
                max={255}
                step={1}
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span>Green</span>
                <span>{rgb.g}</span>
              </div>
              <Slider
                value={[rgb.g]}
                onValueChange={([value]) => handleRgbChange("g", value)}
                max={255}
                step={1}
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span>Blue</span>
                <span>{rgb.b}</span>
              </div>
              <Slider
                value={[rgb.b]}
                onValueChange={([value]) => handleRgbChange("b", value)}
                max={255}
                step={1}
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export { ColorPicker, type ColorPickerProps }
