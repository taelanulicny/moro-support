"use client"

import { useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Play } from "lucide-react"
import { fadeUp, slideInRight, textReveal } from "@/lib/motion"

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
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      
      {/* Subtle radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-tight tracking-tight">
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  variants={textReveal}
                  initial="hidden"
                  animate="visible"
                  custom={0}
                >
                  Trade confidence,
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  className="block text-primary"
                  variants={textReveal}
                  initial="hidden"
                  animate="visible"
                  custom={1}
                >
                  not money
                </motion.span>
              </span>
            </h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
              variants={fadeUp}
            >
              Moro is a social stock market where people, ideas, trends, and
              narratives are traded based on what the crowd believes will matter
              more in the future. Build your portfolio of conviction.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeUp}
            >
              <Button
                size="lg"
                onClick={scrollToWaitlist}
                className="rounded-full"
              >
                Join waitlist
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full"
                  >
                    <Play className="w-4 h-4 mr-2" />
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
            initial="hidden"
            animate="visible"
            variants={slideInRight}
            className="relative"
          >
            <div className="relative bg-card border border-border rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300">
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

