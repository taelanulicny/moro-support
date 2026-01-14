"use client"

import { motion } from "framer-motion"
import { TrendingUp, Search, MessageSquare } from "lucide-react"

const featureRows = [
  {
    title: "Trade with conviction",
    description:
      "Place buy and sell orders on entities you believe will rise or fall in public confidence. Your portfolio reflects your ability to predict what matters next.",
    icon: TrendingUp,
    visual: "left",
  },
  {
    title: "Discover what's trending",
    description:
      "Browse categories, see what's moving, explore trending entities, and get pulled into conversations that shape the market.",
    icon: Search,
    visual: "right",
  },
  {
    title: "Build your reputation",
    description:
      "Share your reasoning, engage with others, and build a track record that shows you're consistently early on what matters.",
    icon: MessageSquare,
    visual: "left",
  },
]

export function FeatureRowsSection() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto space-y-32">
        {featureRows.map((row, i) => (
          <motion.div
            key={i}
            className={`grid lg:grid-cols-2 gap-12 items-center ${
              row.visual === "right" ? "lg:grid-flow-dense" : ""
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className={`space-y-6 ${
                row.visual === "right" ? "lg:col-start-2" : ""
              }`}
            >
              <row.icon className="w-12 h-12 text-primary" />
              <h3 className="text-3xl md:text-4xl font-bold">{row.title}</h3>
              <p className="text-lg text-muted-foreground">
                {row.description}
              </p>
            </div>
            <div
              className={`bg-card border border-border rounded-2xl p-8 ${
                row.visual === "right" ? "lg:col-start-1" : ""
              }`}
            >
              <div className="space-y-4">
                {/* Mock UI elements */}
                <div className="bg-secondary rounded-lg p-4 h-32">
                  <div className="space-y-2">
                    <div className="h-4 bg-primary/20 rounded w-40" />
                    <div className="h-3 bg-muted rounded w-full" />
                    <div className="h-3 bg-muted rounded w-3/4" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-secondary rounded-lg p-4 h-24">
                    <div className="h-3 bg-primary/20 rounded w-24 mb-2" />
                    <div className="h-6 bg-muted rounded" />
                  </div>
                  <div className="bg-secondary rounded-lg p-4 h-24">
                    <div className="h-3 bg-primary/20 rounded w-24 mb-2" />
                    <div className="h-6 bg-muted rounded" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

