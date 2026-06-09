import { AdminProductForm } from "@/components/admin/admin-product-form";
import { AdminShell } from "@/components/admin/admin-shell";
import { getBrands, getCategories } from "@/lib/data";
import { requireAdminSession } from "@/lib/admin-session";
import { createPageMetadata } from "@/lib/metadata";

export const dynamic = "force-dynamic";

export const metadata = createPageMetadata({
  title: "New Product",
  description: "ProProc admin add product.",
  path: "/admin/products/new",
});

export default async function NewProductPage() {
  await requireAdminSession();

  return (
    <AdminShell
      title="Шинэ бүтээгдэхүүн нэмэх"
      description="Нэр, ангилал, брэнд, үнэ, зураг, тайлбар болон үзүүлэлтүүдийг бөглөж каталогт нэмнэ."
    >
      <AdminProductForm categories={getCategories()} brands={getBrands()} />
    </AdminShell>
  );
}
