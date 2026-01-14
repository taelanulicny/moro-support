"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { submitWaitlist } from "@/app/actions/waitlist"
import { useToast } from "@/components/ui/use-toast"
import { Loader2 } from "lucide-react"

export function WaitlistForm() {
  const router = useRouter()
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    role: "",
    company: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const refCode = typeof window !== "undefined" ? localStorage.getItem("moro_ref") : null
      
      const result = await submitWaitlist({
        email: formData.email,
        fullName: formData.fullName || undefined,
        role: (formData.role as any) || undefined,
        company: formData.company || undefined,
        referralCode: refCode || undefined,
      })

      if (result.success) {
        if (result.existing) {
          toast({
            title: "Already on the list!",
            description: result.message,
          })
          router.push(`/waitlist/success?code=${result.referralCode}`)
        } else {
          toast({
            title: "Success!",
            description: result.message,
          })
          router.push(`/waitlist/success?code=${result.referralCode}`)
        }
      } else {
        toast({
          title: "Error",
          description: result.error || "Something went wrong",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, email: e.target.value }))
        }
        required
        disabled={loading}
      />
      <Input
        type="text"
        placeholder="Full name (optional)"
        value={formData.fullName}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, fullName: e.target.value }))
        }
        disabled={loading}
      />
      <Select
        value={formData.role}
        onValueChange={(value) =>
          setFormData((prev) => ({ ...prev, role: value }))
        }
        disabled={loading}
      >
        <SelectTrigger>
          <SelectValue placeholder="Role (optional)" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Founder">Founder</SelectItem>
          <SelectItem value="Operator">Operator</SelectItem>
          <SelectItem value="Student">Student</SelectItem>
          <SelectItem value="Other">Other</SelectItem>
        </SelectContent>
      </Select>
      <Input
        type="text"
        placeholder="Company (optional)"
        value={formData.company}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, company: e.target.value }))
        }
        disabled={loading}
      />
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Submitting...
          </>
        ) : (
          "Join waitlist"
        )}
      </Button>
    </form>
  )
}

