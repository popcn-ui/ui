"use client"

import * as React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Sparkles, ArrowRight } from "lucide-react"

function CardDemo() {
  return (
    <Card variant="aurora" glow className="w-full max-w-sm group">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary group-hover:animate-pulse" />
            Component
          </CardTitle>
          <Badge variant="aurora" glow className="text-xs">New</Badge>
        </div>
        <CardDescription>
          Glass morphism with aurora glow effects
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Badge variant="glass">glass</Badge>
          <Badge variant="outline">aurora</Badge>
          <Badge variant="secondary">solid</Badge>
        </div>
        <Button variant="glass" size="sm" className="w-full" rightIcon={<ArrowRight className="h-4 w-4" />}>
          View Component
        </Button>
      </CardContent>
    </Card>
  )
}

export { CardDemo }
