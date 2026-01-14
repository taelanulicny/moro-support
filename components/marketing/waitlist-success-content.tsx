"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Copy, Twitter, Linkedin } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import Link from "next/link"

export function WaitlistSuccessContent() {
  const searchParams = useSearchParams()
  const code = searchParams?.get("code")
  const { toast } = useToast()
  const [rank, setRank] = useState<number | null>(null)
  const [referralCount, setReferralCount] = useState(0)
  const [copied, setCopied] = useState(false)

  const baseUrl = typeof window !== "undefined" ? window.location.origin : "http://localhost:3000"
  const referralLink = code ? `${baseUrl}?ref=${code}` : ""

  useEffect(() => {
    if (code) {
      // In a real app, you'd fetch this from the server
      // For now, we'll simulate it
      const fetchRank = async () => {
        // This would need the email from the session or pass it as a param
        // For MVP, we'll just show the code
      }
      fetchRank()
    }
  }, [code])

  const copyToClipboard = () => {
    if (referralLink) {
      navigator.clipboard.writeText(referralLink)
      setCopied(true)
      toast({
        title: "Copied!",
        description: "Referral link copied to clipboard",
      })
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `Join me on Moro, the social stock market for confidence! ${referralLink}`
    )}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      referralLink
    )}`,
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6 py-24">
      <motion.div
        className="max-w-2xl w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card>
          <CardHeader className="text-center">
            <motion.div
              className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <Check className="w-8 h-8 text-primary" />
            </motion.div>
            <CardTitle className="text-3xl">You're on the waitlist!</CardTitle>
            <p className="text-muted-foreground mt-2">
              We'll notify you when Moro launches. Share your referral link to
              move up in line.
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            {code && (
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Your referral code
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={code}
                      readOnly
                      className="flex-1 px-4 py-2 bg-secondary border border-border rounded-md font-mono text-sm"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={copyToClipboard}
                    >
                      {copied ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Your referral link
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={referralLink}
                      readOnly
                      className="flex-1 px-4 py-2 bg-secondary border border-border rounded-md text-sm"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={copyToClipboard}
                    >
                      {copied ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </div>

                {rank && (
                  <div className="bg-secondary rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">
                      Your current rank
                    </p>
                    <p className="text-2xl font-bold">#{rank}</p>
                  </div>
                )}

                {referralCount > 0 && (
                  <div className="bg-secondary rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">
                      People you've referred
                    </p>
                    <p className="text-2xl font-bold">{referralCount}</p>
                  </div>
                )}

                <div>
                  <p className="text-sm font-medium mb-3">Share on social</p>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      asChild
                      className="flex-1"
                    >
                      <a
                        href={shareLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Twitter className="w-4 h-4 mr-2" />
                        Twitter
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      asChild
                      className="flex-1"
                    >
                      <a
                        href={shareLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            )}

            <div className="pt-4 border-t border-border">
              <Button asChild className="w-full">
                <Link href="/">Back to home</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

