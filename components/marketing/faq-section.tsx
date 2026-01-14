"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SectionHeader } from "./section-header"

const faqs = [
  {
    question: "How does the waitlist work?",
    answer:
      "Join our waitlist to get early access to Moro. We'll notify you when we launch and you'll be able to start trading confidence on day one.",
  },
  {
    question: "What can I trade on Moro?",
    answer:
      "You can trade confidence on people, ideas, trends, companies, creators, and narratives. Anything that has a public perception can be traded.",
  },
  {
    question: "Is this gambling?",
    answer:
      "No. Moro uses in-app tokens, not real money. It's a social platform for tracking and discussing collective belief, not a gambling platform.",
  },
  {
    question: "How do referrals work?",
    answer:
      "When you join the waitlist, you get a unique referral code. Share it with others, and when they sign up, you'll get credit for the referral.",
  },
  {
    question: "What happens to my data?",
    answer:
      "We take privacy seriously. Your email and personal information are only used to notify you about the launch and manage your account. See our privacy policy for details.",
  },
  {
    question: "When will Moro launch?",
    answer:
      "We're building Moro now and will launch to waitlist members first. Join the waitlist to be among the first to access the platform.",
  },
  {
    question: "Can I use real money?",
    answer:
      "No, Moro uses in-app tokens only. This keeps the platform focused on social interaction and discovery rather than financial risk.",
  },
  {
    question: "How do I track my performance?",
    answer:
      "Your portfolio shows your trading history, win rate, and track record. You can see how early you were on trends and build your reputation over time.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20 md:py-24 px-6 bg-secondary/30">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          title="Frequently asked questions"
          subtitle="Everything you need to know about Moro"
        />

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

