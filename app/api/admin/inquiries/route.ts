import { NextResponse } from "next/server";
import { verifyAdminToken } from "@/lib/admin-session";
import { listManagedInquiries } from "@/lib/catalog-store";

export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ ok: false, message: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json({ inquiries: await listManagedInquiries() });
}

function isAuthorized(request: Request) {
  const token = request.headers
    .get("cookie")
    ?.split(";")
    .map((item) => item.trim())
    .find((item) => item.startsWith("proproc_admin_session="))
    ?.split("=")[1];

  return verifyAdminToken(token);
}
