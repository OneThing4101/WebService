import crypto from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { createClient } from "@supabase/supabase-js";
import { products as staticProducts, inquiries as staticInquiries } from "@/lib/data";
import { createSlug } from "@/lib/utils";
import type { Inquiry, InquiryStatus, Product, Specification, StockStatus } from "@/lib/types";
import { brands } from "@/src/lib/brands";

type ProductRow = {
  id: string;
  name: string;
  slug: string;
  category: string;
  brand: string;
  price: number | null;
  stock_status: string;
  description: string;
  images: string[] | null;
  specs: unknown;
  featured: boolean | null;
  created_at?: string;
  updated_at?: string;
};

type InquiryRow = {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  message: string;
  product_id: string | null;
  status: string | null;
  created_at: string;
};

export type ProductInput = {
  name: string;
  slug?: string;
  category: string;
  brand: string;
  price: number | null;
  stockStatus: StockStatus;
  shortDescription?: string;
  description: string;
  images: string[];
  specs: Specification[];
  featured: boolean;
};

export type InquiryInput = {
  name: string;
  phone: string;
  email?: string;
  message: string;
  productId?: string;
};

const dataDir = path.join(process.cwd(), ".data");
const productsFile = path.join(dataDir, "products.json");
const inquiriesFile = path.join(dataDir, "inquiries.json");

function getSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    return null;
  }

  return createClient(url, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

export function getStorageMode() {
  return getSupabaseClient() ? "supabase" : "local-fallback";
}

export async function listManagedProducts(): Promise<Product[]> {
  const supabase = getSupabaseClient();

  if (supabase) {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      throw new Error(error.message);
    }

    return (data as ProductRow[]).map(mapProductRow);
  }

  return readJson<Product[]>(productsFile, staticProducts);
}

export async function getManagedProduct(id: string) {
  const products = await listManagedProducts();
  return products.find((product) => product.id === id || product.slug === id) ?? null;
}

export async function createManagedProduct(input: ProductInput) {
  const product = normalizeProductInput(input);
  const supabase = getSupabaseClient();

  if (supabase) {
    const { data, error } = await supabase
      .from("products")
      .insert(toProductRow(product))
      .select("*")
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return mapProductRow(data as ProductRow);
  }

  const products = await listManagedProducts();
  const next = [product, ...products];
  await writeJson(productsFile, next);
  return product;
}

export async function updateManagedProduct(id: string, input: ProductInput) {
  const current = await getManagedProduct(id);

  if (!current) {
    return null;
  }

  const product: Product = {
    ...normalizeProductInput(input, current.id),
    slug: input.slug?.trim() ? createSlug(input.slug) : current.slug,
  };
  const supabase = getSupabaseClient();

  if (supabase) {
    const { data, error } = await supabase
      .from("products")
      .update(toProductRow(product))
      .eq("id", current.id)
      .select("*")
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return mapProductRow(data as ProductRow);
  }

  const products = await listManagedProducts();
  await writeJson(
    productsFile,
    products.map((item) => (item.id === current.id ? product : item)),
  );
  return product;
}

export async function deleteManagedProduct(id: string) {
  const current = await getManagedProduct(id);

  if (!current) {
    return false;
  }

  const supabase = getSupabaseClient();

  if (supabase) {
    const { error } = await supabase.from("products").delete().eq("id", current.id);
    if (error) {
      throw new Error(error.message);
    }
    return true;
  }

  const products = await listManagedProducts();
  await writeJson(
    productsFile,
    products.filter((item) => item.id !== current.id),
  );
  return true;
}

export async function listManagedInquiries(): Promise<Inquiry[]> {
  const supabase = getSupabaseClient();

  if (supabase) {
    const { data, error } = await supabase
      .from("inquiries")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      throw new Error(error.message);
    }

    return (data as InquiryRow[]).map(mapInquiryRow);
  }

  return readJson<Inquiry[]>(inquiriesFile, staticInquiries);
}

export async function createManagedInquiry(input: InquiryInput) {
  const inquiry: Inquiry = {
    id: crypto.randomUUID(),
    name: input.name,
    phone: input.phone,
    email: input.email ?? "",
    productId: input.productId,
    message: input.message,
    status: "new",
    createdAt: new Date().toISOString(),
  };
  const supabase = getSupabaseClient();

  if (supabase) {
    const { data, error } = await supabase
      .from("inquiries")
      .insert({
        id: inquiry.id,
        name: inquiry.name,
        phone: inquiry.phone,
        email: inquiry.email || null,
        message: inquiry.message,
        product_id: isUuid(inquiry.productId) ? inquiry.productId : null,
        status: inquiry.status,
      })
      .select("*")
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return mapInquiryRow(data as InquiryRow);
  }

  const inquiries = await listManagedInquiries();
  await writeJson(inquiriesFile, [inquiry, ...inquiries]);
  return inquiry;
}

export async function updateInquiryStatus(id: string, status: InquiryStatus) {
  const supabase = getSupabaseClient();

  if (supabase) {
    const { data, error } = await supabase
      .from("inquiries")
      .update({ status })
      .eq("id", id)
      .select("*")
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return mapInquiryRow(data as InquiryRow);
  }

  const inquiries = await listManagedInquiries();
  const updated = inquiries.map((item) => (item.id === id ? { ...item, status } : item));
  await writeJson(inquiriesFile, updated);
  return updated.find((item) => item.id === id) ?? null;
}

export function getCatalogStats(products: Product[], inquiries: Inquiry[]) {
  return {
    totalProducts: products.length,
    totalInquiries: inquiries.length,
    newInquiries: inquiries.filter((inquiry) => inquiry.status === "new").length,
    totalBrands: brands.length,
  };
}

async function readJson<T>(filePath: string, fallback: T): Promise<T> {
  try {
    const raw = await readFile(filePath, "utf8");
    return JSON.parse(raw) as T;
  } catch {
    await writeJson(filePath, fallback);
    return fallback;
  }
}

async function writeJson<T>(filePath: string, value: T) {
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, JSON.stringify(value, null, 2));
}

function normalizeProductInput(input: ProductInput, id: string = crypto.randomUUID()): Product {
  const slug = input.slug?.trim() ? createSlug(input.slug) : createSlug(input.name);
  const shortDescription =
    input.shortDescription?.trim() || input.description.trim().slice(0, 130);

  return {
    id,
    name: input.name.trim(),
    slug,
    category: input.category,
    brand: input.brand,
    price: input.price,
    stockStatus: input.stockStatus,
    images: input.images.filter(Boolean),
    shortDescription,
    description: input.description.trim(),
    specs: input.specs.filter((spec) => spec.label.trim() && spec.value.trim()),
    featured: input.featured,
  };
}

function toProductRow(product: Product) {
  return {
    id: product.id,
    name: product.name,
    slug: product.slug,
    category: product.category,
    brand: product.brand,
    price: product.price,
    stock_status: product.stockStatus,
    description: product.description,
    images: product.images,
    specs: {
      shortDescription: product.shortDescription,
      items: product.specs,
    },
    featured: product.featured,
    updated_at: new Date().toISOString(),
  };
}

function mapProductRow(row: ProductRow): Product {
  const specsValue = row.specs as { items?: Specification[]; shortDescription?: string } | null;
  const specs = Array.isArray(row.specs)
    ? (row.specs as Specification[])
    : specsValue?.items ?? [];

  return {
    id: row.id,
    name: row.name,
    slug: row.slug,
    category: row.category,
    brand: row.brand,
    price: row.price,
    stockStatus: row.stock_status as StockStatus,
    images: row.images ?? [],
    shortDescription: specsValue?.shortDescription ?? row.description.slice(0, 130),
    description: row.description,
    specs,
    featured: Boolean(row.featured),
  };
}

function mapInquiryRow(row: InquiryRow): Inquiry {
  return {
    id: row.id,
    name: row.name,
    phone: row.phone,
    email: row.email ?? "",
    productId: row.product_id ?? undefined,
    message: row.message,
    status: (row.status ?? "new") as InquiryStatus,
    createdAt: row.created_at,
  };
}

function isUuid(value?: string) {
  return Boolean(
    value?.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i),
  );
}
