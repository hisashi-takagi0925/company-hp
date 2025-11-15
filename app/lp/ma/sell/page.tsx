import { Header } from "@/app/_components/header";
import { Footer } from "@/app/_components/footer";
import { ContactForm } from "@/app/_components/contact";
import {
  Handshake,
  CheckCircle2,
  HelpCircle,
  Code,
  Shield,
  Users,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webサービス・SaaSの売却・買取 | ライチョウテックパートナーズ株式会社",
  description:
    "個人開発で作成したSaaS、事業を売却したい方はお気軽にご相談ください。テックリードエンジニアが技術と事業の両面から価値を評価します。",
};

const purchaseSteps = [
  {
    step: 1,
    title: "初回ヒアリング",
    items: [
      "サービス概要の確認",
      "売却希望理由の確認",
      "希望条件（価格、条件など）の確認",
    ],
  },
  {
    step: 2,
    title: "事業・コード評価",
    items: [
      "技術的な評価（コード品質、アーキテクチャ、依存関係）",
      "事業的な評価（収益性、顧客基盤、成長性）",
      "適正価格の算定",
    ],
  },
  {
    step: 3,
    title: "買取の決定",
    items: ["弊社での買取可否の判断", "買取条件の提示"],
  },
  {
    step: 4,
    title: "契約・クロージング",
    items: ["契約条件の調整", "デューデリジェンスの実施", "クロージング手続き"],
  },
  {
    step: 5,
    title: "移行支援",
    items: ["技術移行のサポート", "データ移行の支援", "引き継ぎ業務の支援"],
  },
];

const deliverables = [
  {
    title: "ティーザー",
    description: "サービス概要を簡潔にまとめた資料",
  },
  {
    title: "IM（Information Memorandum）",
    description: "詳細な情報開示資料",
  },
  {
    title: "移行チェックリスト",
    description: "技術移行に必要な項目をまとめたチェックリスト",
  },
  {
    title: "技術デューデリジェンスレポート",
    description: "コード品質、依存関係、保守リスクなどの評価レポート",
  },
];

export default function SellPage() {
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
              Webサービス・SaaSの売却・買取
            </h1>
            <p className="mx-auto mb-4 max-w-3xl text-lg text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.7),0_0_15px_rgba(0,0,0,0.4)] sm:text-xl">
              「このサービスを、きちんと引き継いでくれる人に託したい。」
            </p>
            <p className="mx-auto mb-6 max-w-3xl text-base text-white/90 [text-shadow:0_2px_6px_rgba(0,0,0,0.6),0_0_12px_rgba(0,0,0,0.3)] sm:text-lg">
              テックリードエンジニアが、事業とコードの両面から価値を見極め、納得感のある売却をサポートします。
            </p>
            <div className="mx-auto mb-10 flex flex-wrap justify-center gap-4 text-sm text-white/90 [text-shadow:0_2px_6px_rgba(0,0,0,0.6),0_0_12px_rgba(0,0,0,0.3)] sm:text-base">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" />
                <span>技術負債があっても相談可</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" />
                <span>個人開発・小規模SaaSも丁寧に評価</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" />
                <span>移行完了までエンジニアが伴走</span>
              </div>
            </div>
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
                <Link href="/">TOPへ戻る</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* このページは誰のためか */}
        <section className="bg-muted/30 py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  こんな方のご相談をお受けしています
                </h2>
                <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                  個人開発から小規模SaaSまで、様々な状況の方々のご相談をお待ちしています
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-xl border-2 border-border bg-background p-6 shadow-sm">
                  <div className="mb-4 flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 rounded-lg bg-primary/10 p-2">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-semibold">
                        サイドプロジェクトが育ってきたが、これ以上時間が割けない
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        個人で始めたサービスが成長し、本業との両立が難しくなった方
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border-2 border-border bg-background p-6 shadow-sm">
                  <div className="mb-4 flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 rounded-lg bg-primary/10 p-2">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-semibold">
                        会社の事情でサービスを畳まざるを得ないが、ユーザーのために残したい
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        事業の再編などでサービスを終了せざるを得ないが、ユーザーに継続してほしい方
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border-2 border-border bg-background p-6 shadow-sm">
                  <div className="mb-4 flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 rounded-lg bg-primary/10 p-2">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-semibold">
                        技術負債や古いスタックが不安で「売れるかどうか」自信がない
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        技術的な課題があっても、適切に評価してほしい方
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border-2 border-border bg-background p-6 shadow-sm">
                  <div className="mb-4 flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 rounded-lg bg-primary/10 p-2">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-semibold">
                        そもそもM&Aプロセスが分からず、どこから手を付けて良いか分からない
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        売却の手続きが分からず、最初の一歩を踏み出せない方
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ライチョウテックパートナーズが選ばれる理由（売り手の方へ） */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="rounded-full bg-primary/10 p-4">
                    <Sparkles className="h-12 w-12 text-primary" />
                  </div>
                </div>
                <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
                  ライチョウテックパートナーズが選ばれる理由
                </h2>
              </div>
              <div className="space-y-6">
                <div className="rounded-xl border-2 border-border bg-background p-8 shadow-sm">
                  <div className="mb-4 flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 rounded-lg bg-primary/10 p-3">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-3 text-xl font-semibold">
                        テックリードが直接見る「コードまで含めた査定」
                      </h3>
                      <p className="text-base leading-relaxed text-muted-foreground">
                        コード品質・依存関係・技術負債・運用コストを、現役テックリードが直接チェック。見た目の数字だけでなく、「次のオーナーが本当に運用し続けられるか」まで評価します。
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border-2 border-border bg-background p-8 shadow-sm">
                  <div className="mb-4 flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 rounded-lg bg-primary/10 p-3">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-3 text-xl font-semibold">
                        技術負債を理由に「叩かない」評価方針
                      </h3>
                      <p className="text-base leading-relaxed text-muted-foreground">
                        技術負債があるサービスでも、「直せるのか」「どの程度手間がかかるのか」を冷静に見た上で評価。単にマイナス査定するのではなく、改善可能性も含めて適正な価値を算出します。
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border-2 border-border bg-background p-8 shadow-sm">
                  <div className="mb-4 flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 rounded-lg bg-primary/10 p-3">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-3 text-xl font-semibold">
                        小規模SaaS・個人開発もきちんと扱う
                      </h3>
                      <p className="text-base leading-relaxed text-muted-foreground">
                        一般的なM&Aでは対象外になりがちな規模のサービスでも、一定のユーザー価値があるプロダクトであれば、真剣に評価・検討します。
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border-2 border-border bg-background p-8 shadow-sm">
                  <div className="mb-4 flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 rounded-lg bg-primary/10 p-3">
                      <Handshake className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-3 text-xl font-semibold">
                        移行完了までの「技術伴走」
                      </h3>
                      <p className="text-base leading-relaxed text-muted-foreground">
                        契約までで終わらず、移行チェックリストの作成や引き継ぎMTGの設計など、エンジニアが技術移行の現場まで伴走します。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 売り手にとってのメリット */}
        <section className="bg-muted/30 py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  売り手の方にとってのメリット
                </h2>
                <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                  サービスを売却することで得られる3つの価値
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-3">
                <div className="rounded-xl border-2 border-border bg-background p-6 text-center shadow-sm">
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-lg bg-primary/10 p-3">
                      <Sparkles className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="mb-3 text-lg font-semibold">適正な評価</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    事業×技術の両面からの査定により、「コードを見ずにディスカウントされる」ことを避けます。
                  </p>
                </div>
                <div className="rounded-xl border-2 border-border bg-background p-6 text-center shadow-sm">
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-lg bg-primary/10 p-3">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="mb-3 text-lg font-semibold">
                    サービス・ユーザーの継続
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    単なる「買われて終わり」ではなく、次のオーナーでも運用しやすい形での移行を前提に設計します。
                  </p>
                </div>
                <div className="rounded-xl border-2 border-border bg-background p-6 text-center shadow-sm">
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-lg bg-primary/10 p-3">
                      <ArrowRight className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="mb-3 text-lg font-semibold">
                    ご自身の時間・キャリアの解放
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    サービスを手放すことで、次のプロジェクトや本業に集中できる環境をつくります。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* エンジニアだからこそできる技術評価 */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="rounded-full bg-primary/10 p-4">
                    <Code className="h-12 w-12 text-primary" />
                  </div>
                </div>
                <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
                  エンジニアだからこそできる技術評価
                </h2>
                <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                  有名・有力企業にトップエンジニアとして参画してきた実績のあるテックリードが、SaaSの技術的な評価をします。
                </p>
              </div>
              <div className="rounded-xl border-2 border-border bg-background p-8 shadow-sm">
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 rounded-lg bg-primary/10 p-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-semibold">
                        最適な技術選定の評価
                      </h3>
                      <p className="text-base leading-relaxed text-muted-foreground">
                        使用されている技術スタックが適切か、将来性のある技術が選ばれているかを評価します。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 rounded-lg bg-primary/10 p-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-semibold">
                        クリーンなアーキテクチャの評価
                      </h3>
                      <p className="text-base leading-relaxed text-muted-foreground">
                        適切な設計パターンが適用されているか、保守性の高いコード構造になっているかを評価します。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 rounded-lg bg-primary/10 p-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-semibold">
                        コードの複雑性・保守性の調査
                      </h3>
                      <p className="text-base leading-relaxed text-muted-foreground">
                        コードの複雑性や保守性を調査し、サービスの持続性を評価します。長期的な運用を見据えた技術的な健全性を確認します。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 rounded-lg bg-primary/10 p-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-semibold">
                        テスト実装の有無
                      </h3>
                      <p className="text-base leading-relaxed text-muted-foreground">
                        単体テスト、統合テスト、E2Eテストなど、適切なテストが実装されているかを確認します。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 rounded-lg bg-primary/10 p-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-semibold">
                        運用コスト・リスクの評価
                      </h3>
                      <p className="text-base leading-relaxed text-muted-foreground">
                        インフラコスト、保守コスト、セキュリティリスク、スケーラビリティなどを総合的に評価します。
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg bg-primary/5 p-6 text-center">
                  <p className="text-lg font-semibold text-foreground">
                    技術負債を避け、安心・安全な買収のお手伝いをいたします。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Webサービスの買取 */}
        <section className="bg-muted/30 py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Webサービスの買取
                </h2>
                <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                  個人開発で作成したSaaS、事業を売却したい方はお気軽にご相談ください。
                </p>
              </div>
              <div className="space-y-6">
                <h3 className="mb-6 text-xl font-semibold">手続きの流れ</h3>
                <div className="space-y-6">
                  {purchaseSteps.map((step) => (
                    <div
                      key={step.step}
                      className="group rounded-xl border-2 border-border bg-background p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md"
                    >
                      <div className="mb-4 flex items-center gap-4">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground transition-transform group-hover:scale-110">
                          {step.step}
                        </div>
                        <h4 className="text-xl font-semibold">{step.title}</h4>
                      </div>
                      <ul className="ml-14 space-y-2.5">
                        {step.items.map((item, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3 text-base text-muted-foreground"
                          >
                            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 成果物例 */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  成果物例
                </h2>
                <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                  M&Aプロセスで提供する主な成果物
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {deliverables.map((deliverable, index) => (
                  <div
                    key={index}
                    className="group rounded-xl border-2 border-border bg-background p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md"
                  >
                    <h3 className="mb-3 text-xl font-semibold">
                      {deliverable.title}
                    </h3>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {deliverable.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-24 bg-muted/30">
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
                  売却・買取に関するご質問
                </p>
              </div>
              <div className="space-y-6">
                <div className="rounded-xl border-2 border-border bg-background p-6 shadow-sm">
                  <h3 className="mb-3 text-lg font-semibold">
                    Q. 個人開発のサービスでも売却できますか？
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    A.
                    はい、個人開発で作成したSaaSやWebサービスも歓迎です。小規模なサービスから、ある程度の規模に成長したサービスまで、幅広く対応しています。技術と事業の両面から適切に評価いたします。
                  </p>
                </div>
                <div className="rounded-xl border-2 border-border bg-background p-6 shadow-sm">
                  <h3 className="mb-3 text-lg font-semibold">
                    Q. 技術負債が多いサービスでも売却できますか？
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    A.
                    技術負債の有無や程度を正確に評価し、適切な価格設定と移行計画を提案いたします。技術負債があっても、事業価値や改善可能性を総合的に判断し、適切なマッチングを実現します。技術負債を避け、安心・安全な買収のお手伝いをいたします。
                  </p>
                </div>
                <div className="rounded-xl border-2 border-border bg-background p-6 shadow-sm">
                  <h3 className="mb-3 text-lg font-semibold">
                    Q. どのように評価されますか？
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    A.
                    テックリードエンジニアが、技術面（コード品質、アーキテクチャ、依存関係、保守リスク）と事業面（収益性、顧客基盤、成長性）の両面から評価します。クリーンなアーキテクチャ、最適な技術選定、テスト実装の有無、運用コスト・リスク、コードの複雑性・保守性を総合的に調査し、サービスの持続性を評価します。
                  </p>
                </div>
                <div className="rounded-xl border-2 border-border bg-background p-6 shadow-sm">
                  <h3 className="mb-3 text-lg font-semibold">
                    Q. 売却までの期間はどのくらいかかりますか？
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    A.
                    案件の内容により異なりますが、初回ヒアリングから評価、買い手とのマッチング、契約・クロージングまで、通常2〜4ヶ月程度を想定しています。事前準備が整っている場合は、よりスムーズに進めることができます。
                  </p>
                </div>
                <div className="rounded-xl border-2 border-border bg-background p-6 shadow-sm">
                  <h3 className="mb-3 text-lg font-semibold">
                    Q. 売却後の技術移行はどのようにサポートされますか？
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    A.
                    技術移行のサポート、データ移行の支援、引き継ぎ業務の支援まで一貫してサポートいたします。移行チェックリストを作成し、スムーズな引き継ぎを実現します。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                お問い合わせ
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Webサービス・SaaSの売却・買取に関するご質問やご相談がございましたら、以下のフォームよりお気軽にお問い合わせください。
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
