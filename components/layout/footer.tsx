import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { SiteLogo } from "@/components/layout/site-logo";
import { Container } from "@/components/ui/container";
import { getCategories } from "@/lib/data";
import { quickLinks, siteConfig } from "@/lib/site";

export function Footer() {
  const footerCategories = getCategories().slice(0, 5);

  return (
    <footer className="border-t border-border bg-ink text-white">
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_repeat(3,minmax(0,1fr))]">
          <div className="space-y-5">
            <SiteLogo inverse />
            <p className="max-w-md text-sm leading-7 text-white/70">
              Үйлдвэр, уул уурхай, барилга, оффисын цахилгаан тоног төхөөрөмж,
              автоматжуулалт, материал болон сэлбэгийн нийлүүлэлтийг нэг дороос.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href={siteConfig.facebook}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-accent hover:text-accent"
                target="_blank"
                rel="noreferrer"
              >
                <Facebook className="h-4 w-4" />
              </Link>
              <Link
                href={siteConfig.instagram}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-accent hover:text-accent"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold">Хурдан холбоос</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/70">
              {quickLinks.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold">Ангилал</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/70">
              {footerCategories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/products?category=${category.slug}`}
                  className="hover:text-white"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold">Холбоо барих</h3>
            <div className="mt-4 space-y-4 text-sm text-white/70">
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-accent" />
                <span>{siteConfig.phone}</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-accent" />
                <span>{siteConfig.email}</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-accent" />
                <span>{siteConfig.address}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/50">
          © 2026 {siteConfig.name}. Бүх эрх хуулиар хамгаалагдсан.
        </div>
      </Container>
    </footer>
  );
}
