import { Header } from "@/app/_components/header";
import { Footer } from "@/app/_components/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Handshake, Award, Shield, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "事業内容 | ライチョウテックパートナーズ株式会社",
  description:
    "SaaSのM&A＋再生の専門会社です。技術に強いM&A仲介として、エンジニア視点で小規模SaaS・個人開発サービスを評価し、適切なマッチングを実現します。",
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

        {/* テックリードエンジニアによる確かな評価 */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="rounded-full bg-primary/10 p-4">
                    <Award className="h-12 w-12 text-primary" />
                  </div>
                </div>
                <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
                  テックリードエンジニアによる確かな評価
                </h2>
                <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
                  弊社では、業界歴17年以上で、日本の有名・優良・成長企業に多数参画した実績を持つテックリードエンジニアが、最新の技術的な知見およびビジネスとしての価値・健全性をクリアした良質なサービスのみを取り扱っています。
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-3">
                <div className="rounded-xl border-2 border-border bg-background p-6 text-center shadow-sm">
                  <div className="mb-4 flex justify-center">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">業界歴17年以上</h3>
                  <p className="text-sm text-muted-foreground">
                    豊富な経験と実績
                  </p>
                </div>
                <div className="rounded-xl border-2 border-border bg-background p-6 text-center shadow-sm">
                  <div className="mb-4 flex justify-center">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">厳格な査定基準</h3>
                  <p className="text-sm text-muted-foreground">
                    技術とビジネスの両面から評価
                  </p>
                </div>
                <div className="rounded-xl border-2 border-border bg-background p-6 text-center shadow-sm">
                  <div className="mb-4 flex justify-center">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">
                    有名企業への参画実績
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    確かな技術力と評価力
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* M&Aアドバイザリー */}
        <section className="py-20 bg-muted/30">
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

