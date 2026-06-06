"use client";

import {
  FormEvent,
  startTransition,
  useEffect,
  useEffectEvent,
  useState,
} from "react";
import type { ElementType, ReactNode } from "react";
import {
  Boxes,
  CheckCircle2,
  FolderKanban,
  LayoutDashboard,
  PencilLine,
  Plus,
  Shield,
  Trash2,
  Wrench,
} from "lucide-react";
import { siteConfig } from "@/lib/site";
import { cn, createSlug, formatDate } from "@/lib/utils";
import { readStoredInquiries, saveInquiryStatus } from "@/lib/demo-store";
import type {
  Brand,
  Category,
  Inquiry,
  InquiryStatus,
  Product,
  Service,
  StockStatus,
} from "@/lib/types";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

type AdminSection = "products" | "categories" | "brands" | "services" | "inquiries";

const storageKeys = {
  auth: "monvolt-admin-auth",
  products: "monvolt-admin-products",
  categories: "monvolt-admin-categories",
  brands: "monvolt-admin-brands",
  services: "monvolt-admin-services",
};

interface AdminDashboardProps {
  initialProducts: Product[];
  initialCategories: Category[];
  initialBrands: Brand[];
  initialServices: Service[];
  initialInquiries: Inquiry[];
}

type ProductFormState = {
  id?: string;
  name: string;
  slug: string;
  category: string;
  brand: string;
  price: string;
  stockStatus: StockStatus;
  shortDescription: string;
  featured: boolean;
};

type CategoryFormState = {
  id?: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
};

type BrandFormState = {
  id?: string;
  name: string;
  description: string;
  productCategories: string;
};

type ServiceFormState = {
  id?: string;
  title: string;
  slug: string;
  icon: string;
  description: string;
};

const emptyProductForm: ProductFormState = {
  name: "",
  slug: "",
  category: "",
  brand: "",
  price: "",
  stockStatus: "Бэлэн",
  shortDescription: "",
  featured: false,
};

const emptyCategoryForm: CategoryFormState = {
  name: "",
  slug: "",
  icon: "plug",
  description: "",
};

const emptyBrandForm: BrandFormState = {
  name: "",
  description: "",
  productCategories: "",
};

const emptyServiceForm: ServiceFormState = {
  title: "",
  slug: "",
  icon: "bolt",
  description: "",
};

function readCollection<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") {
    return fallback;
  }

  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function saveCollection<T>(key: string, value: T) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(key, JSON.stringify(value));
}

export function AdminDashboard({
  initialProducts,
  initialCategories,
  initialBrands,
  initialServices,
  initialInquiries,
}: AdminDashboardProps) {
  const [ready, setReady] = useState(false);
  const [authenticated, setAuthenticated] = useState(() =>
    readCollection<boolean>(storageKeys.auth, false),
  );
  const [authEmail, setAuthEmail] = useState<string>(siteConfig.adminCredentials.email);
  const [authPassword, setAuthPassword] = useState<string>(
    siteConfig.adminCredentials.password,
  );
  const [authError, setAuthError] = useState("");
  const [activeSection, setActiveSection] = useState<AdminSection>("products");
  const [products, setProducts] = useState<Product[]>(() =>
    readCollection<Product[]>(storageKeys.products, initialProducts),
  );
  const [categories, setCategories] = useState<Category[]>(() =>
    readCollection<Category[]>(storageKeys.categories, initialCategories),
  );
  const [brands, setBrands] = useState<Brand[]>(() =>
    readCollection<Brand[]>(storageKeys.brands, initialBrands),
  );
  const [services, setServices] = useState<Service[]>(() =>
    readCollection<Service[]>(storageKeys.services, initialServices),
  );
  const [inquiries, setInquiries] = useState<Inquiry[]>(() =>
    readStoredInquiries(initialInquiries),
  );
  const [productForm, setProductForm] = useState<ProductFormState>(emptyProductForm);
  const [categoryForm, setCategoryForm] = useState<CategoryFormState>(emptyCategoryForm);
  const [brandForm, setBrandForm] = useState<BrandFormState>(emptyBrandForm);
  const [serviceForm, setServiceForm] = useState<ServiceFormState>(emptyServiceForm);

  useEffect(() => {
    // Client-only storage is activated after hydration so prerendered markup stays stable.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReady(true);
  }, []);

  const persistCollections = useEffectEvent(() => {
    saveCollection(storageKeys.products, products);
    saveCollection(storageKeys.categories, categories);
    saveCollection(storageKeys.brands, brands);
    saveCollection(storageKeys.services, services);
  });

  useEffect(() => {
    if (!ready) {
      return;
    }

    persistCollections();
  }, [brands, categories, products, ready, services]);

  useEffect(() => {
    if (!ready) {
      return;
    }

    saveCollection(storageKeys.auth, authenticated);
  }, [authenticated, ready]);

  useEffect(() => {
    if (!ready) {
      return;
    }

    saveInquiryStatus(inquiries);
  }, [inquiries, ready]);

  function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (
      authEmail.trim() === siteConfig.adminCredentials.email &&
      authPassword.trim() === siteConfig.adminCredentials.password
    ) {
      setAuthenticated(true);
      setAuthError("");
      return;
    }

    setAuthError(
      `Demo нэвтрэх мэдээлэл: ${siteConfig.adminCredentials.email} / ${siteConfig.adminCredentials.password}`,
    );
  }

  function upsertProduct(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!productForm.name.trim() || !productForm.category || !productForm.brand) {
      return;
    }

    startTransition(() => {
      const nextProduct: Product = {
        id: productForm.id ?? `prod-${createSlug(productForm.name)}`,
        name: productForm.name.trim(),
        slug: productForm.slug.trim() || createSlug(productForm.name),
        category: productForm.category,
        brand: productForm.brand,
        price: Number(productForm.price) || 0,
        stockStatus: productForm.stockStatus,
        images: ["/placeholders/products/panel.svg"],
        shortDescription: productForm.shortDescription.trim(),
        description: productForm.shortDescription.trim(),
        specs: [{ label: "Төлөв", value: "Admin demo item" }],
        featured: productForm.featured,
      };

      setProducts((current) => {
        if (productForm.id) {
          return current.map((item) => (item.id === productForm.id ? nextProduct : item));
        }
        return [nextProduct, ...current];
      });

      setProductForm(emptyProductForm);
    });
  }

  function upsertCategory(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!categoryForm.name.trim()) {
      return;
    }

    startTransition(() => {
      const nextCategory: Category = {
        id: categoryForm.id ?? `cat-${createSlug(categoryForm.name)}`,
        name: categoryForm.name.trim(),
        slug: categoryForm.slug.trim() || createSlug(categoryForm.name),
        icon: categoryForm.icon,
        description: categoryForm.description.trim(),
      };

      setCategories((current) => {
        if (categoryForm.id) {
          return current.map((item) =>
            item.id === categoryForm.id ? nextCategory : item,
          );
        }
        return [nextCategory, ...current];
      });

      setCategoryForm(emptyCategoryForm);
    });
  }

  function upsertBrand(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!brandForm.name.trim()) {
      return;
    }

    startTransition(() => {
      const nextBrand: Brand = {
        id: brandForm.id ?? createSlug(brandForm.name),
        name: brandForm.name.trim(),
        logo: "",
        description: brandForm.description.trim(),
        productCategories: brandForm.productCategories
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),
      };

      setBrands((current) => {
        if (brandForm.id) {
          return current.map((item) => (item.id === brandForm.id ? nextBrand : item));
        }
        return [nextBrand, ...current];
      });

      setBrandForm(emptyBrandForm);
    });
  }

  function upsertService(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!serviceForm.title.trim()) {
      return;
    }

    startTransition(() => {
      const nextService: Service = {
        id: serviceForm.id ?? `service-${createSlug(serviceForm.title)}`,
        title: serviceForm.title.trim(),
        slug: serviceForm.slug.trim() || createSlug(serviceForm.title),
        description: serviceForm.description.trim(),
        icon: serviceForm.icon,
        features: ["Admin demo service"],
      };

      setServices((current) => {
        if (serviceForm.id) {
          return current.map((item) =>
            item.id === serviceForm.id ? nextService : item,
          );
        }
        return [nextService, ...current];
      });

      setServiceForm(emptyServiceForm);
    });
  }

  function removeProduct(id: string) {
    startTransition(() => setProducts((current) => current.filter((item) => item.id !== id)));
  }

  function removeCategory(id: string) {
    startTransition(() =>
      setCategories((current) => current.filter((item) => item.id !== id)),
    );
  }

  function removeBrand(id: string) {
    startTransition(() => setBrands((current) => current.filter((item) => item.id !== id)));
  }

  function removeService(id: string) {
    startTransition(() =>
      setServices((current) => current.filter((item) => item.id !== id)),
    );
  }

  function updateInquiryStatus(id: string, status: InquiryStatus) {
    setInquiries((current) =>
      current.map((item) => (item.id === id ? { ...item, status } : item)),
    );
  }

  if (!ready) {
    return (
      <div className="rounded-[2rem] border border-border bg-white p-10 text-center shadow-[0_24px_60px_rgba(14,34,64,0.08)]">
        <p className="text-sm font-medium text-muted">Dashboard ачаалж байна...</p>
      </div>
    );
  }

  if (!authenticated) {
    return (
      <div className="mx-auto max-w-xl rounded-[2rem] border border-border bg-white p-8 shadow-[0_24px_60px_rgba(14,34,64,0.08)] sm:p-10">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-ink text-white">
          <Shield className="h-6 w-6" />
        </div>
        <div className="mt-6 space-y-3">
          <h2 className="font-display text-3xl font-bold text-ink">
            Хамгаалалттай админ хэсэг
          </h2>
          <p className="text-sm leading-7 text-muted">
            Энэ бол mock authentication-той демо dashboard. Нэвтэрсний дараа
            бүтээгдэхүүн, ангилал, брэнд, үйлчилгээ, inquiry жагсаалтаа удирдах UI
            харагдана.
          </p>
        </div>

        <form onSubmit={handleLogin} className="mt-8 space-y-4">
          <Input
            type="email"
            value={authEmail}
            onChange={(event) => setAuthEmail(event.target.value)}
            placeholder="Имэйл"
          />
          <Input
            type="password"
            value={authPassword}
            onChange={(event) => setAuthPassword(event.target.value)}
            placeholder="Нууц үг"
          />
          {authError ? <p className="text-sm text-primary">{authError}</p> : null}
          <Button type="submit" className="w-full">
            Нэвтрэх
          </Button>
        </form>
      </div>
    );
  }

  const sections: Array<{
    id: AdminSection;
    label: string;
    icon: ElementType;
  }> = [
    { id: "products", label: "Бүтээгдэхүүн", icon: Boxes },
    { id: "categories", label: "Ангилал", icon: FolderKanban },
    { id: "brands", label: "Брэндүүд", icon: LayoutDashboard },
    { id: "services", label: "Үйлчилгээ", icon: Wrench },
    { id: "inquiries", label: "Inquiry", icon: CheckCircle2 },
  ];

  return (
    <div className="space-y-8">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <MetricCard label="Бүтээгдэхүүн" value={String(products.length)} />
        <MetricCard label="Ангилал" value={String(categories.length)} />
        <MetricCard label="Брэнд" value={String(brands.length)} />
        <MetricCard label="Шинэ inquiry" value={String(inquiries.filter((item) => item.status === "new").length)} />
      </div>

      <div className="grid gap-8 xl:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="rounded-[2rem] border border-border bg-white p-5 shadow-[0_20px_50px_rgba(14,34,64,0.06)]">
          <div className="rounded-[1.6rem] bg-ink p-5 text-white">
            <p className="text-xs uppercase tracking-[0.24em] text-white/[0.55]">Admin Access</p>
            <h3 className="mt-2 font-display text-2xl font-bold">
              {siteConfig.adminCredentials.email}
            </h3>
            <p className="mt-3 text-sm leading-7 text-white/[0.65]">
              Demo session идэвхтэй байна.
            </p>
          </div>

          <div className="mt-5 space-y-2">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => setActiveSection(section.id)}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-medium transition-colors",
                    activeSection === section.id
                      ? "bg-primary text-white"
                      : "bg-white text-ink hover:bg-panel",
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {section.label}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => setAuthenticated(false)}
            className={buttonVariants({
              variant: "outline",
              className: "mt-5 w-full",
            })}
          >
            Гарах
          </button>
        </aside>

        <div className="space-y-8">
          {activeSection === "products" ? (
            <AdminPanel
              title="Бүтээгдэхүүн удирдах"
              description="Core demo field-үүдээр бүтээгдэхүүн нэмэх, засах, устгах боломжтой."
              form={
                <form onSubmit={upsertProduct} className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <Input
                      value={productForm.name}
                      onChange={(event) =>
                        setProductForm({ ...productForm, name: event.target.value })
                      }
                      placeholder="Нэр"
                    />
                    <Input
                      value={productForm.slug}
                      onChange={(event) =>
                        setProductForm({ ...productForm, slug: event.target.value })
                      }
                      placeholder="Slug"
                    />
                  </div>
                  <div className="grid gap-4 md:grid-cols-3">
                    <Select
                      value={productForm.category}
                      onChange={(event) =>
                        setProductForm({ ...productForm, category: event.target.value })
                      }
                    >
                      <option value="">Ангилал сонгох</option>
                      {categories.map((category) => (
                        <option key={category.id} value={category.slug}>
                          {category.name}
                        </option>
                      ))}
                    </Select>
                    <Select
                      value={productForm.brand}
                      onChange={(event) =>
                        setProductForm({ ...productForm, brand: event.target.value })
                      }
                    >
                      <option value="">Брэнд сонгох</option>
                      {brands.map((brand) => (
                        <option key={brand.id} value={brand.id}>
                          {brand.name}
                        </option>
                      ))}
                    </Select>
                    <Select
                      value={productForm.stockStatus}
                      onChange={(event) =>
                        setProductForm({
                          ...productForm,
                          stockStatus: event.target.value as StockStatus,
                        })
                      }
                    >
                      <option value="Бэлэн">Бэлэн</option>
                      <option value="Захиалгаар">Захиалгаар</option>
                      <option value="Түр дууссан">Түр дууссан</option>
                    </Select>
                  </div>
                  <div className="grid gap-4 md:grid-cols-[180px_minmax(0,1fr)]">
                    <Input
                      type="number"
                      value={productForm.price}
                      onChange={(event) =>
                        setProductForm({ ...productForm, price: event.target.value })
                      }
                      placeholder="Үнэ"
                    />
                    <Input
                      value={productForm.shortDescription}
                      onChange={(event) =>
                        setProductForm({
                          ...productForm,
                          shortDescription: event.target.value,
                        })
                      }
                      placeholder="Товч тайлбар"
                    />
                  </div>
                  <label className="flex items-center gap-3 text-sm text-ink">
                    <input
                      type="checkbox"
                      checked={productForm.featured}
                      onChange={(event) =>
                        setProductForm({
                          ...productForm,
                          featured: event.target.checked,
                        })
                      }
                    />
                    Home page дээр онцлох бүтээгдэхүүн болгох
                  </label>
                  <div className="flex flex-wrap gap-3">
                    <Button type="submit">
                      <Plus className="h-4 w-4" />
                      {productForm.id ? "Хадгалах" : "Нэмэх"}
                    </Button>
                    {productForm.id ? (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setProductForm(emptyProductForm)}
                      >
                        Цэвэрлэх
                      </Button>
                    ) : null}
                  </div>
                </form>
              }
            >
              {products.map((product) => (
                <ListCard
                  key={product.id}
                  title={product.name}
                  subtitle={`${product.stockStatus} · ${product.price.toLocaleString("mn-MN")}₮`}
                  body={product.shortDescription}
                  onEdit={() =>
                    setProductForm({
                      id: product.id,
                      name: product.name,
                      slug: product.slug,
                      category: product.category,
                      brand: product.brand,
                      price: String(product.price),
                      stockStatus: product.stockStatus,
                      shortDescription: product.shortDescription,
                      featured: product.featured,
                    })
                  }
                  onDelete={() => removeProduct(product.id)}
                />
              ))}
            </AdminPanel>
          ) : null}

          {activeSection === "categories" ? (
            <AdminPanel
              title="Ангилал удирдах"
              description="Каталогийн ангиллын бүтэц, тайлбар, icon key-ээ засварлана."
              form={
                <form onSubmit={upsertCategory} className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <Input
                      value={categoryForm.name}
                      onChange={(event) =>
                        setCategoryForm({ ...categoryForm, name: event.target.value })
                      }
                      placeholder="Нэр"
                    />
                    <Input
                      value={categoryForm.slug}
                      onChange={(event) =>
                        setCategoryForm({ ...categoryForm, slug: event.target.value })
                      }
                      placeholder="Slug"
                    />
                  </div>
                  <div className="grid gap-4 md:grid-cols-[200px_minmax(0,1fr)]">
                    <Input
                      value={categoryForm.icon}
                      onChange={(event) =>
                        setCategoryForm({ ...categoryForm, icon: event.target.value })
                      }
                      placeholder="Icon key"
                    />
                    <Textarea
                      value={categoryForm.description}
                      onChange={(event) =>
                        setCategoryForm({
                          ...categoryForm,
                          description: event.target.value,
                        })
                      }
                      placeholder="Тайлбар"
                    />
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button type="submit">{categoryForm.id ? "Хадгалах" : "Нэмэх"}</Button>
                    {categoryForm.id ? (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setCategoryForm(emptyCategoryForm)}
                      >
                        Цэвэрлэх
                      </Button>
                    ) : null}
                  </div>
                </form>
              }
            >
              {categories.map((category) => (
                <ListCard
                  key={category.id}
                  title={category.name}
                  subtitle={category.slug}
                  body={category.description}
                  onEdit={() => setCategoryForm({ ...category })}
                  onDelete={() => removeCategory(category.id)}
                />
              ))}
            </AdminPanel>
          ) : null}

          {activeSection === "brands" ? (
            <AdminPanel
              title="Брэнд удирдах"
              description="Placeholder logo бүтэцтэй брэндийн мэдээллийг шинэчилнэ."
              form={
                <form onSubmit={upsertBrand} className="space-y-4">
                  <Input
                    value={brandForm.name}
                    onChange={(event) =>
                      setBrandForm({ ...brandForm, name: event.target.value })
                    }
                    placeholder="Брэндийн нэр"
                  />
                  <Textarea
                    value={brandForm.description}
                    onChange={(event) =>
                      setBrandForm({ ...brandForm, description: event.target.value })
                    }
                    placeholder="Тайлбар"
                  />
                  <Input
                    value={brandForm.productCategories}
                    onChange={(event) =>
                      setBrandForm({
                        ...brandForm,
                        productCategories: event.target.value,
                      })
                    }
                    placeholder="Категориудыг comma-аар"
                  />
                  <div className="flex flex-wrap gap-3">
                    <Button type="submit">{brandForm.id ? "Хадгалах" : "Нэмэх"}</Button>
                    {brandForm.id ? (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setBrandForm(emptyBrandForm)}
                      >
                        Цэвэрлэх
                      </Button>
                    ) : null}
                  </div>
                </form>
              }
            >
              {brands.map((brand) => (
                <ListCard
                  key={brand.id}
                  title={brand.name}
                  subtitle={(brand.productCategories ?? []).join(", ")}
                  body={brand.description}
                  onEdit={() =>
                    setBrandForm({
                      id: brand.id,
                      name: brand.name,
                      description: brand.description,
                      productCategories: (brand.productCategories ?? []).join(", "),
                    })
                  }
                  onDelete={() => removeBrand(brand.id)}
                />
              ))}
            </AdminPanel>
          ) : null}

          {activeSection === "services" ? (
            <AdminPanel
              title="Үйлчилгээ удирдах"
              description="Сервисийн жагсаалт болон тайлбарыг mock түвшинд шинэчилнэ."
              form={
                <form onSubmit={upsertService} className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <Input
                      value={serviceForm.title}
                      onChange={(event) =>
                        setServiceForm({ ...serviceForm, title: event.target.value })
                      }
                      placeholder="Гарчиг"
                    />
                    <Input
                      value={serviceForm.slug}
                      onChange={(event) =>
                        setServiceForm({ ...serviceForm, slug: event.target.value })
                      }
                      placeholder="Slug"
                    />
                  </div>
                  <Input
                    value={serviceForm.icon}
                    onChange={(event) =>
                      setServiceForm({ ...serviceForm, icon: event.target.value })
                    }
                    placeholder="Icon key"
                  />
                  <Textarea
                    value={serviceForm.description}
                    onChange={(event) =>
                      setServiceForm({
                        ...serviceForm,
                        description: event.target.value,
                      })
                    }
                    placeholder="Тайлбар"
                  />
                  <div className="flex flex-wrap gap-3">
                    <Button type="submit">{serviceForm.id ? "Хадгалах" : "Нэмэх"}</Button>
                    {serviceForm.id ? (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setServiceForm(emptyServiceForm)}
                      >
                        Цэвэрлэх
                      </Button>
                    ) : null}
                  </div>
                </form>
              }
            >
              {services.map((service) => (
                <ListCard
                  key={service.id}
                  title={service.title}
                  subtitle={service.slug}
                  body={service.description}
                  onEdit={() =>
                    setServiceForm({
                      id: service.id,
                      title: service.title,
                      slug: service.slug,
                      icon: service.icon,
                      description: service.description,
                    })
                  }
                  onDelete={() => removeService(service.id)}
                />
              ))}
            </AdminPanel>
          ) : null}

          {activeSection === "inquiries" ? (
            <AdminPanel
              title="Хэрэглэгчийн хүсэлтүүд"
              description="Contact болон product inquiry формуудаас ирсэн demo хүсэлтүүд."
            >
              <div className="space-y-4">
                {inquiries.map((inquiry) => (
                  <div
                    key={inquiry.id}
                    className="rounded-[1.6rem] border border-border bg-white p-5"
                  >
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="font-display text-xl font-bold text-ink">
                            {inquiry.name}
                          </h3>
                          <span className="rounded-full bg-panel px-3 py-1 text-xs font-semibold text-ink">
                            {formatDate(inquiry.createdAt)}
                          </span>
                        </div>
                        <p className="text-sm text-muted">
                          {inquiry.phone} · {inquiry.email}
                        </p>
                        <p className="text-sm leading-7 text-ink">{inquiry.message}</p>
                      </div>
                      <div className="w-full max-w-[220px] space-y-2">
                        <p className="text-sm font-medium text-ink">Төлөв</p>
                        <Select
                          value={inquiry.status}
                          onChange={(event) =>
                            updateInquiryStatus(
                              inquiry.id,
                              event.target.value as InquiryStatus,
                            )
                          }
                        >
                          <option value="new">new</option>
                          <option value="contacted">contacted</option>
                          <option value="completed">completed</option>
                        </Select>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AdminPanel>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.8rem] border border-border bg-white p-5 shadow-[0_20px_50px_rgba(14,34,64,0.06)]">
      <p className="text-sm font-medium text-muted">{label}</p>
      <p className="mt-3 font-display text-3xl font-bold text-ink">{value}</p>
    </div>
  );
}

function AdminPanel({
  title,
  description,
  form,
  children,
}: {
  title: string;
  description: string;
  form?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="rounded-[2rem] border border-border bg-white p-6 shadow-[0_20px_50px_rgba(14,34,64,0.06)] sm:p-8">
      <div className="grid gap-8 xl:grid-cols-[minmax(0,0.85fr)_minmax(320px,0.75fr)]">
        <div className="space-y-5">
          <div className="space-y-3">
            <h2 className="font-display text-3xl font-bold text-ink">{title}</h2>
            <p className="text-sm leading-7 text-muted">{description}</p>
          </div>
          <div className="space-y-4">{children}</div>
        </div>
        {form ? (
          <div className="rounded-[1.8rem] border border-border bg-panel/70 p-5">{form}</div>
        ) : null}
      </div>
    </section>
  );
}

function ListCard({
  title,
  subtitle,
  body,
  onEdit,
  onDelete,
}: {
  title: string;
  subtitle: string;
  body: string;
  onEdit: () => void;
  onDelete: () => void;
}) {
  return (
    <div className="rounded-[1.6rem] border border-border bg-white p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="font-display text-xl font-bold text-ink">{title}</h3>
          <p className="mt-1 text-sm font-medium text-primary">{subtitle}</p>
          <p className="mt-3 text-sm leading-7 text-muted">{body}</p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={onEdit}
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-border text-ink transition-colors hover:border-primary hover:text-primary"
            aria-label="Засах"
          >
            <PencilLine className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={onDelete}
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-border text-ink transition-colors hover:border-primary hover:text-primary"
            aria-label="Устгах"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
