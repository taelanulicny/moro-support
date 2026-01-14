"use client"

import { TrendingUp, Users, BarChart3, MessageSquare, Target } from "lucide-react"
import { SectionHeader } from "./section-header"
import { BentoTile } from "./bento-tile"
import { staggerContainer, staggerItem } from "@/lib/motion"
import { motion } from "framer-motion"

const features = [
  {
    icon: TrendingUp,
    title: "Real-time Trading",
    description: "Buy and sell confidence in real-time as sentiment shifts across the platform.",
    colSpan: 1 as const,
  },
  {
    icon: Users,
    title: "Social Layer",
    description: "Follow traders, share opinions, and engage with the community around every trade.",
    colSpan: 1 as const,
  },
  {
    icon: BarChart3,
    title: "Portfolio Tracking",
    description: "Monitor your performance, track your wins, and build your reputation as a trader.",
    colSpan: 1 as const,
  },
  {
    icon: MessageSquare,
    title: "Rich Conversations",
    description: "Discuss, debate, and share reasoning behind your trades with the community.",
    colSpan: 1 as const,
  },
  {
    icon: Target,
    title: "Category Exploration",
    description: "Browse by category—tech, culture, politics, sports—and find what matters to you.",
    colSpan: 1 as const,
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Features"
          title="Everything you need to trade confidence"
          subtitle="A complete platform that combines trading, social interaction, and discovery in one seamless experience."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* First row: 3 items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            {features.slice(0, 3).map((feature, i) => (
              <BentoTile
                key={i}
                colSpan={feature.colSpan}
                delay={i * 0.1}
              >
                <div className="flex flex-col h-full">
                  <div className="p-2 rounded-lg bg-primary/10 w-fit mb-4">
                    <feature.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </BentoTile>
            ))}
          </div>

          {/* Second row: 2 centered items */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
              {features.slice(3).map((feature, i) => (
                <BentoTile
                  key={i + 3}
                  colSpan={feature.colSpan}
                  delay={(i + 3) * 0.1}
                >
                  <div className="flex flex-col h-full">
                    <div className="p-2 rounded-lg bg-primary/10 w-fit mb-4">
                      <feature.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </BentoTile>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

