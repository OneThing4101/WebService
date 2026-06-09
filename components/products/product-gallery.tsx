"use client";

import { useState } from "react";
import { ProductImage } from "@/components/products/product-image";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  images: string[];
  alt: string;
  category: string;
}

export function ProductGallery({ images, alt, category }: ProductGalleryProps) {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="space-y-4">
      <ProductImage
        src={activeImage}
        alt={alt}
        category={category}
        className="aspect-[5/4] rounded-[2rem] border border-border"
        imageClassName="p-10"
        sizes="(max-width: 1024px) 100vw, 50vw"
        priority
      />
      <div className="grid grid-cols-3 gap-3">
        {images.map((image, index) => (
          <button
            key={`${image}-${index}`}
            type="button"
            onClick={() => setActiveImage(image)}
            aria-label={`${alt} зураг ${index + 1}`}
            className={cn(
              "relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-white transition-colors",
              activeImage === image && "border-primary ring-2 ring-primary/15",
            )}
          >
            <ProductImage
              src={image}
              alt={alt}
              category={category}
              className="h-full w-full rounded-2xl"
              imageClassName="p-4"
              sizes="(max-width: 1024px) 33vw, 160px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
