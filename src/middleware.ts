// arquivo: /app/middleware.ts (ou /pages/middleware.ts)
import { NextRequest, NextResponse } from "next/server";
import { getCookie } from "@/store/useCookies";

export async function middleware(request: NextRequest) {
    const cookie = await getCookie('token');

    const protectedRoutes = ['/user'];

    const isProtectedRoute = protectedRoutes.includes(request.nextUrl.pathname);

    if (isProtectedRoute && !cookie) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/user/:path*']
};