import { AdminProductsTable } from "@/components/admin/admin-products-table";
import { AdminShell } from "@/components/admin/admin-shell";
import { getBrands, getCategories } from "@/lib/data";
import { requireAdminSession } from "@/lib/admin-session";
import { listManagedProducts } from "@/lib/catalog-store";
import { createPageMetadata } from "@/lib/metadata";

export const dynamic = "force-dynamic";

export const metadata = createPageMetadata({
  title: "Admin Products",
  description: "ProProc product catalog management.",
  path: "/admin/products",
});

export default async function AdminProductsPage() {
  await requireAdminSession();

  return (
    <AdminShell
      title="Бүтээгдэхүүн удирдах"
      description="Каталогийн бүтээгдэхүүн нэмэх, засах, устгах, зураг upload хийх, үнэ болон stock status шинэчлэх хэсэг."
    >
      <AdminProductsTable
        initialProducts={await listManagedProducts()}
        categories={getCategories()}
        brands={getBrands()}
      />
    </AdminShell>
  );
}
