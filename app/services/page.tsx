import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ServiceCard } from "@/components/services/service-card";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { getServices, processSteps } from "@/lib/data";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Үйлчилгээ",
  description:
    "Цахилгааны угсралт, засвар үйлчилгээ, самбар угсралт, кабель таталт, үйлдвэрийн тоног төхөөрөмж суурилуулалтын үйлчилгээ.",
  path: "/services",
});

export default function ServicesPage() {
  const services = getServices();

  return (
    <>
      <PageHero
        eyebrow="Service Portfolio"
        title="Цахилгааны угсралт, засвар, инженерийн үйлчилгээ"
        description="Бүтээгдэхүүн нийлүүлэлт дээр суурилсан, талбайн гүйцэтгэл болон урсгал сервисийг хамарсан үйлчилгээнүүд."
        actions={
          <Link href="/contact" className={buttonVariants()}>
            Үнийн санал авах
            <ArrowRight className="h-4 w-4" />
          </Link>
        }
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </Container>
      </section>

      <section className="bg-panel/[0.55] py-16 sm:py-20">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Ажлын явц"
            title="Төсөл хэрэгжүүлэх шаталсан процесс"
            description="Бараа нийлүүлэлт, гүйцэтгэл, туршилт тохируулга, дараах үйлчилгээ хүртэлх үндсэн урсгал."
          />
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step) => (
              <article
                key={step.step}
                className="rounded-[1.8rem] border border-border bg-white p-6 shadow-[0_20px_50px_rgba(14,34,64,0.06)]"
              >
                <div className="inline-flex rounded-full bg-accent/15 px-4 py-2 text-sm font-semibold text-accent">
                  {step.step}
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">{step.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
