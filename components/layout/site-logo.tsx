import Link from "next/link";
import { cn } from "@/lib/utils";

interface SiteLogoProps {
  className?: string;
  inverse?: boolean;
}

export function SiteLogo({ className, inverse = false }: SiteLogoProps) {
  return (
    <Link href="/" className={cn("inline-flex items-center gap-3", className)}>
      <span className="relative inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-ink text-sm font-bold text-white">
        <span className="absolute inset-x-0 bottom-0 h-1.5 bg-accent" />
        MV
      </span>
      <span className="flex flex-col">
        <span
          className={cn(
            "font-display text-lg font-bold tracking-tight",
            inverse ? "text-white" : "text-ink",
          )}
        >
          MonVolt Supply
        </span>
        <span
          className={cn(
            "text-xs font-medium uppercase tracking-[0.22em]",
            inverse ? "text-white/60" : "text-muted",
          )}
        >
          Sales · Service · Supply
        </span>
      </span>
    </Link>
  );
}
