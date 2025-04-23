import { NextRequest, NextResponse } from "next/server";
import { authConfig } from "./auth.config";
import NextAuth from "next-auth";

const { auth } = NextAuth(authConfig);

const middleware = async (req: NextRequest) => {
  const session = await auth();
  const isAuthenticated = !!session?.user;

  if (!isAuthenticated) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  return NextResponse.next();
};

export const config = {
  matcher: ["/flights:path*"],
};

export default middleware;
