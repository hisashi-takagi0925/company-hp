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

export const metadata: Metadata = {
  title: `ライチョウテックパートナーズ株式会社 | SaaS・Webサービス特化のM&Aアドバイザリー`,
  description:
    "ライチョウテックパートナーズ株式会社は、SaaS・Webサービス特化のM&Aアドバイザリーです。小規模SaaS・個人開発サービスの事業売却・事業買収・仲介を、テックリードエンジニアが技術DDと事業DDの両面からご支援します。",
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
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.8),0_0_20px_rgba(0,0,0,0.5)] sm:text-4xl md:text-5xl lg:text-6xl">
              M&A × SaaS × 技術に強い
              <br className="hidden sm:inline" />
              小規模SaaS専門のアドバイザリー
            </h1>
            <p className="mx-auto mb-6 text-xl font-semibold text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.7),0_0_15px_rgba(0,0,0,0.4)] sm:text-2xl">
              コードまで見るSaaS専門M&Aアドバイザリー
            </p>
            <p className="mx-auto mb-12 max-w-3xl text-lg text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.7),0_0_15px_rgba(0,0,0,0.4)] sm:text-xl">
              テックリードエンジニアが、SaaS・Webサービスに特化したM&Aで
              <br className="hidden sm:inline" />
              「小規模SaaS・個人開発サービスの継承と成長」を支援します。
            </p>
            <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
                className="min-h-[48px] min-w-[220px] text-base font-semibold shadow-lg"
              >
                <Link href="/contact">無料相談はこちら</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="min-h-[48px] min-w-[220px] border-white/70 bg-black/20 text-base font-semibold text-white backdrop-blur hover:bg-white/10"
              >
                <Link href="#services">サービス内容を見る</Link>
              </Button>
            </div>
            <div className="mx-auto flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <Button
                asChild
                variant="outline"
                size="default"
                className="min-h-[44px] border-white/50 bg-white/10 text-sm font-medium text-white backdrop-blur hover:bg-white/20 sm:text-base"
              >
                <Link href="/lp/ma/sell">売りたい方はこちら</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="default"
                className="min-h-[44px] border-white/50 bg-white/10 text-sm font-medium text-white backdrop-blur hover:bg-white/20 sm:text-base"
              >
                <Link href="/lp/ma/buy">買いたい方はこちら</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="default"
                className="min-h-[44px] border-white/50 bg-white/10 text-sm font-medium text-white backdrop-blur hover:bg-white/20 sm:text-base"
              >
                <Link href="/lp/ma/brokerage">仲介希望の方はこちら</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* なぜSaaSのM&Aと技術にこだわるのか */}
        <section className="bg-muted/30 py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="rounded-xl border-2 border-border bg-background p-8 shadow-sm">
                <h2 className="mb-6 text-center text-3xl font-bold tracking-tight sm:text-4xl">
                  なぜSaaSのM&Aと技術にこだわるのか
                </h2>
                <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <p>
                    代表自身がテックリードとして多くのWebサービス開発・グロースに関わる中で、「良いサービスなのに次の引き受け手がいない」「技術負債が理由で本来の価値よりも安く評価される」といった場面を何度も見てきました。
                  </p>
                  <p>
                    事業とコードの両方を深く理解するエンジニアが間に入ることで、作り手・送り手・受け手の三者が納得できる継承と再生を実現したい。その思いから、Webサービス・SaaSに特化したM&Aアドバイザリー事業を立ち上げています。
                  </p>
                </div>
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
                  SaaS・Webサービス特化のM&Aアドバイザリーとして、 「技術 × 事業
                  ×
                  小規模SaaS」の3つの軸で、オーナー様と買い手企業の双方にとって
                  納得感のある継承を実現します。
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
                    大手〜スタートアップまで50件以上の開発・グロースに参画。
                    バックエンド・フロント・インフラまで一気通貫で理解します。
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
                    ソースコード・アーキテクチャ・インフラコストなどの技術DDに加え、
                    売上推移や解約率などの事業指標も確認し、SaaSの将来性まで評価します。
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
                    月商数十万円〜数百万円規模のSaaSや個人開発サービスも歓迎。
                    「この規模でも相談していいのか？」というお悩みに丁寧にお応えします。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 実績・事例イメージ（サンプル） */}
        <section className="bg-muted/30 py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-12 max-w-4xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                SaaS・WebサービスのM&A支援イメージ
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
                下記は、よくある支援パターンをイメージしやすくするために整理した取引イメージです。
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
              <div className="flex h-full flex-col rounded-xl border bg-card p-6 text-left shadow-sm">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-primary">
                  イメージ01／個人開発SaaSの事業売却
                </p>
                <h3 className="mb-3 text-lg font-bold">
                  BtoB予約管理SaaS（月商約120万円）の売却支援イメージ
                </h3>
                <ul className="mb-3 space-y-1 text-sm text-muted-foreground">
                  <li>・顧客数：中小企業約150社／解約率1.5％程度</li>
                  <li>・技術スタック：Next.js／Laravel／MySQL／AWS</li>
                  <li>・相談〜クロージング：約4ヶ月</li>
                </ul>
                <p className="mt-auto text-sm text-muted-foreground">
                  技術負債と運用コストを棚卸ししたうえで、買い手企業側エンジニアとのディスカッションを重ね、
                  引き継ぎ後の改善ロードマップも含めた条件設計を行うイメージです。
                </p>
              </div>
              <div className="flex h-full flex-col rounded-xl border bg-card p-6 text-left shadow-sm">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-primary">
                  イメージ02／新規事業としてのSaaS買収
                </p>
                <h3 className="mb-3 text-lg font-bold">
                  BtoCサブスクサービスの買収・技術DDイメージ
                </h3>
                <ul className="mb-3 space-y-1 text-sm text-muted-foreground">
                  <li>・登録ユーザー：約5万人／月商約350万円</li>
                  <li>・技術スタック：React／Go／PostgreSQL／GCP</li>
                  <li>
                    ・主要論点：スケーラビリティ／パフォーマンス／セキュリティ
                  </li>
                </ul>
                <p className="mt-auto text-sm text-muted-foreground">
                  既存システムとの統合を見据えてアーキテクチャやデータ構造を評価し、
                  買収後の追加開発コストとリスクを数値で整理するケースを想定しています。
                </p>
              </div>
              <div className="flex h-full flex-col rounded-xl border bg-card p-6 text-left shadow-sm">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-primary">
                  イメージ03／小規模チームによるM&A仲介
                </p>
                <h3 className="mb-3 text-lg font-bold">
                  月商50〜80万円規模のニッチSaaSの継承支援イメージ
                </h3>
                <ul className="mb-3 space-y-1 text-sm text-muted-foreground">
                  <li>・対象：業界特化の業務支援ツール</li>
                  <li>・チーム構成：開発者1名＋カスタマーサポート1名</li>
                  <li>・スキーム：事業譲渡＋業務委託での移行期間を設計</li>
                </ul>
                <p className="mt-auto text-sm text-muted-foreground">
                  「ユーザーを置き去りにしないこと」を優先しながら、
                  段階的な運営移行とサポート体制の整備を前提とした条件を検討するイメージです。
                </p>
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
                      SaaS・Webサービスの買収を、技術DDと事業DDの両面からご支援します。
                      月商100万円〜数千万円規模の小〜中規模案件に特化しています。
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
                      個人開発サービスから小規模SaaSまで、
                      技術と事業の両面を踏まえて適切な売却・買取をサポートします。
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
                      売り手・買い手双方の技術的な懸念を解消しながら、
                      SaaS・WebサービスのM&Aを丁寧に仲介します。
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
