"use client";

import Image from "next/image";
import {
  BatteryCharging,
  Cable,
  Gauge,
  HardDrive,
  Lightbulb,
  Network,
  PanelTop,
  Plug,
  ShieldCheck,
  Siren,
  SlidersHorizontal,
  Wrench,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

interface ProductImageProps {
  src?: string;
  alt: string;
  category: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
}

const categoryIcons: Record<string, IconComponent> = {
  gereltuuleg: Lightbulb,
  "avtomat-tasluur": ShieldCheck,
  "kabel-utas": Cable,
  "sambar-khairtsag": PanelTop,
  "tsahilgaany-material": Plug,
  avtomatjuulalt: SlidersHorizontal,
  "hemjiltiin-bagaj": Gauge,
  "erchim-huch-battery": BatteryCharging,
  "suljee-holboo": Network,
  "galyn-ayuulgui-baidal": Siren,
  "selbeg-kheregsel": Wrench,
  "uildveriin-tonog": HardDrive,
};

export function ProductImage({
  src,
  alt,
  category,
  className,
  imageClassName,
  sizes = "(max-width: 768px) 100vw, 33vw",
  priority = false,
}: ProductImageProps) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const Icon = categoryIcons[category] ?? Plug;
  const showImage = Boolean(src) && failedSrc !== src;

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-[radial-gradient(circle_at_28%_18%,rgba(242,140,40,0.14),transparent_30%),linear-gradient(145deg,#ffffff_0%,#f3f7fc_100%)]",
        className,
      )}
    >
      {showImage ? (
        <Image
          src={src as string}
          alt={alt}
          fill
          priority={priority}
          onError={() => setFailedSrc(src ?? null)}
          className={cn("object-contain p-7", imageClassName)}
          sizes={sizes}
        />
      ) : null}
      <div
        className={cn(
          "absolute inset-0 flex items-center justify-center opacity-0",
          !showImage && "opacity-100",
        )}
        aria-hidden="true"
      >
        <div className="flex h-28 w-28 items-center justify-center rounded-[2rem] border border-primary/10 bg-white text-primary shadow-[0_24px_60px_rgba(15,32,58,0.08)]">
          <Icon className="h-12 w-12" />
        </div>
      </div>
    </div>
  );
}
