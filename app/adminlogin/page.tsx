import { redirect } from "next/navigation";
import { AdminLoginForm } from "@/components/admin/admin-login-form";
import { SiteLogo } from "@/components/layout/site-logo";
import { Container } from "@/components/ui/container";
import { createPageMetadata } from "@/lib/metadata";
import { isAdminRequest } from "@/lib/admin-session";

export const dynamic = "force-dynamic";

export const metadata = createPageMetadata({
  title: "Admin Login",
  description: "ProProc admin нэвтрэх хуудас.",
  path: "/adminlogin",
});

export default async function AdminLoginPage() {
  if (await isAdminRequest()) {
    redirect("/admin");
  }

  return (
    <section className="min-h-[calc(100vh-5rem)] bg-[linear-gradient(135deg,#f8fbff_0%,#ffffff_55%,#fff6ed_100%)] py-16">
      <Container className="mx-auto max-w-lg">
        <div className="rounded-[2rem] border border-border bg-white p-7 shadow-[0_28px_80px_rgba(14,34,64,0.1)]">
          <SiteLogo />
          <div className="mt-8 space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Secure Admin
            </p>
            <h1 className="font-display text-3xl font-bold text-ink">
              ProProc admin login
            </h1>
            <p className="text-sm leading-7 text-muted">
              Каталог, бүтээгдэхүүний зураг, үнэ болон хэрэглэгчийн хүсэлтүүдийг
              удирдах хамгаалалттай хэсэг.
            </p>
          </div>
          <div className="mt-7">
            <AdminLoginForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
