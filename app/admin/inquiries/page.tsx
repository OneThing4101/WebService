import { AdminInquiriesTable } from "@/components/admin/admin-inquiries-table";
import { AdminShell } from "@/components/admin/admin-shell";
import { requireAdminSession } from "@/lib/admin-session";
import { listManagedInquiries } from "@/lib/catalog-store";
import { createPageMetadata } from "@/lib/metadata";

export const dynamic = "force-dynamic";

export const metadata = createPageMetadata({
  title: "Admin Inquiries",
  description: "ProProc customer inquiry management.",
  path: "/admin/inquiries",
});

export default async function AdminInquiriesPage() {
  await requireAdminSession();

  return (
    <AdminShell
      title="Хэрэглэгчийн хүсэлтүүд"
      description="Contact form-оор ирсэн нэр, утас, имэйл, мессежийг харж status шинэчилнэ."
    >
      <AdminInquiriesTable initialInquiries={await listManagedInquiries()} />
    </AdminShell>
  );
}
