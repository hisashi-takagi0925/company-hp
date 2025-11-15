import { Header } from "@/app/_components/header";
import { Footer } from "@/app/_components/footer";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Handshake,
  Award,
  Shield,
  Users,
  ArrowRight,
  HelpCircle,
} from "lucide-react";
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
            <p className="mx-auto mb-10 max-w-2xl text-lg text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.7),0_0_15px_rgba(0,0,0,0.4)] sm:text-xl">
              テックリードエンジニアが、SaaS・WebサービスのM&Aと再生で小規模SaaS・個人開発サービスの継承を支援します。
            </p>
          </div>
        </section>

        {/* 代表メッセージ */}
        <section className="bg-muted/30 py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
                代表メッセージ
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                <p>
                  なぜSaaSのM&Aと再生に取り組んでいるのか――。代表自身がテックリードとして多くのWebサービス開発・グロースに関わる中で、
                  「良いサービスなのに次の引き受け手がいない」「技術負債が理由で本来の価値よりも安く評価される」といった場面を何度も見てきました。
                </p>
                <p>
                  事業とコードの両方を深く理解するエンジニアが間に入ることで、作り手・送り手・受け手の三者が納得できる継承と再生を実現したい。
                  その思いから、Webサービス・SaaSに特化したM&Aアドバイザリー事業を立ち上げています。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 私たちの強み */}
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
                  私たちの強み
                </h2>
                <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
                  業界歴17年以上で、日本の有名・優良・成長企業に多数参画した実績を持つテックリードエンジニアが、最新の技術的な知見およびビジネスとしての価値・健全性をクリアした良質なサービスのみを取り扱っています。
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-3">
                <div className="rounded-xl border-2 border-border bg-background p-6 text-center shadow-sm">
                  <div className="mb-4 flex justify-center">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">
                    テックリード歴17年以上
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    有名・優良・成長企業での開発・マネジメント経験
                  </p>
                </div>
                <div className="rounded-xl border-2 border-border bg-background p-6 text-center shadow-sm">
                  <div className="mb-4 flex justify-center">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">
                    技術×事業のダブルチェック
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    技術DDと事業DDの両面でサービスの価値を評価
                  </p>
                </div>
                <div className="rounded-xl border-2 border-border bg-background p-6 text-center shadow-sm">
                  <div className="mb-4 flex justify-center">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">
                    小規模SaaS・個人開発も対応
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    「この規模でも相談していいのか？」にきちんと応える柔軟性
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 事業内容 */}
        <section id="services" className="bg-muted/30 py-24">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                事業内容
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                SaaS・Webサービスに特化したM&Aアドバイザリーとして、3つのサービスを提供しています。
              </p>
            </div>

            {/* M&Aサービスカード */}
            <div className="mx-auto max-w-5xl">
              <div className="grid gap-6 sm:grid-cols-3">
                <Link href="/lp/ma/buy" className="group block">
                  <div className="h-full rounded-xl border-2 border-border bg-background p-8 shadow-sm transition-all hover:border-primary/50 hover:shadow-md">
                    <div className="mb-6 flex items-center justify-center">
                      <div className="rounded-lg bg-primary/10 p-4 transition-transform group-hover:scale-110">
                        <Handshake className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="mb-4 text-center text-2xl font-bold tracking-tight">
                      買いたい方
                    </h3>
                    <p className="mb-6 text-center text-base leading-relaxed text-muted-foreground">
                      Webサービスの調達・評価支援
                    </p>
                    <div className="flex items-center justify-center text-primary transition-transform group-hover:translate-x-1">
                      <span className="text-sm font-medium">詳しく見る</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </Link>
                <Link href="/lp/ma/sell" className="group block">
                  <div className="h-full rounded-xl border-2 border-border bg-background p-8 shadow-sm transition-all hover:border-primary/50 hover:shadow-md">
                    <div className="mb-6 flex items-center justify-center">
                      <div className="rounded-lg bg-primary/10 p-4 transition-transform group-hover:scale-110">
                        <Handshake className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="mb-4 text-center text-2xl font-bold tracking-tight">
                      売りたい方
                    </h3>
                    <p className="mb-6 text-center text-base leading-relaxed text-muted-foreground">
                      Webサービスの売却・買取
                    </p>
                    <div className="flex items-center justify-center text-primary transition-transform group-hover:translate-x-1">
                      <span className="text-sm font-medium">詳しく見る</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </Link>
                <Link href="/lp/ma/brokerage" className="group block">
                  <div className="h-full rounded-xl border-2 border-border bg-background p-8 shadow-sm transition-all hover:border-primary/50 hover:shadow-md">
                    <div className="mb-6 flex items-center justify-center">
                      <div className="rounded-lg bg-primary/10 p-4 transition-transform group-hover:scale-110">
                        <Handshake className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="mb-4 text-center text-2xl font-bold tracking-tight">
                      仲介希望の方
                    </h3>
                    <p className="mb-6 text-center text-base leading-relaxed text-muted-foreground">
                      Webサービスの売買仲介
                    </p>
                    <div className="flex items-center justify-center text-primary transition-transform group-hover:translate-x-1">
                      <span className="text-sm font-medium">詳しく見る</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <div className="mb-12 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="rounded-full bg-primary/10 p-4">
                    <HelpCircle className="h-12 w-12 text-primary" />
                  </div>
                </div>
                <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  よくある質問
                </h2>
                <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                  ご不明な点がございましたら、お気軽にお問い合わせください
                </p>
              </div>
              <div className="space-y-6">
                <div className="rounded-xl border-2 border-border bg-background p-6 shadow-sm">
                  <h3 className="mb-3 text-lg font-semibold">
                    Q. どのタイミングで相談すべきですか？
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    A.
                    売却を検討し始めた段階から、買取を検討している段階まで、どのタイミングでもご相談いただけます。初回は現状・課題の整理だけでも構いません。早めの相談により、より良い条件での取引が可能になります。
                  </p>
                </div>
                <div className="rounded-xl border-2 border-border bg-background p-6 shadow-sm">
                  <h3 className="mb-3 text-lg font-semibold">
                    Q. 費用はどのように発生しますか？
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    A.
                    初回相談は無料です。具体的な評価や仲介サービスについては、案件の内容に応じてご案内いたします。まずはお気軽にご相談ください。
                  </p>
                </div>
                <div className="rounded-xl border-2 border-border bg-background p-6 shadow-sm">
                  <h3 className="mb-3 text-lg font-semibold">
                    Q. 個人開発のサービスでも相談できますか？
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    A.
                    はい、個人開発で作成したSaaSやWebサービスも歓迎です。小規模なサービスから、ある程度の規模に成長したサービスまで、幅広く対応しています。技術と事業の両面から適切に評価いたします。
                  </p>
                </div>
              </div>
              <div className="mt-10 text-center">
                <p className="mb-4 text-sm text-muted-foreground">
                  より詳しい質問は、各サービスページのFAQをご覧ください
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/lp/ma/buy#faq"
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    買いたい方のFAQ →
                  </Link>
                  <Link
                    href="/lp/ma/sell#faq"
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    売りたい方のFAQ →
                  </Link>
                  <Link
                    href="/lp/ma/brokerage#faq"
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    仲介希望の方のFAQ →
                  </Link>
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
