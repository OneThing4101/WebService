import Link from "next/link";
import { ArrowRight, Boxes } from "lucide-react";
import { ProductImage } from "@/components/products/product-image";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn, formatPrice } from "@/lib/utils";
import type { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
  categoryName: string;
  brandName: string;
}

export function ProductCard({
  product,
  categoryName,
  brandName,
}: ProductCardProps) {
  const priceLabel = formatPrice(product.price);

  return (
    <article className="group flex h-full min-h-[520px] flex-col overflow-hidden rounded-[1.8rem] border border-border bg-white shadow-[0_20px_50px_rgba(14,34,64,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_28px_65px_rgba(15,92,192,0.12)]">
      <ProductImage
        src={product.images[0]}
        alt={product.name}
        category={product.category}
        className="aspect-[4/3] border-b border-border/80"
        imageClassName="transition-transform duration-500 group-hover:scale-105"
      />

      <div className="flex flex-1 flex-col space-y-5 p-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge className="border-primary/10 bg-primary/5 text-primary">
            {categoryName}
          </Badge>
          <span
            className={cn(
              "rounded-full px-3 py-1 text-xs font-semibold",
              product.stockStatus === "Бэлэн"
                ? "bg-emerald-50 text-emerald-700"
                : product.stockStatus === "Үнийн санал"
                  ? "bg-accent/15 text-ink"
                  : "bg-panel text-ink",
            )}
          >
            {product.stockStatus}
          </span>
        </div>

        <div className="inline-flex items-center gap-2 text-sm font-semibold text-muted">
          <Boxes className="h-4 w-4 text-primary" />
          {brandName}
        </div>

        <div className="flex-1">
          <h3 className="font-display text-xl font-bold leading-tight text-ink">
            {product.name}
          </h3>
          <p className="mt-3 text-sm leading-7 text-muted">{product.shortDescription}</p>
        </div>

        <div className="rounded-[1.25rem] bg-panel/70 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
            Үнэ
          </p>
          <p className="mt-1 font-display text-2xl font-bold text-primary">
            {priceLabel}
          </p>
        </div>

        <div className="grid gap-3">
          <Link
            href={`/products/${product.slug}`}
            className={buttonVariants({ variant: "outline", className: "w-full" })}
          >
            Дэлгэрэнгүй
          </Link>
          <Link
            href={`/products/${product.slug}#inquiry-form`}
            className={buttonVariants({
              variant: product.price === null ? "secondary" : "primary",
              className: "w-full",
            })}
          >
            Үнийн санал авах
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
