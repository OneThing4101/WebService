# ROADMAP_MN

## Төслийн ирээдүйн хөгжүүлэлтийн практик roadmap

Энэ roadmap нь одоогийн mock/static төслийг production-ready систем болгох дарааллыг санал болгож байна.

---

## Phase 1: Static website polish

### Зорилго

Одоогийн demo UI-г бизнесийн бодит контенттой болгох.

### Хийх ажлууд

- `siteConfig` дээр company info-г бодит болгох
- Home page бүх текстийг бодит компанийн мэдээллээр шинэчлэх
- `lib/data.ts` дахь brand, product, service copy-г бодит болгох
- Placeholder зурагнуудыг бодит зураг/логоор солих
- `brand.logo` render хийх UI нэмэх
- Google Map placeholder-ийг embed map болгох
- Footer болон contact section-ийг бодит мэдээллээр дүүргэх

### Энэ phase-ийн үр дүн

- Сайт танилцуулгын түвшинд publish хийхэд ойр болно

---

## Phase 2: Products / news management

### Зорилго

Контентыг code edit-гүйгээр удирдах руу ойртуулах.

### Хийх ажлууд

- Product data structure-г тогтворжуулах
- Product image folder convention тогтоох
- Category/brand/service data-г тусдаа file болгон салгах эсэхийг шийдэх
- `news` feature нэмэх
  - `lib/news.ts`
  - `app/news/page.tsx`
  - `app/news/[slug]/page.tsx`
- Home page дээр news preview section нэмэх

### Энэ phase-ийн үр дүн

- Сайт каталог + мэдээний агуулгатай болно

---

## Phase 3: Supabase database

### Зорилго

Mock data-г бодит persisted data болгох.

### Хийх ажлууд

- `supabase/schema.sql`-ийг ашиглан DB setup хийх
- Supabase project үүсгэх
- env var нэмэх
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `lib/data.ts` getter-үүдийг database query service-р солих
- Product, category, brand, service table-уудыг populate хийх
- Placeholder `localStorage` logic-ийг аажмаар хасах

### Энэ phase-ийн үр дүн

- Public data admin эсвэл database-оос удирдагдана

---

## Phase 4: Admin authentication

### Зорилго

Mock admin-ийг бодит хамгаалалттай болгох.

### Хийх ажлууд

- Supabase Auth эсвэл NextAuth сонгох
- `/admin` route-г хамгаалах
- Demo email/password-г кодоос хасах
- Role-based access хийх
  - admin
  - editor
- `components/admin/admin-dashboard.tsx`-г олон жижиг component болгон хуваах

### Энэ phase-ийн үр дүн

- Admin зөвхөн эрхтэй хэрэглэгчдэд нээгдэнэ

---

## Phase 5: Inquiry / contact backend

### Зорилго

Form submit-ийг бодит ажиллагаатай болгох.

### Хийх ажлууд

- Inquiry form-ийг API route эсвэл server action ашиглан хадгалах
- `inquiries` table руу save хийх
- Admin дээр inquiry real-time эсвэл refreshed байдлаар харагдуулах
- Email notification нэмэх
  - company inbox
  - user confirmation
- Validation сайжруулах
  - required fields
  - phone format
  - spam protection

### Энэ phase-ийн үр дүн

- Contact form бизнесийн бодит урсгалд орно

---

## Phase 6: SEO and deployment

### Зорилго

Production launch хийх.

### Хийх ажлууд

- `siteConfig.url`-ийг бодит domain болгох
- OpenGraph image-г brand-aligned болгох
- structured data нэмэх
- metadata-г илүү нарийвчлах
- image optimization хийх
- sitemap, robots-ийг production domain-р баталгаажуулах
- Vercel deploy хийх
- domain холбох
- analytics нэмэх

### Энэ phase-ийн үр дүн

- Production launch-ready website

---

## Refactor roadmap

Эдгээрийг phase-уудаас тусад нь эсвэл хамтад нь хийж болно.

### Refactor 1

- `components/admin/admin-dashboard.tsx`-г жижиг file-ууд болгох

### Refactor 2

- давхардсан stat/card UI-уудыг shared component болгох

### Refactor 3

- Brand logo render support нэмэх

### Refactor 4

- `lib/data.ts`-г domain-specific file болгон хуваах
  - `lib/data/products.ts`
  - `lib/data/brands.ts`
  - `lib/data/services.ts`
  - `lib/data/categories.ts`

### Refactor 5

- filter state-г query param schema helper-тэй болгох

---

## Хамгийн зөв дараалал

Практикт бол дараах дараалал хамгийн ашигтай:

1. Phase 1
2. Phase 2
3. Phase 3
4. Phase 5
5. Phase 4
6. Phase 6

Яагаад гэвэл:

- эхлээд контент, UI-г тогтвортой болгоно
- дараа нь data model-оо тогтооно
- дараа нь DB руу шилжүүлнэ
- form backend-ээ холбоно
- хамгийн сүүлд auth болон deploy-г production түвшинд баталгаажуулна
