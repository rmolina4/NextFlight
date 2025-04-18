import { NextRequest, NextResponse } from "next/server";
import { authConfig } from "./auth.config";
import NextAuth, { Session } from "next-auth";

const { auth } = NextAuth(authConfig);

const middleware = async (req: NextRequest) => {
    const { pathname } = req.nextUrl;
    const session = await auth();
    const isAuthenticated = !!session?.user;
    console.log(isAuthenticated, pathname);

    const publicPaths = ["/", "show-item", "show-items", "api/items"];

    if (!isAuthenticated && !publicPaths.includes(pathname)) {
        return NextResponse.redirect(new URL("/", req.url));
    }
    return NextResponse.next();
};

export const config = {
    matcher: [
        "/create-item/:path*",
        "/update-item/:path*",
    ],
};

export default middleware;

