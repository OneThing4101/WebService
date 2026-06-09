import Link from "next/link";
import type { ReactNode } from "react";
import { BarChart3, Inbox, LogOut, PackagePlus, ShoppingBag } from "lucide-react";
import { SiteLogo } from "@/components/layout/site-logo";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const adminNav = [
  { href: "/admin", label: "Dashboard", icon: BarChart3 },
  { href: "/admin/products", label: "Бүтээгдэхүүн", icon: ShoppingBag },
  { href: "/admin/products/new", label: "Шинэ бүтээгдэхүүн", icon: PackagePlus },
  { href: "/admin/inquiries", label: "Хүсэлтүүд", icon: Inbox },
];

export function AdminShell({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section className="min-h-[calc(100vh-5rem)] bg-[linear-gradient(135deg,#f8fbff_0%,#ffffff_55%,#fff6ed_100%)] py-8">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="h-fit rounded-[2rem] border border-border bg-white p-5 shadow-[0_24px_60px_rgba(14,34,64,0.08)]">
            <SiteLogo />
            <nav className="mt-8 grid gap-2">
              {adminNav.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "inline-flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-ink transition-colors hover:bg-panel hover:text-primary",
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <form action="/api/admin/logout" method="post" className="mt-6">
              <button
                type="submit"
                className={buttonVariants({
                  variant: "outline",
                  className: "w-full",
                })}
              >
                <LogOut className="h-4 w-4" />
                Гарах
              </button>
            </form>
          </aside>

          <main className="space-y-6">
            <div className="rounded-[2rem] border border-border bg-white p-6 shadow-[0_24px_60px_rgba(14,34,64,0.08)]">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                ProProc Admin
              </p>
              <h1 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
                {title}
              </h1>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
                {description}
              </p>
            </div>
            {children}
          </main>
        </div>
      </Container>
    </section>
  );
}
