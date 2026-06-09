import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function CtaBanner() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-[2.25rem] bg-ink px-6 py-10 text-white shadow-[0_38px_90px_rgba(14,34,64,0.18)] sm:px-10 sm:py-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(242,140,40,0.34),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(15,92,192,0.24),transparent_32%)]" />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                Шуурхай холбоо
              </p>
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Танд цахилгааны тоног төхөөрөмж, сэлбэг хэрэгтэй юу?
              </h2>
              <p className="text-base leading-7 text-white/70">
                Төслийн хэмжээ, барилгын төрөл, үйлдвэрийн орчны шаардлагаас хамаарч
                тохирох брэнд, материал, нийлүүлэлтийн хувилбарыг санал болгоно.
              </p>
            </div>
            <Link
              href="/contact"
              className={buttonVariants({
                variant: "secondary",
                size: "lg",
                className: "shrink-0",
              })}
            >
              Холбоо барих
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
