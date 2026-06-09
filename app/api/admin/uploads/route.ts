import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { verifyAdminToken } from "@/lib/admin-session";

const allowedTypes = new Set(["image/svg+xml", "image/png", "image/jpeg", "image/webp"]);

export async function POST(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ ok: false, message: "Unauthorized" }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get("file");

  if (!(file instanceof File) || !allowedTypes.has(file.type)) {
    return NextResponse.json(
      { ok: false, message: "SVG, PNG, JPG эсвэл WebP зураг оруулна уу." },
      { status: 400 },
    );
  }

  const extension = getExtension(file);
  const filename = `${Date.now()}-${slugPart(file.name)}.${extension}`;
  const uploadDir = path.join(process.cwd(), "public", "uploads", "products");
  await mkdir(uploadDir, { recursive: true });
  await writeFile(path.join(uploadDir, filename), Buffer.from(await file.arrayBuffer()));

  return NextResponse.json({
    ok: true,
    path: `/uploads/products/${filename}`,
    storage: "local-fallback",
  });
}

function getExtension(file: File) {
  const extension = file.name.split(".").pop()?.toLowerCase();

  if (extension && ["svg", "png", "jpg", "jpeg", "webp"].includes(extension)) {
    return extension === "jpeg" ? "jpg" : extension;
  }

  return file.type === "image/svg+xml" ? "svg" : file.type.split("/")[1] ?? "png";
}

function slugPart(value: string) {
  return value
    .toLowerCase()
    .replace(/\.[a-z0-9]+$/i, "")
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 48);
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
