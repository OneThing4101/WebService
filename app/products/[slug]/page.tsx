import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BadgeCheck, Boxes, ChevronRight } from "lucide-react";
import { ProductCard } from "@/components/products/product-card";
import { ProductGallery } from "@/components/products/product-gallery";
import { InquiryForm } from "@/components/shared/inquiry-form";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import {
  getBrandById,
  getBrands,
  getCategories,
  getCategoryBySlug,
} from "@/lib/data";
import { listManagedProducts } from "@/lib/catalog-store";
import { createPageMetadata } from "@/lib/metadata";
import { formatPrice } from "@/lib/utils";

type ProductDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const products = await listManagedProducts();
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return createPageMetadata({
      title: "Бүтээгдэхүүн олдсонгүй",
      description: "Хайсан бүтээгдэхүүний мэдээлэл олдсонгүй.",
      path: `/products/${slug}`,
    });
  }

  return createPageMetadata({
    title: product.name,
    description: product.shortDescription,
    path: `/products/${product.slug}`,
  });
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { slug } = await params;
  const products = await listManagedProducts();
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const category = getCategoryBySlug(product.category);
  const brand = getBrandById(product.brand);
  const relatedProducts = products
    .filter((item) => item.slug !== product.slug && item.category === product.category)
    .slice(0, 4);
  const categories = getCategories();
  const brands = getBrands();
  const priceLabel = formatPrice(product.price);

  return (
    <>
      <section className="border-b border-border bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)] py-12 sm:py-16">
        <Container>
          <div className="space-y-5">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Бүтээгдэхүүн рүү буцах
            </Link>
            <div className="flex flex-wrap items-center gap-3">
              <Badge>{category?.name ?? "Ангилал"}</Badge>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm text-muted">
                <Boxes className="h-4 w-4 text-primary" />
                {brand?.name ?? "Брэнд"}
              </span>
            </div>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
              <div>
                <h1 className="max-w-4xl font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                  {product.name}
                </h1>
                <p className="mt-4 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                  {product.description}
                </p>
              </div>
              <div className="rounded-[1.8rem] border border-border bg-white p-6 shadow-[0_20px_50px_rgba(14,34,64,0.06)]">
                <p className="text-sm font-medium text-muted">Үнэ</p>
                <p className="mt-2 font-display text-4xl font-bold text-primary">
                  {priceLabel}
                </p>
                <p className="mt-4 inline-flex rounded-full bg-panel px-4 py-2 text-sm font-semibold text-ink">
                  Нөөц: {product.stockStatus}
                </p>
                <Link
                  href="#inquiry-form"
                  className={buttonVariants({ className: "mt-5 w-full" })}
                >
                  Энэ бүтээгдэхүүний үнийн санал авах
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_380px]">
          <div className="space-y-8">
            <ProductGallery
              images={product.images}
              alt={product.name}
              category={product.category}
            />

            <div className="rounded-[2rem] border border-border bg-white p-6 shadow-[0_20px_50px_rgba(14,34,64,0.06)] sm:p-8">
              <div className="flex items-center gap-3">
                <BadgeCheck className="h-5 w-5 text-primary" />
                <h2 className="font-display text-2xl font-bold text-ink">
                  Техникийн үзүүлэлт
                </h2>
              </div>
              <div className="mt-6 divide-y divide-border">
                {product.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="grid gap-3 py-4 sm:grid-cols-[220px_minmax(0,1fr)]"
                  >
                    <span className="text-sm font-medium text-muted">{spec.label}</span>
                    <span className="text-sm font-semibold text-ink">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-[2rem] border border-border bg-white p-6 shadow-[0_20px_50px_rgba(14,34,64,0.06)]">
              <h2 className="font-display text-2xl font-bold text-ink">
                Бүтээгдэхүүний товч мэдээлэл
              </h2>
              <div className="mt-5 grid gap-4">
                <InfoLine label="Брэнд" value={brand?.name ?? "Тодорхойгүй"} />
                <InfoLine label="Ангилал" value={category?.name ?? "Тодорхойгүй"} />
                <InfoLine label="Үнэ" value={priceLabel} />
                <InfoLine label="Нөөц" value={product.stockStatus} />
              </div>
            </div>

            <InquiryForm
              productId={product.id}
              title={`${product.name} бүтээгдэхүүний хүсэлт`}
              description="Техникийн шаардлага, хүргэлтийн нөхцөл болон нэмэлт мэдээллээ бичиж илгээнэ үү."
              submitLabel="Энэ бүтээгдэхүүний үнийн санал авах"
            />
          </div>
        </Container>
      </section>

      <section className="bg-panel/[0.55] py-16 sm:py-20">
        <Container className="space-y-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                Related Products
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold text-ink">
                Төстэй бүтээгдэхүүнүүд
              </h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {relatedProducts.map((item) => {
              const itemCategory = categories.find((entry) => entry.slug === item.category);
              const itemBrand = brands.find((entry) => entry.id === item.brand);

              return (
                <ProductCard
                  key={item.id}
                  product={item}
                  categoryName={itemCategory?.name ?? "Ангилал"}
                  brandName={itemBrand?.name ?? "Брэнд"}
                />
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}

function InfoLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.4rem] bg-panel/70 px-4 py-4">
      <p className="text-sm font-medium text-muted">{label}</p>
      <p className="mt-2 text-base font-semibold text-ink">{value}</p>
    </div>
  );
}
