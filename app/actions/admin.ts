"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"

export async function verifyAdminPassword(password: string): Promise<boolean> {
  const adminPassword = process.env.ADMIN_PASSWORD
  if (!adminPassword) {
    return false
  }
  return password === adminPassword
}

export async function setAdminSession() {
  cookies().set("admin", "1", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  })
}

export async function checkAdminSession(): Promise<boolean> {
  const adminCookie = cookies().get("admin")
  return adminCookie?.value === "1"
}

export async function clearAdminSession() {
  cookies().delete("admin")
}

export async function getWaitlistEntries(
  page: number = 1,
  pageSize: number = 50,
  search?: string
) {
  const skip = (page - 1) * pageSize

  const where = search
    ? {
        deletedAt: null,
        OR: [
          { email: { contains: search, mode: "insensitive" as const } },
          { fullName: { contains: search, mode: "insensitive" as const } },
          { company: { contains: search, mode: "insensitive" as const } },
        ],
      }
    : {
        deletedAt: null,
      }

  const [entries, total] = await Promise.all([
    prisma.waitlistEntry.findMany({
      where,
      skip,
      take: pageSize,
      orderBy: { createdAt: "desc" },
      include: {
        referredBy: {
          select: {
            email: true,
            fullName: true,
          },
        },
      },
    }),
    prisma.waitlistEntry.count({ where }),
  ])

  return {
    entries,
    total,
    page,
    pageSize,
    totalPages: Math.ceil(total / pageSize),
  }
}

export async function deleteWaitlistEntry(id: string) {
  try {
    await prisma.waitlistEntry.update({
      where: { id },
      data: {
        deletedAt: new Date(),
      },
    })
    revalidatePath("/admin/waitlist")
    return { success: true }
  } catch (error) {
    return { success: false, error: "Failed to delete entry" }
  }
}

export async function getWaitlistStats() {
  const [total, referred] = await Promise.all([
    prisma.waitlistEntry.count({
      where: { deletedAt: null },
    }),
    prisma.waitlistEntry.count({
      where: {
        deletedAt: null,
        referredById: { not: null },
      },
    }),
  ])

  return {
    total,
    referred,
  }
}

