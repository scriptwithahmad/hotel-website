import { NextResponse } from "next/server";
import { JWTVerify } from "@/helpers/jwt";

export async function middleware(req, res) {
  var AccessToken =
    req.cookies.get("AccessToken")?.value &&
    (await JWTVerify(req.cookies.get("AccessToken")?.value));

  var pathname = req.nextUrl.pathname;

  var publicRoutes = ["/login"];

  if (!AccessToken && pathname === "/portal") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (AccessToken && pathname === "/login") {
    return NextResponse.redirect(new URL("/portal", req.url));
  }
}

export const config = {
  matcher: ["/login", "/portal", "/portal/:path*"],
};
