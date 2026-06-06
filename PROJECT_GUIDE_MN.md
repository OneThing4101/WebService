# PROJECT_GUIDE_MN

## 1. Төслийн ерөнхий ойлголт

### Энэ website ямар зориулалттай вэ?

Энэ сайт нь `MonVolt Supply` нэртэй цахилгаан бараа, цахилгааны материал, тоног төхөөрөмж, угсралт засвар үйлчилгээний компанийн demo corporate website юм.

Сайтын гол зорилго:

- Компанийн танилцуулга өгөх
- Бүтээгдэхүүний каталог харуулах
- Үйлчилгээний төрлүүдийг танилцуулах
- Partner / brand section харуулах
- Хэрэглэгчээс inquiry авах
- Mock admin dashboard-оор бүтээгдэхүүн, ангилал, брэнд, үйлчилгээ, inquiry UI удирдах

### Ашигласан tech stack

- `Next.js 16` App Router
- `React 19`
- `TypeScript`
- `Tailwind CSS v4`
- `Framer Motion`
- `Lucide React`
- `ESLint`

### shadcn/ui ашигласан уу?

Үгүй.

Төсөлд `components/ui/` хавтас байгаа ч энэ нь shadcn/ui package биш.
Энд байгаа `Button`, `Input`, `Select`, `Textarea`, `Badge`, `Container` зэрэг нь гараар бичсэн custom UI components.

shadcn/ui ашигласан бол ихэвчлэн:

- `components.json`
- `class-variance-authority`
- `tailwind-merge`
- `@radix-ui/*`

зэрэг зүйлс project дээр харагддаг. Энэ төсөлд тийм зүйл алга.

### Project static mock data дээр байна уу?

Тийм.

Одоогийн runtime data source:

- `lib/data.ts` дахь mock массивууд
- `lib/site.ts` дахь site config
- `lib/demo-store.ts` дахь browser `localStorage`

Database runtime дээр ашиглаагүй.

### Supabase / PostgreSQL ашиглаж байна уу?

Одоогоор ашиглахгүй байна.

Гэхдээ ирээдүйд ашиглахад зориулсан schema файл байна:

- `supabase/schema.sql`

Энэ нь зөвхөн бэлтгэл файл. Сайт өөрөө одоогоор энэ schema-тай холбогдоогүй.

## 2. Одоогийн архитектурын гол санаа

Төсөл дараах үндсэн давхаргатай:

1. `app/`
   - Next.js route болон page file-ууд
2. `components/`
   - Дахин ашиглах UI болон section component-ууд
3. `lib/`
   - Data, types, helper functions, site config
4. `public/`
   - Placeholder зураг, static asset
5. `supabase/`
   - Ирээдүйн database schema

## 3. Pages map

Анхаарах зүйл:

- Энэ төсөлд `src/` хавтас байхгүй
- Route-ууд `app/` хавтсанд байрлаж байна

### `/`

- Зорилго: Home / landing page
- Гол component:
  - `HomeHero`
  - `CategoryGrid`
  - `ProductCard`
  - `ServiceCard`
  - `BrandCard`
  - `CtaBanner`
- Ашиглах data:
  - `getCategories()`
  - `getFeaturedProducts()`
  - `getServicesPreview()`
  - `getBrands()`
  - `companyMetrics`
  - `whyChooseUs`
- Засах файл:
  - `app/page.tsx`
  - Home section text-үүдийг эндээс солино

### `/products`

- Зорилго: Бүтээгдэхүүний каталог
- Гол component:
  - `PageHero`
  - `ProductsExplorer`
- Ашиглах data:
  - `getProducts()`
  - `getCategories()`
  - `getBrands()`
- Засах файл:
  - `app/products/page.tsx`
  - filter behavior-ийг `components/products/products-explorer.tsx`

### `/products/[slug]`

- Зорилго: Нэг бүтээгдэхүүний дэлгэрэнгүй хуудас
- Гол component:
  - `ProductGallery`
  - `InquiryForm`
  - `ProductCard` (related products)
- Ашиглах data:
  - `getProductBySlug()`
  - `getRelatedProducts()`
  - `getCategoryBySlug()`
  - `getBrandById()`
- Засах файл:
  - `app/products/[slug]/page.tsx`

### `/services`

- Зорилго: Үйлчилгээний жагсаалт
- Гол component:
  - `PageHero`
  - `ServiceCard`
  - Process section
- Ашиглах data:
  - `getServices()`
  - `processSteps`
- Засах файл:
  - `app/services/page.tsx`

### `/brands`

- Зорилго: Partner / brand page
- Гол component:
  - `PageHero`
  - `BrandCard`
- Ашиглах data:
  - `getBrands()`
- Засах файл:
  - `app/brands/page.tsx`

### `/about`

- Зорилго: Компанийн танилцуулга
- Гол component:
  - `PageHero`
  - local `ValueCard`
- Ашиглах data:
  - `companyMetrics`
  - `companyValues`
- Засах файл:
  - `app/about/page.tsx`

### `/contact`

- Зорилго: Холбоо барих, inquiry илгээх
- Гол component:
  - `PageHero`
  - `InquiryForm`
  - local `ContactCard`
- Ашиглах data:
  - `siteConfig`
  - `getServiceById()`
- Засах файл:
  - `app/contact/page.tsx`
  - form behavior-ийг `components/shared/inquiry-form.tsx`

### `/admin`

- Зорилго: Mock admin dashboard
- Гол component:
  - `AdminDashboard`
- Ашиглах data:
  - `getProducts()`
  - `getCategories()`
  - `getBrands()`
  - `getServices()`
  - `inquiries`
  - browser `localStorage`
- Засах файл:
  - `app/admin/page.tsx`
  - `components/admin/admin-dashboard.tsx`

### `/news`

- Одоогоор байхгүй
- `app/news` route алга
- `news/post` data file алга

### Бусад route

- `/_not-found`
  - 404 page
  - Файл: `app/not-found.tsx`
- `/robots.txt`
  - Файл: `app/robots.ts`
- `/sitemap.xml`
  - Файл: `app/sitemap.ts`

## 4. Одоогийн статус

### Бүрэн хийгдсэн хэсгүүд

- Public marketing pages
- Product catalog UI
- Product detail UI
- Services page
- Brands page
- About page
- Contact page
- SEO metadata
- Sitemap, robots
- Responsive header/footer
- Mock admin UI
- Build, lint ажиллаж байна

### Mock/static байгаа хэсгүүд

- Product data
- Brand data
- Category data
- Service data
- Inquiry initial data
- Admin login
- Inquiry persistence
- Partner logo
- Google map

### Unfinished / gap байгаа хэсгүүд

- Database integration байхгүй
- Real auth байхгүй
- News/blog section байхгүй
- Admin дээр хийсэн өөрчлөлт public site дээр sync болохгүй
- Brand logo field байгаа ч UI дээр бодит logo render хийхгүй байна
- Contact form backend, email notification байхгүй

## 5. Гол асуудал, TODO

### 1. Admin dashboard нь public data-тай холбоогүй

`/admin` дээр бүтээгдэхүүн нэмэхэд:

- зөвхөн admin component-ийн state ба `localStorage` өөрчлөгдөнө
- харин `/products` page нь `lib/data.ts`-аас уншдаг хэвээр

Тиймээс admin дээр нэмсэн бараа public catalog дээр шууд харагдахгүй.

### 2. Inquiry зөвхөн localStorage дээр хадгалагдана

- `InquiryForm` -> `appendInquiry()`
- `appendInquiry()` -> browser `localStorage`

Иймээс:

- зөвхөн тухайн browser дээр хадгалагдана
- server дээр алга
- email явуулахгүй

### 3. Brand logo field ашиглагдахгүй байна

`Brand` type-д `logo` field байгаа ч:

- `BrandCard` component logo-г зураг байдлаар render хийхгүй
- одоогоор брэндийн нэрийг text card байдлаар харуулж байна

### 4. News/post feature байхгүй

User requirement-д future content management хэрэгтэй гэж харагдаж байгаа ч:

- route алга
- interface алга
- data file алга

### 5. Зарим component helper-үүд давхардсан

Жишээ нь:

- `SummaryStat`
- `StatBlock`
- `ValueCard`
- `ContactCard`

Эдгээрийг дараа нь shared component болгох боломжтой.

### 6. `components/admin/admin-dashboard.tsx` файл хэт том

Нэг файл дотроо:

- auth
- form state
- CRUD-like UI
- section switching
- inquiry status

бүгдийг агуулж байна.

Дараа нь дараах байдлаар хувааж refactor хийвэл сайн:

- `admin-login.tsx`
- `admin-sidebar.tsx`
- `admin-products-panel.tsx`
- `admin-categories-panel.tsx`
- `admin-brands-panel.tsx`
- `admin-services-panel.tsx`
- `admin-inquiries-panel.tsx`

## 6. Run / Build / Deploy

### Local ажиллуулах

```bash
npm install
npm run dev
```

### Build шалгах

```bash
npm run build
```

### Lint шалгах

```bash
npm run lint
```

### Production server

```bash
npm start
```

### GitHub push

```bash
git add .
git commit -m "your message"
git push origin main
```

### Deploy хийхэд анхаарах зүйл

#### Vercel

- Next.js project тул хамгийн тохиромжтой
- `siteConfig.url`-ийг бодит domain болгох хэрэгтэй
- Environment variable одоогоор шаардлагагүй
- Database нэмбэл env var заавал хэрэгтэй болно

#### Netlify

- Static route-уудаар асуудалгүй
- Dynamic behavior нь Next adapter-аас хамаарна
- App Router project учраас Vercel илүү амар

## 7. Дараагийн унших файлууд

Энэ төслийг ойлгох хамгийн зөв дараалал:

1. `package.json`
2. `app/layout.tsx`
3. `app/globals.css`
4. `lib/site.ts`
5. `lib/types.ts`
6. `lib/data.ts`
7. `app/page.tsx`
8. `app/products/page.tsx`
9. `app/products/[slug]/page.tsx`
10. `components/layout/site-header.tsx`
11. `components/products/products-explorer.tsx`
12. `components/shared/inquiry-form.tsx`
13. `components/admin/admin-dashboard.tsx`
