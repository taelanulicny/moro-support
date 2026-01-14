"use client"

import { Suspense } from "react"
import { WaitlistSuccessContent } from "@/components/marketing/waitlist-success-content"

export default function WaitlistSuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <WaitlistSuccessContent />
    </Suspense>
  )
}
