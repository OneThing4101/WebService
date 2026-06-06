"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  images: string[];
  alt: string;
}

export function ProductGallery({ images, alt }: ProductGalleryProps) {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="space-y-4">
      <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] border border-border bg-[linear-gradient(145deg,#f5f9ff_0%,#fff6ee_100%)]">
        <Image
          src={activeImage}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      <div className="grid grid-cols-3 gap-3">
        {images.map((image) => (
          <button
            key={image}
            type="button"
            onClick={() => setActiveImage(image)}
            className={cn(
              "relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-white transition-colors",
              activeImage === image && "border-primary ring-2 ring-primary/15",
            )}
          >
            <Image
              src={image}
              alt={alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 33vw, 160px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
