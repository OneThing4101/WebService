import Image from "next/image";
import {
  Boxes,
  Factory,
  Flame,
  Gauge,
  Hammer,
  Network,
  ShieldCheck,
  Snowflake,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { Brand, BrandCategory, BrandWithLogoStatus } from "@/src/lib/brands";

interface BrandLogoProps {
  brand: Brand | BrandWithLogoStatus;
  className?: string;
  imageClassName?: string;
}

function hasAvailableLogo(
  brand: Brand | BrandWithLogoStatus,
): brand is BrandWithLogoStatus {
  return "logoAvailable" in brand && brand.logoAvailable;
}

export function BrandLogo({ brand, className, imageClassName }: BrandLogoProps) {
  return (
    <div
      className={cn(
        "flex h-24 items-center justify-center rounded-[1.35rem] border border-border bg-white px-5 text-center",
        className,
      )}
    >
      {hasAvailableLogo(brand) ? (
        <Image
          src={brand.logo}
          alt={`${brand.name} logo`}
          width={190}
          height={72}
          unoptimized
          className={cn("max-h-14 w-auto object-contain", imageClassName)}
        />
      ) : (
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#eef6ff_0%,#fff3e5_100%)] text-primary">
          <CategoryFallbackIcon category={brand.category} />
        </div>
      )}
    </div>
  );
}

function CategoryFallbackIcon({ category }: { category: BrandCategory }) {
  switch (category) {
    case "Автоматжуулалт":
      return <Factory className="h-7 w-7" aria-hidden="true" />;
    case "Цахилгаан тоног төхөөрөмж":
      return <Zap className="h-7 w-7" aria-hidden="true" />;
    case "Хэмжилтийн багаж":
      return <Gauge className="h-7 w-7" aria-hidden="true" />;
    case "Уул уурхай":
      return <ShieldCheck className="h-7 w-7" aria-hidden="true" />;
    case "Галын аюулгүй байдал":
      return <Flame className="h-7 w-7" aria-hidden="true" />;
    case "Сүлжээ холбоо":
      return <Network className="h-7 w-7" aria-hidden="true" />;
    case "HVAC / Агааржуулалт":
      return <Snowflake className="h-7 w-7" aria-hidden="true" />;
    case "Багаж хэрэгсэл":
      return <Hammer className="h-7 w-7" aria-hidden="true" />;
    default:
      return <Boxes className="h-7 w-7" aria-hidden="true" />;
  }
}
