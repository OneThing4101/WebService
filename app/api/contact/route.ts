import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { createManagedInquiry } from "@/lib/catalog-store";

const contactSchema = z.object({
  name: z.string().min(2, "Нэрээ оруулна уу."),
  phone: z.string().min(6, "Утасны дугаараа оруулна уу."),
  email: z.string().email("Имэйл буруу байна.").optional().or(z.literal("")),
  message: z.string().min(5, "Хүсэлтээ дэлгэрэнгүй бичнэ үү."),
  productId: z.string().optional(),
  interest: z.string().optional(),
});

export async function POST(request: Request) {
  const parsed = contactSchema.safeParse(await request.json().catch(() => null));

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: "Формын мэдээлэл дутуу байна.", issues: parsed.error.issues },
      { status: 400 },
    );
  }

  const inquiry = await createManagedInquiry({
    name: parsed.data.name.trim(),
    phone: parsed.data.phone.trim(),
    email: parsed.data.email?.trim() || undefined,
    message: [
      parsed.data.interest ? `Сонирхол: ${parsed.data.interest}` : null,
      parsed.data.message.trim(),
    ]
      .filter(Boolean)
      .join("\n\n"),
    productId: parsed.data.productId,
  });
  const emailResult = await sendAdminEmail({
    ...parsed.data,
    date: inquiry.createdAt,
  });

  return NextResponse.json({
    ok: true,
    inquiry,
    devWarning: emailResult.devWarning,
  });
}

async function sendAdminEmail(input: {
  name: string;
  phone: string;
  email?: string;
  message: string;
  productId?: string;
  interest?: string;
  date: string;
}) {
  const adminEmail = process.env.ADMIN_EMAIL;
  const resendApiKey = process.env.RESEND_API_KEY;
  const from = process.env.SMTP_FROM || "ProProc Website <onboarding@resend.dev>";

  if (!adminEmail || !resendApiKey) {
    console.warn(
      "Contact email skipped: ADMIN_EMAIL and RESEND_API_KEY are required for email notifications.",
    );
    return {
      devWarning:
        "ADMIN_EMAIL/RESEND_API_KEY тохируулаагүй тул имэйл илгээгээгүй. Inquiry хадгалагдсан.",
    };
  }

  const resend = new Resend(resendApiKey);
  await resend.emails.send({
    from,
    to: adminEmail,
    subject: "Шинэ хүсэлт — ProProc website",
    text: [
      "ProProc website дээрээс шинэ хүсэлт ирлээ.",
      "",
      `Нэр: ${input.name}`,
      `Утас: ${input.phone}`,
      `Имэйл: ${input.email || "-"}`,
      `Огноо: ${new Date(input.date).toLocaleString("mn-MN")}`,
      input.productId ? `Product ID: ${input.productId}` : null,
      input.interest ? `Сонирхол: ${input.interest}` : null,
      "",
      "Мессеж:",
      input.message,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  return { devWarning: null };
}
