import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/ui/container";
import { companyMetrics, companyValues } from "@/lib/data";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Бидний тухай",
  description:
    "MonVolt Supply компанийн танилцуулга, эрхэм зорилго, алсын хараа, үнэт зүйлс болон туршлагын үзүүлэлтүүд.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Company Profile"
        title="Цахилгааны бараа, сервисийн хамтын ажиллагаанд төвлөрсөн компани"
        description="MonVolt Supply нь барилга, үйлдвэр, оффис, гэр ахуйн хэрэглээнд шаардлагатай цахилгааны материал, тоног төхөөрөмж болон мэргэжлийн сервисийн цогц шийдлийг нийлүүлдэг гэсэн demo positioning-тэй."
      />

      <section className="py-16 sm:py-20">
        <Container className="space-y-8">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
            <div className="rounded-[2rem] border border-border bg-white p-8 shadow-[0_20px_50px_rgba(14,34,64,0.06)]">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                Танилцуулга
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-ink">
                Нийлүүлэлт, борлуулалт, үйлчилгээний нэг цэгийн шийдэл
              </h2>
              <p className="mt-5 text-base leading-8 text-muted">
                Манай компанийн энэ демо сайт нь цахилгаан барааны дэлгүүр, төслийн
                материалын нийлүүлэлт, үйлдвэрийн тоног төхөөрөмжийн борлуулалт, талбайн
                сервисийн бизнесийг нэг дор professional байдлаар танилцуулах зорилготой.
              </p>
              <p className="mt-4 text-base leading-8 text-muted">
                B2B итгэлцэл, техникийн зөвлөгөө, хурдан үнийн санал, олон улсын
                placeholder брэндийн түншлэл, барилгын төслийн supply chain positioning
                зэрэг мессежийг голчилж байрлуулсан.
              </p>
            </div>

            <div className="grid gap-6">
              <ValueCard
                title="Эрхэм зорилго"
                description="Харилцагч бүрт аюулгүй, оновчтой, цаг хугацаанд нь хүрдэг цахилгааны бүтээгдэхүүн ба сервисийн шийдэл нийлүүлэх."
              />
              <ValueCard
                title="Алсын хараа"
                description="Монголын B2B цахилгааны борлуулалт, инженерийн үйлчилгээний trusted partner болох."
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {companyValues.map((value) => (
              <ValueCard
                key={value.title}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {companyMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-[1.8rem] border border-border bg-[linear-gradient(145deg,#ffffff_0%,#f8fbff_100%)] p-6 shadow-[0_20px_50px_rgba(14,34,64,0.06)]"
              >
                <p className="font-display text-3xl font-bold text-primary">{metric.value}</p>
                <p className="mt-3 text-base font-semibold text-ink">{metric.label}</p>
                <p className="mt-3 text-sm leading-7 text-muted">{metric.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

function ValueCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article className="rounded-[1.8rem] border border-border bg-white p-6 shadow-[0_20px_50px_rgba(14,34,64,0.06)]">
      <h3 className="font-display text-2xl font-bold text-ink">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-muted">{description}</p>
    </article>
  );
}
