/*
Design philosophy: Japanese editorial wabi-sabi modernism blended with architectural catalogue design.
Core file intent: contact page should feel calm, capable, and welcoming, with structured inquiry flow.
Question to enforce in every choice: does this reinforce or dilute our quiet Osaka artisan identity?
*/

import { ArrowUpRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageBanner, SectionHeading, SiteLayout } from "@/components/SiteChrome";
import { contactPage, heroAssets, siteMeta } from "@/lib/siteContent";

const consultationTopics = [
  "外装・内装どちらの採用か",
  "必要面積と希望時期",
  "Hakuu / Benii / Sumii の方向性",
  "サンプル送付または面談希望",
];

export default function Contact() {
  return (
    <SiteLayout>
      <PageBanner asset={heroAssets.contact} title={contactPage.headline} description={contactPage.intro} />

      <section className="section-pad">
        <div className="container grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="space-y-6">
            <SectionHeading
              index="01"
              title="大阪のアトリエへ
相談する"
              description="素材選定、サンプル相談、外装・内装の納まり、着色方向、数量の考え方まで。初期段階のご相談にも対応しています。"
            />

            <div className="editorial-card p-6 md:p-8">
              <p className="eyebrow">Direct Contact</p>
              <div className="mt-5 flex items-start gap-4 border-b border-border/70 pb-6">
                <div className="flex h-11 w-11 items-center justify-center border border-border">
                  <PhoneCall className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">お急ぎのご相談</p>
                  <p className="mt-3 font-serif text-[2rem] tracking-[0.06em] text-foreground md:text-[2.4rem]">
                    {siteMeta.contact.phone}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    平日営業時間内は、素材方向の確認や面談日程の相談をお電話でも承ります。
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-5 text-sm leading-7 text-muted-foreground">
                <div>
                  <span className="text-foreground">Email</span>
                  <br />
                  {siteMeta.contact.email}
                </div>
                <div>
                  <span className="text-foreground">Atelier</span>
                  <br />
                  {siteMeta.contact.showroom}
                  <br />
                  {siteMeta.contact.address}
                </div>
                <div>
                  <span className="text-foreground">Hours</span>
                  <br />
                  {siteMeta.contact.hoursWeekday}
                  <br />
                  {siteMeta.contact.hoursWeekend}
                </div>
              </div>
            </div>

            <div className="editorial-card p-6 md:p-8">
              <p className="eyebrow">Before you enquire</p>
              <div className="mt-5 grid gap-px bg-border">
                {consultationTopics.map((topic) => (
                  <div key={topic} className="bg-background px-4 py-4 text-sm leading-7 text-foreground">
                    {topic}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="editorial-card p-6 md:p-8">
            <p className="eyebrow">{contactPage.formTitle}</p>
            <form className="mt-6 grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2 text-sm text-foreground">
                  <span>お名前</span>
                  <input
                    className="h-12 border border-border bg-background px-4 outline-none transition-colors focus:border-foreground"
                    placeholder="山田 太郎"
                  />
                </label>
                <label className="grid gap-2 text-sm text-foreground">
                  <span>会社名 / 事務所名</span>
                  <input
                    className="h-12 border border-border bg-background px-4 outline-none transition-colors focus:border-foreground"
                    placeholder="設計事務所名"
                  />
                </label>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2 text-sm text-foreground">
                  <span>メールアドレス</span>
                  <input
                    type="email"
                    className="h-12 border border-border bg-background px-4 outline-none transition-colors focus:border-foreground"
                    placeholder="info@example.jp"
                  />
                </label>
                <label className="grid gap-2 text-sm text-foreground">
                  <span>お電話番号</span>
                  <input
                    className="h-12 border border-border bg-background px-4 outline-none transition-colors focus:border-foreground"
                    placeholder="06-0000-1947"
                  />
                </label>
              </div>

              <label className="grid gap-2 text-sm text-foreground">
                <span>ご相談内容</span>
                <textarea
                  className="min-h-44 border border-border bg-background px-4 py-3 outline-none transition-colors focus:border-foreground"
                  placeholder="用途、必要面積、希望する表情、検討時期、サンプル要否などをご記入ください。"
                />
              </label>

              <div className="flex items-center justify-between gap-4 border-t border-border/70 pt-5">
                <p className="text-xs leading-6 tracking-[0.16em] text-muted-foreground">
                  送信ボタンはレイアウト再現用です。実運用ではフォーム送信先を接続してください。
                </p>
                <Button
                  type="button"
                  className="rounded-none border border-foreground bg-foreground px-6 text-[0.72rem] tracking-[0.2em] text-background hover:bg-transparent hover:text-foreground"
                >
                  送信する
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
