import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
  stats?: ReactNode;
  className?: string;
}

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  stats,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-border bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)] py-16 sm:py-20",
        className,
      )}
    >
      <div className="absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_top_right,rgba(242,140,40,0.18),transparent_35%),radial-gradient(circle_at_top_left,rgba(15,92,192,0.12),transparent_42%)]" />
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(280px,1fr)] lg:items-end">
          <div className="space-y-6">
            <Badge>{eyebrow}</Badge>
            <div className="space-y-4">
              <h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                {title}
              </h1>
              <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
                {description}
              </p>
            </div>
            {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
          </div>
          {stats ? (
            <div className="rounded-[2rem] border border-white/70 bg-white p-6 shadow-[0_30px_80px_rgba(15,92,192,0.12)]">
              {stats}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
