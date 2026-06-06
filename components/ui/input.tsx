import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-2xl border border-border bg-white px-4 text-sm text-ink outline-none transition-colors placeholder:text-muted focus:border-primary",
        className,
      )}
      {...props}
    />
  );
}
