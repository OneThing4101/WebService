import { NextResponse } from "next/server";
import { getAdminCookieName } from "@/lib/admin-session";

export async function POST(request: Request) {
  const response = NextResponse.redirect(new URL("/adminlogin", request.url));
  response.cookies.delete(getAdminCookieName());
  return response;
}
