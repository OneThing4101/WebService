"use client";

import { useDeferredValue, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { BrandCard } from "@/components/brands/brand-card";
import { Input } from "@/components/ui/input";
import { brandCategories, type BrandWithLogoStatus } from "@/src/lib/brands";
import { cn } from "@/lib/utils";

interface BrandsExplorerProps {
  brands: BrandWithLogoStatus[];
}

export function BrandsExplorer({ brands }: BrandsExplorerProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Бүгд");
  const deferredSearch = useDeferredValue(search);

  const normalizedSearch = deferredSearch.trim().toLowerCase();
  const defaultView = category === "Бүгд" && !normalizedSearch;
  const filteredBrands = brands.filter((brand) => {
    const categoryMatch = category === "Бүгд" || brand.category === category;
    const searchMatch = normalizedSearch
      ? [
          brand.name,
          brand.description,
          brand.category,
          brand.slug,
          ...(brand.keywords ?? []),
        ]
          .join(" ")
          .toLowerCase()
          .includes(normalizedSearch)
      : true;

    return categoryMatch && searchMatch;
  });
  const visibleCount = defaultView ? brands.length : filteredBrands.length;

  return (
    <div className="space-y-8">
      <div className="rounded-[2rem] border border-border bg-white p-5 shadow-[0_22px_60px_rgba(15,32,58,0.07)]">
        <div className="grid gap-4 lg:grid-cols-[minmax(260px,0.8fr)_minmax(0,1.2fr)] lg:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <SlidersHorizontal className="h-4 w-4" />
              Brand Filter
            </div>
            <h2 className="mt-4 font-display text-2xl font-bold text-ink">
              Брэнд хайх, ангиллаар шүүх
            </h2>
            <p className="mt-2 text-sm leading-7 text-muted">
              Нэр, тайлбар, “Mongolia” keyword эсвэл техникийн чиглэлээр хайж болно.
            </p>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
              <Input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Жишээ: Siemens PLC Mongolia, fire, battery..."
                className="h-12 rounded-full pl-11"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {["Бүгд", ...brandCategories].map((item) => {
                const active = item === category;

                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setCategory(item)}
                    className={cn(
                      "rounded-full border px-4 py-2 text-xs font-semibold transition-colors sm:text-sm",
                      active
                        ? "border-accent bg-accent text-ink shadow-[0_12px_28px_rgba(242,140,40,0.2)]"
                        : "border-border bg-white text-muted hover:border-primary/40 hover:text-primary",
                    )}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
          {visibleCount} / {brands.length} брэнд
        </p>
        <p className="text-sm text-muted">
          Logo asset байхгүй үед category icon fallback автоматаар гарна.
        </p>
      </div>

      {(defaultView || filteredBrands.length > 0) ? (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {defaultView
            ? brands.map((brand) => <BrandCard key={brand.id} brand={brand} />)
            : filteredBrands.map((brand) => (
                <BrandCard key={brand.id} brand={brand} />
              ))}
        </div>
      ) : (
        <div className="rounded-[2rem] border border-dashed border-border bg-panel/70 p-10 text-center">
          <h3 className="font-display text-2xl font-bold text-ink">
            Тохирох брэнд олдсонгүй
          </h3>
          <p className="mt-3 text-sm leading-7 text-muted">
            Хайлтаа өөрчилнө үү эсвэл хэрэгтэй брэндийн нэрээр үнийн санал аваарай.
          </p>
        </div>
      )}
    </div>
  );
}
