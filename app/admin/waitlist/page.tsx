import { redirect } from "next/navigation"
import { checkAdminSession } from "@/app/actions/admin"
import { WaitlistTable } from "@/components/admin/waitlist-table"

export default async function AdminWaitlistPage() {
  const isAdmin = await checkAdminSession()
  
  if (!isAdmin) {
    redirect("/admin")
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Waitlist Management</h1>
          <p className="text-muted-foreground">
            View and manage waitlist entries
          </p>
        </div>
        <WaitlistTable />
      </div>
    </div>
  )
}

