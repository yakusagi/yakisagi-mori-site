/*
Design philosophy: Japanese editorial wabi-sabi modernism blended with architectural catalogue design.
Core file intent: products page should feel like a material catalogue with strong typographic pacing and controlled texture.
Question to enforce in every choice: does this reinforce or dilute our quiet Osaka artisan identity?
*/

import { PageBanner, SectionHeading, SiteLayout } from "@/components/SiteChrome";
import { heroAssets, productsPage } from "@/lib/siteContent";

export default function Products() {
  return (
    <SiteLayout>
      <PageBanner asset={heroAssets.products} title={productsPage.headline} description={productsPage.intro} />

      <section className="section-pad">
        <div className="container">
          <SectionHeading
            index="01"
            title="3つの仕上げ系統"
            description="Hakuu、Benii、Sumii は、焼き方・磨き方・仕上げの差によって異なる建築的表情を生みます。"
          />
          <div className="mt-14 grid gap-px bg-border lg:grid-cols-3">
            {productsPage.families.map((family) => (
              <article key={family.name} className="bg-card px-6 py-8 md:px-8 md:py-10">
                <p className="eyebrow">{family.japanese}</p>
                <h3 className="mt-3 font-display text-5xl uppercase leading-none tracking-[0.06em]">
                  {family.name}
                </h3>
                <p className="mt-6 text-sm leading-7 text-muted-foreground">{family.summary}</p>
                <ul className="mt-6 grid gap-2 border-t border-border pt-5 text-sm leading-7 text-foreground">
                  {family.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-y border-border/70 bg-card/45">
        <div className="container">
          <SectionHeading
            index="02"
            title="仕上げバリエーション"
            description="元サイトの構成に合わせて、各ファミリーの細かな仕上げを一覧形式で整理しています。"
          />
          <div className="mt-12 grid gap-px bg-border md:grid-cols-2 xl:grid-cols-3">
            {productsPage.finishes.map((finish) => (
              <div key={`${finish.family}-${finish.name}`} className="bg-background">
                {finish.image && (
                  <img src={finish.image} alt={finish.name} className="w-full h-auto object-cover" />
                )}
                <div className="px-5 py-6">
                  <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">{finish.family}</p>
                  <h3 className="mt-3 font-serif text-2xl tracking-[0.08em]">{finish.name}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{finish.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="eyebrow">03 / Benefits</p>
            <h2 className="mt-4 font-display text-[clamp(2.2rem,4vw,4rem)] uppercase leading-[0.96] tracking-[0.05em]">
              焼杉を選ぶ理由
            </h2>
          </div>
          <div className="grid gap-px bg-border">
            {productsPage.benefits.map((benefit) => (
              <div key={benefit} className="bg-card px-6 py-6 text-sm tracking-[0.12em] text-foreground">
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
