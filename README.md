# MonVolt Supply Website

Монгол хэл дээрх цахилгаан бараа, тоног төхөөрөмж, үйлчилгээний demo corporate website. Next.js App Router, TypeScript, Tailwind CSS дээр бүтээгдсэн бөгөөд бүтээгдэхүүний каталог, product detail, services, brands, about, contact, мөн mock admin dashboard-тай.

## Stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React

## Run Locally

```bash
npm install
npm run dev
```

Хөтөч дээр `http://localhost:3000` нээнэ.

## Pages

- `/` Home
- `/products` Products catalog
- `/products/[slug]` Product detail
- `/services` Services
- `/brands` Brands / Partners
- `/about` About
- `/contact` Contact
- `/admin` Mock dashboard

## Project Structure

```text
app/                  App Router pages, layout, metadata routes
components/           Reusable UI, layout, home, product, service, brand, admin components
lib/                  Mock data, metadata helpers, site config, localStorage demo store
public/placeholders/  Placeholder product and OG visuals
supabase/schema.sql   Starter PostgreSQL / Supabase schema
```

## Admin Demo

- URL: `/admin`
- Demo login:
  - Email: `admin@monvolt.mn`
  - Password: `demo1234`

Энэ dashboard нь mock/localStorage түшиглэсэн UI. Inquiry form-оор илгээсэн хүсэлтүүд admin page дээр demo байдлаар харагдана.

## How To Replace Placeholder Logos / Images / Products

1. Brand logo солих:
   - `lib/data.ts` дахь `brands` array-ийн `logo` field-д бодит asset path өгнө.
   - Хэрэв бодит SVG/PNG ашиглах бол `public/brands/` зэрэг хавтас үүсгээд тийш нь байрлуулж болно.

2. Product image солих:
   - `lib/data.ts` дахь `products[].images` массивыг бодит зураг руу заана.
   - Одоогийн placeholder зурагнууд `public/placeholders/products/` дотор байна.

3. Product / category / service контент шинэчлэх:
   - Mock data бүгд `lib/data.ts` дотор төвлөрсөн.
   - Дараа нь Supabase эсвэл PostgreSQL руу шилжүүлэхдээ `lib/data.ts`-ийн getter-үүдийг service/db query-р солино.

4. Company info солих:
   - `lib/site.ts` дотор нэр, утас, имэйл, хаяг, social link, admin demo credential байна.

## Supabase Migration Note

Төслийн public хэсэг одоогоор mock data-тай. Database руу шилжүүлэхэд:

- `supabase/schema.sql`-ийг ашиглан хүснэгтүүдээ үүсгэнэ
- `lib/data.ts` getter-үүдийг Supabase query-гаар солино
- Inquiry form-ийг localStorage биш API route эсвэл server action ашиглан хадгална
- Admin dashboard-ийг бодит CRUD болгохын тулд auth + persisted storage холбоно

## Notes

- Real-time public site CRUD одоогоор хийхгүй, admin dashboard нь UI/prototype түвшинд.
- Placeholder visuals ашигласан тул бодит лого, барааны зураг, map embed, company text-ийг дараа нь шууд шинэчилж болно.
- Site нь `npm run dev`, `npm run lint`, `npm run build` орчинд ажиллахаар хийгдсэн.
