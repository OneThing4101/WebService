"use client";

import { useDeferredValue } from "react";
import { Filter, Search, SlidersHorizontal } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/products/product-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import type { Brand, Category, Product } from "@/lib/types";

interface ProductsExplorerProps {
  products: Product[];
  categories: Category[];
  brands: Brand[];
}

export function ProductsExplorer({
  products,
  categories,
  brands,
}: ProductsExplorerProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.get("q") ?? "";
  const selectedCategory = searchParams.get("category") ?? "";
  const selectedBrand = searchParams.get("brand") ?? "";
  const stockStatus = searchParams.get("stock") ?? "";
  const minPrice = searchParams.get("min") ?? "";
  const maxPrice = searchParams.get("max") ?? "";
  const deferredSearch = useDeferredValue(search);

  function updateParam(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());

    if (value.trim()) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    const nextQuery = params.toString();
    router.replace(nextQuery ? `${pathname}?${nextQuery}` : pathname, {
      scroll: false,
    });
  }

  const normalizedSearch = deferredSearch.trim().toLowerCase();

  const filteredProducts = products.filter((product) => {
    const categoryMatch = selectedCategory
      ? product.category === selectedCategory
      : true;
    const brandMatch = selectedBrand ? product.brand === selectedBrand : true;
    const stockMatch = stockStatus ? product.stockStatus === stockStatus : true;
    const minMatch = minPrice ? product.price >= Number(minPrice) : true;
    const maxMatch = maxPrice ? product.price <= Number(maxPrice) : true;
    const searchMatch = normalizedSearch
      ? [product.name, product.shortDescription]
          .join(" ")
          .toLowerCase()
          .includes(normalizedSearch)
      : true;

    return (
      categoryMatch && brandMatch && stockMatch && minMatch && maxMatch && searchMatch
    );
  });

  function clearFilters() {
    router.replace(pathname, { scroll: false });
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[300px_minmax(0,1fr)]">
      <aside className="h-fit rounded-[2rem] border border-border bg-white p-6 shadow-[0_20px_50px_rgba(14,34,64,0.06)]">
        <div className="flex items-center gap-3">
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <SlidersHorizontal className="h-5 w-5" />
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-ink">Шүүлтүүр</h2>
            <p className="text-sm text-muted">Ангилал, брэнд, үнэ, нөөцөөр шүүнэ.</p>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-ink">Хайлт</label>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
              <Input
                value={search}
                onChange={(event) => updateParam("q", event.target.value)}
                placeholder="Барааны нэр, тайлбар..."
                className="pl-11"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-ink">Ангилал</label>
            <Select
              value={selectedCategory}
              onChange={(event) => updateParam("category", event.target.value)}
            >
              <option value="">Бүгд</option>
              {categories.map((category) => (
                <option key={category.id} value={category.slug}>
                  {category.name}
                </option>
              ))}
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-ink">Брэнд</label>
            <Select
              value={selectedBrand}
              onChange={(event) => updateParam("brand", event.target.value)}
            >
              <option value="">Бүгд</option>
              {brands.map((brand) => (
                <option key={brand.id} value={brand.id}>
                  {brand.name}
                </option>
              ))}
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-ink">Үнэ</label>
            <div className="grid grid-cols-2 gap-3">
              <Input
                type="number"
                value={minPrice}
                onChange={(event) => updateParam("min", event.target.value)}
                placeholder="Мин"
              />
              <Input
                type="number"
                value={maxPrice}
                onChange={(event) => updateParam("max", event.target.value)}
                placeholder="Макс"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-ink">Нөөцийн төлөв</label>
            <Select
              value={stockStatus}
              onChange={(event) => updateParam("stock", event.target.value)}
            >
              <option value="">Бүгд</option>
              <option value="Бэлэн">Бэлэн</option>
              <option value="Захиалгаар">Захиалгаар</option>
              <option value="Түр дууссан">Түр дууссан</option>
            </Select>
          </div>

          <Button variant="outline" className="w-full" onClick={clearFilters}>
            Шүүлтүүр цэвэрлэх
          </Button>
        </div>
      </aside>

      <div className="space-y-6">
        <div className="flex flex-col gap-4 rounded-[2rem] border border-border bg-white p-5 shadow-[0_20px_50px_rgba(14,34,64,0.06)] sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Каталог
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold text-ink">
              Нийт {filteredProducts.length} бүтээгдэхүүн
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-panel px-4 py-2 text-sm text-muted">
            <Filter className="h-4 w-4 text-primary" />
            B2B болон жижиглэн борлуулалтын сонголтууд
          </div>
        </div>

        {filteredProducts.length ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => {
              const category = categories.find((item) => item.slug === product.category);
              const brand = brands.find((item) => item.id === product.brand);

              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  categoryName={category?.name ?? "Ангилал"}
                  brandName={brand?.name ?? "Брэнд"}
                />
              );
            })}
          </div>
        ) : (
          <div className="rounded-[2rem] border border-dashed border-border bg-panel/70 p-12 text-center">
            <h3 className="font-display text-2xl font-bold text-ink">
              Тохирох бүтээгдэхүүн олдсонгүй
            </h3>
            <p className="mt-3 text-sm leading-7 text-muted">
              Шүүлтүүрээ цэвэрлээд дахин үзнэ үү эсвэл холбоо барин техникийн зөвлөгөө аваарай.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
