import type { ReactNode } from "react";
import { Facebook, Instagram, Mail, MapPin, Phone, Clock3 } from "lucide-react";
import Link from "next/link";
import { InquiryForm } from "@/components/shared/inquiry-form";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/ui/container";
import { getServiceById } from "@/lib/data";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Холбоо барих",
  description:
    "Үнийн санал, захиалга, цахилгааны үйлчилгээний зөвлөгөө авах холбоо барих хуудас.",
  path: "/contact",
});

type ContactPageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const requestedService =
    typeof params.service === "string" ? getServiceById(params.service) : undefined;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Үнийн санал, захиалга, сервисийн хүсэлтээ илгээнэ үү"
        description="Цахилгааны материал, тоног төхөөрөмжийн сонголт, барилгын supply, угсралт засварын үйлчилгээний талаар манай багтай холбогдоорой."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 xl:grid-cols-[minmax(0,0.95fr)_420px]">
          <div className="space-y-8">
            <InquiryForm
              serviceId={requestedService?.id}
              title={
                requestedService
                  ? `${requestedService.title} үйлчилгээний хүсэлт`
                  : "Холбоо барих форм"
              }
              description="Demo орчинд илгээсэн хүсэлт admin dashboard-ийн inquiry хэсэгт localStorage-оор харагдана."
              submitLabel="Хүсэлт илгээх"
            />

            <div className="rounded-[2rem] border border-border bg-white p-6 shadow-[0_20px_50px_rgba(14,34,64,0.06)]">
              <h2 className="font-display text-2xl font-bold text-ink">
                Google Map placeholder
              </h2>
              <div className="mt-5 grid min-h-[280px] place-items-center rounded-[1.8rem] border border-dashed border-border bg-[linear-gradient(145deg,#f8fbff_0%,#fff6ee_100%)] p-8 text-center">
                <div>
                  <p className="font-display text-2xl font-bold text-ink">
                    Байршлын зураглал
                  </p>
                  <p className="mt-3 max-w-md text-sm leading-7 text-muted">
                    Энд дараа нь Google Maps embed эсвэл статик зураг байрлуулахад бэлэн
                    placeholder блок байна.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <ContactCard
              icon={<Phone className="h-5 w-5 text-primary" />}
              title="Утас"
              value={siteConfig.phone}
            />
            <ContactCard
              icon={<Mail className="h-5 w-5 text-primary" />}
              title="Имэйл"
              value={siteConfig.email}
            />
            <ContactCard
              icon={<MapPin className="h-5 w-5 text-primary" />}
              title="Хаяг"
              value={siteConfig.address}
            />
            <ContactCard
              icon={<Clock3 className="h-5 w-5 text-primary" />}
              title="Ажлын цаг"
              value={siteConfig.workingHours}
            />

            <div className="rounded-[2rem] border border-border bg-white p-6 shadow-[0_20px_50px_rgba(14,34,64,0.06)]">
              <h3 className="font-display text-2xl font-bold text-ink">Сошиал сувгууд</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href={siteConfig.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-primary hover:text-primary"
                >
                  <Facebook className="h-4 w-4" />
                  Facebook
                </Link>
                <Link
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-primary hover:text-primary"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function ContactCard({
  icon,
  title,
  value,
}: {
  icon: ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-[2rem] border border-border bg-white p-6 shadow-[0_20px_50px_rgba(14,34,64,0.06)]">
      <div className="flex items-start gap-4">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
          {icon}
        </div>
        <div>
          <p className="text-sm font-medium text-muted">{title}</p>
          <p className="mt-2 text-base font-semibold leading-7 text-ink">{value}</p>
        </div>
      </div>
    </div>
  );
}
