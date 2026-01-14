"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Bell, User } from "lucide-react"

export function AppHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 h-16">
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search entities, trends, people..."
              className="pl-10"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Bell className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}

