"use client";

import { useState, useTransition } from "react";
import type { Inquiry, InquiryStatus } from "@/lib/types";

const statuses: Array<{ value: InquiryStatus; label: string }> = [
  { value: "new", label: "Шинэ" },
  { value: "contacted", label: "Холбогдсон" },
  { value: "completed", label: "Дууссан" },
];

export function AdminInquiriesTable({
  initialInquiries,
}: {
  initialInquiries: Inquiry[];
}) {
  const [inquiries, setInquiries] = useState(initialInquiries);
  const [isPending, startTransition] = useTransition();

  function updateStatus(id: string, status: InquiryStatus) {
    startTransition(async () => {
      const response = await fetch(`/api/admin/inquiries/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });

      if (response.ok) {
        setInquiries((current) =>
          current.map((item) => (item.id === id ? { ...item, status } : item)),
        );
      }
    });
  }

  return (
    <div className="rounded-[2rem] border border-border bg-white p-5 shadow-[0_24px_60px_rgba(14,34,64,0.08)]">
      <h2 className="font-display text-2xl font-bold text-ink">Customer requests</h2>
      <p className="mt-1 text-sm text-muted">
        Contact form-аар ирсэн хүсэлтүүд энд хадгалагдана.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[860px] text-left text-sm">
          <thead className="text-xs uppercase tracking-[0.16em] text-muted">
            <tr className="border-b border-border">
              <th className="py-3 pr-4">Огноо</th>
              <th className="px-4 py-3">Харилцагч</th>
              <th className="px-4 py-3">Холбоо барих</th>
              <th className="px-4 py-3">Мессеж</th>
              <th className="py-3 pl-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {inquiries.map((inquiry) => (
              <tr key={inquiry.id} className="border-b border-border/70 last:border-0">
                <td className="py-4 pr-4">{formatStableDate(inquiry.createdAt)}</td>
                <td className="px-4 py-4 font-semibold text-ink">{inquiry.name}</td>
                <td className="px-4 py-4">
                  <p>{inquiry.phone}</p>
                  <p className="mt-1 text-xs text-muted">{inquiry.email || "-"}</p>
                </td>
                <td className="max-w-md px-4 py-4 leading-6 text-muted">
                  {inquiry.message}
                </td>
                <td className="py-4 pl-4">
                  <select
                    value={inquiry.status}
                    disabled={isPending}
                    onChange={(event) =>
                      updateStatus(inquiry.id, event.target.value as InquiryStatus)
                    }
                    className="h-10 rounded-2xl border border-border bg-white px-3 text-sm text-ink outline-none focus:border-primary"
                  >
                    {statuses.map((status) => (
                      <option key={status.value} value={status.value}>
                        {status.label}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function formatStableDate(value: string) {
  const date = new Date(value);
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
