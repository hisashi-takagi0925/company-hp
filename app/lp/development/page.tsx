import { Header } from "@/app/_components/header";
import { Footer } from "@/app/_components/footer";
import { ContactForm } from "@/app/_components/contact";
import { Code } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "受託開発 | ライチョウテックパートナーズ株式会社",
  description:
    "Webシステム・アプリケーションの設計、開発、保守をワンストップで対応。要件定義からリリース後の改善まで、効率的な開発体制を提供します。",
};

const layers = [
  {
    title: "要件定義・設計",
    description:
      "お客様のビジネス課題をヒアリングし、最適なシステム設計を提案。技術選定からアーキテクチャ設計まで、一貫してサポートします。",
  },
  {
    title: "開発・実装",
    description:
      "フロントエンド、バックエンド、インフラまで、最新技術を活用した高品質な開発を実施。アジャイル開発手法により、柔軟に対応します。",
  },
  {
    title: "テスト・品質保証",
    description:
      "単体テストから結合テスト、E2Eテストまで、徹底した品質管理を行い、安定したシステムを提供します。",
  },
  {
    title: "リリース・保守",
    description:
      "スムーズなリリース支援から、運用保守まで長期的にサポート。継続的な改善提案により、システムの価値を最大化します。",
  },
];

export default function DevelopmentPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-blue-100/50 to-background py-20 dark:from-blue-950/20 dark:via-blue-900/10">
          <div className="container relative z-10 mx-auto px-4 text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative rounded-2xl bg-blue-100 p-6 shadow-lg dark:bg-blue-900/30">
                <Code className="h-16 w-16 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              受託開発
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-muted-foreground sm:text-xl">
              Webシステム・アプリケーションの設計、開発、保守をワンストップで対応。
              <br />
              要件定義からリリース後の改善まで、効率的な開発体制を提供します。
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild size="lg" className="text-lg">
                <Link href="/#contact">お問い合わせ</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg">
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
                受託開発における4つの主要なプロセス
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {layers.map((layer, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl border-l-4 border-blue-500/30 bg-background/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative">
                    <h3 className="mb-3 text-lg font-semibold text-foreground">
                      {layer.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {layer.description}
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
                受託開発に関するご質問やご相談がございましたら、以下のフォームよりお気軽にお問い合わせください。
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

