import { BrandCard } from "@/components/brands/brand-card";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/ui/container";
import { getBrands } from "@/lib/data";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Брэндүүд",
  description:
    "Хамтран ажилладаг брэндүүдийн placeholder бүтэц, ангилал болон бүтээгдэхүүний чиглэлийг танилцуулах хуудас.",
  path: "/brands",
});

export default function BrandsPage() {
  const brands = getBrands();

  return (
    <>
      <PageHero
        eyebrow="Partner Network"
        title="Хамтран ажилладаг брэндүүд"
        description="International distributor, partner supply chain чиглэлийн clean corporate харагдацтай, дараа нь бодит logo asset-уудаар шууд солигдох бүтэц."
        stats={
          <div className="grid gap-4 sm:grid-cols-3">
            <StatBlock label="Нийт брэнд" value={String(brands.length)} />
            <StatBlock label="Салбар" value="Sales + Service" />
            <StatBlock label="Mode" value="Placeholder Ready" />
          </div>
        }
      />

      <section className="py-16 sm:py-20">
        <Container className="space-y-10">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {brands.map((brand) => (
              <BrandCard key={brand.id} brand={brand} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

function StatBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.5rem] border border-border bg-white p-5">
      <p className="text-sm font-medium text-muted">{label}</p>
      <p className="mt-3 font-display text-2xl font-bold text-ink">{value}</p>
    </div>
  );
}
