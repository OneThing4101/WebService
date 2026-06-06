import type { MetadataRoute } from "next";
import { getProducts } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/products",
    "/services",
    "/brands",
    "/about",
    "/contact",
    "/admin",
  ];

  return [
    ...routes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date(),
    })),
    ...getProducts().map((product) => ({
      url: `${siteConfig.url}/products/${product.slug}`,
      lastModified: new Date(),
    })),
  ];
}
