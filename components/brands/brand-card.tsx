import { BrandLogo } from "@/components/brands/brand-logo";
import type { Brand, BrandWithLogoStatus } from "@/src/lib/brands";

interface BrandCardProps {
  brand: Brand | BrandWithLogoStatus;
}

export function BrandCard({ brand }: BrandCardProps) {
  return (
    <article className="flex h-full min-h-[330px] flex-col rounded-[1.8rem] border border-border bg-white p-5 shadow-[0_20px_50px_rgba(14,34,64,0.06)] transition-all duration-200 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_28px_70px_rgba(14,34,64,0.1)]">
      <BrandLogo
        brand={brand}
        className="h-24 bg-[linear-gradient(145deg,#ffffff_0%,#f7fbff_100%)]"
      />
      <div className="mt-5 flex flex-1 flex-col space-y-4">
        <div>
          <h3 className="font-display text-2xl font-bold text-ink">{brand.name}</h3>
          <p className="mt-2 text-sm leading-7 text-muted">{brand.description}</p>
        </div>
        <div className="mt-auto flex flex-wrap gap-2">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            {brand.category}
          </span>
          {(brand.keywords ?? []).slice(0, 2).map((keyword) => (
            <span
              key={keyword}
              className="rounded-full bg-panel px-3 py-1 text-xs font-semibold text-ink"
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
