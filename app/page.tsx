import { Header } from "@/app/_components/header";
import { Footer } from "@/app/_components/footer";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Settings, Handshake } from "lucide-react";
import type { Metadata } from "next";
import { CATCH_COPY } from "@/app/_constants";

export const metadata: Metadata = {
  title: `ライチョウテックパートナーズ株式会社 | ${CATCH_COPY}`,
  description:
    "現場に強いシステムコンサルと、個人開発SaaSに強いM&Aアドバイザリー。長野発の小規模精鋭チームが、お客様の課題解決をサポートします。",
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden py-20">
          <div className="absolute inset-0 z-0">
            <Image
              src="/top-img.webp"
              alt="背景画像"
              fill
              className="object-cover"
              priority
              quality={90}
            />
          </div>
          <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-transparent to-background/80 dark:to-background/90" />

          <div className="container relative z-10 mx-auto px-4 text-center">
            <h1 className="mb-6 text-3xl font-bold tracking-tight text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.8),0_0_20px_rgba(0,0,0,0.5)] sm:text-4xl md:text-5xl lg:text-6xl">
              {CATCH_COPY}
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.7),0_0_15px_rgba(0,0,0,0.4)] sm:text-xl">
              現場に強いシステムコンサルと、個人開発SaaSに強いM&Aアドバイザリー。
            </p>
          </div>
        </section>

        {/* Services Digest */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                事業内容
              </h2>
            </div>
            <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
              <div className="rounded-lg border bg-card p-8 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-muted p-3">
                    <Settings className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">システム導入・運用コンサル</h3>
                </div>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  現場ヒアから課題を言語化し、選定・要件・実装レビュー・運用定着まで伴走します。
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/lp/consulting">詳しく見る</Link>
                </Button>
              </div>

              <div className="rounded-lg border bg-card p-8 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-muted p-3">
                    <Handshake className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">SaaS・WebサービスのM&Aアドバイザリー</h3>
                </div>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  個人開発〜小規模SaaSに特化。事業とコードを同時に評価し、譲渡と移行を安全に進めます。
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/lp/ma">詳しく見る</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Strip */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
              まずは課題の整理からご相談ください
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
              小さな悩みでも歓迎です。
            </p>
            <Button asChild size="lg" className="text-lg">
              <Link href="/contact">お問い合わせ</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
