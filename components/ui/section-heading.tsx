import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-4",
        align === "center" && "mx-auto max-w-3xl text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
          {eyebrow}
        </p>
      ) : null}
      <div className="space-y-3">
        <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
