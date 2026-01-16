"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { submitWaitlist } from "@/app/actions/waitlist"
import { useToast } from "@/components/ui/use-toast"
import { Loader2 } from "lucide-react"

export function WaitlistForm() {
  const router = useRouter()
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    phoneNumber: "",
    fullName: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const refCode = typeof window !== "undefined" ? localStorage.getItem("moro_ref") : null
      
      const result = await submitWaitlist({
        email: formData.email,
        phoneNumber: formData.phoneNumber || undefined,
        fullName: formData.fullName || undefined,
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
        type="tel"
        placeholder="Phone number (optional)"
        value={formData.phoneNumber}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, phoneNumber: e.target.value }))
        }
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

