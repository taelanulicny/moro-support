import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search as SearchIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function SearchPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Search</h1>
        <p className="text-muted-foreground">
          Find entities, trends, and conversations
        </p>
      </div>

      {/* Search Bar */}
      <Card>
        <CardContent className="p-6">
          <div className="relative">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search for entities, people, trends..."
              className="pl-12 h-14 text-lg"
            />
          </div>
        </CardContent>
      </Card>

      {/* Recent Searches */}
      <div>
        <h3 className="text-sm font-medium mb-3">Recent Searches</h3>
        <div className="flex flex-wrap gap-2">
          {["AI", "Tech Trends", "Startups", "Crypto"].map((term) => (
            <Badge key={term} variant="secondary" className="cursor-pointer">
              {term}
            </Badge>
          ))}
        </div>
      </div>

      {/* Results */}
      <Card>
        <CardContent className="p-6">
          <div className="text-center py-12 text-muted-foreground">
            <SearchIcon className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>Start typing to search</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

