import { NextResponse } from "next/server";
import { z } from "zod";
import { verifyAdminToken } from "@/lib/admin-session";
import { updateInquiryStatus } from "@/lib/catalog-store";

const statusSchema = z.object({
  status: z.enum(["new", "contacted", "completed"]),
});

type InquiryRouteContext = {
  params: Promise<{ id: string }>;
};

export async function PATCH(request: Request, context: InquiryRouteContext) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ ok: false, message: "Unauthorized" }, { status: 401 });
  }

  const parsed = statusSchema.safeParse(await request.json().catch(() => null));

  if (!parsed.success) {
    return NextResponse.json({ ok: false, message: "Invalid status" }, { status: 400 });
  }

  const { id } = await context.params;
  const inquiry = await updateInquiryStatus(id, parsed.data.status);

  if (!inquiry) {
    return NextResponse.json({ ok: false, message: "Not found" }, { status: 404 });
  }

  return NextResponse.json({ ok: true, inquiry });
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
