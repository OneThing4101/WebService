import type { SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Select({
  className,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={cn(
        "h-11 w-full appearance-none rounded-2xl border border-border bg-white px-4 text-sm text-ink outline-none transition-colors focus:border-primary",
        className,
      )}
      {...props}
    />
  );
}
