import Link from "next/link";
import { Inbox, Package, Shapes, ShieldAlert } from "lucide-react";
import { AdminShell } from "@/components/admin/admin-shell";
import { buttonVariants } from "@/components/ui/button";
import { getAdminCredentials, requireAdminSession } from "@/lib/admin-session";
import {
  getCatalogStats,
  getStorageMode,
  listManagedInquiries,
  listManagedProducts,
} from "@/lib/catalog-store";
import { createPageMetadata } from "@/lib/metadata";

export const dynamic = "force-dynamic";

export const metadata = createPageMetadata({
  title: "Admin Dashboard",
  description: "ProProc бүтээгдэхүүний каталог, inquiry болон брэндийн удирдлага.",
  path: "/admin",
});

export default async function AdminPage() {
  await requireAdminSession();

  const [products, inquiries] = await Promise.all([
    listManagedProducts(),
    listManagedInquiries(),
  ]);
  const stats = getCatalogStats(products, inquiries);
  const credentials = getAdminCredentials();

  return (
    <AdminShell
      title="Admin dashboard"
      description="Бүтээгдэхүүний каталог, хэрэглэгчийн хүсэлт, brand data болон storage status-ийг нэг дороос хянана."
    >
      {credentials.usingDevDefaults ? (
        <div className="rounded-[1.5rem] border border-accent/40 bg-accent/10 p-4 text-sm leading-7 text-ink">
          <ShieldAlert className="mb-2 h-5 w-5 text-accent" />
          ADMIN_EMAIL/ADMIN_PASSWORD env тохируулаагүй тул dev default ажиллаж байна.
          Production-д заавал `.env` тохируулна.
        </div>
      ) : null}

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={Package} label="Нийт бүтээгдэхүүн" value={stats.totalProducts} />
        <StatCard icon={Inbox} label="Нийт хүсэлт" value={stats.totalInquiries} />
        <StatCard icon={Inbox} label="Шинэ хүсэлт" value={stats.newInquiries} />
        <StatCard icon={Shapes} label="Нийт брэнд" value={stats.totalBrands} />
      </div>

      <div className="rounded-[2rem] border border-border bg-white p-6 shadow-[0_24px_60px_rgba(14,34,64,0.08)]">
        <h2 className="font-display text-2xl font-bold text-ink">Data storage</h2>
        <p className="mt-3 text-sm leading-7 text-muted">
          Одоогийн горим: <strong className="text-ink">{getStorageMode()}</strong>.
          Supabase env тохируулаагүй үед admin өөрчлөлт `.data` JSON fallback-д
          хадгалагдана. Production-д Supabase database/storage ашиглана.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/admin/products" className={buttonVariants()}>
            Каталог удирдах
          </Link>
          <Link href="/admin/inquiries" className={buttonVariants({ variant: "outline" })}>
            Хүсэлтүүд харах
          </Link>
        </div>
      </div>
    </AdminShell>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Package;
  label: string;
  value: number;
}) {
  return (
    <article className="rounded-[1.7rem] border border-border bg-white p-5 shadow-[0_20px_50px_rgba(14,34,64,0.06)]">
      <Icon className="h-5 w-5 text-primary" />
      <p className="mt-5 font-display text-4xl font-bold text-ink">{value}</p>
      <p className="mt-2 text-sm font-medium text-muted">{label}</p>
    </article>
  );
}
