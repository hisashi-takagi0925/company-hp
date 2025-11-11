import { Header } from "@/app/_components/header";
import { Footer } from "@/app/_components/footer";
import { ContactForm } from "@/app/_components/contact";
import { Settings } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "システム導入・運用コンサルティング | ライチョウテックパートナーズ株式会社",
  description:
    "業務効率化・DX推進を目的としたシステム選定・導入・運用のサポート。課題分析から改善提案、ベンダー調整まで一貫して対応します。",
};

const layers = [
  {
    title: "現状分析・課題抽出",
    description:
      "業務フローの分析、システム現状の調査を行い、改善すべき課題を明確化。データに基づいた客観的な分析を提供します。",
  },
  {
    title: "システム選定",
    description:
      "お客様の要件に最適なシステム・ツールを選定。複数ベンダーとの比較検討を行い、コストパフォーマンスの高い提案を実施します。",
  },
  {
    title: "導入支援",
    description:
      "導入計画の策定から、データ移行、ユーザー教育まで、スムーズな導入をサポート。リスクを最小化しながら進めます。",
  },
  {
    title: "運用改善",
    description:
      "導入後の運用状況をモニタリングし、継続的な改善提案を実施。システムの効果を最大化するためのサポートを提供します。",
  },
];

export default function ConsultingPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-purple-100/50 to-background py-20 dark:from-purple-950/20 dark:via-purple-900/10">
          <div className="container relative z-10 mx-auto px-4 text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative rounded-2xl bg-purple-100 p-6 shadow-lg dark:bg-purple-900/30">
                <Settings className="h-16 w-16 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              システム導入・運用コンサルティング
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-muted-foreground sm:text-xl">
              業務効率化・DX推進を目的としたシステム選定・導入・運用のサポート。
              <br />
              課題分析から改善提案、ベンダー調整まで一貫して対応します。
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
                コンサルティングにおける4つの主要なプロセス
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {layers.map((layer, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl border-l-4 border-purple-500/30 bg-background/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-200/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
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
                システム導入・運用コンサルティングに関するご質問やご相談がございましたら、以下のフォームよりお気軽にお問い合わせください。
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

