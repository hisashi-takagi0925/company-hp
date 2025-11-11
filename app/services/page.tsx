import { Header } from "@/app/_components/header";
import { Footer } from "@/app/_components/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Settings, Handshake } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "事業内容 | ライチョウテックパートナーズ株式会社",
  description:
    "システム導入・運用コンサルティングとWebサービス・SaaSのM&Aアドバイザリー。現場で戦うエンジニアによる実践的な支援を提供します。",
};

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
                事業内容
              </h1>
            </div>
          </div>
        </section>

        {/* Service A: システム導入・運用コンサルティング */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-8 flex items-center gap-4">
                <div className="rounded-lg bg-background p-4 shadow-sm">
                  <Settings className="h-8 w-8 text-muted-foreground" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  システム導入・運用コンサルティング
                </h2>
              </div>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                既存業務の可視化から要件定義・ベンダー調整・運用定着まで伴走します。
              </p>
              <ul className="mb-8 space-y-3 text-base text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-3 mt-1">・</span>
                  <span>業務整理・課題抽出（現場ヒアリング）</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">・</span>
                  <span>システム選定／要件定義レビュー</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">・</span>
                  <span>アーキテクチャ／品質監修</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">・</span>
                  <span>導入・運用定着支援（SaaS含む）</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Service B: M&Aアドバイザリー */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-8 flex items-center gap-4">
                <div className="rounded-lg bg-muted p-4 shadow-sm">
                  <Handshake className="h-8 w-8 text-muted-foreground" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Webサービス・SaaSのM&Aアドバイザリー
                </h2>
              </div>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                個人開発〜小規模SaaSに特化。技術×事業の両面で評価・仲介を支援します。
              </p>
              <ul className="mb-8 space-y-3 text-base text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-3 mt-1">・</span>
                  <span>売り手支援：事業・コード評価、譲渡準備、仲介先接続</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">・</span>
                  <span>買い手支援：技術DD（依存関係／保守リスク／移行可否）</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">・</span>
                  <span>成果物例：ティーザー、IM、移行チェックリスト</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <Button asChild size="lg" className="text-lg">
              <Link href="/contact">相談する</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

