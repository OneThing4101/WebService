import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl rounded-[2rem] border border-border bg-white p-10 text-center shadow-[0_24px_60px_rgba(14,34,64,0.08)]">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            404
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold text-ink">
            Хуудас олдсонгүй
          </h1>
          <p className="mt-4 text-sm leading-7 text-muted">
            Хайсан хуудас байхгүй байна. Каталог эсвэл нүүр хуудас руу буцаж орно уу.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/" className={buttonVariants()}>
              Нүүр хуудас
            </Link>
            <Link href="/products" className={buttonVariants({ variant: "outline" })}>
              Бүтээгдэхүүн
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
