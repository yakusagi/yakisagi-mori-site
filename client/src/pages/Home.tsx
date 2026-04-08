/*
Design philosophy: Japanese editorial wabi-sabi modernism blended with architectural catalogue design.
Core file intent: home page should feel cinematic, restrained, tactile, and spatially curated.
Question to enforce in every choice: does this reinforce or dilute our quiet Osaka artisan identity?
*/

import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageBanner, SectionHeading, SiteLayout } from "@/components/SiteChrome";
import { heroAssets, homePage, productsPage } from "@/lib/siteContent";

const productImages = [
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663528116740/g9YtKY8Vhdu6ggym3JQWsS/hero-charred-wood_d6bf53c7.jpg",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663528116740/g9YtKY8Vhdu6ggym3JQWsS/yakisugi-detail_cad40bea.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663528116740/g9YtKY8Vhdu6ggym3JQWsS/charred-cedar-cladding_e1f5cb67.jpg",
];

const projects = [
  {
    title: "箕面の住宅",
    text: "深い炭化層を残した外壁で、周辺の緑との対比を際立たせた住宅計画。黒の輪郭が庭の静けさを引き締めます。",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663528116740/g9YtKY8Vhdu6ggym3JQWsS/hero-charred-architecture_49bcce56.jpeg",
  },
  {
    title: "海辺の離れ",
    text: "潮風を受ける立地で、焼杉の防護性と時間による落ち着きを建築の魅力として受け止める離れ。",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663528116740/g9YtKY8Vhdu6ggym3JQWsS/charred-timber-projects_87843dbf.jpg",
  },
  {
    title: "堺の茶房",
    text: "Benii のやわらかな木理を活かし、客席まわりに温度差の少ない質感を与える商空間の構成。",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663528116740/g9YtKY8Vhdu6ggym3JQWsS/yakisugi-detail_cad40bea.webp",
  },
  {
    title: "土間アトリエ",
    text: "壁面の陰影を背景装置として扱い、小さな工房でも空間の奥行きを保つことを目指した計画。",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663528116740/g9YtKY8Vhdu6ggym3JQWsS/charred-cedar-cladding_e1f5cb67.jpg",
  },
];

const educationalNotes = [
  {
    label: "Crafted in Japan",
    title: "日本で焼き、整え、選ぶ。",
    text: "焼きの深さ、磨きの度合い、塗装の有無まで、日本の素材感覚に沿って整理したうえで建築へ提案します。",
  },
  {
    label: "Tailored in Osaka",
    title: "大阪の感性で、納まりに落とし込む。",
    text: "都市部の狭小地、沿岸部、住宅地、商空間。それぞれに応じて、見え方と扱い方を調整します。",
  },
];

export default function Home() {
  return (
    <SiteLayout>
      <PageBanner
        asset={heroAssets.home}
        title={homePage.hero.title}
        description={homePage.hero.subtitle}
        yearMark={heroAssets.home.year}
        primaryCta={{ href: "/products", label: homePage.hero.ctaPrimary }}
        secondaryCta={{ href: "/resources", label: homePage.hero.ctaSecondary }}
      />

      <section className="section-pad">
        <div className="container">
          <SectionHeading index="01" title={homePage.intro.title} description={homePage.intro.body} />

          <div className="mt-14 grid gap-px border border-border/70 bg-border md:grid-cols-5">
            {homePage.pillars.map((item) => (
              <div key={item} className="bg-card px-5 py-8 text-center text-sm tracking-[0.16em] text-foreground">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-y border-border/70 bg-card/45">
        <div className="container">
          <SectionHeading
            index="02"
            title={homePage.productsIntro.title}
            description={homePage.productsIntro.body}
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {productsPage.families.map((family, index) => (
              <article key={family.name} className="editorial-card group overflow-hidden">
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={productImages[index]}
                    alt={family.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,15,12,0.08)_0%,rgba(18,15,12,0.68)_100%)]" />
                  <div className="absolute left-5 top-5 border border-white/30 bg-black/20 px-3 py-1 text-[0.68rem] uppercase tracking-[0.28em] text-white/88 backdrop-blur-sm">
                    {family.japanese}
                  </div>
                </div>

                <div className="grid gap-5 p-6 md:p-8">
                  <div className="flex items-end justify-between gap-4 border-b border-border pb-5">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Finish Family</p>
                      <h3 className="mt-3 font-display text-4xl uppercase leading-none tracking-[0.06em] text-foreground">
                        {family.name}
                      </h3>
                    </div>
                    <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">0{index + 1}</span>
                  </div>

                  <p className="text-sm leading-7 text-muted-foreground">{family.summary}</p>

                  <ul className="grid gap-2 text-sm leading-7 text-foreground">
                    {family.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center justify-between gap-3 border-b border-border/60 py-2 last:border-b-0">
                        <span>{bullet}</span>
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="eyebrow">03 / Story</p>
            <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3.8rem)] leading-[0.98] tracking-[0.05em] text-foreground">
              日本で育まれた素材を、
              <br />
              大阪から建築へ届ける。
            </h2>
          </div>

          <div className="grid gap-px border border-border/70 bg-border">
            {educationalNotes.map((note) => (
              <article key={note.title} className="bg-card px-6 py-8 md:px-8">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{note.label}</p>
                <h3 className="mt-4 font-serif text-[2rem] tracking-[0.06em] text-foreground">{note.title}</h3>
                <p className="mt-4 max-w-3xl text-sm leading-8 text-muted-foreground">{note.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-y border-border/70 bg-card/30">
        <div className="container">
          <SectionHeading index="04" title={homePage.galleryTitle} description={homePage.galleryIntro} />

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <article key={project.title} className="group grid gap-5 border border-border/70 bg-card/80 p-4 md:p-5">
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-[260px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="grid gap-3 md:grid-cols-[64px_minmax(0,1fr)]">
                  <div className="rule-label">0{index + 1}</div>
                  <div>
                    <h3 className="font-serif text-2xl tracking-[0.08em] text-foreground">{project.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-y border-border/70 bg-[#171310] text-[#f4efe6]">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-[#bcae98]">05 / Torikumi</p>
              <h2 className="mt-4 font-display text-[clamp(2.4rem,4vw,4.4rem)] uppercase leading-[0.95] tracking-[0.05em]">
                {homePage.valuesTitle}
              </h2>
            </div>
            <div className="grid gap-px bg-white/12">
              {homePage.values.map((value) => (
                <article key={value.title} className="grid gap-3 bg-[#171310] px-6 py-8 md:grid-cols-[170px_minmax(0,1fr)] md:items-start">
                  <h3 className="font-serif text-2xl tracking-[0.06em] text-[#f4efe6]">{value.title}</h3>
                  <p className="text-sm leading-7 text-[#d4cabd]">{value.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="space-y-5">
            <p className="eyebrow">Illustration & Material Mood</p>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.8rem)] leading-[0.98] tracking-[0.04em] text-foreground">
              手仕事の気配を、
              <br />
              画面の余白にも残す。
            </h2>
            <p className="max-w-xl text-base leading-8 text-muted-foreground">
              元サイトが持つイラストレーションの余韻を残しつつ、Yakisagi Mori では木理、炭化、煙の流れを静かな装飾感として再解釈しています。情報量は増やさず、素材の気配だけを深める構成です。
            </p>
            <Link href="/about">
              <Button className="rounded-none border border-foreground bg-transparent px-5 text-[0.72rem] tracking-[0.2em] text-foreground hover:bg-foreground hover:text-background">
                会社案内へ
              </Button>
            </Link>
          </div>

          <div className="editorial-card relative overflow-hidden p-4 md:p-6">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663528116740/g9YtKY8Vhdu6ggym3JQWsS/yakisugi-detail_cad40bea.webp"
              alt="焼杉の質感"
              className="h-[420px] w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-y-10 right-10 hidden w-32 border-l border-white/25 xl:block" />
            <div className="pointer-events-none absolute bottom-10 left-10 hidden h-24 w-24 rounded-full border border-white/25 xl:block" />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
