"use server"

import { z } from "zod"
import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

const waitlistSchema = z.object({
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().optional(),
  fullName: z.string().optional(),
  referralCode: z.string().optional(),
  source: z.string().optional(),
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  utmCampaign: z.string().optional(),
  utmTerm: z.string().optional(),
  utmContent: z.string().optional(),
})

export type WaitlistFormData = z.infer<typeof waitlistSchema>

export async function submitWaitlist(formData: WaitlistFormData) {
  try {
    const validated = waitlistSchema.parse(formData)

    // Check if email already exists
    const existing = await prisma.waitlistEntry.findUnique({
      where: { email: validated.email },
    })

    if (existing) {
      return {
        success: true,
        existing: true,
        referralCode: existing.referralCode,
        message: "You're already on the waitlist!",
      }
    }

    // Find referrer if referral code provided
    let referredById: string | undefined
    if (validated.referralCode) {
      const referrer = await prisma.waitlistEntry.findUnique({
        where: { referralCode: validated.referralCode },
      })
      if (referrer) {
        referredById = referrer.id
      }
    }

    // Create new entry
    const entry = await prisma.waitlistEntry.create({
      data: {
        email: validated.email,
        phoneNumber: validated.phoneNumber,
        fullName: validated.fullName,
        source: validated.source,
        utmSource: validated.utmSource,
        utmMedium: validated.utmMedium,
        utmCampaign: validated.utmCampaign,
        utmTerm: validated.utmTerm,
        utmContent: validated.utmContent,
        referredById,
      },
    })

    // Increment referrer's count if applicable
    if (referredById) {
      await prisma.waitlistEntry.update({
        where: { id: referredById },
        data: {
          referralCount: {
            increment: 1,
          },
        },
      })
    }

    revalidatePath("/admin/waitlist")

    return {
      success: true,
      existing: false,
      referralCode: entry.referralCode,
      message: "Successfully joined the waitlist!",
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: error.errors[0].message,
      }
    }
    return {
      success: false,
      error: "Something went wrong. Please try again.",
    }
  }
}

export async function getWaitlistRank(email: string) {
  try {
    const entry = await prisma.waitlistEntry.findUnique({
      where: { email },
      include: {
        referredBy: {
          select: {
            email: true,
            fullName: true,
          },
        },
      },
    })

    if (!entry) {
      return null
    }

    // Calculate rank based on creation order
    const earlierEntries = await prisma.waitlistEntry.count({
      where: {
        createdAt: {
          lt: entry.createdAt,
        },
        deletedAt: null,
      },
    })

    const rank = earlierEntries + 1

    return {
      ...entry,
      rank,
    }
  } catch (error) {
    return null
  }
}

