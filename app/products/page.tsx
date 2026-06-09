import { Suspense } from "react";
import { ProductsExplorer } from "@/components/products/products-explorer";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/ui/container";
import { getBrands, getCategories } from "@/lib/data";
import { listManagedProducts } from "@/lib/catalog-store";
import { createPageMetadata } from "@/lib/metadata";

export const dynamic = "force-dynamic";

export const metadata = createPageMetadata({
  title: "Бүтээгдэхүүн",
  description:
    "Цахилгааны материал, гэрэлтүүлэг, автомат таслуур, кабель, самбар болон үйлдвэрийн тоног төхөөрөмжийн каталог.",
  path: "/products",
});

export default async function ProductsPage() {
  const products = await listManagedProducts();
  const categories = getCategories();
  const brands = getBrands();

  return (
    <>
      <PageHero
        eyebrow="Product Catalog"
        title="Цахилгаан бараа, тоног төхөөрөмжийн нэгдсэн каталог"
        description="B2B худалдан авалт, барилгын материалын нийлүүлэлт болон инженерийн сонголтод зориулсан шүүлтүүртэй бүтээгдэхүүний каталог."
        stats={
          <div className="grid gap-4 sm:grid-cols-3">
            <SummaryStat label="Бүтээгдэхүүн" value={String(products.length)} />
            <SummaryStat label="Ангилал" value={String(categories.length)} />
            <SummaryStat label="Брэнд" value={String(brands.length)} />
          </div>
        }
      />

      <section className="py-16 sm:py-20">
        <Container>
          <Suspense fallback={<ProductsExplorerFallback />}>
            <ProductsExplorer
              products={products}
              categories={categories}
              brands={brands}
            />
          </Suspense>
        </Container>
      </section>
    </>
  );
}

function SummaryStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.5rem] border border-border bg-white p-5">
      <p className="text-sm font-medium text-muted">{label}</p>
      <p className="mt-3 font-display text-3xl font-bold text-ink">{value}</p>
    </div>
  );
}

function ProductsExplorerFallback() {
  return (
    <div className="grid gap-8 lg:grid-cols-[300px_minmax(0,1fr)]">
      <div className="h-[420px] rounded-[2rem] border border-border bg-white shadow-[0_20px_50px_rgba(14,34,64,0.06)]" />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="h-[460px] rounded-[1.8rem] border border-border bg-white shadow-[0_20px_50px_rgba(14,34,64,0.06)]"
          />
        ))}
      </div>
    </div>
  );
}
