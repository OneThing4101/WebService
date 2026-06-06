import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { BrandCard } from "@/components/brands/brand-card";
import { CategoryGrid } from "@/components/home/category-grid";
import { CtaBanner } from "@/components/home/cta-banner";
import { HomeHero } from "@/components/home/home-hero";
import { ProductCard } from "@/components/products/product-card";
import { ServiceCard } from "@/components/services/service-card";
import { IconToken } from "@/components/shared/icon-token";
import { Reveal } from "@/components/shared/reveal";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  companyMetrics,
  getBrands,
  getCategories,
  getFeaturedProducts,
  getServicesPreview,
  whyChooseUs,
} from "@/lib/data";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Цахилгаан бараа, тоног төхөөрөмж, үйлчилгээ",
  description:
    "MonVolt Supply-ийн цахилгаан бараа, тоног төхөөрөмж, барилгын материал, угсралт засварын цогц үйлчилгээний танилцуулга.",
  path: "/",
});

export default function HomePage() {
  const categories = getCategories();
  const featuredProducts = getFeaturedProducts();
  const servicesPreview = getServicesPreview();
  const brands = getBrands();

  return (
    <>
      <HomeHero />

      <Container>
        <CategoryGrid categories={categories} />
      </Container>

      <section className="bg-panel/[0.55] py-16 sm:py-20">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Онцлох бараа"
            title="Итгэл төрүүлэх худалдааны каталог"
            description="Компанийн болон жижиглэн борлуулалтын аль алинд тохирох, техникийн мэдээлэл тодорхой, үнийн санал авах боломжтой бүтээгдэхүүнүүд."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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

      <section className="py-16 sm:py-20">
        <Container className="space-y-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Сервис үйлчилгээ"
              title="Угсралт, засвар, оношилгооны мэргэжлийн баг"
              description="Бараа нийлүүлэлт дээр зогсохгүй, талбайн гүйцэтгэл, засвар, урсгал сервисийг нэг дороос хариуцна."
            />
            <Link href="/services" className={buttonVariants({ variant: "outline" })}>
              Бүх үйлчилгээ
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {servicesPreview.map((service, index) => (
              <Reveal key={service.id} delay={index * 0.05}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="overflow-hidden bg-panel/[0.55] py-16 sm:py-20">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Хамтран ажилладаг байгууллагууд / Брэндүүд"
            title="Олон улсын болон төслийн placeholder брэндийн бүтэц"
            description="Одоогоор placeholder харагдацтай. Дараа нь бодит логонуудыг `brand.logo` талбарт холбож шууд солих боломжтой."
          />

          <div className="brand-marquee">
            <div className="brand-marquee-track">
              {[...brands, ...brands].map((brand, index) => (
                <div
                  key={`${brand.id}-${index}`}
                  className="min-w-[180px] rounded-[1.5rem] border border-border bg-white px-6 py-5 text-center shadow-[0_18px_40px_rgba(14,34,64,0.05)]"
                >
                  <p className="font-display text-lg font-bold text-ink">{brand.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {brands.slice(0, 4).map((brand, index) => (
              <Reveal key={brand.id} delay={index * 0.05}>
                <BrandCard brand={brand} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Яагаад бид"
            title="Төсөл, худалдан авалт, сервис дээр төвлөрсөн компанийн байршуулалт"
            description="B2B болон B2C харилцагчдын итгэлийг нэмэхэд чиглэсэн corporate messaging болон үйлчилгээний давуу талууд."
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
