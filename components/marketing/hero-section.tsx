"use client"

import { useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Play } from "lucide-react"

export function HeroSection() {
  const searchParams = useSearchParams()
  const refCode = searchParams?.get("ref")

  useEffect(() => {
    if (refCode) {
      localStorage.setItem("moro_ref", refCode)
    }
  }, [refCode])

  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById("waitlist")
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />

      <div className="relative max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Trade confidence,
              <br />
              <span className="text-primary">not money</span>
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Moro is a social stock market where people, ideas, trends, and
              narratives are traded based on what the crowd believes will matter
              more in the future. Build your portfolio of conviction.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Button
                size="lg"
                onClick={scrollToWaitlist}
                className="text-lg px-8 py-6"
              >
                Join waitlist
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-6"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    View demo
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">
                      Demo video placeholder
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          </motion.div>

          {/* Right: Product Mock */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative"
          >
            <div className="relative bg-card border border-border rounded-2xl p-6 shadow-2xl">
              {/* Mock UI Cards */}
              <div className="space-y-4">
                <div className="bg-secondary rounded-lg p-4 h-24 flex items-center justify-between">
                  <div className="space-y-2">
                    <div className="h-4 bg-primary/20 rounded w-32" />
                    <div className="h-3 bg-muted rounded w-24" />
                  </div>
                  <div className="h-8 w-16 bg-primary/30 rounded" />
                </div>
                <div className="bg-secondary rounded-lg p-4 h-32">
                  <div className="space-y-2">
                    <div className="h-4 bg-primary/20 rounded w-40" />
                    <div className="h-3 bg-muted rounded w-full" />
                    <div className="h-3 bg-muted rounded w-3/4" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-secondary rounded-lg p-4 h-20">
                    <div className="h-3 bg-primary/20 rounded w-20 mb-2" />
                    <div className="h-6 bg-muted rounded w-full" />
                  </div>
                  <div className="bg-secondary rounded-lg p-4 h-20">
                    <div className="h-3 bg-primary/20 rounded w-20 mb-2" />
                    <div className="h-6 bg-muted rounded w-full" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

