import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { IconToken } from "@/components/shared/icon-token";
import { buttonVariants } from "@/components/ui/button";
import type { Service } from "@/lib/types";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="flex h-full flex-col rounded-[1.8rem] border border-border bg-white p-6 shadow-[0_20px_50px_rgba(14,34,64,0.06)]">
      <IconToken name={service.icon as never} />
      <h3 className="mt-6 font-display text-2xl font-bold text-ink">{service.title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted">{service.description}</p>
      {service.features?.length ? (
        <ul className="mt-5 space-y-3 text-sm text-ink">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      ) : null}
      <div className="mt-6">
        <Link href={`/contact?service=${service.id}`} className={buttonVariants({ variant: "outline" })}>
          Үнийн санал авах
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
