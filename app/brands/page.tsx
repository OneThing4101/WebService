import Link from "next/link";
import { ArrowRight, Boxes, Factory, ShieldCheck, Zap } from "lucide-react";
import { BrandLogo } from "@/components/brands/brand-logo";
import { BrandsExplorer } from "@/components/brands/brands-explorer";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { NetworkBackground } from "@/components/visual/network-background";
import { createPageMetadata } from "@/lib/metadata";
import {
  getBrandsWithLogoStatus,
  getFeaturedBrandsWithLogoStatus,
} from "@/src/lib/brand-assets";

export const metadata = createPageMetadata({
  title: "Брэндүүд",
  description:
    "ProProc-ийн нийлүүлэх боломжтой цахилгаан, автоматжуулалт, уул уурхай, галын аюулгүй байдал, сүлжээ холбоо, HVAC болон үйлдвэрийн брэндүүд.",
  path: "/brands",
});

export default function BrandsPage() {
  const brands = getBrandsWithLogoStatus();
  const featuredBrands = getFeaturedBrandsWithLogoStatus(6);

  return (
    <div className="bg-[#fbfdff]">
      <section className="relative overflow-hidden border-b border-border bg-[#f8fbff] py-16 sm:py-20">
        <NetworkBackground opacity={0.2} />
        <div className="absolute -right-24 top-4 h-80 w-80 rounded-full bg-sky-200/35 blur-3xl" />
        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.7fr)] lg:items-end">
            <div className="max-w-4xl">
              <p className="inline-flex rounded-full border border-slate-200 bg-white/75 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary shadow-sm">
                Supplier Brand Network
              </p>
              <h1 className="mt-5 font-display text-4xl font-bold leading-[1.02] tracking-tight text-ink sm:text-5xl lg:text-6xl">
                Нийлүүлэх боломжтой брэндүүд
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                ProProc нь цахилгаан, автоматжуулалт, аж үйлдвэрийн тоног төхөөрөмж,
                уул уурхай, галын аюулгүй байдал, сүлжээ холбоо, HVAC, багаж
                хэрэгсэл, battery болон механик сэлбэгийн олон улсын брэндүүдээр
                үнийн санал гарган нийлүүлнэ.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="#brand-grid" className={buttonVariants({ size: "lg" })}>
                  Брэндүүд харах
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className={buttonVariants({ variant: "outline", size: "lg" })}
                >
                  Үнийн санал авах
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white/88 p-6 shadow-[0_24px_70px_rgba(15,32,58,0.07)] backdrop-blur-md">
              <div className="grid gap-4 sm:grid-cols-2">
                <HeroMetric icon={Boxes} label="Нийт брэнд" value={`${brands.length}`} />
                <HeroMetric icon={Zap} label="Чиглэл" value="11" />
                <HeroMetric icon={Factory} label="Supply" value="B2B" />
                <HeroMetric icon={ShieldCheck} label="Logo" value="Safe" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-14">
        <Container>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_20px_60px_rgba(15,32,58,0.055)] sm:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                  Featured supplier brands
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold text-ink">
                  Гол нийлүүлэлтийн брэндүүд
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-muted">
                SIEMENS, JOHNSON CONTROLS, OMRON, ASCO, PFISTERER, CIGWELD зэрэг
                брэндүүдийг түргэн хайлттай бүрэн жагсаалтын өмнө онцлов.
              </p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {featuredBrands.map((brand) => (
                <article
                  key={brand.id}
                  className="rounded-[1.4rem] border border-border bg-white p-3 text-center shadow-[0_16px_40px_rgba(15,32,58,0.05)]"
                >
                  <BrandLogo brand={brand} className="h-20 rounded-[1rem] border-none" />
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    {brand.category}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="brand-grid" className="pb-14 sm:pb-20">
        <Container>
          <BrandsExplorer brands={brands} />
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="rounded-[2rem] border border-border bg-[linear-gradient(135deg,#0f203a_0%,#0f5cc0_68%,#f28c28_160%)] p-6 text-white shadow-[0_30px_90px_rgba(15,32,58,0.18)] sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <h2 className="font-display text-3xl font-bold">
                  Танд хэрэгтэй брэнд, тоног төхөөрөмж байна уу?
                </h2>
                <p className="mt-3 text-sm leading-7 text-white/80 sm:text-base">
                  Бид олон улсын брэндийн цахилгаан, автоматжуулалт, уул уурхай,
                  галын аюулгүй байдал болон үйлдвэрийн тоног төхөөрөмжийн үнийн
                  санал гаргана.
                </p>
              </div>
              <Link
                href="/contact"
                className={buttonVariants({
                  variant: "secondary",
                  size: "lg",
                  className: "shrink-0",
                })}
              >
                Үнийн санал авах
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

function HeroMetric({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Boxes;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[1.4rem] border border-slate-200 bg-[#f8fbff] p-4">
      <Icon className="h-5 w-5 text-primary" />
      <p className="mt-4 font-display text-3xl font-bold text-ink">{value}</p>
      <p className="mt-1 text-sm font-medium text-muted">{label}</p>
    </div>
  );
}
