import { NextResponse } from "next/server";
import { z } from "zod";
import { verifyAdminToken } from "@/lib/admin-session";
import {
  deleteManagedProduct,
  getManagedProduct,
  updateManagedProduct,
} from "@/lib/catalog-store";

const productSchema = z.object({
  name: z.string().min(2),
  slug: z.string().optional(),
  category: z.string().min(1),
  brand: z.string().min(1),
  price: z.number().nullable(),
  stockStatus: z.enum(["Бэлэн", "Захиалгаар", "Үнийн санал", "Түр дууссан"]),
  shortDescription: z.string().optional(),
  description: z.string().min(5),
  images: z.array(z.string()).default([]),
  specs: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
  featured: z.boolean().default(false),
});

type ProductRouteContext = {
  params: Promise<{ id: string }>;
};

export async function GET(request: Request, context: ProductRouteContext) {
  if (!isAuthorized(request)) {
    return unauthorized();
  }

  const { id } = await context.params;
  const product = await getManagedProduct(id);

  if (!product) {
    return NextResponse.json({ ok: false, message: "Not found" }, { status: 404 });
  }

  return NextResponse.json({ product });
}

export async function PATCH(request: Request, context: ProductRouteContext) {
  if (!isAuthorized(request)) {
    return unauthorized();
  }

  const parsed = productSchema.safeParse(await request.json().catch(() => null));

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: "Бүтээгдэхүүний мэдээлэл дутуу байна.", issues: parsed.error.issues },
      { status: 400 },
    );
  }

  const { id } = await context.params;
  const product = await updateManagedProduct(id, parsed.data);

  if (!product) {
    return NextResponse.json({ ok: false, message: "Not found" }, { status: 404 });
  }

  return NextResponse.json({ ok: true, product });
}

export async function DELETE(request: Request, context: ProductRouteContext) {
  if (!isAuthorized(request)) {
    return unauthorized();
  }

  const { id } = await context.params;
  const deleted = await deleteManagedProduct(id);

  if (!deleted) {
    return NextResponse.json({ ok: false, message: "Not found" }, { status: 404 });
  }

  return NextResponse.json({ ok: true });
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

function unauthorized() {
  return NextResponse.json({ ok: false, message: "Unauthorized" }, { status: 401 });
}
