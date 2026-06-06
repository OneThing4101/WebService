# EDITING_GUIDE_MN

## 1. Components map

### Header / Navbar

Файл:

- `components/layout/site-header.tsx`
- `components/layout/mobile-nav.tsx`
- `components/layout/header-search.tsx`
- `components/layout/site-logo.tsx`

Юу хийдэг вэ:

- desktop navigation
- mobile menu
- search
- contact button
- logo

Аль page дээр ашиглагддаг вэ:

- `app/layout.tsx`-ээр бүх page дээр

Style хаанаас авдаг вэ:

- Tailwind class
- `buttonVariants()`
- color token-ууд `app/globals.css`

Яаж засах вэ:

- menu item: `lib/site.ts > mainNavigation`
- logo text: `components/layout/site-logo.tsx`
- desktop contact button: `components/layout/site-header.tsx`
- mobile contact button: `components/layout/mobile-nav.tsx`

### Footer

Файл:

- `components/layout/footer.tsx`

Юу хийдэг вэ:

- company info
- quick links
- category links
- social link

Data:

- `lib/site.ts`
- `lib/data.ts`

### ProductCard

Файл:

- `components/products/product-card.tsx`

Юу хийдэг вэ:

- product card UI
- image, brand, category, stock, price, CTA

Ашиглагддаг page:

- Home
- Products page
- Product detail related products section

### ProductGallery

Файл:

- `components/products/product-gallery.tsx`

Юу хийдэг вэ:

- product detail дээр зураг сонгох gallery

### Search / Filter

Файл:

- `components/products/products-explorer.tsx`

Юу хийдэг вэ:

- search param-уудыг URL дээр хадгалдаг
- category, brand, price, stock filter хийнэ

Ашиглагддаг page:

- `/products`

### ServiceCard

Файл:

- `components/services/service-card.tsx`

Юу хийдэг вэ:

- service card UI
- feature list
- contact page руу service query-тэй link

### BrandCard / Brand Grid

Файл:

- `components/brands/brand-card.tsx`

Юу хийдэг вэ:

- brand placeholder card
- brand name
- description
- productCategories

Анхаарах зүйл:

- `brand.logo` field ашиглахгүй байна
- бодит logo render хийх logic одоогоор алга

### Contact / Inquiry Form

Файл:

- `components/shared/inquiry-form.tsx`

Юу хийдэг вэ:

- common form
- product page дээр quote request
- contact page дээр general inquiry

Ашиглах data:

- `appendInquiry()` from `lib/demo-store.ts`

### Admin components

Файл:

- `components/admin/admin-dashboard.tsx`

Юу хийдэг вэ:

- login UI
- section menu
- product/category/brand/service/inquiry management UI

Анхаарах зүйл:

- энэ бол real admin backend биш
- зөвхөн localStorage demo

---

## 2. Data map

## Product, category, service, brand, inquiry data хаана байна?

### Main data file

- `lib/data.ts`

Энд байгаа data:

- `categories`
- `brands`
- `services`
- `products`
- `inquiries`
- `companyMetrics`
- `whyChooseUs`
- `companyValues`
- `processSteps`

### Type definitions

- `lib/types.ts`

### Site/company config

- `lib/site.ts`

### Demo browser storage

- `lib/demo-store.ts`

---

## 3. Data structure тайлбар

### Product

```ts
interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  brand: string;
  price: number;
  stockStatus: "Бэлэн" | "Захиалгаар" | "Түр дууссан";
  images: string[];
  shortDescription: string;
  description: string;
  specs: { label: string; value: string }[];
  featured: boolean;
}
```

### Category

```ts
interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
}
```

### Brand

```ts
interface Brand {
  id: string;
  name: string;
  logo: string;
  description: string;
  productCategories?: string[];
}
```

### Service

```ts
interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  features?: string[];
}
```

### Inquiry

```ts
interface Inquiry {
  id: string;
  name: string;
  phone: string;
  email: string;
  productId?: string;
  serviceId?: string;
  quantity?: number;
  message: string;
  status: "new" | "contacted" | "completed";
  createdAt: string;
}
```

---

## 4. New product яаж нэмэх вэ?

Файл:

- `lib/data.ts`

Алхам:

1. `products` массив руу шинэ object нэмнэ
2. `category` нь existing category `slug`-тай таарах ёстой
3. `brand` нь existing brand `id`-тай таарах ёстой
4. `images` массивт `public/...` path өгнө

Жишээ:

```ts
{
  id: "prod-led-bulb-12w",
  name: "LED Bulb 12W",
  slug: "led-bulb-12w",
  category: "gereltuuleg",
  brand: "gf",
  price: 12500,
  stockStatus: "Бэлэн",
  images: ["/placeholders/products/lighting.svg"],
  shortDescription: "Өдөр тутмын хэрэглээний LED гэрэл.",
  description: "Өндөр үр ашигтай, хэмнэлттэй LED bulb.",
  specs: [
    { label: "Чадал", value: "12W" },
    { label: "Суурь", value: "E27" }
  ],
  featured: false,
}
```

### Product image path хаана тавих вэ?

Хэрэв шинэ зураг оруулах бол:

1. `public/products/` гэх мэт хавтас үүсгэнэ
2. зургаа тийш нь хийнэ
3. `images` дээр:

```ts
images: ["/products/led-bulb-12w.jpg"]
```

гэж ашиглана

---

## 5. New category яаж нэмэх вэ?

Файл:

- `lib/data.ts`

`categories` массив руу нэмнэ.

Жишээ:

```ts
{
  id: "cat-sensors",
  name: "Мэдрэгч, хяналт",
  slug: "medregch-khyanalt",
  icon: "scan",
  description: "Automation, monitoring төрлийн төхөөрөмжүүд."
}
```

Анхаарах зүйл:

- `icon` нь `components/shared/icon-token.tsx` дотор байдаг key байх ёстой

Одоогийн icon key-үүд:

- `badge`
- `bolt`
- `boxes`
- `briefcase`
- `building`
- `cable`
- `circuit`
- `factory`
- `hand-coins`
- `headphones`
- `lightbulb`
- `package`
- `plug`
- `scan`
- `shield`
- `truck`
- `wrench`

---

## 6. New brand / partner яаж нэмэх вэ?

Файл:

- `lib/data.ts`

`brands` массив руу нэмнэ.

Жишээ:

```ts
{
  id: "schneider",
  name: "Schneider Electric",
  logo: "/brands/schneider.svg",
  description: "Түгээлт, хамгаалалт, automation чиглэлийн брэнд.",
  productCategories: ["Автомат таслуур", "Самбар, хайрцаг"]
}
```

Анхаарах зүйл:

- `logo` field одоогоор UI дээр ашиглагдахгүй
- одоогийн brand card нь зөвхөн нэр, тайлбар, tags харуулдаг

Тэгэхээр бодит logo file тавих байршил:

```text
public/brands/schneider.svg
```

Гэхдээ дараа нь logo-г render хийх component change хэрэгтэй болно.

---

## 7. New service яаж нэмэх вэ?

Файл:

- `lib/data.ts`

`services` массив руу шинэ service нэмнэ.

Жишээ:

```ts
{
  id: "service-ups",
  title: "UPS суурилуулалт",
  slug: "ups-suuriulalt",
  description: "Нөөц тэжээлийн системийн нийлүүлэлт, суурилуулалт.",
  icon: "bolt",
  features: ["Sizing", "Installation", "Testing"]
}
```

---

## 8. New news/post яаж нэмэх вэ?

Одоогоор боломжгүй, учир нь:

- `news` data file байхгүй
- `app/news` route байхгүй
- news/post interface байхгүй

Хэрэв static хэлбэрээр дараа нь нэмэх бол:

1. `lib/news.ts` үүсгэнэ
2. `NewsPost` type үүсгэнэ
3. `app/news/page.tsx` үүсгэнэ
4. `app/news/[slug]/page.tsx` үүсгэнэ
5. navbar-д `/news` link нэмнэ

Жишээ data structure:

```ts
interface NewsPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  publishedAt: string;
}
```

---

## 9. Styling guide

## Tailwind class хаана ашиглагддаг вэ?

Бараг бүх component дээр inline Tailwind class ашиглаж байна.

Жишээ:

- `site-header.tsx`
- `product-card.tsx`
- `home-hero.tsx`
- `button.tsx`

## Global color хаана байна?

Файл:

- `app/globals.css`

Тэнд:

```css
:root {
  --background: #ffffff;
  --foreground: #0f203a;
  --ink: #0f203a;
  --primary: #0f5cc0;
  --primary-strong: #0a468f;
  --accent: #f28c28;
  --muted: #627189;
  --border: #d9e4f1;
  --panel: #eef4fb;
}
```

гэсэн token-ууд байна.

## `primary`, `accent`, `background`, `text` color-ууд хаанаас удирдагддаг вэ?

Мөн `app/globals.css` дотор:

```css
@theme inline {
  --color-primary: var(--primary);
  --color-accent: var(--accent);
  --color-background: var(--background);
  --color-foreground: var(--foreground);
}
```

Ингэснээр Tailwind class дээр:

- `bg-primary`
- `text-primary`
- `bg-accent`
- `bg-background`
- `text-foreground`

гэж ашиглагдаж байна.

## Header contact button color яаж өөрчлөх вэ?

Файл:

- `components/layout/site-header.tsx`

Одоогийн code:

```ts
className={buttonVariants({
  variant: "dark",
  size: "md",
  className: "hidden lg:inline-flex",
})}
```

Button variant definition:

- `components/ui/button.tsx`

Хэрэв dark button-ийг orange болгох бол:

1. `variant: "secondary"` болгох
2. эсвэл `button.tsx` дахь `dark` variant-ийг өөрчлөх

## Font яаж солих вэ?

Файл:

- `app/layout.tsx`

Одоогийн font:

- `IBM_Plex_Sans`
- `Exo_2`

Хэрэв солих бол:

1. `next/font/google` import өөрчилнө
2. variable нэр хэвээр хадгалж болно
3. эсвэл `app/globals.css` дахь `--font-sans`, `--font-display` mapping-г шинэчилнэ

## Mobile responsive class-уудыг яаж ойлгох вэ?

Tailwind breakpoint ойлголт:

- `sm:` = жижиг tablet / том утаснаас эхэлнэ
- `md:` = tablet
- `lg:` = laptop
- `xl:` = том desktop

Жишээ:

### `hidden lg:flex`

- default үед hidden
- `lg`-ээс дээш үед flex

### `grid md:grid-cols-2 lg:grid-cols-3`

- default 1 багана
- `md` дээр 2 багана
- `lg` дээр 3 багана

### `rounded-full`

- бүрэн дугуй булантай

### `shadow-md`

- дунд зэргийн shadow

### `bg-blue-600`

- хөх дэвсгэр

### `text-white`

- цагаан текст

### `hover:bg-orange-600`

- mouse hover үед улбар шар өнгө болно

### Энэ project дээр илүү түгээмэл style

- `bg-primary`
- `text-white`
- `bg-accent`
- `text-ink`
- `border-border`
- `bg-panel`
- `font-display`

---

## 10. Common editing tasks

## 10.1 Logo / company name солих

Алхам:

1. `components/layout/site-logo.tsx` нээнэ
2. `MV` badge text-г солино
3. `MonVolt Supply` text-г солино
4. subtitle-г солино

Хэрэв image logo болгох бол:

1. `public/logo.svg` нэмнэ
2. `SiteLogo` component дотор `next/image` ашиглана

## 10.2 Navbar menu нэмэх / устгах

Файл:

- `lib/site.ts`

`mainNavigation` массив дээр ажиллана.

Жишээ:

```ts
{ href: "/news", label: "Мэдээ" }
```

гэж нэмбэл desktop + mobile navbar дээр хоёуланд нь автоматаар гарна.

## 10.3 Contact button өнгө солих

Desktop:

- `components/layout/site-header.tsx`

Mobile:

- `components/layout/mobile-nav.tsx`

Shared button variant:

- `components/ui/button.tsx`

## 10.4 Home page hero text солих

Файл:

- `components/home/home-hero.tsx`

Солих зүйл:

- eyebrow
- title
- subtitle
- CTA button text

## 10.5 Product нэмэх

Файл:

- `lib/data.ts`

`products` массив руу object нэмнэ.

## 10.6 Product category нэмэх

Файл:

- `lib/data.ts`

`categories` массив руу object нэмнэ.

Дараа нь product-уудын `category` field дээр шинэ category `slug` ашиглана.

## 10.7 Partner logo нэмэх

Одоогийн бодит байдал:

- `brands[].logo` field байгаа
- UI logo render хийхгүй

Тиймээс одоогоор:

1. `lib/data.ts` дотор brand object нэм
2. `logo` path-г placeholder байдлаар бөглө
3. Дараа нь component update хийх үед logo-г гаргана

## 10.8 Service нэмэх

Файл:

- `lib/data.ts`

`services` массив руу нэмнэ.

## 10.9 News/post нэмэх

Одоогоор feature байхгүй.

Тиймээс эхлээд:

1. `lib/news.ts`
2. `app/news/page.tsx`
3. `app/news/[slug]/page.tsx`

гэсэн 3 үндсэн хэсгийг нэмж байж edit хийх боломжтой болно.

## 10.10 Footer contact info солих

Файл:

- `lib/site.ts`

Солих field:

- `phone`
- `email`
- `address`
- `facebook`
- `instagram`

## 10.11 Contact form field солих

Файл:

- `components/shared/inquiry-form.tsx`

Одоогийн field:

- name
- phone
- email
- quantity
- message

Хэрэв шинэ field нэмэх бол:

1. `initialFormState` шинэчилнэ
2. form state type/shape шинэчилнэ
3. шинэ `Input` нэмнэ
4. `payload` object шинэчилнэ
5. шаардлагатай бол `InquirySubmission` type-г `lib/types.ts` дээр шинэчилнэ

## 10.12 Admin dashboard дээр menu нэмэх

Файл:

- `components/admin/admin-dashboard.tsx`

Солих хэсэг:

```ts
const sections = [
  ...
]
```

Шинэ admin menu нэмэхийн тулд:

1. `AdminSection` union type дээр key нэм
2. `sections` массив дээр item нэм
3. доор render condition block нэм

Жишээ:

```ts
type AdminSection =
  | "products"
  | "categories"
  | "brands"
  | "services"
  | "inquiries"
  | "news";
```

дараа нь:

```ts
{ id: "news", label: "Мэдээ", icon: LayoutDashboard }
```

мөн:

```tsx
{activeSection === "news" ? (...panel...) : null}
```

нэмнэ.
