import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { companyMetrics } from "@/lib/data";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-[linear-gradient(135deg,#f8fbff_0%,#ffffff_52%,#fff5eb_100%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,92,192,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(242,140,40,0.16),transparent_32%)]" />
      <Container className="relative py-16 sm:py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_minmax(340px,0.95fr)] lg:items-center">
          <Reveal className="space-y-8">
            <Badge>Цахилгааны бараа · Сервис · Supply Chain</Badge>
            <div className="space-y-5">
              <h1 className="max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl">
                Цахилгаан бараа, тоног төхөөрөмж, үйлчилгээний найдвартай шийдэл
              </h1>
              <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
                Барилга, үйлдвэр, оффис, гэр ахуйн цахилгааны материал, тоног
                төхөөрөмж болон мэргэжлийн угсралт засварын үйлчилгээ.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/products" className={buttonVariants({ size: "lg" })}>
                Бүтээгдэхүүн үзэх
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                Үнийн санал авах
              </Link>
            </div>

            <div className="flex flex-wrap gap-3 text-sm text-muted">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 shadow-[0_16px_34px_rgba(14,34,64,0.06)]">
                <ShieldCheck className="h-4 w-4 text-primary" />
                Албан ёсны нийлүүлэлт
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 shadow-[0_16px_34px_rgba(14,34,64,0.06)]">
                <ShieldCheck className="h-4 w-4 text-primary" />
                Инженерийн зөвлөгөө
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 shadow-[0_16px_34px_rgba(14,34,64,0.06)]">
                <ShieldCheck className="h-4 w-4 text-primary" />
                B2B / B2C хамтын ажиллагаа
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-ink p-6 text-white shadow-[0_40px_100px_rgba(14,34,64,0.18)] sm:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(242,140,40,0.28),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent)]" />
              <div className="relative">
                <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center justify-between border-b border-white/10 pb-5">
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-white/[0.55]">
                        Project Supply Dashboard
                      </p>
                      <h2 className="mt-2 font-display text-2xl font-bold">
                        Нийлүүлэлт + Сервис
                      </h2>
                    </div>
                    <div className="rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent">
                      Active
                    </div>
                  </div>

                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    {companyMetrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded-3xl border border-white/10 bg-white/[0.06] p-4"
                      >
                        <div className="font-display text-2xl font-bold text-white">
                          {metric.value}
                        </div>
                        <div className="mt-1 text-sm font-medium text-white/80">
                          {metric.label}
                        </div>
                        <p className="mt-3 text-sm leading-6 text-white/60">
                          {metric.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
