import crypto from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const ADMIN_COOKIE = "proproc_admin_session";
const ONE_DAY_SECONDS = 60 * 60 * 24;

type AdminTokenPayload = {
  email: string;
  exp: number;
};

export function getAdminCredentials() {
  return {
    email: process.env.ADMIN_EMAIL ?? "admin@pro.proc.mn",
    password: process.env.ADMIN_PASSWORD ?? "",
    usingDevDefaults: !process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD,
  };
}

export function getAdminCookieName() {
  return ADMIN_COOKIE;
}

export function getAdminCookieOptions() {
  return {
    httpOnly: true,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: ONE_DAY_SECONDS,
  };
}

export function createAdminToken(email: string) {
  const payload: AdminTokenPayload = {
    email,
    exp: Date.now() + ONE_DAY_SECONDS * 1000,
  };
  const encodedPayload = Buffer.from(JSON.stringify(payload)).toString("base64url");
  return `${encodedPayload}.${signPayload(encodedPayload)}`;
}

export function verifyAdminToken(token?: string) {
  if (!token) {
    return false;
  }

  const [encodedPayload, signature] = token.split(".");
  if (!encodedPayload || !signature || signature !== signPayload(encodedPayload)) {
    return false;
  }

  try {
    const payload = JSON.parse(
      Buffer.from(encodedPayload, "base64url").toString("utf8"),
    ) as AdminTokenPayload;
    const { email } = getAdminCredentials();
    return payload.email === email && payload.exp > Date.now();
  } catch {
    return false;
  }
}

export async function isAdminRequest() {
  const token = (await cookies()).get(ADMIN_COOKIE)?.value;
  return verifyAdminToken(token);
}

export async function requireAdminSession() {
  if (!(await isAdminRequest())) {
    redirect("/adminlogin");
  }
}

function signPayload(payload: string) {
  const secret =
    process.env.ADMIN_SESSION_SECRET ??
    process.env.ADMIN_PASSWORD ??
    "proproc-local-dev-session-secret";

  return crypto.createHmac("sha256", secret).update(payload).digest("base64url");
}
