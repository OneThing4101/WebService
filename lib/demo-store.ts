"use client";

import type { Inquiry, InquirySubmission } from "@/lib/types";

const INQUIRY_STORAGE_KEY = "proproc-demo-inquiries";

function readJson<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") {
    return fallback;
  }

  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeJson<T>(key: string, value: T) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(key, JSON.stringify(value));
}

export function readStoredInquiries(initialInquiries: Inquiry[]) {
  const stored = readJson<Inquiry[]>(INQUIRY_STORAGE_KEY, []);
  const merged = [...stored];

  for (const inquiry of initialInquiries) {
    if (!merged.some((item) => item.id === inquiry.id)) {
      merged.push(inquiry);
    }
  }

  return merged.sort((left, right) =>
    left.createdAt < right.createdAt ? 1 : -1,
  );
}

export function saveInquiryStatus(inquiries: Inquiry[]) {
  writeJson(INQUIRY_STORAGE_KEY, inquiries);
}

export function appendInquiry(input: InquirySubmission) {
  const current = readJson<Inquiry[]>(INQUIRY_STORAGE_KEY, []);
  const nextInquiry: Inquiry = {
    id: typeof crypto !== "undefined" ? crypto.randomUUID() : `${Date.now()}`,
    name: input.name,
    phone: input.phone,
    email: input.email,
    productId: input.productId,
    serviceId: input.serviceId,
    message: input.message,
    status: "new",
    createdAt: new Date().toISOString(),
  };

  writeJson(INQUIRY_STORAGE_KEY, [nextInquiry, ...current]);
  return nextInquiry;
}
