create extension if not exists pgcrypto;

create table if not exists categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  icon text not null,
  description text not null,
  created_at timestamptz not null default now()
);

create table if not exists brands (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  logo text,
  description text not null,
  product_categories text[] not null default '{}',
  created_at timestamptz not null default now()
);

create table if not exists services (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  description text not null,
  icon text not null,
  features text[] not null default '{}',
  created_at timestamptz not null default now()
);

create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  category_id uuid not null references categories(id) on delete restrict,
  brand_id uuid not null references brands(id) on delete restrict,
  price numeric(12,2) not null default 0,
  stock_status text not null check (stock_status in ('Бэлэн', 'Захиалгаар', 'Түр дууссан')),
  short_description text not null,
  description text not null,
  featured boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists product_images (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references products(id) on delete cascade,
  image_url text not null,
  sort_order integer not null default 0
);

create table if not exists product_specs (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references products(id) on delete cascade,
  label text not null,
  value text not null,
  sort_order integer not null default 0
);

create table if not exists inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  email text not null,
  product_id uuid references products(id) on delete set null,
  service_id uuid references services(id) on delete set null,
  quantity integer,
  message text not null,
  status text not null default 'new' check (status in ('new', 'contacted', 'completed')),
  created_at timestamptz not null default now()
);

create index if not exists products_category_id_idx on products(category_id);
create index if not exists products_brand_id_idx on products(brand_id);
create index if not exists product_images_product_id_idx on product_images(product_id);
create index if not exists product_specs_product_id_idx on product_specs(product_id);
create index if not exists inquiries_status_idx on inquiries(status);
create index if not exists inquiries_created_at_idx on inquiries(created_at desc);
