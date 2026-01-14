"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  Inbox,
  Search,
  FileText,
  Settings,
  TrendingUp,
} from "lucide-react"

const navItems = [
  { href: "/app", label: "Dashboard", icon: TrendingUp },
  { href: "/app/inbox", label: "Inbox", icon: Inbox },
  { href: "/app/search", label: "Search", icon: Search },
  { href: "/app/briefing", label: "Briefing", icon: FileText },
  { href: "/app/settings", label: "Settings", icon: Settings },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 h-full w-64 border-r border-border bg-card z-40 hidden lg:block">
      <div className="p-6">
        <Link href="/app" className="text-2xl font-bold">
          Moro
        </Link>
      </div>
      <nav className="px-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}

