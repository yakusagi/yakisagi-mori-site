/*
Design philosophy: Japanese editorial wabi-sabi modernism blended with architectural catalogue design.
Core file intent: shared site chrome should feel restrained, asymmetrical, tactile, and precise.
Question to enforce in every choice: does this reinforce or dilute our quiet Osaka artisan identity?
*/

import { Link, useLocation } from "wouter";
import { ArrowUpRight, Menu } from "lucide-react";
import { type ReactNode, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { footerLinks, navigation, siteMeta } from "@/lib/siteContent";
import { cn } from "@/lib/utils";

type HeroAsset = {
  eyebrow: string;
  label: string;
  image: string;
  video?: string;
  year?: string;
};

type SiteLayoutProps = {
  children: ReactNode;
};

type PageBannerProps = {
  asset: HeroAsset;
  title: string;
  description?: string;
  yearMark?: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
};

export function SiteLayout({ children }: SiteLayoutProps) {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  const activePath = useMemo(() => {
    if (location === "/") return "/";
    const found = navigation.find((item) => location.startsWith(item.href) && item.href !== "/");
    return found?.href ?? location;
  }, [location]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 opacity-[0.06] mix-blend-multiply">
        <div className="grain-layer h-full w-full" />
      </div>
      <Header activePath={activePath} open={open} setOpen={setOpen} />
      <main className="relative z-10">{children}</main>
      <Footer />
    </div>
  );
}

function Header({
  activePath,
  open,
  setOpen,
}: {
  activePath: string;
  open: boolean;
  setOpen: (value: boolean) => void;
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/92 backdrop-blur-xl">
      <div className="container">
        <div className="flex items-center justify-between gap-6 py-4">
          <Link href="/" className="group inline-flex flex-col gap-1 no-underline">
            <span className="text-[0.66rem] uppercase tracking-[0.36em] text-muted-foreground">
              Osaka / Japan
            </span>
            <span className="font-serif text-[1.72rem] leading-none tracking-[0.07em] text-foreground transition-transform duration-500 group-hover:translate-x-1">
              Yakisagi Mori
            </span>
            <span className="text-[0.68rem] tracking-[0.24em] text-muted-foreground">
              {siteMeta.brand.kana}
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navigation.map((item) => {
              const active = item.href === "/" ? activePath === "/" : activePath.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "group relative text-[0.82rem] tracking-[0.17em] text-muted-foreground transition-colors duration-300",
                    active && "text-foreground",
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute -bottom-2 left-0 h-px bg-foreground transition-all duration-500",
                      active ? "w-full" : "w-0 group-hover:w-full",
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/contact" className="hidden lg:block">
              <Button className="rounded-none border border-foreground bg-foreground px-5 text-[0.72rem] tracking-[0.22em] text-background hover:bg-transparent hover:text-foreground">
                相談する
              </Button>
            </Link>
            <button
              type="button"
              aria-label="メニューを開く"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className="inline-flex h-11 w-11 items-center justify-center border border-border bg-background lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-card lg:hidden">
          <div className="container py-5">
            <div className="grid gap-4">
              {navigation.map((item) => {
                const active = item.href === "/" ? activePath === "/" : activePath.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "border-b border-border/70 pb-3 text-sm tracking-[0.18em] text-muted-foreground",
                      active && "text-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export function PageBanner({
  asset,
  title,
  description,
  yearMark,
  primaryCta,
  secondaryCta,
}: PageBannerProps) {
  return (
    <section className="relative overflow-hidden border-b border-border/70 bg-[linear-gradient(180deg,rgba(245,241,233,0.94)_0%,rgba(245,241,233,0.99)_100%)]">
      <div className="container py-5 md:py-6">
        <div className="mb-3 flex items-center justify-between gap-4">
          <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">{asset.eyebrow}</p>
          <p className="hidden text-xs uppercase tracking-[0.4em] text-muted-foreground md:block">
            Yakisagi Mori / Osaka
          </p>
        </div>

        <div className="grid gap-5 xl:grid-cols-[minmax(0,1.1fr)_82px] xl:items-start">
          <div className="relative overflow-hidden border border-border/60 bg-muted/30 shadow-[0_24px_70px_rgba(28,20,12,0.08)]">
            {asset.video ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                crossOrigin="anonymous"
                className="h-[300px] w-full object-cover brightness-[0.5] contrast-[1.06] saturate-[0.66] md:h-[430px]"
              >
                <source src={asset.video} type="video/webm" />
                <img
                  src={asset.image}
                  alt={asset.eyebrow}
                  className="h-full w-full object-cover brightness-[0.5] contrast-[1.06] saturate-[0.66]"
                />
              </video>
            ) : (
              <img
                src={asset.image}
                alt={asset.eyebrow}
                className="h-[300px] w-full object-cover brightness-[0.5] contrast-[1.06] saturate-[0.66] md:h-[430px]"
              />
            )}
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,15,12,0.8)_0%,rgba(18,15,12,0.42)_38%,rgba(18,15,12,0.12)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 p-5 md:p-8">
              {yearMark ? (
                <div className="mb-2 text-[clamp(4rem,12vw,9rem)] font-semibold leading-none tracking-[-0.06em] text-white/10">
                  {yearMark}
                </div>
              ) : null}
              <div className="max-w-3xl">
                <h1 className="max-w-[13ch] whitespace-pre-line font-serif text-[clamp(2.5rem,4.3vw,4.7rem)] leading-[0.92] tracking-[0.015em] text-white">
                  {title}
                </h1>
                {description ? (
                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/84 md:text-[0.98rem]">
                    {description}
                  </p>
                ) : null}
                {(primaryCta || secondaryCta) && (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {primaryCta ? (
                      <Link href={primaryCta.href}>
                        <Button className="rounded-none border border-white bg-white px-5 text-[0.72rem] tracking-[0.2em] text-black hover:bg-transparent hover:text-white">
                          {primaryCta.label}
                        </Button>
                      </Link>
                    ) : null}
                    {secondaryCta ? (
                      <Link href={secondaryCta.href}>
                        <Button
                          variant="outline"
                          className="rounded-none border-white px-5 text-[0.72rem] tracking-[0.2em] text-white hover:bg-white hover:text-black"
                        >
                          {secondaryCta.label}
                        </Button>
                      </Link>
                    ) : null}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="hidden xl:flex xl:justify-center">
            <div className="writing-mode-vertical text-right font-display text-[4.2rem] uppercase leading-none tracking-[0.03em] text-foreground">
              {asset.label}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  index,
  title,
  description,
}: {
  index?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="grid gap-5 md:grid-cols-[120px_minmax(0,1fr)] md:items-start">
      <div className="border-t border-border pt-2 text-xs uppercase tracking-[0.34em] text-muted-foreground">
        {index ?? "Section"}
      </div>
      <div>
        <h2 className="whitespace-pre-line font-display text-[clamp(1.95rem,3.8vw,3.55rem)] uppercase leading-[0.95] tracking-[0.035em] text-foreground">
          {title}
        </h2>
        {description ? <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground">{description}</p> : null}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 border-t border-border/70 bg-[#171310] text-[#f4efe6]">
      <div className="container py-16">
        <div className="grid gap-14 lg:grid-cols-[1.25fr_0.85fr_0.9fr]">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.34em] text-[#bcae98]">Yakisagi Mori</p>
            <h2 className="max-w-lg font-serif text-4xl leading-tight tracking-[0.06em]">
              素材の静けさを、建築の輪郭へ。
            </h2>
            <p className="max-w-xl text-sm leading-7 text-[#d4cabd]">
              大阪を拠点に、焼杉・杉・檜の質感を建築の意図へ接続するための提案を行っています。サンプル相談から仕様整理まで、日本語で丁寧に伴走します。
            </p>
          </div>

          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.34em] text-[#bcae98]">Quick Links</p>
            <div className="grid gap-3">
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href} className="group inline-flex items-center gap-2 text-sm tracking-[0.14em] text-[#f4efe6]">
                  <span>{link.label}</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.34em] text-[#bcae98]">Contact</p>
              <div className="space-y-2 text-sm leading-7 text-[#f4efe6]">
                <p>{siteMeta.contact.showroom}</p>
                <p>{siteMeta.contact.address}</p>
                <p>{siteMeta.contact.email}</p>
                <p>{siteMeta.contact.phone}</p>
              </div>
            </div>
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.34em] text-[#bcae98]">Hours</p>
              <div className="space-y-2 text-sm leading-7 text-[#d4cabd]">
                <p>{siteMeta.contact.hoursWeekday}</p>
                <p>{siteMeta.contact.hoursWeekend}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
