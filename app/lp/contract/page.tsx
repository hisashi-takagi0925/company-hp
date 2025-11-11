import { Header } from "@/app/_components/header";
import { Footer } from "@/app/_components/footer";
import { ContactForm } from "@/app/_components/contact";
import { Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "業務委託 | ライチョウテックパートナーズ株式会社",
  description:
    "フロントエンド・バックエンド・インフラなど専門領域のプロフェッショナルが、クライアントのチームにジョインして支援します。",
};

const layers = [
  {
    title: "フロントエンド開発",
    description:
      "React、Vue、Next.jsなどのモダンフレームワークを活用したUI/UX開発。レスポンシブ対応やアクセシビリティにも配慮します。",
  },
  {
    title: "バックエンド開発",
    description:
      "API設計、データベース設計、サーバーサイドロジックの実装。スケーラブルで保守性の高いシステム構築を支援します。",
  },
  {
    title: "インフラ・DevOps",
    description:
      "クラウドインフラの構築・運用、CI/CDパイプラインの構築、モニタリング・ログ管理まで、DevOpsの全領域をカバーします。",
  },
  {
    title: "チーム連携",
    description:
      "お客様の開発チームにシームレスに統合し、既存の開発フローに合わせた柔軟な支援を提供します。",
  },
];

export default function ContractPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-green-100/50 to-background py-20 dark:from-green-950/20 dark:via-green-900/10">
          <div className="container relative z-10 mx-auto px-4 text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative rounded-2xl bg-green-100 p-6 shadow-lg dark:bg-green-900/30">
                <Users className="h-16 w-16 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              業務委託
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-muted-foreground sm:text-xl">
              フロントエンド・バックエンド・インフラなど専門領域のプロフェッショナルが、
              <br />
              クライアントのチームにジョインして支援します。
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
                業務委託における4つの主要な領域
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {layers.map((layer, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl border-l-4 border-green-500/30 bg-background/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-200/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
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
                業務委託に関するご質問やご相談がございましたら、以下のフォームよりお気軽にお問い合わせください。
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

