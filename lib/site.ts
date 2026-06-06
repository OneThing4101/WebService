export const siteConfig = {
  name: "MonVolt Supply",
  shortName: "MonVolt",
  description:
    "MonVolt Supply нь цахилгаан бараа, тоног төхөөрөмж, барилгын цахилгааны материал болон мэргэжлийн угсралт, засвар үйлчилгээний цогц нийлүүлэлтийг санал болгодог.",
  url: "https://monvolt.example",
  ogImage: "/placeholders/og/cover.svg",
  phone: "+976 7711 2233",
  email: "sales@monvolt.mn",
  address: "БЗД, 13-р хороолол, Энхтайваны өргөн чөлөө, Улаанбаатар",
  workingHours: "Даваа - Баасан, 09:00 - 18:30",
  facebook: "https://facebook.com/monvolt",
  instagram: "https://instagram.com/monvolt",
  adminCredentials: {
    email: "admin@monvolt.mn",
    password: "demo1234",
  },
  keywords: [
    "цахилгаан бараа",
    "цахилгааны материал",
    "цахилгаан тоног төхөөрөмж",
    "цахилгааны үйлчилгээ",
    "барилгын цахилгаан материал",
  ],
} as const;

export const mainNavigation = [
  { href: "/", label: "Нүүр" },
  { href: "/products", label: "Бүтээгдэхүүн" },
  { href: "/services", label: "Үйлчилгээ" },
  { href: "/brands", label: "Брэндүүд" },
  { href: "/about", label: "Бидний тухай" },
  { href: "/contact", label: "Холбоо барих" },
];

export const quickLinks = [
  { href: "/products", label: "Каталог" },
  { href: "/services", label: "Сервис үйлчилгээ" },
  { href: "/brands", label: "Хамтрагч брэндүүд" },
  { href: "/admin", label: "Админ" },
];
