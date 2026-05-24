import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPrivateRoute = createRouteMatcher(["/documents(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const { userId, redirectToSignIn } = await auth();

  if (isPrivateRoute(req) && !userId) {
    return redirectToSignIn({
      returnBackUrl: req.url,
    });
  }

  if (req.nextUrl.pathname === "/" && userId) {
    return NextResponse.redirect(new URL("/documents", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)", "/api/(.*)"],
};
