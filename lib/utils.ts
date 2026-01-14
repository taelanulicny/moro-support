import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateReferralCode(): string {
  return Math.random().toString(36).substring(2, 10).toUpperCase()
}

export function getReferralLink(code: string, baseUrl: string): string {
  return `${baseUrl}?ref=${code}`
}

