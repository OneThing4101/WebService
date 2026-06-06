import type { Brand } from "@/lib/types";

interface BrandCardProps {
  brand: Brand;
}

export function BrandCard({ brand }: BrandCardProps) {
  return (
    <article className="rounded-[1.8rem] border border-border bg-white p-6 shadow-[0_20px_50px_rgba(14,34,64,0.06)]">
      <div className="flex h-20 items-center justify-center rounded-[1.4rem] border border-dashed border-border bg-[linear-gradient(145deg,#ffffff_0%,#f7fbff_100%)] px-5 text-center">
        <span className="font-display text-xl font-bold tracking-wide text-ink">
          {brand.name}
        </span>
      </div>
      <div className="mt-5 space-y-4">
        <div>
          <h3 className="font-display text-2xl font-bold text-ink">{brand.name}</h3>
          <p className="mt-2 text-sm leading-7 text-muted">{brand.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {brand.productCategories?.map((category) => (
            <span
              key={category}
              className="rounded-full bg-panel px-3 py-1 text-xs font-semibold text-ink"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
