import { Header } from "@/app/_components/header";
import { Footer } from "@/app/_components/footer";
import { Handshake, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Webサービス・SaaSのM&Aアドバイザリー | ライチョウテックパートナーズ株式会社",
  description:
    "技術に強いM&A仲介。エンジニア視点で小規模SaaS・個人開発サービスを評価し、適切なマッチングを実現します。",
};

const serviceTypes = [
  {
    title: "売りたい方",
    description:
      "個人開発で作成したSaaS、事業を売却したい方はお気軽にご相談ください。",
    href: "/lp/ma/sell",
    icon: Handshake,
  },
  {
    title: "買いたい方",
    description:
      "「こんなサービスを買い取りたい」などがあれば、お気軽にお問い合わせください。",
    href: "/lp/ma/buy",
    icon: Handshake,
  },
  {
    title: "仲介希望の方",
    description:
      "売り手と買い手の適切なマッチングを実現し、スムーズな取引をサポートします。",
    href: "/lp/ma/brokerage",
    icon: Handshake,
  },
];

export default function MAPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden py-20">
          {/* 背景画像 */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/ma.webp"
              alt="M&A背景画像"
              fill
              className="object-cover"
              priority
              quality={90}
            />
          </div>
          {/* 透過オーバーレイ */}
          <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-transparent to-background/80 dark:to-background/90" />

          <div className="container relative z-10 mx-auto px-4 text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative rounded-2xl bg-primary/20 p-6 shadow-lg backdrop-blur-sm ring-2 ring-primary/30">
                <Handshake className="h-16 w-16 text-primary-foreground" />
              </div>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.8),0_0_20px_rgba(0,0,0,0.5)] sm:text-5xl md:text-6xl">
              Webサービス・SaaSのM&Aアドバイザリー
            </h1>
            <p className="mx-auto mb-10 max-w-3xl text-lg text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.7),0_0_15px_rgba(0,0,0,0.4)] sm:text-xl">
              テックリードエンジニアが、技術と事業の両面から価値を見極めます
              <br />
              エンジニア視点で小規模SaaS・個人開発サービスを評価し、適切なマッチングを実現します。
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/contact">お問い合わせ</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg bg-background/90 backdrop-blur-sm px-8"
              >
                <Link href="/">トップへ戻る</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* サービス選択 */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  サービスを選択してください
                </h2>
                <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                  ご希望に応じて、最適なサービスをご案内いたします
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-3">
                {serviceTypes.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <Link
                      key={index}
                      href={service.href}
                      className="group block"
                    >
                      <div className="h-full rounded-xl border-2 border-border bg-background p-8 shadow-sm transition-all hover:border-primary/50 hover:shadow-md">
                        <div className="mb-6 flex items-center justify-center">
                          <div className="rounded-lg bg-primary/10 p-4 transition-transform group-hover:scale-110">
                            <Icon className="h-8 w-8 text-primary" />
                          </div>
                        </div>
                        <h3 className="mb-4 text-center text-2xl font-bold tracking-tight">
                          {service.title}
                        </h3>
                        <p className="mb-6 text-center text-base leading-relaxed text-muted-foreground">
                          {service.description}
                        </p>
                        <div className="flex items-center justify-center text-primary transition-transform group-hover:translate-x-1">
                          <span className="text-sm font-medium">
                            詳しく見る
                          </span>
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
