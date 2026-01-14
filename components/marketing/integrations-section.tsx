"use client"

import { motion } from "framer-motion"
import {
  MessageSquare,
  TrendingUp,
  Users,
  Zap,
  Globe,
  BarChart3,
  Bell,
  Search,
} from "lucide-react"

const integrations = [
  { icon: MessageSquare, label: "Messaging" },
  { icon: TrendingUp, label: "Analytics" },
  { icon: Users, label: "Social" },
  { icon: Zap, label: "Automation" },
  { icon: Globe, label: "Web" },
  { icon: BarChart3, label: "Data" },
  { icon: Bell, label: "Notifications" },
  { icon: Search, label: "Search" },
]

export function IntegrationsSection() {
  return (
    <section className="py-20 md:py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-center text-sm text-muted-foreground uppercase tracking-wider mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Connect your tools in one place
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {integrations.map((integration, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-3 px-6 py-3 bg-background rounded-full border border-border"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              <integration.icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">{integration.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

