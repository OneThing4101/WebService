import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Boxes } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";
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
  return (
    <article className="group overflow-hidden rounded-[1.8rem] border border-border bg-white shadow-[0_20px_50px_rgba(14,34,64,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_65px_rgba(15,92,192,0.12)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-[linear-gradient(145deg,#f5f9ff_0%,#fff6ee_100%)]">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        <div className="absolute left-4 top-4">
          <Badge className="bg-white/90 text-primary">{categoryName}</Badge>
        </div>
      </div>

      <div className="space-y-5 p-6">
        <div className="flex items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 text-sm text-muted">
            <Boxes className="h-4 w-4 text-primary" />
            {brandName}
          </div>
          <span className="rounded-full bg-panel px-3 py-1 text-xs font-semibold text-ink">
            {product.stockStatus}
          </span>
        </div>

        <div>
          <h3 className="font-display text-xl font-bold text-ink">{product.name}</h3>
          <p className="mt-3 text-sm leading-7 text-muted">{product.shortDescription}</p>
        </div>

        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-muted">Үнэ</p>
            <p className="mt-1 font-display text-2xl font-bold text-primary">
              {formatPrice(product.price)}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href={`/products/${product.slug}`}
            className={buttonVariants({ variant: "outline", className: "flex-1" })}
          >
            Дэлгэрэнгүй
          </Link>
          <Link
            href={`/products/${product.slug}#inquiry-form`}
            className={buttonVariants({ className: "flex-1" })}
          >
            Үнийн санал авах
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
