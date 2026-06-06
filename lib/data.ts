import type {
  Brand,
  Category,
  CompanyMetric,
  CompanyValue,
  Inquiry,
  ProcessStep,
  Product,
  Service,
  TrustItem,
} from "@/lib/types";

export const categories: Category[] = [
  {
    id: "cat-materials",
    name: "Цахилгааны материал",
    slug: "tsahilgaany-material",
    icon: "plug",
    description:
      "Барилга, үйлдвэр, оффисын өдөр тутмын цахилгааны суурь материал, дагалдах хэрэгсэл.",
  },
  {
    id: "cat-lighting",
    name: "Гэрэлтүүлэг",
    slug: "gereltuuleg",
    icon: "lightbulb",
    description:
      "Дотор, гадна болон үйлдвэрийн орчны зориулалттай ухаалаг, хэмнэлттэй гэрэлтүүлгийн шийдэл.",
  },
  {
    id: "cat-breakers",
    name: "Автомат таслуур",
    slug: "avtomat-tasluur",
    icon: "shield",
    description:
      "Аюулгүй ажиллагаа, найдвартай хамгаалалт хангах MCCB, MCB болон хамгаалалтын төхөөрөмж.",
  },
  {
    id: "cat-cables",
    name: "Кабель, утас",
    slug: "kabel-utas",
    icon: "cable",
    description:
      "Төслийн хэмжээнээс үл хамааран цахилгаан дамжуулалтын бүх төрлийн кабель, утас.",
  },
  {
    id: "cat-panels",
    name: "Самбар, хайрцаг",
    slug: "sambar-khairtsag",
    icon: "circuit",
    description:
      "Түгээх самбар, хяналтын шүүгээ, хамгаалалтын хайрцаг болон захиалгат угсралтын шийдэл.",
  },
  {
    id: "cat-industrial",
    name: "Үйлдвэрийн тоног төхөөрөмж",
    slug: "uildveriin-tonog",
    icon: "factory",
    description:
      "Аж үйлдвэрийн орчинд ашиглах цахилгаан хангамж, хөдөлгүүрийн удирдлага, тоноглол.",
  },
  {
    id: "cat-parts",
    name: "Сэлбэг хэрэгсэл",
    slug: "selbeg-kheregsel",
    icon: "package",
    description:
      "Засвар үйлчилгээ, тоног төхөөрөмжийн тасралтгүй ажиллагаанд шаардлагатай сэлбэг, дагалдах.",
  },
  {
    id: "cat-service",
    name: "Засвар үйлчилгээ",
    slug: "zasvar-uilchilgee",
    icon: "wrench",
    description:
      "Оношилгоо, урсгал үйлчилгээ, гэмтэл засвар болон талбайн дуудлагын үйлчилгээ.",
  },
];

export const brands: Brand[] = [
  {
    id: "gf",
    name: "GF",
    logo: "",
    description:
      "Гэрэлтүүлэг, дэд бүтэц болон барилгын цахилгааны өргөн хэрэглээний бүтээгдэхүүний placeholder брэнд.",
    productCategories: ["Гэрэлтүүлэг", "Самбар, хайрцаг"],
  },
  {
    id: "hedweld",
    name: "HEDWELD",
    logo: "",
    description:
      "Үйлдвэрийн тоног төхөөрөмж, ажлын талбайн зориулалттай хүнд нөхцлийн шийдлүүдийн placeholder брэнд.",
    productCategories: ["Үйлдвэрийн тоног төхөөрөмж", "Сэлбэг хэрэгсэл"],
  },
  {
    id: "pcm",
    name: "PCM",
    logo: "",
    description:
      "Кабель, дагалдах хэрэгсэл, суурилуулалтын материалын placeholder нийлүүлэгч.",
    productCategories: ["Кабель, утас", "Цахилгааны материал"],
  },
  {
    id: "hubner",
    name: "HUBNER",
    logo: "",
    description:
      "Хэмжилт, хяналт, үйлдвэрийн автоматжуулалтын placeholder бүтээгдэхүүнтэй брэнд.",
    productCategories: ["Үйлдвэрийн тоног төхөөрөмж", "Самбар, хайрцаг"],
  },
  {
    id: "ausproof",
    name: "AUSPROOF",
    logo: "",
    description:
      "Дэлбэрэлтийн хамгаалалттай орчны placeholder гэрэлтүүлэг, хамгаалалтын шийдэл.",
    productCategories: ["Гэрэлтүүлэг", "Автомат таслуур"],
  },
  {
    id: "iem",
    name: "IEM",
    logo: "",
    description:
      "Түгээлтийн самбар, хамгаалалтын модуль, удирдлагын placeholder системийн брэнд.",
    productCategories: ["Автомат таслуур", "Самбар, хайрцаг"],
  },
  {
    id: "hobart",
    name: "HOBART",
    logo: "",
    description:
      "Үйлдвэрийн төхөөрөмжийн цахилгаан хангамж болон placeholder дагалдах бүтээгдэхүүн.",
    productCategories: ["Үйлдвэрийн тоног төхөөрөмж", "Сэлбэг хэрэгсэл"],
  },
  {
    id: "gms",
    name: "GMS",
    logo: "",
    description:
      "Барилгын дэд бүтэц, кабель чиглүүлэлт, placeholder цахилгаан материалын брэнд.",
    productCategories: ["Цахилгааны материал", "Кабель, утас"],
  },
  {
    id: "jw-speaker",
    name: "JW Speaker",
    logo: "",
    description:
      "Хүнд нөхцөл, гадна талбайн placeholder гэрэлтүүлгийн мэргэжлийн брэнд.",
    productCategories: ["Гэрэлтүүлэг"],
  },
  {
    id: "crc",
    name: "CRC",
    logo: "",
    description:
      "Засвар үйлчилгээ, хамгаалалт, техникийн арчилгааны placeholder бүтээгдэхүүн.",
    productCategories: ["Сэлбэг хэрэгсэл", "Засвар үйлчилгээ"],
  },
  {
    id: "npc-electric",
    name: "NPC Electric",
    logo: "",
    description:
      "Автомат таслуур, хуваарилах самбар, хамгаалалтын төхөөрөмжийн placeholder брэнд.",
    productCategories: ["Автомат таслуур", "Самбар, хайрцаг"],
  },
  {
    id: "opp-iot",
    name: "OPP IOT",
    logo: "",
    description:
      "Ухаалаг хяналт, эрчим хүчний мониторинг, placeholder холбоос шийдлүүдийн брэнд.",
    productCategories: ["Үйлдвэрийн тоног төхөөрөмж", "Цахилгааны материал"],
  },
];

export const services: Service[] = [
  {
    id: "service-installation",
    title: "Цахилгааны угсралт",
    slug: "tsahilgaany-ugsralt",
    description:
      "Оффис, үйлдвэр, үйлчилгээний барилгын ерөнхий болон дотоод цахилгааны угсралтын иж бүрэн ажил.",
    icon: "bolt",
    features: ["Төслийн зураг дагуу гүйцэтгэл", "Материал + ажил нэг дор", "Чанарын акт, баримт"],
  },
  {
    id: "service-maintenance",
    title: "Цахилгааны засвар үйлчилгээ",
    slug: "tsahilgaany-zasvar",
    description:
      "Тогтмол үзлэг, гэмтэл арилгах, яаралтай дуудлагын засвар үйлчилгээ.",
    icon: "wrench",
    features: ["Дуудлагын баг", "Сэлбэгийн бэлэн нөөц", "Үзлэгийн тайлан"],
  },
  {
    id: "service-building",
    title: "Барилгын цахилгааны шийдэл",
    slug: "barilgiin-shiidel",
    description:
      "Шинэ барилга, өргөтгөл, шинэчлэлтийн төслүүдэд зориулсан цахилгааны материал, шийдэл, угсралт.",
    icon: "building",
    features: ["BOQ зөвлөмж", "Тендерийн багц нийлүүлэлт", "Талбайн хяналт"],
  },
  {
    id: "service-industrial",
    title: "Үйлдвэрийн цахилгааны тоног төхөөрөмж суурилуулалт",
    slug: "uildveriin-suuriulalt",
    description:
      "Хүчний тоног төхөөрөмж, удирдлагын самбар, автоматжуулалтын системийн суурилуулалт.",
    icon: "factory",
    features: ["Commissioning", "Интерфэйс туршилт", "Операторын сургалт"],
  },
  {
    id: "service-lighting",
    title: "Гэрэлтүүлгийн шийдэл",
    slug: "gereltuulgiin-shiidel",
    description:
      "Оффис, агуулах, гадна талбай, худалдааны орчны гэрэлтүүлгийн зураг төсөл, нийлүүлэлт.",
    icon: "lightbulb",
    features: ["Lux тооцоолол", "Эрчим хүчний хэмнэлт", "Ухаалаг удирдлага"],
  },
  {
    id: "service-panel",
    title: "Самбар угсралт",
    slug: "sambar-ugsralt",
    description:
      "Түгээлтийн болон удирдлагын самбарыг төслийн шаардлагад нийцүүлэн үйлдвэрчилсэн байдлаар угсарч нийлүүлнэ.",
    icon: "circuit",
    features: ["Захиалгат хэмжээ", "Баримтжуулсан wiring", "Factory test"],
  },
  {
    id: "service-cable",
    title: "Кабель таталт",
    slug: "kabel-tatalt",
    description:
      "Дотор, гадна трасс, кабель тавцан, сувагчлал, төгсгөвчлөл бүхий гүйцэтгэл.",
    icon: "cable",
    features: ["Маршрут төлөвлөлт", "Трассын тэмдэглэгээ", "Аюулгүй ажиллагаа"],
  },
  {
    id: "service-inspection",
    title: "Аж ахуйн нэгжийн цахилгааны үзлэг, оношилгоо",
    slug: "uzleg-onoshilgoo",
    description:
      "Эрсдэлийн үнэлгээ, дулааны камерын үзлэг, ачааллын шинжилгээ, сайжруулалтын зөвлөмж.",
    icon: "scan",
    features: ["Ачааллын дүн шинжилгээ", "Дулааны зураглал", "Сайжруулалтын төлөвлөгөө"],
  },
];

export const products: Product[] = [
  {
    id: "prod-led-panel-40w",
    name: "LED Panel 40W Pro",
    slug: "led-panel-40w-pro",
    category: "gereltuuleg",
    brand: "gf",
    price: 185000,
    stockStatus: "Бэлэн",
    images: Array(3).fill("/placeholders/products/lighting.svg"),
    shortDescription:
      "Оффис, худалдааны орчинд зориулсан жигд гэрэлтүүлэгтэй, хэмнэлттэй LED panel.",
    description:
      "LED Panel 40W Pro нь тогтвортой өнгөний температур, өндөр үр ашигтай diffuser, урт насжилттай драйверын шийдэлтэй. Оффис, үйлчилгээний барилга болон сургалтын орчинд төгс тохирно.",
    specs: [
      { label: "Чадал", value: "40W" },
      { label: "Хэмжээ", value: "600 x 600 мм" },
      { label: "Өнгөний температур", value: "4000K" },
      { label: "IP хамгаалалт", value: "IP40" },
      { label: "Гэрлийн урсгал", value: "4200 lm" },
    ],
    featured: true,
  },
  {
    id: "prod-floodlight-150w",
    name: "Industrial Floodlight 150W",
    slug: "industrial-floodlight-150w",
    category: "gereltuuleg",
    brand: "jw-speaker",
    price: 420000,
    stockStatus: "Захиалгаар",
    images: Array(3).fill("/placeholders/products/lighting.svg"),
    shortDescription:
      "Агуулах, үйлдвэрийн гадна болон өндөр таазтай орчинд зориулсан өндөр чадлын гэрэлтүүлэг.",
    description:
      "Industrial Floodlight 150W нь метал их биетэй, гадаад орчны нөлөөлөлд тэсвэртэй, алсын тусгал сайтай гэрэлтүүлгийн шийдэл юм. Үйлдвэрийн талбай, агуулах, ачилтын бүсэд өргөн ашиглана.",
    specs: [
      { label: "Чадал", value: "150W" },
      { label: "Хүчдэл", value: "220-240V" },
      { label: "IP хамгаалалт", value: "IP65" },
      { label: "Өнгөний температур", value: "5000K" },
      { label: "Их бие", value: "Хөнгөн цагаан" },
    ],
    featured: true,
  },
  {
    id: "prod-mccb-100a",
    name: "MCCB 3P 100A",
    slug: "mccb-3p-100a",
    category: "avtomat-tasluur",
    brand: "npc-electric",
    price: 268000,
    stockStatus: "Бэлэн",
    images: Array(3).fill("/placeholders/products/breaker.svg"),
    shortDescription:
      "Түгээлтийн самбар, хүчний шугамд ашиглах найдвартай 3 фазын автомат таслуур.",
    description:
      "MCCB 3P 100A нь богино залгааны хамгаалалт, ачааллын найдвартай таслалтыг хангах зориулалттай. Барилгын ерөнхий түгээлт болон үйлдвэрлэлийн шугамд ашиглахад тохиромжтой.",
    specs: [
      { label: "Полюс", value: "3P" },
      { label: "Нэрлэсэн гүйдэл", value: "100A" },
      { label: "Таслах чадал", value: "36kA" },
      { label: "Суурилуулалт", value: "Panel mount" },
      { label: "Стандарт", value: "IEC 60947-2" },
    ],
    featured: true,
  },
  {
    id: "prod-mcb-32a",
    name: "MCB 1P 32A",
    slug: "mcb-1p-32a",
    category: "avtomat-tasluur",
    brand: "iem",
    price: 28500,
    stockStatus: "Бэлэн",
    images: Array(3).fill("/placeholders/products/breaker.svg"),
    shortDescription:
      "Орон сууц, оффис, жижиг самбарын хэлхээ хамгаалалтад зориулсан compact MCB.",
    description:
      "MCB 1P 32A нь өдөр тутмын хэрэглээний самбаруудад суурилуулахад тохиромжтой, найдвартай ажиллагаатай хамгаалалтын төхөөрөмж юм. Угсрахад хялбар DIN rail суурилуулалттай.",
    specs: [
      { label: "Полюс", value: "1P" },
      { label: "Нэрлэсэн гүйдэл", value: "32A" },
      { label: "Curve", value: "C" },
      { label: "Таслах чадал", value: "6kA" },
      { label: "Суурилуулалт", value: "DIN Rail" },
    ],
    featured: false,
  },
  {
    id: "prod-xlpe-cable",
    name: "XLPE Кабель 4x25 мм²",
    slug: "xlpe-kabel-4x25",
    category: "kabel-utas",
    brand: "pcm",
    price: 128000,
    stockStatus: "Захиалгаар",
    images: Array(3).fill("/placeholders/products/cable.svg"),
    shortDescription:
      "Барилга, дэд бүтэц, үйлдвэрийн хүчний тэжээлд ашиглах XLPE бүрээстэй кабель.",
    description:
      "XLPE Кабель 4x25 мм² нь дотор болон гадна трасс, кабель тавцан, сувагчлалд ашиглахад тохиромжтой хүчний кабель юм. Механик хамгаалалт болон температурын тогтвортой ажиллагаагаараа давуу.",
    specs: [
      { label: "Огтлол", value: "4x25 мм²" },
      { label: "Тусгаарлагч", value: "XLPE" },
      { label: "Бүрээс", value: "PVC" },
      { label: "Нэрлэсэн хүчдэл", value: "0.6/1kV" },
      { label: "Ашиглалтын орчин", value: "Дотор / гадна" },
    ],
    featured: true,
  },
  {
    id: "prod-db-36",
    name: "Түгээх Самбар 36 Line",
    slug: "tugeeh-sambar-36-line",
    category: "sambar-khairtsag",
    brand: "npc-electric",
    price: 315000,
    stockStatus: "Бэлэн",
    images: Array(3).fill("/placeholders/products/panel.svg"),
    shortDescription:
      "Оффис болон барилгын давхарын түгээлтэд зориулсан ханын угсралттай самбар.",
    description:
      "36 line багтаамжтай түгээх самбар нь хамгаалалтын автоматуудыг цэгцтэй, аюулгүй суурилуулахад зориулагдсан. Төслийн түвшний суурилуулалт болон өргөтгөлд тохиромжтой.",
    specs: [
      { label: "Багтаамж", value: "36 модуль" },
      { label: "Суурилуулалт", value: "Wall mount" },
      { label: "Хаалганы төрөл", value: "Powder coated steel" },
      { label: "IP хамгаалалт", value: "IP43" },
      { label: "Өнгө", value: "Цагаан" },
    ],
    featured: true,
  },
  {
    id: "prod-ex-light",
    name: "Explosion Proof Light",
    slug: "explosion-proof-light",
    category: "gereltuuleg",
    brand: "ausproof",
    price: 980000,
    stockStatus: "Захиалгаар",
    images: Array(3).fill("/placeholders/products/lighting.svg"),
    shortDescription:
      "Тэсрэх орчны шаардлагад нийцсэн хүнд нөхцлийн ажлын талбайн гэрэлтүүлэг.",
    description:
      "Explosion Proof Light нь газрын тос, агуулах, тусгай үйлдвэрлэлийн өндөр эрсдэлтэй орчинд ашиглах хамгаалалттай гэрэлтүүлгийн placeholder бүтээгдэхүүн юм.",
    specs: [
      { label: "Хамгаалалтын ангилал", value: "Ex d IIB" },
      { label: "IP хамгаалалт", value: "IP66" },
      { label: "Чадал", value: "80W" },
      { label: "Их бие", value: "Die-cast aluminum" },
      { label: "Ашиглалтын температур", value: "-20°C ~ +55°C" },
    ],
    featured: false,
  },
  {
    id: "prod-control-relay",
    name: "Control Relay Module",
    slug: "control-relay-module",
    category: "uildveriin-tonog",
    brand: "hubner",
    price: 356000,
    stockStatus: "Бэлэн",
    images: Array(3).fill("/placeholders/products/industrial.svg"),
    shortDescription:
      "Самбарын удирдлага, автоматжуулалтын cabinet-д ашиглах control relay module.",
    description:
      "Control Relay Module нь үйлдвэрийн самбар, automation cabinet болон process control системд дохионы дамжуулалт, relay-based control хийхэд зориулагдсан.",
    specs: [
      { label: "Оролт / гаралт", value: "8 / 8" },
      { label: "Coil voltage", value: "24V DC" },
      { label: "Mounting", value: "DIN Rail" },
      { label: "Housing", value: "Modular enclosure" },
      { label: "Use case", value: "Panel automation" },
    ],
    featured: false,
  },
  {
    id: "prod-industrial-socket",
    name: "Industrial Socket 63A",
    slug: "industrial-socket-63a",
    category: "tsahilgaany-material",
    brand: "gms",
    price: 118000,
    stockStatus: "Бэлэн",
    images: Array(3).fill("/placeholders/products/material.svg"),
    shortDescription:
      "Барилгын талбай, үйлдвэр, хүнд нөхцөлд ашиглах өндөр хамгаалалттай socket outlet.",
    description:
      "Industrial Socket 63A нь чийг, тоосжилт ихтэй орчинд ашиглах хамгаалалттай, олон дахин холболт салгалтыг даах чадвартай аж үйлдвэрийн залгуур юм.",
    specs: [
      { label: "Гүйдэл", value: "63A" },
      { label: "Хүчдэл", value: "380-415V" },
      { label: "IP хамгаалалт", value: "IP67" },
      { label: "Полюс", value: "3P+N+E" },
      { label: "Материал", value: "Impact resistant polymer" },
    ],
    featured: true,
  },
  {
    id: "prod-cable-tray",
    name: "Hot Dip Cable Tray",
    slug: "hot-dip-cable-tray",
    category: "tsahilgaany-material",
    brand: "hedweld",
    price: 94000,
    stockStatus: "Түр дууссан",
    images: Array(3).fill("/placeholders/products/material.svg"),
    shortDescription:
      "Кабель трассын зохион байгуулалтад ашиглах зэврэлтэд тэсвэртэй hot-dip tray.",
    description:
      "Hot Dip Cable Tray нь урт хугацааны гадна орчны ашиглалт, үйлдвэрийн орчны шаардлагад нийцсэн кабель чиглүүлэлтийн шийдэл юм. Холбогч болон дагалдах хэрэгслүүдтэй нийлүүлнэ.",
    specs: [
      { label: "Материал", value: "Hot-dip galvanized steel" },
      { label: "Өргөн", value: "300 мм" },
      { label: "Өндөр", value: "50 мм" },
      { label: "Урт", value: "2.5 м" },
      { label: "Ашиглалт", value: "Indoor / Outdoor" },
    ],
    featured: false,
  },
  {
    id: "prod-contact-cleaner",
    name: "CRC Contact Cleaner",
    slug: "crc-contact-cleaner",
    category: "selbeg-kheregsel",
    brand: "crc",
    price: 38000,
    stockStatus: "Бэлэн",
    images: Array(3).fill("/placeholders/products/maintenance.svg"),
    shortDescription:
      "Самбар, terminal, relay болон control board цэвэрлэх тусгай үйлчилгээний материал.",
    description:
      "CRC Contact Cleaner нь цахилгаан контакт, автоматжуулалтын самбар, датчик болон terminal block-ийн тос, тоос, исэлдлийг цэвэрлэх зориулалттай placeholder бүтээгдэхүүн юм.",
    specs: [
      { label: "Савлагаа", value: "350 мл" },
      { label: "Хэрэглээ", value: "Контакт цэвэрлэгээ" },
      { label: "Үлдэгдэл", value: "Residue free" },
      { label: "Хатаах хугацаа", value: "Хурдан" },
      { label: "Орчин", value: "Maintenance service" },
    ],
    featured: false,
  },
];

export const inquiries: Inquiry[] = [
  {
    id: "inq-001",
    name: "Б.Энхтүвшин",
    phone: "+976 99112233",
    email: "enkh@builder.mn",
    productId: "prod-mccb-100a",
    message: "20 ширхэг MCCB 3P 100A дээр байгууллагын үнэ авах хүсэлтэй байна.",
    status: "new",
    createdAt: "2026-06-05T10:30:00.000Z",
  },
  {
    id: "inq-002",
    name: "С.Халиун",
    phone: "+976 88114455",
    email: "project@northstar.mn",
    serviceId: "service-building",
    message:
      "Шинэ оффисын барилгын цахилгааны материал, самбар угсралтын үнийн санал авмаар байна.",
    status: "contacted",
    createdAt: "2026-06-04T08:10:00.000Z",
  },
  {
    id: "inq-003",
    name: "Г.Одгэрэл",
    phone: "+976 99001122",
    email: "ops@warehouse.mn",
    serviceId: "service-inspection",
    message:
      "Агуулахын түгээлтийн самбарын ачаалал шалгах, дулааны камерын үзлэг захиалах хүсэлтэй байна.",
    status: "completed",
    createdAt: "2026-06-02T04:45:00.000Z",
  },
];

export const companyMetrics: CompanyMetric[] = [
  {
    value: "10+ жил",
    label: "туршлага",
    description: "Цахилгаан бараа нийлүүлэлт, төслийн сервисийн тасралтгүй туршлага.",
  },
  {
    value: "500+",
    label: "бүтээгдэхүүн",
    description: "Каталогт ашиглахад бэлэн, төрөлжсөн placeholder барааны бүтэц.",
  },
  {
    value: "50+",
    label: "байгууллагын харилцагч",
    description: "B2B хэрэглэгч, барилгын төсөл, үйлдвэрийн талбарын хамтын ажиллагаа.",
  },
  {
    value: "24/7",
    label: "зөвлөгөө",
    description: "Шуурхай үнийн санал, техникийн зөвлөгөө, захиалгын дэмжлэг.",
  },
];

export const whyChooseUs: TrustItem[] = [
  {
    title: "Баталгаатай бараа",
    description: "Албан ёсны сувгаар нийлүүлсэн, техникийн баримттай бүтээгдэхүүн.",
    icon: "badge",
  },
  {
    title: "Мэргэжлийн зөвлөгөө",
    description: "Төслийн шаардлагад нийцсэн сонголт гаргахад инженерийн зөвлөмж өгнө.",
    icon: "headphones",
  },
  {
    title: "Хурдан хүргэлт",
    description: "Хот дотор болон төслийн талбай руу төлөвлөгөөт нийлүүлэлт хийнэ.",
    icon: "truck",
  },
  {
    title: "Албан ёсны нийлүүлэлт",
    description: "Импорт, логистик, борлуулалт, сервисийг нэг цэгээс хариуцна.",
    icon: "boxes",
  },
  {
    title: "Үнийн санал хурдан гаргана",
    description: "BOQ, тоо хэмжээ, брэндийн сонголтоор ажлын санал богино хугацаанд бэлдэнэ.",
    icon: "hand-coins",
  },
  {
    title: "Аж ахуйн нэгжид зориулсан шийдэл",
    description: "B2B supply chain, засвар үйлчилгээ, төсөл дээрх координацийг цогцоор нь шийднэ.",
    icon: "briefcase",
  },
];

export const companyValues: CompanyValue[] = [
  {
    title: "Эрсдэлгүй нийлүүлэлт",
    description:
      "Сонголт, нөөц, хүргэлт, техникийн баримтжуулалтыг нэг сувгаар хариуцаж төслийн эрсдэлийг бууруулна.",
  },
  {
    title: "Ил тод хамтын ажиллагаа",
    description:
      "Үнийн санал, хугацаа, брэндийн сонголт, техникийн нөхцлийг тодорхой танилцуулж ажиллана.",
  },
  {
    title: "Урт хугацааны сервис",
    description:
      "Борлуулалтын дараах зөвлөгөө, сэлбэг, оношилгоо, засварын дэмжлэгээр харилцагчийн үйл ажиллагааг тогтвортой байлгана.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Хэрэгцээ тодорхойлох",
    description:
      "Төслийн хэмжээ, ачаалал, орчин, шаардлагатай бараа эсвэл үйлчилгээний төрлийг тодорхойлно.",
  },
  {
    step: "02",
    title: "Техникийн санал",
    description:
      "Инженерийн баг тохирох брэнд, техникийн үзүүлэлт, нийлүүлэлтийн хувилбарыг санал болгоно.",
  },
  {
    step: "03",
    title: "Нийлүүлэлт ба гүйцэтгэл",
    description:
      "Бараа нийлүүлэх, угсралт хийх, туршилт тохируулга гүйцэтгэх ажлыг үе шаттай зохион байгуулна.",
  },
  {
    step: "04",
    title: "Дараах дэмжлэг",
    description:
      "Сервис үйлчилгээ, сэлбэг, өргөтгөл шинэчлэлтийн зөвлөгөөг тасралтгүй үзүүлнэ.",
  },
];

export function getCategories() {
  return categories;
}

export function getBrands() {
  return brands;
}

export function getServices() {
  return services;
}

export function getProducts() {
  return products;
}

export function getFeaturedProducts(limit = 6) {
  return products.filter((product) => product.featured).slice(0, limit);
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getRelatedProducts(slug: string, limit = 4) {
  const current = getProductBySlug(slug);

  if (!current) {
    return [];
  }

  return products
    .filter(
      (product) =>
        product.slug !== slug &&
        (product.category === current.category || product.brand === current.brand),
    )
    .slice(0, limit);
}

export function getServicesPreview(limit = 4) {
  return services.slice(0, limit);
}

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getBrandById(id: string) {
  return brands.find((brand) => brand.id === id);
}

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getServiceById(id: string) {
  return services.find((service) => service.id === id);
}
