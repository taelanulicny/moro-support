import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Admin routes protection
  if (request.nextUrl.pathname.startsWith("/admin")) {
    const adminCookie = request.cookies.get("admin")
    
    // Allow access to /admin login page
    if (request.nextUrl.pathname === "/admin") {
      return NextResponse.next()
    }

    // Check admin session for other admin routes
    if (adminCookie?.value !== "1") {
      return NextResponse.redirect(new URL("/admin", request.url))
    }
  }

  // App routes protection (will be handled by NextAuth later)
  if (request.nextUrl.pathname.startsWith("/app")) {
    // For now, allow access - NextAuth will handle this
    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*", "/app/:path*"],
}

