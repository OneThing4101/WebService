create extension if not exists pgcrypto;

create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  category text not null,
  brand text not null,
  price numeric,
  stock_status text not null,
  description text not null,
  images text[] not null default '{}',
  specs jsonb not null default '{}'::jsonb,
  featured boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  email text,
  message text not null,
  product_id uuid references products(id) on delete set null,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

create table if not exists brands (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  logo text not null,
  description text not null,
  category text not null,
  keywords text[] not null default '{}'
);

create index if not exists products_slug_idx on products(slug);
create index if not exists products_category_idx on products(category);
create index if not exists products_brand_idx on products(brand);
create index if not exists products_featured_idx on products(featured);
create index if not exists inquiries_status_idx on inquiries(status);
create index if not exists inquiries_created_at_idx on inquiries(created_at desc);
create index if not exists brands_slug_idx on brands(slug);
create index if not exists brands_category_idx on brands(category);

create or replace function set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists products_set_updated_at on products;
create trigger products_set_updated_at
before update on products
for each row execute function set_updated_at();
