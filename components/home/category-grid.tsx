import Link from "next/link";
import type { Category } from "@/lib/types";
import { IconToken } from "@/components/shared/icon-token";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

interface CategoryGridProps {
  categories: Category[];
}

export function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <section className="py-16 sm:py-20">
      <div className="space-y-10">
        <SectionHeading
          eyebrow="Каталогийн ангилал"
          title="Төслийн хэрэгцээнд тохирсон бараагаа хурдан олоорой"
          description="Барилга, үйлдвэр, уул уурхай, оффисын цахилгаан хангамжид хэрэгтэй материал, тоног төхөөрөмж, багаж хэрэгслийг ангиллаар нь нэгтгэлээ."
        />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {categories.map((category, index) => (
            <Reveal key={category.id} delay={index * 0.04}>
              <Link
                href={`/products?category=${category.slug}`}
                className="group flex h-full flex-col rounded-[1.75rem] border border-border bg-white p-6 shadow-[0_18px_45px_rgba(14,34,64,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_26px_60px_rgba(15,92,192,0.12)]"
              >
                <IconToken name={category.icon as never} />
                <h3 className="mt-6 font-display text-xl font-bold text-ink transition-colors group-hover:text-primary">
                  {category.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">{category.description}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
