import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { BrandLogo } from "@/components/brands/brand-logo";
import { CategoryGrid } from "@/components/home/category-grid";
import { CtaBanner } from "@/components/home/cta-banner";
import { HomeHero } from "@/components/home/home-hero";
import { ProductCard } from "@/components/products/product-card";
import { IconToken } from "@/components/shared/icon-token";
import { Reveal } from "@/components/shared/reveal";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  companyMetrics,
  getBrands,
  getCategories,
  whyChooseUs,
} from "@/lib/data";
import { listManagedProducts } from "@/lib/catalog-store";
import { createPageMetadata } from "@/lib/metadata";
import { getBrandsWithLogoStatus } from "@/src/lib/brand-assets";

const homeBrandSlugs = [
  "siemens",
  "johnson-controls",
  "omron",
  "asco-aventics",
  "pfisterer",
  "3m",
  "fluke",
  "schneider-electric",
  "philips",
  "axis",
];

export const dynamic = "force-dynamic";

export const metadata = createPageMetadata({
  title: "Цахилгаан бараа, тоног төхөөрөмжийн нийлүүлэлт",
  description:
    "ProProc-ийн цахилгаан бараа, тоног төхөөрөмж, автоматжуулалт, үйлдвэрийн материал болон сэлбэгийн нийлүүлэлтийн танилцуулга.",
  path: "/",
});

export default async function HomePage() {
  const categories = getCategories();
  const managedProducts = await listManagedProducts();
  const featuredProducts = managedProducts
    .filter((product) => product.featured)
    .slice(0, 8);
  const brands = getBrands();
  const allBrandsWithLogo = getBrandsWithLogoStatus();
  const homeBrands = homeBrandSlugs.flatMap((slug) =>
    allBrandsWithLogo.filter((brand) => brand.slug === slug).slice(0, 1),
  );

  return (
    <>
      <HomeHero />

      <Container>
        <CategoryGrid categories={categories} />
      </Container>

      <section className="bg-panel/[0.55] py-16 sm:py-20">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Онцлох бүтээгдэхүүн"
            title="Цахилгаан бараа, тоног төхөөрөмжийн каталог"
            description="Барилга, үйлдвэр, уул уурхай, оффисын хэрэглээнд зориулсан цахилгааны материал, автоматжуулалт, гэрэлтүүлэг, багаж хэрэгслийг нийлүүлнэ."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredProducts.map((product, index) => {
              const category = categories.find((item) => item.slug === product.category);
              const brand = brands.find((item) => item.id === product.brand);

              return (
                <Reveal key={product.id} delay={index * 0.05}>
                  <ProductCard
                    product={product}
                    categoryName={category?.name ?? "Ангилал"}
                    brandName={brand?.name ?? "Брэнд"}
                  />
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="overflow-hidden bg-white py-16 sm:py-20">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Supplier Brand Network"
            title="Нийлүүлэх боломжтой гол брэндүүд"
            description="Автоматжуулалт, цахилгаан тоног төхөөрөмж, хэмжилтийн багаж, battery, сүлжээ холбоо болон үйлдвэрийн хэрэгслийн брэндүүд."
          />

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {homeBrands.map((brand, index) => (
              <Reveal key={brand.id} delay={index * 0.05}>
                <article className="group flex h-full flex-col rounded-[1.5rem] border border-border bg-white p-3 shadow-[0_16px_44px_rgba(15,32,58,0.045)] transition-transform hover:-translate-y-0.5">
                  <BrandLogo
                    brand={brand}
                    className="h-20 rounded-[1.15rem] border-slate-100 bg-[#fbfdff]"
                  />
                  <div className="mt-4 flex flex-1 flex-col">
                    <h3 className="font-display text-base font-bold text-ink">
                      {brand.name}
                    </h3>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                      {brand.category}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="flex justify-center">
            <Link
              href="/brands"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className: "bg-white shadow-none",
              })}
            >
              Бүх брэнд харах
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Яагаад бид"
            title="Төсөл, худалдан авалт, нийлүүлэлт дээр төвлөрсөн ProProc"
            description="B2B болон B2C харилцагчдын итгэлийг нэмэхэд чиглэсэн corporate messaging болон нийлүүлэлтийн давуу талууд."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {whyChooseUs.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="rounded-[1.75rem] border border-border bg-white p-6 shadow-[0_20px_50px_rgba(14,34,64,0.06)]">
                  <IconToken name={item.icon as never} />
                  <h3 className="mt-6 font-display text-2xl font-bold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="grid gap-4 rounded-[2rem] border border-border bg-[linear-gradient(145deg,#ffffff_0%,#f8fbff_100%)] p-6 shadow-[0_24px_60px_rgba(14,34,64,0.06)] md:grid-cols-4">
            {companyMetrics.map((metric) => (
              <div key={metric.label} className="rounded-[1.5rem] bg-white p-5">
                <p className="font-display text-3xl font-bold text-primary">{metric.value}</p>
                <p className="mt-2 text-sm font-semibold text-ink">{metric.label}</p>
                <p className="mt-3 text-sm leading-6 text-muted">{metric.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-4">
        <Container>
          <div className="rounded-[2rem] border border-border bg-[linear-gradient(145deg,#f5f9ff_0%,#fff6ee_100%)] p-6 sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                  Шуурхай үнийн санал
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold text-ink">
                  BOQ, тендер, захиалга дээр инженерийн багтайгаа ярилцаарай
                </h2>
                <p className="mt-3 text-sm leading-7 text-muted">
                  B2B захиалга, барилгын материалын багц, үйлдвэрийн шинэчлэлийн төслийн
                  худалдан авалтын хугацааг богиносгоход тусална.
                </p>
              </div>
              <Link href="/contact" className={buttonVariants({ size: "lg" })}>
                <Phone className="h-4 w-4" />
                Инженертэй холбогдох
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
