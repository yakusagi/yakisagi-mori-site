/*
Design philosophy: Japanese editorial wabi-sabi modernism blended with architectural catalogue design.
Core file intent: about page should communicate lineage, place, and material philosophy with soft visual authority.
Question to enforce in every choice: does this reinforce or dilute our quiet Osaka artisan identity?
*/

import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { PageBanner, SectionHeading, SiteLayout } from "@/components/SiteChrome";
import { aboutPage, heroAssets } from "@/lib/siteContent";

const philosophyQuote =
  "焼杉は黒い外装材ではなく、火と時間が木に残した記憶である。Yakisagi Mori はその記憶を、現代建築の静かな輪郭へとつなぎます。";

const galleryPreview = [
  {
    name: "箕面の住宅",
    type: "Residential",
    note: "深い炭化層を残した外壁で、周辺の緑との対比を際立たせた計画。",
  },
  {
    name: "中之島の離れ",
    type: "Retreat",
    note: "やわらかな木理を見せる仕上げで、街中に静けさを差し込む木造空間。",
  },
  {
    name: "堺の茶房",
    type: "Commercial",
    note: "焼杉の陰影を内外で連続させ、入口まわりに奥行きを与えた事例。",
  },
];

export default function About() {
  return (
    <SiteLayout>
      <PageBanner asset={heroAssets.about} title={aboutPage.headline} description={aboutPage.intro} />

      <section className="section-pad">
        <div className="container">
          <SectionHeading
            index="01"
            title="Yakisagi Mori について"
            description="元サイトの About ページが持つ系譜、思想、教育的説明の流れを受け継ぎながら、大阪拠点のブランドとして再構成しています。"
          />

          <div className="mt-12 grid gap-px border border-border/70 bg-border">
            {aboutPage.sections.map((section) => (
              <article
                key={section.title}
                className="grid gap-4 bg-card px-6 py-8 md:grid-cols-[220px_minmax(0,1fr)] md:px-8"
              >
                <h3 className="font-serif text-[1.9rem] tracking-[0.08em] text-foreground">{section.title}</h3>
                <p className="text-sm leading-8 text-muted-foreground md:text-[0.98rem]">{section.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-y border-border/70 bg-card/40">
        <div className="container grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="eyebrow">02 / Since 1974</p>
            <h2 className="mt-4 font-display text-[clamp(2.2rem,4vw,4rem)] uppercase leading-[0.96] tracking-[0.05em] text-foreground">
              継承と再編集の時間軸
            </h2>
            <p className="mt-5 max-w-md text-sm leading-8 text-muted-foreground">
              元サイトが強く打ち出している heritage の流れを受け継ぎ、Yakisagi Mori では 1974 年から続く焼杉加工の知見を大阪で現代建築へと接続しています。
            </p>
          </div>

          <div className="grid gap-px border border-border/70 bg-border">
            {aboutPage.timeline.map((item) => (
              <article
                key={item.year}
                className="grid gap-3 bg-background px-6 py-7 md:grid-cols-[120px_minmax(0,1fr)] md:px-8"
              >
                <div className="font-display text-[2.6rem] leading-none tracking-[0.04em] text-foreground">{item.year}</div>
                <p className="text-sm leading-8 text-muted-foreground">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="editorial-card p-8 md:p-10">
            <p className="eyebrow">03 / Philosophy</p>
            <blockquote className="mt-5 font-serif text-[clamp(1.9rem,3vw,3.2rem)] leading-[1.08] tracking-[0.03em] text-foreground">
              {philosophyQuote}
            </blockquote>
          </div>

          <div className="grid gap-px border border-border/70 bg-border md:grid-cols-2">
            {aboutPage.values.map((value) => (
              <div key={value} className="bg-card px-6 py-7">
                <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Value</p>
                <h3 className="mt-4 font-serif text-[1.8rem] tracking-[0.06em] text-foreground">{value}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-y border-border/70 bg-card/30">
        <div className="container">
          <SectionHeading
            index="04"
            title="施工イメージ"
            description="元サイトの About ページ後半にあるプロジェクト紹介の流れを受け、Yakisagi Mori の想定事例を簡潔なカードで再構成しています。"
          />

          <div className="mt-12 grid gap-px border border-border/70 bg-border lg:grid-cols-3">
            {galleryPreview.map((project) => (
              <article key={project.name} className="bg-card px-6 py-8 md:px-8">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{project.type}</p>
                <h3 className="mt-4 font-serif text-[2rem] tracking-[0.06em] text-foreground">{project.name}</h3>
                <p className="mt-4 text-sm leading-8 text-muted-foreground">{project.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 pt-16">
        <div className="container">
          <div className="editorial-card grid gap-8 p-8 md:p-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="eyebrow">Start a project</p>
              <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3.8rem)] leading-[0.96] tracking-[0.04em] text-foreground">
                焼杉の計画を、
                <br />
                大阪からご一緒します。
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-8 text-muted-foreground md:text-base">
                素材の比較、部位ごとの相性、サンプル相談、経年変化の考え方まで。建築計画の初期段階から、Yakisagi Mori が静かに伴走します。
              </p>
            </div>
            <Link href="/contact">
              <Button className="rounded-none border border-foreground bg-foreground px-6 text-[0.72rem] tracking-[0.22em] text-background hover:bg-transparent hover:text-foreground">
                お問い合わせへ
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
