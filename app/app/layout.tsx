import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import type React from "react"
import { AppSidebar } from "@/components/app/sidebar"
import { AppHeader } from "@/components/app/header"

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  // For MVP, allow access without auth (can be enabled later)
  // if (!session) {
  //   redirect("/auth/signin")
  // }

  return (
    <div className="min-h-screen bg-background">
      <AppSidebar />
      <div className="lg:pl-64">
        <AppHeader />
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}

