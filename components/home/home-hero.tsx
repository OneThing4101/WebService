import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { NetworkBackground } from "@/components/visual/network-background";

const supplyStats = [
  { value: "5+", label: "жил туршлага" },
  { value: "60+", label: "брэнд" },
  { value: "24 цаг", label: "дотор хариу" },
];

export function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-[#f8fbff]">
      <NetworkBackground opacity={0.36} />
      <div className="absolute -right-24 top-10 h-96 w-96 rounded-full bg-sky-200/35 blur-3xl" />
      <Container className="relative py-16 sm:py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center">
          <Reveal className="space-y-8">
            <Badge className="bg-white/75 shadow-sm">Industrial · Electrical · Supply</Badge>
            <div className="space-y-5">
              <h1 className="max-w-5xl font-display text-4xl font-bold leading-[1.02] tracking-tight text-ink sm:text-5xl lg:text-7xl">
                Үйлдвэр, уурхай, барилгын цахилгаан нийлүүлэлтийн найдвартай түнш
              </h1>
              <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
                Брэнд нэр, part number, техникийн шаардлага дээр үндэслэн цахилгаан
                тоног төхөөрөмж, автоматжуулалт, багаж хэрэгсэл болон үйлдвэрийн
                сэлбэгийн үнийн санал бэлтгэнэ.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className={buttonVariants({ size: "lg" })}>
                Үнийн санал авах
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/brands"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "bg-white/80 shadow-none",
                })}
              >
                Брэндүүд харах
              </Link>
            </div>

            <div className="flex flex-wrap gap-2.5 text-sm font-medium text-ink">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-4 py-2 shadow-sm">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Албан ёсны нийлүүлэлт
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-4 py-2 shadow-sm">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Инженерийн зөвлөгөө
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-4 py-2 shadow-sm">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                B2B procurement
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-ink p-6 text-white shadow-[0_34px_90px_rgba(15,32,58,0.22)] sm:p-7">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/35 blur-3xl" />
              <div className="absolute -bottom-12 left-8 h-36 w-36 rounded-full bg-accent/20 blur-3xl" />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-200/80">
                  Project Supply
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold">ProProc Supply</h2>
                <p className="mt-3 text-sm leading-6 text-white/65">
                  BOQ, part number, brand requirement дээр тулгуурлан нийлүүлэлтийн
                  үнийн санал, хугацаа, боломжит хувилбарыг бэлтгэнэ.
                </p>

                <div className="mt-7 grid gap-3">
                  {supplyStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3"
                    >
                      <span className="text-sm font-medium text-white/70">{stat.label}</span>
                      <span className="font-display text-2xl font-bold text-white">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
