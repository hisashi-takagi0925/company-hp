import { Header } from "@/app/_components/header";
import { Footer } from "@/app/_components/footer";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Handshake } from "lucide-react";
import type { Metadata } from "next";
import { CATCH_COPY } from "@/app/_constants";

export const metadata: Metadata = {
  title: `ライチョウテックパートナーズ株式会社 | ${CATCH_COPY}`,
  description:
    "SaaSのM&A＋再生の専門会社です。長野発の小規模精鋭チームが、お客様の課題解決をサポートします。",
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
              テックリードエンジニアが、技術と事業の両面から価値を見極めます
            </p>
          </div>
        </section>

        {/* Services Digest */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                事業内容
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                テックリードエンジニアによる確かな評価と、適切なマッチングで事業の価値を最大化します
              </p>
            </div>
            <div className="mx-auto max-w-3xl">
              <div className="group rounded-xl border-2 border-border bg-card p-8 shadow-sm transition-all hover:border-primary/50 hover:shadow-md">
                <div className="mb-6 flex items-start gap-4">
                  <div className="flex-shrink-0 rounded-lg bg-primary/10 p-4 transition-transform group-hover:scale-110">
                    <Handshake className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-3 text-2xl font-bold tracking-tight">
                      SaaS・WebサービスのM&Aアドバイザリー
                    </h3>
                    <p className="mb-6 text-base leading-relaxed text-muted-foreground">
                      個人開発〜小規模SaaSに特化。事業とコードを同時に評価し、譲渡と移行を安全に進めます。
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full sm:w-auto"
                    >
                      <Link href="/lp/ma">詳しく見る</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Strip */}
        <section className="bg-muted/30 py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              まずは課題の整理からご相談ください
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground">
              小さな悩みでも歓迎です。初回は現状・課題のメモだけで構いません。
            </p>
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/contact">お問い合わせ</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
