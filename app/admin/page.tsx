import { AdminDashboard } from "@/components/admin/admin-dashboard";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/ui/container";
import {
  getBrands,
  getCategories,
  getProducts,
  getServices,
  inquiries,
} from "@/lib/data";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Админ Dashboard",
  description:
    "Mock authentication бүхий admin dashboard UI: бүтээгдэхүүн, ангилал, брэнд, үйлчилгээ, inquiry удирдлага.",
  path: "/admin",
});

export default function AdminPage() {
  return (
    <>
      <PageHero
        eyebrow="Dashboard"
        title="Каталог, брэнд, үйлчилгээ удирдах mock admin panel"
        description="Энэ хувилбар нь UI-centric demo dashboard бөгөөд localStorage дээр ажиллах mock authentication, inquiry status management-тэй."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <AdminDashboard
            initialProducts={getProducts()}
            initialCategories={getCategories()}
            initialBrands={getBrands()}
            initialServices={getServices()}
            initialInquiries={inquiries}
          />
        </Container>
      </section>
    </>
  );
}
