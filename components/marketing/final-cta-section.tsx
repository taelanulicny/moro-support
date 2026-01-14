"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { WaitlistForm } from "@/components/marketing/waitlist-form"
import { Card, CardContent } from "@/components/ui/card"

export function FinalCTASection() {
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById("waitlist")
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="waitlist" className="py-20 md:py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4">
            Ready to trade confidence?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Join the waitlist and be among the first to experience Moro. Share
            your referral code to move up in line.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="p-8">
            <CardContent className="p-0">
              <WaitlistForm />
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

