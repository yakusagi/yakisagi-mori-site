export const siteMeta = {
  brand: {
    name: "Yakisagi Mori",
    kana: "ヤキサギ モリ",
    tagline: "大阪から届ける、焼杉の静かな存在感。",
  },
  contact: {
    email: "info@yakisagimori.jp",
    phone: "+81 6-0000-1947",
    address: "〒550-0013 大阪府大阪市西区新町 2-18-7",
    showroom: "Osaka Material Atelier",
    hoursWeekday: "月 - 金 9:00 - 18:00",
    hoursWeekend: "土 予約制 / 日・祝 休業",
  },
} as const;

export const heroAssets = {
  home: {
    eyebrow: "焼杉の原風景",
    label: "HOME",
    year: "1974",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663528116740/g9YtKY8Vhdu6ggym3JQWsS/hero-charred-wood_d6bf53c7.jpg",
    video: "https://d2xsxph8kpxj0f.cloudfront.net/310519663528116740/g9YtKY8Vhdu6ggym3JQWsS/yakisagi_hero_c2eef950.webm",
  },
  products: {
    eyebrow: "製品一覧",
    label: "PRODUCTS",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663528116740/g9YtKY8Vhdu6ggym3JQWsS/yakisugi-detail_cad40bea.webp",
  },
  resources: {
    eyebrow: "資料室",
    label: "RESOURCES",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663528116740/g9YtKY8Vhdu6ggym3JQWsS/charred-cedar-cladding_e1f5cb67.jpg",
  },
  about: {
    eyebrow: "私たちについて",
    label: "ABOUT",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663528116740/g9YtKY8Vhdu6ggym3JQWsS/hero-charred-architecture_49bcce56.jpeg",
  },
  contact: {
    eyebrow: "お問い合わせ",
    label: "CONTACT",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663528116740/g9YtKY8Vhdu6ggym3JQWsS/charred-timber-projects_87843dbf.jpg",
  },
} as const;

export const navigation = [
  { href: "/", label: "ホーム" },
  { href: "/products", label: "製品" },
  { href: "/resources", label: "資料" },
  { href: "/about", label: "会社案内" },
  { href: "/contact", label: "お問い合わせ" },
] as const;

export const homePage = {
  hero: {
    title: `焼杉という素材を、
大阪の感性で再編集する。`,
    subtitle: "日本で培われた焼杉の伝統を、現代建築のための質感へ。Yakisagi Mori は大阪を拠点に、焼杉・杉・檜の表情を丁寧に選び、静けさのある外装と内装を提案します。",
    ctaPrimary: "製品を見る",
    ctaSecondary: "資料を読む",
  },
  intro: {
    title: "火がつくる陰影、木が残す余韻。",
    body: "焼杉は、単なる黒い外装材ではありません。表層を炭化させることで、虫害・湿気・風雨に備えながら、木目の陰影と触感を豊かに引き出します。Yakisagi Mori は、素材の成り立ちから納まりまでをひとつの設計言語として捉え、建築家・工務店・設計事務所と伴走します。",
  },
  pillars: [
    "持続可能な森林資源",
    "日本国内での焼杉加工",
    "大阪からの設計支援",
    "手仕事による仕上げ確認",
    "沿岸環境を考慮した提案",
  ],
  productsIntro: {
    title: "製品ラインアップ",
    body: "伝統的な焼杉の深い炭化から、ブラッシングによる柔らかな木理表現まで。用途や意匠の方向性にあわせて、3つの仕上げ系統をご用意しています。",
  },
  galleryTitle: "施工事例",
  galleryIntro:
    "住宅、離れ、店舗、ギャラリー。焼杉は外壁だけでなく、空間の輪郭を整える素材としても機能します。",
  valuesTitle: "Yakisagi Mori の取り組み",
  values: [
    {
      title: "職人性",
      text: "一枚ごとの炭化の表情、割れ、毛羽立ちまでを観察し、素材の個性を建築の魅力へと変えます。",
    },
    {
      title: "地域性",
      text: "大阪を拠点に、都市部の狭小地から郊外の静かな住宅地まで、日本の住環境に即した提案を行います。",
    },
    {
      title: "調色対応",
      text: "黒の深さ、木肌の見せ方、オイルの艶感まで、設計意図に合わせた方向性を整理します。",
    },
  ],
};

export const productsPage = {
  title: "焼杉製品",
  headline: `建築に深度を与える、
焼杉の製品群。`,
  intro:
    "Yakisagi Mori の製品は、焼き・磨き・塗装の関係によって異なる陰影をつくります。外装、内装、門扉、塀、軒天など、用途に応じて素材の見え方を整えます。",
  families: [
    {
      name: "Hakuu",
      japanese: "白雨",
      summary:
        "炭化層をしっかり残した、最も力強い表情。深い黒とマットな質感で、外観に凛とした輪郭を生みます。",
      bullets: ["深い炭化層", "高い耐候性", "外装向けの存在感"],
    },
    {
      name: "Benii",
      japanese: "紅井",
      summary:
        "軽く磨きを入れ、杉の木理を穏やかに見せる仕上げ。和と現代性のあいだをつなぐ、柔らかな焼杉です。",
      bullets: ["軽いブラッシング", "杉の木理が見える", "内外装で扱いやすい"],
    },
    {
      name: "Sumii",
      japanese: "墨衣",
      summary:
        "強く磨き込むことで陰影と凹凸を際立たせた仕上げ。壁面に奥行きを与え、印象的なファサードをつくります。",
      bullets: ["深い凹凸表現", "設計的な陰影", "色調バリエーション対応"],
    },
  ],
  finishes: [
    { family: "Hakuu", name: "Natural", detail: "焼き + 無塗装" },
    { family: "Hakuu", name: "Patina", detail: "焼き + 保護塗装" },
    { family: "Hakuu", name: "Black", detail: "焼き + 軽磨き + 黒オイル" },
    { family: "Benii", name: "Natural", detail: "焼き + 軽磨き + 無塗装" },
    { family: "Benii", name: "Clear", detail: "焼き + 軽磨き + クリア塗装" },
    { family: "Benii", name: "Black", detail: "焼き + 軽磨き + 黒塗装" },
    { family: "Sumii", name: "Natural", detail: "焼き + 強磨き + 無塗装" },
    { family: "Sumii", name: "Clear", detail: "焼き + 強磨き + クリア塗装" },
    { family: "Sumii", name: "Mocha", detail: "焼き + 強磨き + 茶系着色" },
    { family: "Sumii", name: "Sahara", detail: "焼き + 強磨き + 砂色着色" },
    { family: "Sumii", name: "Drift", detail: "焼き + 強磨き + 灰色着色" },
    { family: "Sumii", name: "Dune", detail: "焼き + 強磨き + 淡褐色着色" },
  ],
  benefits: [
    "自然由来の耐久性",
    "メンテナンス負荷の低減",
    "薬剤に頼らない素材設計",
    "日本の気候に適した納まり",
    "一枚ごとに異なる木肌の表情",
  ],
};

export const resourcesPage = {
  title: "資料",
  headline: `施工ガイド、仕様書、
焼杉の基礎知識。`,
  intro:
    "計画初期の素材比較から、納まり検討、メンテナンスの想定まで。設計者と施工者の双方に役立つ情報を、日本語で整理した資料ページです。",
  faqs: [
    "焼杉とはどのような素材ですか。",
    "焼杉と Shou Sugi Ban は同じ意味ですか。",
    "焼杉の主な利点は何ですか。",
    "沿岸部や湿潤環境でも使用できますか。",
    "経年変化で見た目はどう変わりますか。",
  ],
  downloads: [
    "Hakuu 製品概要 PDF",
    "Benii 製品概要 PDF",
    "Sumii 製品概要 PDF",
    "施工と納まりの基本ガイド PDF",
  ],
  glossary: [
    { term: "焼杉", description: "杉板の表層を焼き、炭化させることで耐久性と独特の表情を引き出す日本の伝統技法。" },
    { term: "杉", description: "日本の建築文化を支えてきた代表的な針葉樹。軽さと加工性に優れ、焼杉との相性も高い素材。" },
    { term: "通気胴縁", description: "外壁内に通気層を確保するための下地構成。焼杉の性能を長く保つうえで重要。" },
    { term: "パティナ", description: "時間の経過とともに現れる自然な艶や色の落ち着き。素材の成熟した表情。" },
  ],
};

export const aboutPage = {
  title: "会社案内",
  headline: `大阪から、焼杉の静けさを
現代建築へ。`,
  intro:
    "Yakisagi Mori は、焼杉が持つ防護性と美しさを、現代の建築言語の中で丁寧に位置づけるために生まれました。私たちは素材を売るだけでなく、表情の選定、部位の相性、経年変化の読み方まで含めて提案します。",
  sections: [
    {
      title: "焼杉の伝統",
      body: "焼杉は、杉板の表層を熱で炭化させる日本の伝統技法です。火を通すことで生まれる黒、艶、ひび割れ、匂いまでが、素材の記憶として建築に残ります。",
    },
    {
      title: "1974 から続く知見",
      body: "私たちの製品づくりは、1974 年以来育まれてきた焼杉加工の知見を下敷きにしています。伝統工法の理に学びながら、現代の設計と施工に適した品質へと再構成しています。",
    },
    {
      title: "大阪の設計感覚",
      body: "都市的な密度と職人文化が共存する大阪から、住宅・商業空間・宿泊施設に向けた素材提案を行います。余白のつくり方、陰影の出し方、経年変化の受け止め方を重視しています。",
    },
  ],
  timeline: [
    { year: "1974", text: "焼杉加工の知見が確立される。" },
    { year: "2012", text: "現代建築向けの仕上げ検証を本格化。" },
    { year: "2026", text: "Yakisagi Mori として大阪で再編集。" },
  ],
  values: ["Authenticity", "Sustainability", "Collaboration", "Material Precision"],
};

export const contactPage = {
  title: "お問い合わせ",
  headline: `焼杉の計画について、
まずはご相談ください。`,
  intro:
    "素材選定、サンプル相談、外装・内装の納まり、着色方向、数量の考え方まで。Yakisagi Mori は大阪から、プロジェクトの初期段階に寄り添います。",
  directLabel: "お急ぎのご相談",
  formTitle: "お問い合わせフォーム",
};

export const footerLinks = [
  { href: "/about", label: "会社案内" },
  { href: "/products", label: "製品" },
  { href: "/resources", label: "資料" },
  { href: "/contact", label: "お問い合わせ" },
] as const;
