import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "dark";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white shadow-[0_14px_34px_rgba(15,92,192,0.18)] hover:bg-primary-strong",
  secondary: "bg-accent text-ink hover:bg-[#de7d20]",
  outline:
    "border border-border bg-white text-ink hover:border-primary hover:text-primary",
  ghost: "bg-transparent text-ink hover:bg-panel",
  dark: "bg-ink text-white hover:bg-primary-strong",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-11 px-5 text-sm sm:text-[15px]",
  lg: "h-12 px-6 text-base",
};

export function buttonVariants({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:pointer-events-none disabled:opacity-60",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({ variant, size, className })}
      {...props}
    />
  );
}
