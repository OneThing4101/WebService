export const siteConfig = {
  name: "ProProc",
  shortName: "ProProc",
  description:
    "ProProc нь үйлдвэр, барилга, уул уурхай, оффисын цахилгаан тоног төхөөрөмж, автоматжуулалт, материал болон сэлбэгийн нийлүүлэлтийг зохион байгуулдаг.",
  url: "https://pro.proc.mn",
  ogImage: "/placeholders/og/cover.svg",
  phone: "+976 7711 2233",
  email: "sales@pro.proc.mn",
  address: "БЗД, 13-р хороолол, Энхтайваны өргөн чөлөө, Улаанбаатар",
  workingHours: "Даваа - Баасан, 09:00 - 18:30",
  facebook: "https://facebook.com/proproc",
  instagram: "https://instagram.com/proproc",
  keywords: [
    "цахилгаан бараа",
    "цахилгааны материал",
    "цахилгаан тоног төхөөрөмж",
    "үйлдвэрийн цахилгаан нийлүүлэлт",
    "барилгын цахилгаан материал",
  ],
} as const;

export const mainNavigation = [
  { href: "/", label: "Нүүр" },
  { href: "/brands", label: "Брэндүүд" },
  { href: "/contact", label: "Холбоо барих" },
];

export const quickLinks = [
  { href: "/brands", label: "Хамтрагч брэндүүд" },
  { href: "/contact", label: "Холбоо барих" },
];
