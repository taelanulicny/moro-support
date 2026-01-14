"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { SectionHeader } from "./section-header"
import { staggerContainer, staggerItem } from "@/lib/motion"

const testimonials = [
  {
    quote:
      "Moro has completely changed how I think about trends. It's like having a pulse on what people actually believe will matter.",
    author: "Sarah Chen",
    role: "Founder at B2B SaaS",
  },
  {
    quote:
      "The social layer makes this addictive. I'm not just trading—I'm learning from others and building my own track record.",
    author: "Marcus Johnson",
    role: "Operator at Tech Startup",
  },
  {
    quote:
      "Finally, a platform that combines prediction markets with real community. This is the future of social intelligence.",
    author: "Alex Rivera",
    role: "Student at Stanford",
  },
]

export function SocialProofSection() {
  return (
    <section className="py-20 md:py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Join early traders building the future"
          subtitle="See what others are saying about Moro"
        />

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {testimonials.map((testimonial, i) => (
            <motion.div key={i} variants={staggerItem}>
              <Card className="h-full">
                <CardContent className="pt-6">
                  <Quote className="w-6 h-6 text-primary mb-4" strokeWidth={1.5} />
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

