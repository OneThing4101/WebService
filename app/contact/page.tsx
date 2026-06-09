import type { ReactNode } from "react";
import { ArrowUpRight, CheckCircle2, Clock3, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { InquiryForm } from "@/components/shared/inquiry-form";
import { Container } from "@/components/ui/container";
import { NetworkBackground } from "@/components/visual/network-background";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Холбоо барих",
  description:
    "Үнийн санал, захиалга, цахилгаан тоног төхөөрөмжийн нийлүүлэлтийн холбоо барих хуудас.",
  path: "/contact",
});

type ContactPageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const productInterest =
    typeof params.product === "string" ? params.product : undefined;

  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200/70 bg-[#f8fbff]">
        <NetworkBackground opacity={0.16} />
        <div className="absolute -right-16 -top-20 h-80 w-80 rounded-full bg-sky-200/30 blur-3xl" />
        <Container className="relative max-w-[1120px] py-10 sm:py-14 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-center">
            <div className="max-w-2xl">
              <p className="inline-flex rounded-full border border-slate-200 bg-white/75 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary shadow-sm">
                CONTACT
              </p>
              <h1 className="mt-5 font-display text-5xl font-bold leading-[0.95] tracking-tight text-ink sm:text-6xl">
                Холбоо барих
              </h1>
              <p className="mt-5 max-w-[600px] text-base leading-7 text-muted sm:text-lg">
                Брэнд нэр, part number, техникийн шаардлага эсвэл үнийн саналын
                хүсэлтээ илгээнэ үү. Манай баг таны хүсэлтэд хурдан хариу өгнө.
              </p>

              <div className="mt-7 flex flex-wrap gap-2 text-xs font-semibold text-ink">
                {["24 цагийн дотор хариу", "Техникийн зөвлөгөө", "Албан ёсны нийлүүлэлт"].map(
                  (item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 shadow-sm"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>

            <RequestSummaryCard />
          </div>
        </Container>
      </section>

      <section className="bg-[#fbfdff] py-10 sm:py-14">
        <Container className="grid max-w-[1120px] gap-6 lg:grid-cols-[minmax(0,700px)_minmax(300px,360px)] lg:items-start lg:justify-between">
          <div>
            <InquiryForm
              productId={productInterest}
              title="Хүсэлт илгээх"
              description="Бид таны хүсэлтийг хүлээн аваад утас эсвэл имэйлээр эргэн холбогдоно."
              submitLabel="Хүсэлт илгээх"
              variant="compact"
              messagePlaceholder="Таны хүсэлт, part number эсвэл шаардлага"
            />
          </div>

          <aside className="space-y-4">
            <ContactInfoPanel />
          </aside>
        </Container>
      </section>
    </>
  );
}

function RequestSummaryCard() {
  const items = ["Брэнд нэр", "Part number", "Тоо ширхэг / нөхцөл", "Холбоо барих утас"];

  return (
    <div className="relative lg:justify-self-end">
      <div className="absolute inset-x-8 inset-y-4 rounded-full bg-sky-200/25 blur-3xl" />
      <div className="relative rounded-[30px] border border-slate-200 bg-white/85 p-5 shadow-[0_24px_70px_rgba(15,23,42,0.07)] backdrop-blur-md sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          RFQ checklist
        </p>
        <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-ink">
          Үнийн санал авахад хэрэгтэй мэдээлэл
        </h2>
        <div className="mt-5 divide-y divide-slate-200">
          {items.map((item) => (
            <div key={item} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-sm font-semibold text-ink">{item}</span>
            </div>
          ))}
        </div>
        <p className="mt-5 border-t border-slate-200 pt-4 text-sm leading-6 text-muted">
          Эдгээр мэдээлэл байвал үнийн санал, нийлүүлэх хугацааг илүү хурдан тооцоолно.
        </p>
      </div>
    </div>
  );
}

function ContactInfoPanel() {
  const rows = [
    {
      icon: <Phone className="h-4 w-4" />,
      title: "Утас",
      value: siteConfig.phone,
    },
    {
      icon: <Mail className="h-4 w-4" />,
      title: "Имэйл",
      value: siteConfig.email,
    },
    {
      icon: <MapPin className="h-4 w-4" />,
      title: "Хаяг",
      value: siteConfig.address,
    },
    {
      icon: <Clock3 className="h-4 w-4" />,
      title: "Ажлын цаг",
      value: siteConfig.workingHours,
    },
  ];

  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.045)] sm:p-6">
      <h2 className="font-display text-2xl font-bold text-ink">Шууд холбогдох</h2>
      <div className="mt-5 divide-y divide-slate-200">
        {rows.map((row) => (
          <ContactInfoRow
            key={row.title}
            icon={row.icon}
            title={row.title}
            value={row.value}
          />
        ))}
      </div>

      <div className="mt-6 border-t border-slate-200 pt-5">
        <h3 className="font-display text-lg font-bold text-ink">
          Яаралтай үнийн санал хэрэгтэй юу?
        </h3>
        <p className="mt-2 text-sm leading-6 text-muted">
          Брэнд нэр, part number эсвэл техникийн зураг байвал хүсэлт дээрээ хавсаргана уу.
        </p>
        <Link
          href={`mailto:${siteConfig.email}`}
          className="mt-4 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-white transition-colors hover:bg-primary-strong"
        >
          Имэйлээр шууд бичих
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

function ContactInfoRow({
  icon,
  title,
  value,
}: {
  icon: ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex gap-3 py-4 first:pt-0 last:pb-0">
      <div className="mt-1 text-primary">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
          {title}
        </p>
        <p className="mt-1 text-sm font-semibold leading-6 text-ink">{value}</p>
      </div>
    </div>
  );
}
