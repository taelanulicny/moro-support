"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

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
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Join early traders building the future
          </h2>
          <p className="text-xl text-muted-foreground">
            See what others are saying about Moro
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <Quote className="w-8 h-8 text-primary mb-4" />
                  <p className="text-muted-foreground mb-6">
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
        </div>
      </div>
    </section>
  )
}

