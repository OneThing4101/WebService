import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-28 w-full rounded-3xl border border-border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted focus:border-primary",
        className,
      )}
      {...props}
    />
  );
}
