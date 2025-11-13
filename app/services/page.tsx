import { Header } from "@/app/_components/header";
import { Footer } from "@/app/_components/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Handshake } from "lucide-react";
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

