import { existsSync } from "node:fs";
import path from "node:path";
import {
  brands,
  getFeaturedBrands,
  type Brand,
  type BrandWithLogoStatus,
} from "@/src/lib/brands";

export function isBrandLogoAvailable(logo: string) {
  if (!logo.startsWith("/brands/") || logo.includes("..")) {
    return false;
  }

  const logoPath = path.join(process.cwd(), "public", logo.replace(/^\//, ""));
  return existsSync(logoPath);
}

export function withBrandLogoStatus(brandList: Brand[]): BrandWithLogoStatus[] {
  return brandList.map((brand) => ({
    ...brand,
    logoAvailable: isBrandLogoAvailable(brand.logo),
  }));
}

export function getBrandsWithLogoStatus() {
  return withBrandLogoStatus(brands);
}

export function getFeaturedBrandsWithLogoStatus(limit = 12) {
  return withBrandLogoStatus(getFeaturedBrands(limit));
}
