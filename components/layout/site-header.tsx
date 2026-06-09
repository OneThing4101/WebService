import Link from "next/link";
import { MobileNav } from "@/components/layout/mobile-nav";
import { SiteLogo } from "@/components/layout/site-logo";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { mainNavigation } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-white/90 backdrop-blur-xl">
      <Container>
        <div className="relative flex h-20 items-center justify-between gap-4">
          <SiteLogo />

          <nav className="hidden items-center gap-1 rounded-full border border-border bg-white/80 p-1 lg:flex">
            {mainNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-panel hover:text-primary",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className={buttonVariants({
                size: "md",
                className: "hidden shadow-none lg:inline-flex",
              })}
            >
              Үнийн санал авах
            </Link>
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
}
