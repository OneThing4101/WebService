# FILE_STRUCTURE_MN

## Чухал тэмдэглэл

User requirement дээр `src/app`, `src/components`, `src/lib` гэж дурдсан байсан.

Гэхдээ энэ төсөлд `src/` хавтас огт байхгүй.

Одоогийн бодит бүтэц:

```text
app/
components/
lib/
public/
supabase/
```

Тиймээс доорх тайлбар дээр `src/app` гэж биш `app/` гэж ойлгоно.

---

## 1. Root level files

### `package.json`

Юу хийдэг вэ:

- Төслийн нэр
- npm script-үүд
- dependency жагсаалт

Хэзээ засах вэ:

- package нэмэх/хасах үед
- script нэмэх үед
- version upgrade хийх үед

Холбоотой file:

- `package-lock.json`
- `next.config.ts`
- `tsconfig.json`

### `next.config.ts`

Юу хийдэг вэ:

- Next.js global config
- Одоогоор `turbopack.root` тохируулж байгаа

Хэзээ засах вэ:

- image domain нэмэх
- redirect/headers тохируулах
- build/runtime option өөрчлөх үед

Холбоотой file:

- `app/`
- `package.json`

### `tsconfig.json`

Юу хийдэг вэ:

- TypeScript compile rule
- `@/*` alias-ийг root рүү зааж өгдөг

Хэзээ засах вэ:

- alias өөрчлөх
- strict rule өөрчлөх
- include/exclude өөрчлөх

Холбоотой file:

- бүх `*.ts`, `*.tsx`

### `postcss.config.mjs`

Юу хийдэг вэ:

- Tailwind v4 PostCSS plugin ачаалдаг

Хэзээ засах вэ:

- Tailwind/PostCSS integration өөрчлөх үед

Холбоотой file:

- `app/globals.css`

### `eslint.config.mjs`

Юу хийдэг вэ:

- ESLint rule-үүдийг идэвхжүүлдэг
- Next.js core-web-vitals + TypeScript rule ашиглаж байна

Хэзээ засах вэ:

- lint rule add/remove хийх үед

Холбоотой file:

- бүх source file

### `.gitignore`

Юу хийдэг вэ:

- `node_modules`, `.next`, env file зэрэг commit-оос хасна

Хэзээ засах вэ:

- шинэ generated file ignore хийх үед

---

## 2. `app/` хавтас

Энэ бол Next.js App Router-ийн route layer.

### `app/layout.tsx`

Юу хийдэг вэ:

- бүх page дээр common layout тавина
- Google font ачаална
- global metadata өгнө
- `SiteHeader` болон `Footer`-ийг бүх page дээр байрлуулна

Хэзээ засах вэ:

- сайт бүхэлдээ header/footer layout өөрчлөх үед
- global SEO metadata өөрчлөх үед
- font солих үед

Холбоотой file:

- `app/globals.css`
- `components/layout/site-header.tsx`
- `components/layout/footer.tsx`
- `lib/site.ts`

### `app/globals.css`

Юу хийдэг вэ:

- Tailwind v4 import
- global color variable
- theme token mapping
- body background
- marquee animation

Хэзээ засах вэ:

- brand color солих
- global font token солих
- нийт spacing/feel өөрчлөх үед

Холбоотой file:

- бүх component-ийн Tailwind class
- `app/layout.tsx`

### `app/page.tsx`

Юу хийдэг вэ:

- home page route

Хэзээ засах вэ:

- home page section, text, order, CTA өөрчлөх үед

Холбоотой file:

- `components/home/*`
- `components/products/product-card.tsx`
- `components/services/service-card.tsx`
- `components/brands/brand-card.tsx`
- `lib/data.ts`

### `app/products/page.tsx`

Юу хийдэг вэ:

- бүтээгдэхүүний жагсаалтын page

Хэзээ засах вэ:

- catalog hero, stats, structure өөрчлөх үед

Холбоотой file:

- `components/products/products-explorer.tsx`
- `lib/data.ts`

### `app/products/[slug]/page.tsx`

Юу хийдэг вэ:

- dynamic product detail page
- slug-аар бүтээгдэхүүн олно
- metadata-г тухайн бүтээгдэхүүнээр generate хийнэ

Хэзээ засах вэ:

- product detail layout өөрчлөх үед
- specs section, related section, inquiry section өөрчлөх үед

Холбоотой file:

- `components/products/product-gallery.tsx`
- `components/shared/inquiry-form.tsx`
- `lib/data.ts`

### `app/services/page.tsx`

Юу хийдэг вэ:

- services page

Хэзээ засах вэ:

- үйлчилгээний section эсвэл process flow өөрчлөх үед

Холбоотой file:

- `components/services/service-card.tsx`
- `lib/data.ts`

### `app/brands/page.tsx`

Юу хийдэг вэ:

- brands page

Хэзээ засах вэ:

- brand grid, headline, stats өөрчлөх үед

Холбоотой file:

- `components/brands/brand-card.tsx`
- `lib/data.ts`

### `app/about/page.tsx`

Юу хийдэг вэ:

- about page

Хэзээ засах вэ:

- company intro, mission, vision, values өөрчлөх үед

Холбоотой file:

- `lib/data.ts`

### `app/contact/page.tsx`

Юу хийдэг вэ:

- contact page
- `?service=...` query байвал тухайн service-г form дээр холбодог

Хэзээ засах вэ:

- contact info
- map section
- social section
- page-specific form copy

Холбоотой file:

- `components/shared/inquiry-form.tsx`
- `lib/site.ts`
- `lib/data.ts`

### `app/admin/page.tsx`

Юу хийдэг вэ:

- admin route wrapper
- `AdminDashboard` component-ийг render хийнэ

Хэзээ засах вэ:

- admin hero text өөрчлөх
- data injection source солих үед

Холбоотой file:

- `components/admin/admin-dashboard.tsx`
- `lib/data.ts`

### `app/not-found.tsx`

Юу хийдэг вэ:

- 404 page

Хэзээ засах вэ:

- not found дизайн өөрчлөх үед

### `app/robots.ts`

Юу хийдэг вэ:

- robots.txt үүсгэнэ

### `app/sitemap.ts`

Юу хийдэг вэ:

- sitemap.xml үүсгэнэ
- static page + product slug-уудыг оруулна

---

## 3. `components/` хавтас

Энд дахин ашиглагдах UI болон section component-ууд байна.

### `components/layout/`

#### `site-header.tsx`

- Desktop header
- Navigation menu
- Search
- Contact button
- Mobile menu trigger

Засах үед:

- navbar menu
- header height
- contact button style

Холбоотой:

- `mobile-nav.tsx`
- `header-search.tsx`
- `site-logo.tsx`
- `lib/site.ts`

#### `mobile-nav.tsx`

- Mobile hamburger menu
- Mobile search
- Mobile nav links

Засах үед:

- mobile menu layout
- mobile contact button

#### `header-search.tsx`

- Desktop search form
- `/products?q=...` route руу илгээнэ

Засах үед:

- search placeholder
- submit button style
- search behavior

#### `footer.tsx`

- Footer company info
- quick links
- category links
- contact info

Засах үед:

- footer menu
- contact info
- social link

Холбоотой:

- `lib/site.ts`
- `lib/data.ts`

#### `site-logo.tsx`

- Text logo болон жижиг `MV` badge

Засах үед:

- company name
- logo text
- brand mark

### `components/home/`

#### `home-hero.tsx`

- Home hero section
- CTA button
- metric cards

#### `category-grid.tsx`

- Home category card grid

#### `cta-banner.tsx`

- Bottom CTA banner

### `components/products/`

#### `product-card.tsx`

- Product card
- image, category, brand, price, CTA

#### `product-gallery.tsx`

- Product detail image gallery
- thumbnail click

#### `products-explorer.tsx`

- Search
- category filter
- brand filter
- price filter
- stock filter
- filtered grid

Анхаарах зүйл:

- энэ component нь data fetch хийхгүй
- page-ээс ирсэн бүх product array-г client side дээр filter хийдэг

### `components/services/service-card.tsx`

- Service card UI

### `components/brands/brand-card.tsx`

- Brand card UI
- Одоогоор real logo биш, text placeholder харуулдаг

### `components/shared/`

#### `inquiry-form.tsx`

- Shared inquiry/contact form
- Product page болон Contact page дээр давхар ашиглагдана

Анхаарах зүйл:

- submit хийхэд backend биш `localStorage` ашиглана

#### `page-hero.tsx`

- Services, brands, about, contact, admin, products зэрэг page-ийн common hero

#### `icon-token.tsx`

- `icon` string key -> Lucide icon map

#### `reveal.tsx`

- Framer Motion animation wrapper

### `components/ui/`

Эдгээр нь custom primitive component-ууд.

#### `button.tsx`

- Button style variant system

#### `input.tsx`

- Common input

#### `select.tsx`

- Common select

#### `textarea.tsx`

- Common textarea

#### `badge.tsx`

- Small tag/badge

#### `container.tsx`

- Page max-width wrapper

#### `section-heading.tsx`

- Section title + description wrapper

---

## 4. `lib/` хавтас

### `lib/site.ts`

Юу хийдэг вэ:

- company/site global config
- navigation menu
- quick link

Хэзээ засах вэ:

- company name
- phone
- email
- address
- social links
- menu item

### `lib/types.ts`

Юу хийдэг вэ:

- бүх data structure-ийн TypeScript interface

Хэзээ засах вэ:

- product field нэмэх
- brand field нэмэх
- inquiry schema өөрчлөх

### `lib/data.ts`

Юу хийдэг вэ:

- mock data storage
- categories
- brands
- services
- products
- inquiries
- stats
- helper getter functions

Хэзээ засах вэ:

- шинэ product/brand/service/category нэмэх
- copy/text/content өөрчлөх
- featured logic өөрчлөх

Холбоотой file:

- бараг бүх public page
- `app/admin/page.tsx`

### `lib/demo-store.ts`

Юу хийдэг вэ:

- browser `localStorage` дээр inquiry хадгална
- admin dashboard local inquiry sync хийнэ

Хэзээ засах вэ:

- real backend рүү шилжүүлэх үед

### `lib/metadata.ts`

Юу хийдэг вэ:

- page metadata factory

Хэзээ засах вэ:

- SEO structure өөрчлөх
- OG, Twitter card өөрчлөх

### `lib/utils.ts`

Юу хийдэг вэ:

- `cn()`
- `formatPrice()`
- `formatDate()`
- `createSlug()`

---

## 5. `src/data` байна уу?

Үгүй.

`src/data` хавтас байхгүй.

Data-ийн үүргийг:

- `lib/data.ts`
- `lib/site.ts`

хоёр файл гүйцэтгэж байна.

---

## 6. `public/` хавтас

### `public/placeholders/products/`

- Placeholder product SVG-үүд

### `public/placeholders/og/cover.svg`

- OpenGraph preview image

### Root SVG-үүд

- `public/file.svg`
- `public/globe.svg`
- `public/next.svg`
- `public/vercel.svg`
- `public/window.svg`

Эдгээр нь create-next-app-аас үлдсэн asset-ууд бөгөөд одоогийн runtime дээр ашиглагдахгүй байна.

---

## 7. `styles/` хавтас байна уу?

Үгүй.

Global style нь:

- `app/globals.css`

дотор байна.

---

## 8. `tailwind.config.ts` байна уу?

Үгүй.

Энэ төсөл `Tailwind CSS v4` ашиглаж байгаа тул token-уудыг:

- `app/globals.css`

дотор `@theme inline` ашиглан тодорхойлсон.

Тиймээс энэ project дээр Tailwind-ийн гол theme config файл:

- `app/globals.css`

гэж ойлгож болно.

---

## 9. `supabase/` хавтас

### `supabase/schema.sql`

Юу хийдэг вэ:

- future database schema

Таблицууд:

- `categories`
- `brands`
- `services`
- `products`
- `product_images`
- `product_specs`
- `inquiries`

Хэзээ засах вэ:

- database migration хийх үед
- шинэ table нэмэх үед

Одоогийн холбоо:

- runtime дээр ашиглахгүй
- зөвхөн ирээдүйн төлөвлөгөө
