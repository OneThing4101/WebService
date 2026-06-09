export const brandCategories = [
  "Автоматжуулалт",
  "Цахилгаан тоног төхөөрөмж",
  "Хэмжилтийн багаж",
  "Уул уурхай",
  "Галын аюулгүй байдал",
  "Сүлжээ холбоо",
  "HVAC / Агааржуулалт",
  "Багаж хэрэгсэл",
  "Эрчим хүч / Battery",
  "Механик сэлбэг",
  "Аж үйлдвэрийн материал",
] as const;

export type BrandCategory = (typeof brandCategories)[number];

export type Brand = {
  id: string;
  name: string;
  slug: string;
  logo: string;
  description: string;
  category: BrandCategory;
  keywords?: string[];
  featured?: boolean;
  productCategories?: string[];
};

export type BrandWithLogoStatus = Brand & {
  logoAvailable: boolean;
};

export const featuredBrandSlugs = [
  "siemens",
  "johnson-controls",
  "omron",
  "asco-aventics",
  "pfisterer",
  "cigweld",
] as const;

export const brands: Brand[] = [
  {
    id: "proproc",
    name: "PRO-PROC",
    slug: "proproc",
    logo: "/brands/pro-proc-official.png",
    description:
      "Барилга, оффис, үйлдвэрт зориулсан цахилгааны материал, кабель болон supply багц.",
    category: "Цахилгаан тоног төхөөрөмж",
    keywords: ["PRO-PROC Supply", "Mongolia"],
  },
  {
    id: "siemens",
    name: "SIEMENS",
    slug: "siemens",
    logo: "/brands/siemens.svg",
    description:
      "Автоматжуулалтын эд анги, PLC, control panel болон үйлдвэрийн тоног төхөөрөмжийн нийлүүлэлт.",
    category: "Автоматжуулалт",
    keywords: ["Siemens PLC Mongolia", "Mongolia"],
    featured: true,
  },
  {
    id: "johnson-controls",
    name: "JOHNSON CONTROLS",
    slug: "johnson-controls",
    logo: "/brands/johnson-controls.svg",
    description:
      "Барилгын болон үйлдвэрийн автоматжуулалт, удирдлагын системийн тоног төхөөрөмж.",
    category: "Автоматжуулалт",
    keywords: ["Johnson Controls Mongolia", "Mongolia"],
    featured: true,
  },
  {
    id: "omron",
    name: "OMRON",
    slug: "omron",
    logo: "/brands/omron.svg",
    description:
      "PLC удирдлага, мэдрэгч, relay болон үйлдвэрийн automation шийдлүүд.",
    category: "Автоматжуулалт",
    keywords: ["Omron PLC Mongolia", "Mongolia"],
    featured: true,
  },
  {
    id: "asco-aventics",
    name: "ASCO / AVENTICS",
    slug: "asco-aventics",
    logo: "/brands/asco.png",
    description:
      "ATEX d гэрчилгээтэй хавхлаг, pneumatic automation болон эрсдэлтэй орчны шийдэл.",
    category: "Автоматжуулалт",
    keywords: ["ASCO valves Mongolia", "Mongolia"],
    featured: true,
  },
  {
    id: "aventics",
    name: "AVENTICS",
    slug: "aventics",
    logo: "/brands/aventics.png",
    description:
      "Pneumatic automation, хавхлаг болон үйлдвэрийн удирдлагын дагалдах хэрэгслийн шийдэл.",
    category: "Автоматжуулалт",
    keywords: ["AVENTICS Mongolia", "Mongolia"],
  },
  {
    id: "pfisterer",
    name: "PFISTERER",
    slug: "pfisterer",
    logo: "/brands/pfisterer.svg",
    description:
      "Өндөр хүчдлийн шугам шалгах хэрэгсэл, кабель болон HV дагалдах тоноглол.",
    category: "Цахилгаан тоног төхөөрөмж",
    keywords: ["Pfisterer Mongolia", "Mongolia"],
    featured: true,
  },
  {
    id: "3m",
    name: "3M",
    slug: "3m",
    logo: "/brands/3m.svg",
    description:
      "Уул уурхайн хамгаалалтын хэрэгсэл, бээлий, маск, салфетка болон safety материал.",
    category: "Уул уурхай",
    keywords: ["3M Mongolia", "Mongolia"],
  },
  {
    id: "wika",
    name: "WIKA",
    slug: "wika",
    logo: "/brands/wika.svg",
    description:
      "Уул уурхай, аж үйлдвэрийн даралт, температур мэдрэгч, хэмжигч төхөөрөмж.",
    category: "Хэмжилтийн багаж",
    keywords: ["WIKA Mongolia", "Mongolia"],
  },
  {
    id: "emerson-rosemount",
    name: "EMERSON ROSEMOUNT",
    slug: "emerson-rosemount",
    logo: "/brands/emerson-rosemount.png",
    description:
      "Даралт, температур, process instrumentation мэдрэгч болон хэмжилтийн хэрэгсэл.",
    category: "Хэмжилтийн багаж",
    keywords: ["Emerson Rosemount Mongolia", "Mongolia"],
  },
  {
    id: "cigweld",
    name: "CIGWELD",
    slug: "cigweld",
    logo: "/brands/cigweld.svg",
    description:
      "Гагнуурын багаж хэрэгсэл, welding consumables болон ажлын талбайн тоноглол.",
    category: "Багаж хэрэгсэл",
    keywords: ["CIGWELD Mongolia", "Mongolia"],
    featured: true,
  },
  {
    id: "milwaukee",
    name: "MILWAUKEE",
    slug: "milwaukee",
    logo: "/brands/milwaukee.svg",
    description:
      "Ажлын талбайн гэрэлтүүлэг, батарейтэй гар багаж болон мэргэжлийн power tools.",
    category: "Багаж хэрэгсэл",
    keywords: ["Milwaukee Mongolia", "Mongolia"],
    featured: true,
  },
  {
    id: "tmac",
    name: "TMAC",
    slug: "tmac",
    logo: "/brands/tmac.svg",
    description:
      "Өндөр хүчдэл тусгаарлах ажлын резинэн бээлий болон хамгаалалтын хэрэгсэл.",
    category: "Цахилгаан тоног төхөөрөмж",
    keywords: ["TMAC Mongolia", "Mongolia"],
  },
  {
    id: "ritar",
    name: "RITAR",
    slug: "ritar",
    logo: "/brands/ritar.webp",
    description:
      "UPS, data center, control panel, нарны эрчим хүч болон backup battery шийдэл.",
    category: "Эрчим хүч / Battery",
    keywords: ["Ritar Mongolia", "Mongolia"],
    featured: true,
  },
  {
    id: "solar-panels-charge-controllers",
    name: "Solar panels and charge controllers",
    slug: "solar-panels-charge-controllers",
    logo: "/brands/solar-panels-charge-controllers.svg",
    description:
      "100-600Вт нарны дэлгэц, нарны цэнэг зохицуулагч болон off-grid тэжээлийн шийдэл.",
    category: "Эрчим хүч / Battery",
    keywords: ["Solar panels Mongolia", "Mongolia"],
  },
  {
    id: "sintronics",
    name: "SINTRONICS",
    slug: "sintronics",
    logo: "/brands/sintronics.svg",
    description:
      "SIEMENS control panel-ын нугас, цоож, түгжээ болон cabinet дагалдах хэрэгсэл.",
    category: "Цахилгаан тоног төхөөрөмж",
    keywords: ["Sintronics Mongolia", "Mongolia"],
  },
  {
    id: "littelfuse",
    name: "LITTELFUSE",
    slug: "littelfuse",
    logo: "/brands/littelfuse.png",
    description:
      "Гал хамгаалагч, диод, circuit protection болон цахилгаан хамгаалалтын эд анги.",
    category: "Цахилгаан тоног төхөөрөмж",
    keywords: ["LITTELFUSE Mongolia", "Mongolia"],
  },
  {
    id: "pce-instruments",
    name: "PCE Instruments",
    slug: "pce-instruments",
    logo: "/brands/pce-instruments.svg",
    description:
      "Өндөр нарийвчлалтай хэмжилтийн багаж, testing equipment болон field instruments.",
    category: "Хэмжилтийн багаж",
    keywords: ["PCE Instruments Mongolia", "Mongolia"],
  },
  {
    id: "fluke",
    name: "FLUKE",
    slug: "fluke",
    logo: "/brands/fluke.svg",
    description:
      "Төрөл бүрийн хэмжилтийн багаж хэрэгсэл, multimeter, tester болон оношилгооны төхөөрөмж.",
    category: "Хэмжилтийн багаж",
    keywords: ["Fluke Mongolia", "Mongolia"],
    featured: true,
  },
  {
    id: "balluff",
    name: "BALLUFF",
    slug: "balluff",
    logo: "/brands/balluff.svg",
    description:
      "Соронзон мэдрэгч, proximity sensor болон automation sensing шийдлүүд.",
    category: "Автоматжуулалт",
    keywords: ["Balluff Mongolia", "Mongolia"],
  },
  {
    id: "thorne-derrick",
    name: "THORNE AND DERRICK INTERNATIONAL",
    slug: "thorne-derrick",
    logo: "/brands/thorne-derrick.svg",
    description:
      "Өндөр, дунд, нам хүчдлийн цахилгааны тоног төхөөрөмж болон дагалдах хэрэгсэл.",
    category: "Цахилгаан тоног төхөөрөмж",
    keywords: ["Thorne and Derrick International Mongolia", "Mongolia"],
  },
  {
    id: "retrotec",
    name: "RETROTEC",
    slug: "retrotec",
    logo: "/brands/retrotec.svg",
    description:
      "Галын битүүмж шалгах багаж хэрэгсэл болон enclosure integrity testing шийдэл.",
    category: "Галын аюулгүй байдал",
    keywords: ["Retrotec Mongolia", "Mongolia"],
  },
  {
    id: "iasus",
    name: "IASUS",
    slug: "iasus",
    logo: "/brands/iasus.svg",
    description:
      "Өндөр дуу чимээтэй орчинд зориулсан микрофон, чихэвч болон холбооны шийдэл.",
    category: "Сүлжээ холбоо",
    keywords: ["Iasus Mongolia", "Mongolia"],
  },
  {
    id: "asenware",
    name: "ASENWARE",
    slug: "asenware",
    logo: "/brands/asenware.svg",
    description:
      "Галын самбар, галын ус түгээх хоолой, шланк болон fire system дагалдах хэрэгсэл.",
    category: "Галын аюулгүй байдал",
    keywords: ["ASENWARE Mongolia", "Mongolia"],
  },
  {
    id: "vesda-xtralis",
    name: "VESDA XTRALIS",
    slug: "vesda-xtralis",
    logo: "/brands/vesda-xtralis.svg",
    description:
      "Гал, утаа, хий илрүүлэх аваарын систем болон aspiration detection шийдэл.",
    category: "Галын аюулгүй байдал",
    keywords: ["VESDA Xtralis Mongolia", "Mongolia"],
  },
  {
    id: "tyco",
    name: "TYCO",
    slug: "tyco",
    logo: "/brands/tyco.svg",
    description:
      "Галын аюулаас сэргийлэх усан суурьтай шийдэл, sprinkler болон suppression систем.",
    category: "Галын аюулгүй байдал",
    keywords: ["Tyco Mongolia", "Mongolia"],
  },
  {
    id: "stainless-steel-fittings",
    name: "Stainless steel fittings",
    slug: "stainless-steel-fittings",
    logo: "/brands/stainless-steel-fittings.svg",
    description:
      "Stainless steel труба, холбогч, крант, camlock, tee, elbow, connector, clamp, ball valve.",
    category: "Аж үйлдвэрийн материал",
    keywords: ["Stainless steel fittings Mongolia", "Mongolia"],
  },
  {
    id: "vuzix",
    name: "VUZIX",
    slug: "vuzix",
    logo: "/brands/vuzix.png",
    description:
      "AR smart glasses ашиглан зайнаас угсралт, шалгалт, алдаа илрүүлэх шийдэл.",
    category: "Сүлжээ холбоо",
    keywords: ["VUZIX Mongolia", "Mongolia"],
  },
  {
    id: "skf",
    name: "SKF",
    slug: "skf",
    logo: "/brands/skf.svg",
    description:
      "Холхивч, bearing unit болон үйлдвэрийн эргэлдэх механизмын сэлбэг хэрэгсэл.",
    category: "Механик сэлбэг",
    keywords: ["SKF Mongolia", "Mongolia"],
  },
  {
    id: "moxa",
    name: "MOXA",
    slug: "moxa",
    logo: "/brands/moxa.svg",
    description:
      "Сүлжээ, автоматжуулалт, edge connectivity болон тооцоолон бодолтын шийдэл.",
    category: "Сүлжээ холбоо",
    keywords: ["MOXA Mongolia", "Mongolia"],
  },
  {
    id: "leipole",
    name: "LEIPOLE",
    slug: "leipole",
    logo: "/brands/leipole.svg",
    description:
      "Цахилгааны terminal block, transformer, PCB connector, busbar болон cabinet хэрэгсэл.",
    category: "Цахилгаан тоног төхөөрөмж",
    keywords: ["LEIPOLE Mongolia", "Mongolia"],
  },
  {
    id: "cisco",
    name: "CISCO",
    slug: "cisco",
    logo: "/brands/cisco.svg",
    description:
      "Сүлжээний тоног төхөөрөмж, router, switch болон enterprise network сэлбэг.",
    category: "Сүлжээ холбоо",
    keywords: ["CISCO Mongolia", "Mongolia"],
  },
  {
    id: "hpe",
    name: "HPE",
    slug: "hpe",
    logo: "/brands/hpe.svg",
    description:
      "Сервер, сүлжээ, storage болон enterprise тоног төхөөрөмжийн нийлүүлэлт.",
    category: "Сүлжээ холбоо",
    keywords: ["HPE Mongolia", "Mongolia"],
  },
  {
    id: "aruba",
    name: "ARUBA",
    slug: "aruba",
    logo: "/brands/aruba.svg",
    description:
      "Enterprise network, wireless network, access point болон switching тоног төхөөрөмж.",
    category: "Сүлжээ холбоо",
    keywords: ["ARUBA Mongolia", "Mongolia"],
  },
  {
    id: "coal-control",
    name: "COAL CONTROL",
    slug: "coal-control",
    logo: "/brands/coal-control.svg",
    description:
      "Уул уурхайн туузан дамжуурга хяналтын тоног төхөөрөмж, мэдрэгч болон safety control.",
    category: "Уул уурхай",
    keywords: ["COAL CONTROL Mongolia", "Mongolia"],
  },
  {
    id: "benning",
    name: "BENNING",
    slug: "benning",
    logo: "/brands/benning.svg",
    description:
      "Аж үйлдвэрийн цахилгаан хангамжийн тоног төхөөрөмж, charger болон power system.",
    category: "Цахилгаан тоног төхөөрөмж",
    keywords: ["BENNING Mongolia", "Mongolia"],
  },
  {
    id: "schneider-electric",
    name: "SCHNEIDER ELECTRIC",
    slug: "schneider-electric",
    logo: "/brands/schneider-electric.svg",
    description:
      "Schneider APC, RBC battery, цахилгаан тоног төхөөрөмж болон power management шийдэл.",
    category: "Цахилгаан тоног төхөөрөмж",
    keywords: ["Schneider Electric Mongolia", "Mongolia"],
    featured: true,
  },
  {
    id: "hydac",
    name: "HYDAC",
    slug: "hydac",
    logo: "/brands/hydac.png",
    description:
      "Фильтр, гидравлик хэрэгслүүд, accumulator болон fluid power system сэлбэг.",
    category: "Механик сэлбэг",
    keywords: ["HYDAC Mongolia", "Mongolia"],
  },
  {
    id: "simplex",
    name: "SIMPLEX",
    slug: "simplex",
    logo: "/brands/simplex.jpg",
    description:
      "Галын аюул илрүүлэх системийн хэрэгслүүд, panel, detector болон notification төхөөрөмж.",
    category: "Галын аюулгүй байдал",
    keywords: ["SIMPLEX Mongolia", "Mongolia"],
  },
  {
    id: "flomec",
    name: "FLOMEC",
    slug: "flomec",
    logo: "/brands/flomec.svg",
    description:
      "Урсгал мэдрэгч, дамжуулагч хэрэгсэл болон flow measurement шийдэл.",
    category: "Хэмжилтийн багаж",
    keywords: ["FLOMEC Mongolia", "Mongolia"],
  },
  {
    id: "shell-gadus",
    name: "SHELL GADUS",
    slug: "shell-gadus",
    logo: "/brands/shell-gadus.svg",
    description:
      "Автомат тосолгооны ухаалаг систем, lubricant solution болон maintenance материал.",
    category: "Механик сэлбэг",
    keywords: ["SHELL GADUS Mongolia", "Mongolia"],
  },
  {
    id: "exide-marathon",
    name: "EXIDE MARATHON",
    slug: "exide-marathon",
    logo: "/brands/exide-marathon.svg",
    description:
      "Тог баригчийн цэнэг хураагуур, UPS battery болон backup power шийдэл.",
    category: "Эрчим хүч / Battery",
    keywords: ["EXIDE MARATHON Mongolia", "Mongolia"],
  },
  {
    id: "shaw-almex-ezfix",
    name: "SHAW ALMEX / EZFIX",
    slug: "shaw-almex-ezfix",
    logo: "/brands/shaw-almex.svg",
    description:
      "Конвейер засварлах силикон цавуу, urethane repair kit болон belt maintenance материал.",
    category: "Уул уурхай",
    keywords: ["SHAW ALMEX Mongolia", "EZFIX Mongolia", "Mongolia"],
  },
  {
    id: "syntec-fuelmaster",
    name: "SYNTEC / FUELMASTER",
    slug: "syntec-fuelmaster",
    logo: "/brands/syntec-fuelmaster.svg",
    description:
      "Түлш цэнэглэх ухаалаг дэд бүтэц систем, fuel management болон site automation.",
    category: "Уул уурхай",
    keywords: ["SYNTEC Mongolia", "FUELMASTER Mongolia", "Mongolia"],
  },
  {
    id: "kidde",
    name: "KIDDE",
    slug: "kidde",
    logo: "/brands/kidde.svg",
    description:
      "Гал унтраах ухаалаг систем, 3M NOVEC 1230 clean agent шийдэл болон safety equipment.",
    category: "Галын аюулгүй байдал",
    keywords: ["KIDDE Mongolia", "Mongolia"],
  },
  {
    id: "swivelpole",
    name: "SWIVELPOLE",
    slug: "swivelpole",
    logo: "/brands/swivelpole.svg",
    description:
      "Гэрэлтүүлэг, камер, дохиолол, сүлжээний суурь материал болон pole mounting шийдэл.",
    category: "Аж үйлдвэрийн материал",
    keywords: ["SWIVELPOLE Mongolia", "Mongolia"],
  },
  {
    id: "jg",
    name: "JG",
    slug: "jg",
    logo: "/brands/jg.svg",
    description:
      "Уул уурхайн тоног төхөөрөмжийн чичиргээ шингээгч резинэн суурь, хөл болон mount.",
    category: "Механик сэлбэг",
    keywords: ["JG Mongolia", "Mongolia"],
  },
  {
    id: "motorola",
    name: "MOTOROLA",
    slug: "motorola",
    logo: "/brands/motorola.svg",
    description:
      "Богино долгионы станц, холбооны хэрэгсэл, батерей болон radio communication сэлбэг.",
    category: "Сүлжээ холбоо",
    keywords: ["MOTOROLA Mongolia", "Mongolia"],
  },
  {
    id: "donaldson",
    name: "DONALDSON",
    slug: "donaldson",
    logo: "/brands/donaldson.svg",
    description:
      "Фильтр, шүүлтүүр болон хүнд машин, үйлдвэрийн filtration системийн сэлбэг.",
    category: "Механик сэлбэг",
    keywords: ["DONALDSON Mongolia", "Mongolia"],
  },
  {
    id: "rock-bolt-washer-plate",
    name: "Rock bolt and washer plate",
    slug: "rock-bolt-washer-plate",
    logo: "/brands/rock-bolt-washer-plate.svg",
    description:
      "Гүний уурхайн rock bolt, washer plate болон ground support материал.",
    category: "Уул уурхай",
    keywords: ["Rock bolt Mongolia", "Washer plate Mongolia", "Mongolia"],
  },
  {
    id: "outdoor-tarpaulin",
    name: "Outdoor tarpaulin",
    slug: "outdoor-tarpaulin",
    logo: "/brands/outdoor-tarpaulin.svg",
    description:
      "Том хэмжээтэй, гадаа тэсвэртэй брезентэн бүтээлэг болон хамгаалалтын материал.",
    category: "Аж үйлдвэрийн материал",
    keywords: ["Outdoor tarpaulin Mongolia", "Mongolia"],
  },
  {
    id: "desiccant",
    name: "DESICCANT",
    slug: "desiccant",
    logo: "/brands/desiccant.svg",
    description:
      "Ахуйн болон үйлдвэрийн чийг шингээгч, хадгалалт тээвэрлэлтийн хамгаалалтын материал.",
    category: "Аж үйлдвэрийн материал",
    keywords: ["DESICCANT Mongolia", "Mongolia"],
  },
  {
    id: "toshiba-carrier",
    name: "TOSHIBA / CARRIER",
    slug: "toshiba-carrier",
    logo: "/brands/toshiba.svg",
    description:
      "Air condition төхөөрөмж, HVAC сэлбэг хэрэгсэл болон хөргөлт агааржуулалтын тоноглол.",
    category: "HVAC / Агааржуулалт",
    keywords: ["TOSHIBA Carrier Mongolia", "Mongolia"],
  },
  {
    id: "carrier",
    name: "CARRIER",
    slug: "carrier",
    logo: "/brands/carrier.svg",
    description:
      "Air condition төхөөрөмж, HVAC систем болон агааржуулалтын тоног төхөөрөмжийн нийлүүлэлт.",
    category: "HVAC / Агааржуулалт",
    keywords: ["Carrier Mongolia", "HVAC Mongolia", "Mongolia"],
  },
  {
    id: "helios",
    name: "HELIOS",
    slug: "helios",
    logo: "/brands/helios.svg",
    description:
      "Өрөөний агаар цэвэршүүлэгч, агаар шүүгч фильтр болон indoor air quality шийдэл.",
    category: "HVAC / Агааржуулалт",
    keywords: ["HELIOS Mongolia", "Mongolia"],
  },
  {
    id: "dorma-kaba",
    name: "DORMA KABA",
    slug: "dorma-kaba",
    logo: "/brands/dorma-kaba.png",
    description:
      "Хаалганы цоож, бариул, нугас, access hardware болон сэлбэг хэрэгсэл.",
    category: "Аж үйлдвэрийн материал",
    keywords: ["DORMA KABA Mongolia", "Mongolia"],
  },
  {
    id: "brady",
    name: "BRADY",
    slug: "brady",
    logo: "/brands/brady.svg",
    description:
      "Аж үйлдвэрийн зориулалттай зөөврийн принтер, шошго хэвлэгч, хор, цаас.",
    category: "Багаж хэрэгсэл",
    keywords: ["BRADY Mongolia", "Mongolia"],
  },
  {
    id: "emerson-copeland",
    name: "EMERSON COPELAND",
    slug: "emerson-copeland",
    logo: "/brands/emerson-copeland.svg",
    description:
      "Хөргүүрийн компрессор, refrigeration system сэлбэг болон HVAC тоноглол.",
    category: "HVAC / Агааржуулалт",
    keywords: ["Emerson Copeland Mongolia", "Mongolia"],
  },
  {
    id: "philips",
    name: "PHILIPS",
    slug: "philips",
    logo: "/brands/philips.svg",
    description:
      "Гэрэлтүүлэг, indoor/outdoor lighting болон төслийн lighting supply шийдэл.",
    category: "Цахилгаан тоног төхөөрөмж",
    keywords: ["Philips Lights Mongolia", "Mongolia"],
  },
  {
    id: "systemair",
    name: "SYSTEMAIR",
    slug: "systemair",
    logo: "/brands/systemair.png",
    description:
      "Халуун агаар үлээгч хөшиг, ventilation equipment болон HVAC airflow шийдэл.",
    category: "HVAC / Агааржуулалт",
    keywords: ["Systemair Mongolia", "Mongolia"],
  },
  {
    id: "industrial-chains",
    name: "Industrial chains",
    slug: "industrial-chains",
    logo: "/brands/industrial-chains.svg",
    description:
      "Аж үйлдвэр, уул уурхайн тосолгоотой гинж болон дамжуулгын механик сэлбэг.",
    category: "Механик сэлбэг",
    keywords: ["Industrial chains Mongolia", "Mongolia"],
  },
  {
    id: "igus-e-chain",
    name: "IGUS E-Chain",
    slug: "igus-e-chain",
    logo: "/brands/igus-e-chain.svg",
    description:
      "E-Chain сэлбэг хэрэгсэл, cable carrier болон хөдөлгөөнт кабель хамгаалалтын шийдэл.",
    category: "Механик сэлбэг",
    keywords: ["IGUS E-Chain Mongolia", "Mongolia"],
  },
  {
    id: "axis",
    name: "AXIS",
    slug: "axis",
    logo: "/brands/axis.svg",
    description:
      "Камерын хяналтын сэлбэг хэрэгсэл, network camera parts болон security hardware.",
    category: "Сүлжээ холбоо",
    keywords: ["AXIS Parts Mongolia", "Mongolia"],
  },
];

export function getBrandById(id: string) {
  return brands.find((brand) => brand.id === id);
}

export function getBrandBySlug(slug: string) {
  return brands.find((brand) => brand.slug === slug);
}

export function getFeaturedBrands(limit = 12) {
  const featuredSlugs = new Set<string>(featuredBrandSlugs);
  const primaryFeatured = featuredBrandSlugs.flatMap((slug) => {
    const brand = brands.find((item) => item.slug === slug);
    return brand ? [brand] : [];
  });
  const additionalFeatured = brands.filter(
    (brand) => brand.featured && !featuredSlugs.has(brand.slug),
  );
  const featured = [...primaryFeatured, ...additionalFeatured];

  return featured.slice(0, limit);
}
