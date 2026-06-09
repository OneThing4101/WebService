"use client";

import Link from "next/link";
import { useState, useTransition } from "react";
import { Edit3, Plus, Trash2 } from "lucide-react";
import { ProductImage } from "@/components/products/product-image";
import { buttonVariants, Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";
import type { Brand, Category, Product } from "@/lib/types";

export function AdminProductsTable({
  initialProducts,
  categories,
  brands,
}: {
  initialProducts: Product[];
  categories: Category[];
  brands: Brand[];
}) {
  const [products, setProducts] = useState(initialProducts);
  const [isPending, startTransition] = useTransition();

  function deleteProduct(product: Product) {
    if (!window.confirm(`${product.name} бүтээгдэхүүнийг устгах уу?`)) {
      return;
    }

    startTransition(async () => {
      const response = await fetch(`/api/admin/products/${product.id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setProducts((current) => current.filter((item) => item.id !== product.id));
      }
    });
  }

  return (
    <div className="rounded-[2rem] border border-border bg-white p-5 shadow-[0_24px_60px_rgba(14,34,64,0.08)]">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-display text-2xl font-bold text-ink">Каталог</h2>
          <p className="mt-1 text-sm text-muted">
            Нэр, үнэ, зураг, stock status болон тайлбарыг удирдана.
          </p>
        </div>
        <Link href="/admin/products/new" className={buttonVariants()}>
          <Plus className="h-4 w-4" />
          Шинэ бүтээгдэхүүн
        </Link>
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[860px] text-left text-sm">
          <thead className="text-xs uppercase tracking-[0.16em] text-muted">
            <tr className="border-b border-border">
              <th className="py-3 pr-4">Бүтээгдэхүүн</th>
              <th className="px-4 py-3">Ангилал</th>
              <th className="px-4 py-3">Брэнд</th>
              <th className="px-4 py-3">Үнэ</th>
              <th className="px-4 py-3">Stock</th>
              <th className="py-3 pl-4 text-right">Үйлдэл</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b border-border/70 last:border-0">
                <td className="py-4 pr-4">
                  <div className="flex items-center gap-3">
                    <ProductImage
                      src={product.images[0]}
                      alt={product.name}
                      category={product.category}
                      className="h-16 w-20 rounded-2xl"
                      imageClassName="p-3"
                      sizes="80px"
                    />
                    <div>
                      <p className="font-semibold text-ink">{product.name}</p>
                      <p className="mt-1 max-w-xs truncate text-xs text-muted">
                        {product.slug}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4">
                  {categories.find((category) => category.slug === product.category)?.name ??
                    product.category}
                </td>
                <td className="px-4 py-4">
                  {brands.find((brand) => brand.id === product.brand)?.name ?? product.brand}
                </td>
                <td className="px-4 py-4 font-semibold text-primary">
                  {formatPrice(product.price)}
                </td>
                <td className="px-4 py-4">{product.stockStatus}</td>
                <td className="py-4 pl-4">
                  <div className="flex justify-end gap-2">
                    <Link
                      href={`/admin/products/${product.id}/edit`}
                      className={buttonVariants({ variant: "outline", size: "sm" })}
                    >
                      <Edit3 className="h-4 w-4" />
                      Засах
                    </Link>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      disabled={isPending}
                      onClick={() => deleteProduct(product)}
                    >
                      <Trash2 className="h-4 w-4" />
                      Устгах
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
