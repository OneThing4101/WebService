import type {
  Category,
  CompanyMetric,
  CompanyValue,
  Inquiry,
  ProcessStep,
  Product,
  Service,
  TrustItem,
} from "@/lib/types";
import { brands } from "@/src/lib/brands";

export const categories: Category[] = [
  {
    id: "cat-materials",
    name: "Цахилгааны материал",
    slug: "tsahilgaany-material",
    icon: "plug",
    description:
      "Розетка, залгуур, холбогч, terminal, суурилуулалтын өдөр тутмын материал.",
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
    id: "cat-automation",
    name: "Автоматжуулалт",
    slug: "avtomatjuulalt",
    icon: "factory",
    description:
      "PLC, control panel, sensor, relay болон үйлдвэрийн удирдлагын дагалдах хэрэгсэл.",
  },
  {
    id: "cat-measuring",
    name: "Хэмжилтийн багаж",
    slug: "hemjiltiin-bagaj",
    icon: "scan",
    description:
      "Цахилгааны хэмжилт, оношилгоо, туршилтад ашиглах мэргэжлийн багаж.",
  },
  {
    id: "cat-battery",
    name: "Эрчим хүч / Battery",
    slug: "erchim-huch-battery",
    icon: "bolt",
    description:
      "UPS, backup power, control panel болон нарны системд зориулсан battery шийдэл.",
  },
  {
    id: "cat-network",
    name: "Сүлжээ холбоо",
    slug: "suljee-holboo",
    icon: "boxes",
    description:
      "Industrial switch, router, wireless болон холбооны тоног төхөөрөмжийн нийлүүлэлт.",
  },
  {
    id: "cat-fire-safety",
    name: "Галын аюулгүй байдал",
    slug: "galyn-ayuulgui-baidal",
    icon: "shield",
    description:
      "Галын самбар, илрүүлэгч, аваарын систем болон safety дагалдах хэрэгсэл.",
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
    brand: "philips",
    price: 185000,
    stockStatus: "Бэлэн",
    images: ["/products/led-panel-40w-pro.svg"],
    shortDescription:
      "Оффис, худалдааны орчинд зориулсан жигд гэрэлтүүлэгтэй, хэмнэлттэй LED panel.",
    description:
      "Оффис, худалдааны танхим, сургалтын өрөө болон үйлчилгээний орчинд зориулсан жигд гэрэлтүүлэгтэй LED panel. Төслийн тоо хэмжээгээр нийлүүлэх боломжтой.",
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
    brand: "philips",
    price: 420000,
    stockStatus: "Захиалгаар",
    images: ["/products/industrial-floodlight-150w.svg"],
    shortDescription:
      "Агуулах, үйлдвэр, гадна талбайд зориулсан өндөр чадлын гэрэлтүүлэг.",
    description:
      "Метал их биетэй, гадаад орчны нөлөөлөлд тэсвэртэй, алсын тусгал сайтай үйлдвэрийн гэрэлтүүлгийн шийдэл. Агуулах, үйлдвэр, ачилтын талбайд тохиромжтой.",
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
    brand: "schneider-electric",
    price: 268000,
    stockStatus: "Бэлэн",
    images: ["/products/mccb-3p-100a.svg"],
    shortDescription:
      "Түгээлтийн самбар, хүчний шугамд ашиглах 3 фазын автомат таслуур.",
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
    id: "prod-copper-cable",
    name: "Copper Cable 3x2.5",
    slug: "copper-cable-3x2-5",
    category: "kabel-utas",
    brand: "proproc",
    price: 4500,
    stockStatus: "Бэлэн",
    images: ["/products/copper-cable.svg"],
    shortDescription:
      "Барилга, оффис, ахуйн цахилгааны монтажид ашиглах зэс кабель.",
    description:
      "3x2.5 мм² огтлолтой зэс кабель нь гэрэлтүүлэг, розетка, оффис болон ахуйн цахилгааны монтажид өргөн ашиглагддаг. Тоо хэмжээгээр нийлүүлнэ.",
    specs: [
      { label: "Огтлол", value: "3x2.5 мм²" },
      { label: "Дамжуулагч", value: "Зэс" },
      { label: "Бүрээс", value: "PVC" },
      { label: "Хэрэглээ", value: "Дотор монтаж" },
      { label: "Нийлүүлэлт", value: "Метрээр / боодлоор" },
    ],
    featured: true,
  },
  {
    id: "prod-distribution-box-12",
    name: "Distribution Box 12 Module",
    slug: "distribution-box-12-module",
    category: "sambar-khairtsag",
    brand: "schneider-electric",
    price: 95000,
    stockStatus: "Бэлэн",
    images: ["/products/distribution-box.svg"],
    shortDescription:
      "Автомат таслуур, хамгаалалтын төхөөрөмж суурилуулах зориулалттай хайрцаг.",
    description:
      "12 module багтаамжтай түгээх хайрцаг нь оффис, орон сууц, жижиг үйлчилгээний самбар угсралтад тохиромжтой. DIN rail суурилуулалттай.",
    specs: [
      { label: "Багтаамж", value: "12 module" },
      { label: "Суурилуулалт", value: "Wall mount" },
      { label: "Материал", value: "Insulated enclosure" },
      { label: "Хэрэглээ", value: "MCB / RCD суурилуулалт" },
      { label: "Орчин", value: "Дотор" },
    ],
    featured: true,
  },
  {
    id: "prod-control-panel-accessories",
    name: "Control Panel Accessories",
    slug: "control-panel-accessories",
    category: "avtomatjuulalt",
    brand: "siemens",
    price: null,
    stockStatus: "Үнийн санал",
    images: ["/products/control-panel.svg"],
    shortDescription:
      "Үйлдвэрийн автоматжуулалт, control panel угсралтын дагалдах хэрэгсэл.",
    description:
      "Control panel угсралтад шаардлагатай relay, terminal, hinge, lock, wiring accessory болон automation cabinet-ийн дагалдах хэрэгслийг захиалгаар нийлүүлнэ.",
    specs: [
      { label: "Хэрэглээ", value: "Control panel / PLC cabinet" },
      { label: "Төрөл", value: "Relay, terminal, lock, hinge" },
      { label: "Нийлүүлэлт", value: "Захиалгаар" },
      { label: "Баримт", value: "Part number-аар санал гаргана" },
      { label: "Дэмжлэг", value: "Техникийн зөвлөгөөтэй" },
    ],
    featured: true,
  },
  {
    id: "prod-digital-multimeter",
    name: "Digital Multimeter",
    slug: "digital-multimeter",
    category: "hemjiltiin-bagaj",
    brand: "fluke",
    price: null,
    stockStatus: "Захиалгаар",
    images: ["/products/measuring-tools.svg"],
    shortDescription:
      "Цахилгааны хэмжилт, оношилгоонд ашиглах мэргэжлийн багаж.",
    description:
      "Цахилгаанчин, инженер, maintenance багийн өдөр тутмын оношилгоонд ашиглах multimeter болон хэмжилтийн багажийг захиалгаар нийлүүлнэ.",
    specs: [
      { label: "Хэмжилт", value: "Voltage / Current / Resistance" },
      { label: "Хэрэглээ", value: "Maintenance, commissioning" },
      { label: "Нийлүүлэлт", value: "Захиалгаар" },
      { label: "Ангилал", value: "Professional test tool" },
      { label: "Дэмжлэг", value: "Загвар сонголтын зөвлөгөө" },
    ],
    featured: true,
  },
  {
    id: "prod-ups-battery-12v",
    name: "UPS Battery 12V",
    slug: "ups-battery-12v",
    category: "erchim-huch-battery",
    brand: "ritar",
    price: null,
    stockStatus: "Захиалгаар",
    images: ["/products/ups-battery.svg"],
    shortDescription:
      "UPS, control panel, backup power системд зориулсан зай хураагуур.",
    description:
      "UPS, дата төв, control panel, нарны систем болон backup power хэрэглээнд зориулсан 12V battery-г хүчин чадал, хэмжээ, part number-аар нийлүүлнэ.",
    specs: [
      { label: "Хүчдэл", value: "12V" },
      { label: "Хэрэглээ", value: "UPS / Backup power" },
      { label: "Төрөл", value: "Sealed lead-acid / AGM" },
      { label: "Нийлүүлэлт", value: "Захиалгаар" },
      { label: "Сонголт", value: "Ah хүчин чадлаар" },
    ],
    featured: true,
  },
  {
    id: "prod-fire-alarm-panel",
    name: "Fire Alarm Control Panel",
    slug: "fire-alarm-control-panel",
    category: "galyn-ayuulgui-baidal",
    brand: "simplex",
    price: null,
    stockStatus: "Үнийн санал",
    images: ["/products/fire-alarm-panel.svg"],
    shortDescription:
      "Барилга, үйлдвэр, агуулахын галын дохиоллын самбар, илрүүлэгчийн шийдэл.",
    description:
      "Галын аюул илрүүлэх самбар, detector, notification appliance болон системийн дагалдах хэрэгслийг төслийн шаардлагаар санал болгоно.",
    specs: [
      { label: "Хэрэглээ", value: "Fire detection system" },
      { label: "Төрөл", value: "Control panel / detector / module" },
      { label: "Нийлүүлэлт", value: "Төслийн үнийн санал" },
      { label: "Орчин", value: "Барилга, үйлдвэр, агуулах" },
      { label: "Дэмжлэг", value: "BOQ-оор санал гаргана" },
    ],
    featured: false,
  },
  {
    id: "prod-industrial-network-switch",
    name: "Industrial Network Switch",
    slug: "industrial-network-switch",
    category: "suljee-holboo",
    brand: "moxa",
    price: null,
    stockStatus: "Захиалгаар",
    images: ["/products/network-equipment.svg"],
    shortDescription:
      "Үйлдвэр, уул уурхай, автоматжуулалтын сүлжээнд ашиглах industrial switch.",
    description:
      "Хүнд нөхцөлд ажиллах industrial Ethernet switch, media converter, serial gateway болон network accessory-г захиалгаар нийлүүлнэ.",
    specs: [
      { label: "Хэрэглээ", value: "Industrial network" },
      { label: "Порт", value: "Part number-аас хамаарна" },
      { label: "Суурилуулалт", value: "DIN rail" },
      { label: "Нийлүүлэлт", value: "Захиалгаар" },
      { label: "Орчин", value: "Үйлдвэр, уурхай" },
    ],
    featured: false,
  },
  {
    id: "prod-electrical-materials-kit",
    name: "Electrical Materials Starter Kit",
    slug: "electrical-materials-starter-kit",
    category: "tsahilgaany-material",
    brand: "leipole",
    price: 118000,
    stockStatus: "Бэлэн",
    images: ["/products/electrical-materials.svg"],
    shortDescription:
      "Розетка, залгуур, terminal, connector зэрэг монтажийн суурь материалын багц.",
    description:
      "Барилга, оффис, үйлчилгээний талбайн цахилгааны монтажид хэрэгтэй суурь материалуудыг тоо хэмжээ, шаардлагаар багцлан нийлүүлнэ.",
    specs: [
      { label: "Бүрдэл", value: "Socket, plug, terminal, connector" },
      { label: "Хэрэглээ", value: "Монтаж, засвар үйлчилгээ" },
      { label: "Нийлүүлэлт", value: "Багцаар / ширхэгээр" },
      { label: "Орчин", value: "Барилга, оффис" },
      { label: "Дэмжлэг", value: "BOQ-оор багцална" },
    ],
    featured: false,
  },
  {
    id: "prod-safety-equipment-kit",
    name: "Industrial Safety Equipment Kit",
    slug: "industrial-safety-equipment-kit",
    category: "tsahilgaany-material",
    brand: "3m",
    price: null,
    stockStatus: "Захиалгаар",
    images: ["/products/safety-equipment.svg"],
    shortDescription:
      "Уул уурхай, үйлдвэр, цахилгааны ажилд хэрэглэх хамгаалах хэрэгслийн багц.",
    description:
      "Дуулга, бээлий, маск, хамгаалалтын хэрэгсэл болон safety материалуудыг ажлын орчны шаардлагаар нийлүүлнэ.",
    specs: [
      { label: "Хэрэглээ", value: "Үйлдвэр, уурхай, талбайн ажил" },
      { label: "Төрөл", value: "PPE багц" },
      { label: "Нийлүүлэлт", value: "Захиалгаар" },
      { label: "Сонголт", value: "Ажлын эрсдэлээр" },
      { label: "Дэмжлэг", value: "Тоо хэмжээний санал" },
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
    value: "5+ жил",
    label: "туршлага",
    description: "Цахилгаан бараа нийлүүлэлт, төслийн худалдан авалтын тасралтгүй туршлага.",
  },
  {
    value: "500+",
    label: "бүтээгдэхүүн",
    description: "Цахилгааны материал, автоматжуулалт, сэлбэгийн төрөлжсөн каталог.",
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
    description: "Импорт, логистик, борлуулалт, нийлүүлэлтийг нэг цэгээс хариуцна.",
    icon: "boxes",
  },
  {
    title: "Үнийн санал хурдан гаргана",
    description: "BOQ, тоо хэмжээ, брэндийн сонголтоор ажлын санал богино хугацаанд бэлдэнэ.",
    icon: "hand-coins",
  },
  {
    title: "Аж ахуйн нэгжид зориулсан шийдэл",
    description: "B2B supply chain, захиалга, төсөл дээрх координацийг цогцоор нь шийднэ.",
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
    title: "Урт хугацааны нийлүүлэлт",
    description:
      "Борлуулалтын дараах зөвлөгөө, сэлбэг, дахин захиалга болон өргөтгөлийн дэмжлэгээр харилцагчийн үйл ажиллагааг тогтвортой байлгана.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Хэрэгцээ тодорхойлох",
    description:
      "Төслийн хэмжээ, ачаалал, орчин, шаардлагатай бараа болон тоног төхөөрөмжийн төрлийг тодорхойлно.",
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
      "Сэлбэг, дахин захиалга, өргөтгөл шинэчлэлтийн зөвлөгөөг тасралтгүй үзүүлнэ.",
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
