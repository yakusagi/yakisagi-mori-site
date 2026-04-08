/*
Design philosophy: Japanese editorial wabi-sabi modernism blended with architectural catalogue design.
Core file intent: resources page should present technical content with calm authority and architectural clarity.
Question to enforce in every choice: does this reinforce or dilute our quiet Osaka artisan identity?
*/

import { ArrowUpRight, FileText } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { PageBanner, SectionHeading, SiteLayout } from "@/components/SiteChrome";
import { heroAssets, resourcesPage } from "@/lib/siteContent";

const faqAnswers = [
  "焼杉は、杉板の表層を焼いて炭化層をつくる日本の外装技法です。防護性だけでなく、黒の深さ、木理の残り方、経年変化の表情まで含めて素材価値が成立します。",
  "海外では Shou Sugi Ban という名称が広く使われますが、私たちは日本で受け継がれてきた文脈を重視し、焼杉という言葉で素材の背景まで丁寧に伝えています。",
  "耐候性、軽量性、低メンテナンス性、そして一枚ごとの陰影の豊かさが主な利点です。意匠と性能が分離せず、建築全体の空気感を整えやすい点も特徴です。",
  "通気層や納まりを適切に計画することで、沿岸部や湿潤環境でも採用可能です。立地条件に応じて、塗装の有無や仕上げ系統の選定をあわせて検討します。",
  "焼杉は時間とともに艶が落ち着き、触感や色の深みが穏やかに変化します。表層の表情差を素材の個性として受け止めることが、計画段階での重要な視点になります。",
];

const technicalDocuments = [
  "施工要領書",
  "納まりディテールサマリー",
  "保証・メンテナンス案内",
  "技術データシート",
];

export default function Resources() {
  return (
    <SiteLayout>
      <PageBanner asset={heroAssets.resources} title={resourcesPage.headline} description={resourcesPage.intro} />

      <section className="section-pad">
        <div className="container">
          <SectionHeading
            index="01"
            title="よくあるご質問"
            description="計画初期に確認されることの多い要点を、元サイトのリソース構成に合わせて最初に整理しています。"
          />

          <div className="mt-12 grid gap-px border border-border/70 bg-border">
            {resourcesPage.faqs.map((faq, index) => (
              <article
                key={faq}
                className="grid gap-5 bg-card px-6 py-7 md:grid-cols-[92px_minmax(0,1fr)] md:px-8"
              >
                <div className="text-xs uppercase tracking-[0.34em] text-muted-foreground">Q {index + 1}</div>
                <div>
                  <h3 className="text-lg leading-8 text-foreground md:text-xl">{faq}</h3>
                  <p className="mt-3 max-w-4xl text-sm leading-8 text-muted-foreground md:text-[0.98rem]">
                    {faqAnswers[index]}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-y border-border/70 bg-card/40">
        <div className="container">
          <SectionHeading
            index="02"
            title="仕様書と資料ダウンロード"
            description="製品概要、施工の考え方、納まり確認に役立つ資料を、設計検討の流れに合わせて一覧化しています。"
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="editorial-card p-6 md:p-8">
              <p className="eyebrow">Product Documents</p>
              <div className="mt-6 grid gap-px bg-border">
                {resourcesPage.downloads.map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between gap-4 bg-background px-5 py-5 text-sm tracking-[0.12em] text-foreground"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <span>{item}</span>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                ))}
              </div>
            </div>

            <div className="editorial-card p-6 md:p-8">
              <p className="eyebrow">Technical Library</p>
              <div className="mt-6 grid gap-px bg-border">
                {technicalDocuments.map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between gap-4 bg-background px-5 py-5 text-sm tracking-[0.12em] text-foreground"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <span>{item}</span>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm leading-7 text-muted-foreground">
                実運用では PDF 提供や個別送付に置き換えられる想定で、ここでは元サイトの資料ライブラリ構成を踏まえた一覧表現として再現しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <SectionHeading
            index="03"
            title="焼杉の用語集"
            description="設計者、工務店、施主のあいだで認識をそろえやすいよう、素材まわりの基本語彙を簡潔にまとめています。"
          />

          <div className="mt-12 grid gap-px border border-border/70 bg-border">
            {resourcesPage.glossary.map((item) => (
              <article
                key={item.term}
                className="grid gap-4 bg-card px-6 py-7 md:grid-cols-[180px_minmax(0,1fr)] md:px-8"
              >
                <h3 className="font-serif text-[1.9rem] tracking-[0.08em] text-foreground">{item.term}</h3>
                <p className="text-sm leading-8 text-muted-foreground">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container">
          <div className="editorial-card grid gap-8 p-8 md:p-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="eyebrow">Need specific guidance?</p>
              <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3.8rem)] leading-[0.95] tracking-[0.04em] text-foreground">
                ご計画に応じて、
                <br />
                必要な資料を整理します。
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-8 text-muted-foreground md:text-base">
                外装か内装か、沿岸部か都市部か、素材の黒さをどこまで残したいか。条件に応じて、Yakisagi Mori が確認すべき資料やサンプルの順番をご案内します。
              </p>
            </div>
            <Link href="/contact">
              <Button className="rounded-none border border-foreground bg-foreground px-6 text-[0.72rem] tracking-[0.22em] text-background hover:bg-transparent hover:text-foreground">
                相談をはじめる
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
