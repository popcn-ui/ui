"use client"

import { NotificationBadge } from "@/components/ui/notification-badge"
import { Button } from "@/components/ui/button"
import { BellIcon } from "lucide-react"

export function NotificationBadgeDemo() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-medium">Count Badges</label>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="relative">
            <BellIcon className="h-4 w-4" />
            <NotificationBadge count={3} className="absolute -top-1 -right-1" />
          </Button>
          <Button variant="ghost" size="sm" className="relative">
            <BellIcon className="h-4 w-4" />
            <NotificationBadge count={99} className="absolute -top-1 -right-1" />
          </Button>
          <Button variant="ghost" size="sm" className="relative">
            <BellIcon className="h-4 w-4" />
            <NotificationBadge count={150} maxCount={99} className="absolute -top-1 -right-1" />
          </Button>
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Dot Badges</label>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="relative">
            <BellIcon className="h-4 w-4" />
            <NotificationBadge dot className="absolute -top-1 -right-1" />
          </Button>
          <Button variant="ghost" size="sm" className="relative">
            Messages
            <NotificationBadge dot variant="aurora" className="absolute -top-1 -right-1" />
          </Button>
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Variants</label>
        <div className="flex items-center gap-4">
          <NotificationBadge count={5} variant="default" />
          <NotificationBadge count={5} variant="aurora" />
          <NotificationBadge count={5} variant="destructive" />
          <NotificationBadge count={5} variant="outline" />
        </div>
      </div>
    </div>
  )
}
