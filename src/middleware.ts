import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const isLogin = false;
    if (!isLogin) {
        return NextResponse.redirect(new URL('/auth/login', req.nextUrl));
    } else {
        return NextResponse.next();
    }
}

export const config = {
    matcher: ['/product', '/about']
}