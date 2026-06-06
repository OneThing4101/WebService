export type StockStatus = "Бэлэн" | "Захиалгаар" | "Түр дууссан";

export type InquiryStatus = "new" | "contacted" | "completed";

export interface Specification {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  brand: string;
  price: number;
  stockStatus: StockStatus;
  images: string[];
  shortDescription: string;
  description: string;
  specs: Specification[];
  featured: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
  description: string;
  productCategories?: string[];
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  features?: string[];
}

export interface Inquiry {
  id: string;
  name: string;
  phone: string;
  email: string;
  productId?: string;
  serviceId?: string;
  quantity?: number;
  message: string;
  status: InquiryStatus;
  createdAt: string;
}

export interface InquirySubmission {
  name: string;
  phone: string;
  email: string;
  productId?: string;
  serviceId?: string;
  quantity?: number;
  message: string;
}

export interface CompanyMetric {
  label: string;
  value: string;
  description: string;
}

export interface TrustItem {
  title: string;
  description: string;
  icon: string;
}

export interface CompanyValue {
  title: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}
