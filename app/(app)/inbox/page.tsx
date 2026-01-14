import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function InboxPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Inbox</h1>
        <p className="text-muted-foreground">
          Manage your messages and notifications
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Filters */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Filters</h3>
              <div className="space-y-2">
                <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-accent">
                  Priority
                </button>
                <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-accent">
                  Mentions
                </button>
                <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-accent">
                  Approvals
                </button>
                <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-accent">
                  News
                </button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Message List */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-0">
              <div className="divide-y divide-border">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="p-4 hover:bg-accent cursor-pointer">
                    <div className="space-y-2">
                      <div className="h-4 bg-muted rounded w-3/4" />
                      <div className="h-3 bg-muted rounded w-full" />
                      <div className="h-3 bg-muted rounded w-2/3" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Message Detail */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="h-6 bg-muted rounded w-1/2" />
                <div className="space-y-2">
                  <div className="h-4 bg-muted rounded w-full" />
                  <div className="h-4 bg-muted rounded w-full" />
                  <div className="h-4 bg-muted rounded w-3/4" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

