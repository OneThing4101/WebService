import { notFound } from "next/navigation";
import { AdminProductForm } from "@/components/admin/admin-product-form";
import { AdminShell } from "@/components/admin/admin-shell";
import { getBrands, getCategories } from "@/lib/data";
import { requireAdminSession } from "@/lib/admin-session";
import { getManagedProduct } from "@/lib/catalog-store";
import { createPageMetadata } from "@/lib/metadata";

export const dynamic = "force-dynamic";

export const metadata = createPageMetadata({
  title: "Edit Product",
  description: "ProProc admin edit product.",
  path: "/admin/products/edit",
});

type EditProductPageProps = {
  params: Promise<{ id: string }>;
};

export default async function EditProductPage({ params }: EditProductPageProps) {
  await requireAdminSession();

  const { id } = await params;
  const product = await getManagedProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <AdminShell
      title="Бүтээгдэхүүн засах"
      description="Каталогийн мэдээлэл, үнэ, stock status, зураг болон тайлбарыг шинэчилнэ."
    >
      <AdminProductForm
        product={product}
        categories={getCategories()}
        brands={getBrands()}
      />
    </AdminShell>
  );
}
