"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bell, Check, X, ChevronRight, Sparkles } from "lucide-react"

function NotificationDemo() {
  const [dismissed, setDismissed] = React.useState(false)

  return (
    <Card variant="glass" glow className="w-full max-w-sm">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-base">
            <Bell className="text-primary h-4 w-4 animate-pulse" />
            Notifications
          </CardTitle>
          <Badge variant="aurora" glow className="text-xs">
            3 new
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="grid gap-3">
        {!dismissed ? (
          <div className="border-primary/30 bg-primary/5 hover:border-primary/50 hover:bg-primary/10 flex items-start gap-3 rounded-lg border p-3 transition-all">
            <div className="bg-primary mt-0.5 h-2 w-2 animate-pulse rounded-full" />
            <div className="flex-1 space-y-1">
              <p className="flex items-center gap-1 text-sm font-medium">
                <Sparkles className="text-primary h-3 w-3" />
                New feature available
              </p>
              <p className="text-muted-foreground text-xs">AuroraPop v1.0 is now live!</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="h-7 w-7 p-0"
              onClick={() => setDismissed(true)}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        ) : (
          <div className="text-muted-foreground flex items-center justify-center py-4 text-sm">
            <Check className="mr-2 h-4 w-4 text-green-500" />
            All caught up!
          </div>
        )}
        <div className="flex items-center justify-between text-sm">
          <button
            className="text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
            onClick={() => setDismissed(true)}
          >
            <Check className="h-3.5 w-3.5" />
            Mark all read
          </button>
          <button
            className="text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
            onClick={() => setDismissed(false)}
          >
            <X className="h-3.5 w-3.5" />
            {dismissed ? "Undo" : "Clear"}
          </button>
        </div>
      </CardContent>
    </Card>
  )
}

export { NotificationDemo }
