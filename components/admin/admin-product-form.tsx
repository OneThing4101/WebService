"use client";

import { ChangeEvent, FormEvent, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Upload } from "lucide-react";
import { ProductImage } from "@/components/products/product-image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { Brand, Category, Product, StockStatus } from "@/lib/types";

const stockStatuses: StockStatus[] = ["Бэлэн", "Захиалгаар", "Үнийн санал", "Түр дууссан"];

type FormState = {
  name: string;
  slug: string;
  category: string;
  brand: string;
  price: string;
  quoteOnly: boolean;
  stockStatus: StockStatus;
  shortDescription: string;
  description: string;
  image: string;
  specs: string;
  featured: boolean;
};

export function AdminProductForm({
  product,
  categories,
  brands,
}: {
  product?: Product | null;
  categories: Category[];
  brands: Brand[];
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [notice, setNotice] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>(() => ({
    name: product?.name ?? "",
    slug: product?.slug ?? "",
    category: product?.category ?? categories[0]?.slug ?? "",
    brand: product?.brand ?? brands[0]?.id ?? "",
    price: product?.price === null || product?.price === undefined ? "" : String(product.price),
    quoteOnly: product?.price === null,
    stockStatus: product?.stockStatus ?? "Бэлэн",
    shortDescription: product?.shortDescription ?? "",
    description: product?.description ?? "",
    image: product?.images[0] ?? "",
    specs:
      product?.specs.map((spec) => `${spec.label}: ${spec.value}`).join("\n") ??
      "",
    featured: product?.featured ?? false,
  }));

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function uploadImage(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    const body = new FormData();
    body.append("file", file);
    const response = await fetch("/api/admin/uploads", {
      method: "POST",
      body,
    });
    const payload = (await response.json()) as { ok: boolean; path?: string; message?: string };

    if (!response.ok || !payload.ok || !payload.path) {
      setNotice(payload.message ?? "Зураг upload хийхэд алдаа гарлаа.");
      return;
    }

    update("image", payload.path);
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice(null);

    startTransition(async () => {
      const payload = {
        name: form.name,
        slug: form.slug,
        category: form.category,
        brand: form.brand,
        price: form.quoteOnly ? null : Number(form.price) || null,
        stockStatus: form.stockStatus,
        shortDescription: form.shortDescription,
        description: form.description,
        images: form.image ? [form.image] : [],
        specs: parseSpecs(form.specs),
        featured: form.featured,
      };
      const response = await fetch(
        product ? `/api/admin/products/${product.id}` : "/api/admin/products",
        {
          method: product ? "PATCH" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );
      const result = (await response.json()) as { ok: boolean; message?: string };

      if (!response.ok || !result.ok) {
        setNotice(result.message ?? "Хадгалах үед алдаа гарлаа.");
        return;
      }

      router.push("/admin/products");
      router.refresh();
    });
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-6 rounded-[2rem] border border-border bg-white p-6 shadow-[0_24px_60px_rgba(14,34,64,0.08)] xl:grid-cols-[minmax(0,1fr)_340px]"
    >
      <div className="space-y-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <Input
            value={form.name}
            onChange={(event) => update("name", event.target.value)}
            placeholder="Бүтээгдэхүүний нэр"
            required
          />
          <Input
            value={form.slug}
            onChange={(event) => update("slug", event.target.value)}
            placeholder="slug"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <select
            value={form.category}
            onChange={(event) => update("category", event.target.value)}
            className="h-11 rounded-2xl border border-border bg-white px-4 text-sm text-ink outline-none focus:border-primary"
          >
            {categories.map((category) => (
              <option key={category.slug} value={category.slug}>
                {category.name}
              </option>
            ))}
          </select>
          <select
            value={form.brand}
            onChange={(event) => update("brand", event.target.value)}
            className="h-11 rounded-2xl border border-border bg-white px-4 text-sm text-ink outline-none focus:border-primary"
          >
            {brands.map((brand) => (
              <option key={brand.id} value={brand.id}>
                {brand.name}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <Input
            type="number"
            min={0}
            value={form.price}
            disabled={form.quoteOnly}
            onChange={(event) => update("price", event.target.value)}
            placeholder="Үнэ"
          />
          <select
            value={form.stockStatus}
            onChange={(event) => update("stockStatus", event.target.value as StockStatus)}
            className="h-11 rounded-2xl border border-border bg-white px-4 text-sm text-ink outline-none focus:border-primary"
          >
            {stockStatuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
          <label className="inline-flex h-11 items-center gap-2 rounded-2xl border border-border px-4 text-sm font-medium text-ink">
            <input
              type="checkbox"
              checked={form.quoteOnly}
              onChange={(event) => update("quoteOnly", event.target.checked)}
            />
            Үнийн санал
          </label>
        </div>

        <Input
          value={form.shortDescription}
          onChange={(event) => update("shortDescription", event.target.value)}
          placeholder="Богино тайлбар"
        />
        <Textarea
          value={form.description}
          onChange={(event) => update("description", event.target.value)}
          placeholder="Дэлгэрэнгүй тайлбар"
          required
        />
        <Textarea
          value={form.specs}
          onChange={(event) => update("specs", event.target.value)}
          placeholder="Үзүүлэлтүүд: мөр бүр label: value"
        />
        <label className="inline-flex items-center gap-2 text-sm font-medium text-ink">
          <input
            type="checkbox"
            checked={form.featured}
            onChange={(event) => update("featured", event.target.checked)}
          />
          Нүүр хуудсанд онцлох
        </label>
        {notice ? <p className="text-sm font-medium text-red-600">{notice}</p> : null}
        <Button type="submit" disabled={isPending}>
          {isPending ? "Хадгалж байна..." : "Хадгалах"}
        </Button>
      </div>

      <div className="space-y-4">
        <ProductImage
          src={form.image}
          alt={form.name || "Product image"}
          category={form.category}
          className="aspect-square rounded-[2rem] border border-border"
        />
        <Input
          value={form.image}
          onChange={(event) => update("image", event.target.value)}
          placeholder="/products/example.svg"
        />
        <label className="flex cursor-pointer items-center justify-center gap-2 rounded-full border border-border bg-white px-4 py-3 text-sm font-semibold text-ink transition-colors hover:border-primary hover:text-primary">
          <Upload className="h-4 w-4" />
          Зураг upload хийх
          <input type="file" accept="image/svg+xml,image/png,image/jpeg,image/webp" onChange={uploadImage} className="sr-only" />
        </label>
        <p className="text-xs leading-6 text-muted">
          Local fallback нь `public/uploads/products/` руу хадгална. Production-д
          Supabase Storage bucket ашиглахаар env/schema тохируулна.
        </p>
      </div>
    </form>
  );
}

function parseSpecs(value: string) {
  return value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [label, ...rest] = line.split(":");
      return {
        label: label.trim(),
        value: rest.join(":").trim(),
      };
    })
    .filter((spec) => spec.label && spec.value);
}
