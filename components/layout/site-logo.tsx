import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface SiteLogoProps {
  className?: string;
  inverse?: boolean;
}

export function SiteLogo({ className }: SiteLogoProps) {
  return (
    <Link
      href="/"
      aria-label="PRO-PROC home"
      className={cn("inline-flex items-center", className)}
    >
      <Image
        src="/logo/pro-proc-official.png"
        alt="PRO-PROC official logo"
        width={352}
        height={192}
        className="h-9 w-auto object-contain lg:h-11"
        priority
      />
    </Link>
  );
}
