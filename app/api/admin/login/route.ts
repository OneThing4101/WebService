import { NextResponse } from "next/server";
import { z } from "zod";
import {
  createAdminToken,
  getAdminCookieName,
  getAdminCookieOptions,
  getAdminCredentials,
} from "@/lib/admin-session";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export async function POST(request: Request) {
  const parsed = loginSchema.safeParse(await request.json().catch(() => null));

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: "Имэйл болон нууц үгээ зөв оруулна уу." },
      { status: 400 },
    );
  }

  const credentials = getAdminCredentials();

  if (!credentials.password) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "ADMIN_PASSWORD env тохируулаагүй байна. .env.local файлд admin нууц үгээ тохируулна уу.",
      },
      { status: 503 },
    );
  }

  if (
    parsed.data.email !== credentials.email ||
    parsed.data.password !== credentials.password
  ) {
    return NextResponse.json(
      { ok: false, message: "Нэвтрэх мэдээлэл буруу байна." },
      { status: 401 },
    );
  }

  const response = NextResponse.json({
    ok: true,
    devWarning: credentials.usingDevDefaults
      ? "ADMIN_EMAIL/ADMIN_PASSWORD env тохируулаагүй тул dev default ашиглаж байна."
      : null,
  });
  response.cookies.set(
    getAdminCookieName(),
    createAdminToken(credentials.email),
    getAdminCookieOptions(),
  );

  return response;
}
