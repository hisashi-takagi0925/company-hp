import { Header } from "@/app/_components/header";
import { Footer } from "@/app/_components/footer";
import { ContactForm } from "@/app/_components/contact";
import { Handshake } from "lucide-react";
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

const features = [
  {
    title: "小規模SaaS・個人開発サービスを対象とした仲介・技術評価",
    description:
      "技術資産、顧客基盤、収益性など多角的な観点から企業価値を評価。適正な売却価格の算定をサポートします。",
  },
  {
    title: "売り手支援：事業・コード評価、譲渡準備、仲介先への接続",
    description:
      "売り手と買い手のニーズを詳細にヒアリングし、最適なマッチングを実現。双方の利益を最大化する取引を提案します。",
  },
  {
    title: "買い手支援：技術デューデリ（コード品質・依存関係・保守リスク）",
    description:
      "技術的な観点から適切なアドバイスを提供し、スムーズな交渉をサポート。契約条件の調整からクロージングまで支援します。",
  },
  {
    title: "エンジニア視点のM&A支援",
    description:
      "M&A成立後の技術移行、データ移行、チーム統合まで、技術面での移行支援を実施。リスクを最小化しながら進めます。",
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
              <div className="relative rounded-2xl bg-orange-100/90 p-6 shadow-lg backdrop-blur-sm dark:bg-orange-900/50">
                <Handshake className="h-16 w-16 text-orange-600 dark:text-orange-400" />
              </div>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.8),0_0_20px_rgba(0,0,0,0.5)] sm:text-5xl md:text-6xl">
              Webサービス・SaaSのM&Aアドバイザリー
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.7),0_0_15px_rgba(0,0,0,0.4)] sm:text-xl">
              技術に強いM&A仲介
              <br />
              エンジニア視点で小規模SaaS・個人開発サービスを評価し、適切なマッチングを実現します。
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild size="lg" className="text-lg">
                <Link href="/#contact">お問い合わせ</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg bg-background/90 backdrop-blur-sm"
              >
                <Link href="/">トップへ戻る</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                サービス内容
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                エンジニア視点のM&A支援
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl border-l-4 border-orange-500/30 bg-background/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-200/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative">
                    <h3 className="mb-3 text-lg font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                お問い合わせ
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Webサービス・SaaSのM&Aアドバイザリーに関するご質問やご相談がございましたら、以下のフォームよりお気軽にお問い合わせください。
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
