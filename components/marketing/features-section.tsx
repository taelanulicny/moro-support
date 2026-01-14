"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Users, Zap, BarChart3, MessageSquare, Target } from "lucide-react"

const features = [
  {
    icon: TrendingUp,
    title: "Real-time Trading",
    description: "Buy and sell confidence in real-time as sentiment shifts across the platform.",
  },
  {
    icon: Users,
    title: "Social Layer",
    description: "Follow traders, share opinions, and engage with the community around every trade.",
  },
  {
    icon: Zap,
    title: "AI-Powered Discovery",
    description: "Discover trending entities and get personalized recommendations based on your interests.",
  },
  {
    icon: BarChart3,
    title: "Portfolio Tracking",
    description: "Monitor your performance, track your wins, and build your reputation as a trader.",
  },
  {
    icon: MessageSquare,
    title: "Rich Conversations",
    description: "Discuss, debate, and share reasoning behind your trades with the community.",
  },
  {
    icon: Target,
    title: "Category Exploration",
    description: "Browse by category—tech, culture, politics, sports—and find what matters to you.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything you need to trade confidence
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A complete platform that combines trading, social interaction, and discovery in one seamless experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <feature.icon className="w-10 h-10 text-primary mb-4" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

