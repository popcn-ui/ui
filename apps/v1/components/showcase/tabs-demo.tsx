"use client"

import * as React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

function TabsDemo() {
  return (
    <div className="w-full max-w-sm">
      <Tabs defaultValue="aurora" className="w-full">
        <TabsList variant="aurora" className="w-full">
          <TabsTrigger variant="aurora" value="aurora" className="flex-1">
            Aurora
          </TabsTrigger>
          <TabsTrigger variant="aurora" value="glass" className="flex-1">
            Glass
          </TabsTrigger>
          <TabsTrigger variant="aurora" value="solid" className="flex-1">
            Solid
          </TabsTrigger>
        </TabsList>
        <TabsContent value="aurora" className="mt-4">
          <div className="flex flex-wrap gap-2">
            <Badge variant="aurora">Primary</Badge>
            <Badge variant="aurora" glow>Glow</Badge>
          </div>
        </TabsContent>
        <TabsContent value="glass" className="mt-4">
          <div className="flex flex-wrap gap-2">
            <Badge variant="glass">Blur</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </TabsContent>
        <TabsContent value="solid" className="mt-4">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="success">Success</Badge>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export { TabsDemo }
