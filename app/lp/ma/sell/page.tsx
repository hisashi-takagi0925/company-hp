import { Header } from "@/app/_components/header";
import { Footer } from "@/app/_components/footer";
import {
  Handshake,
  CheckCircle2,
  HelpCircle,
  Code,
  Shield,
  Users,
  ArrowRight,
  Sparkles,
  MessageCircle,
  FileCode2,
  BadgeCheck,
  FileSignature,
  Rocket,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
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
    icon: MessageCircle,
    items: [
      "サービス概要の確認",
      "売却希望理由の確認",
      "希望条件（価格、条件など）の確認",
    ],
  },
  {
    step: 2,
    title: "事業・コード評価",
    icon: FileCode2,
    items: [
      "技術的な評価（コード品質、アーキテクチャ、依存関係）",
      "事業的な評価（収益性、顧客基盤、成長性）",
      "適正価格の算定",
    ],
  },
  {
    step: 3,
    title: "買取の決定",
    icon: BadgeCheck,
    items: ["弊社での買取可否の判断", "買取条件の提示"],
  },
  {
    step: 4,
    title: "契約・クロージング",
    icon: FileSignature,
    items: ["契約条件の調整", "デューデリジェンスの実施", "クロージング手続き"],
  },
  {
    step: 5,
    title: "移行支援",
    icon: Rocket,
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
        {/* Breadcrumbs */}
        <section className="border-b bg-muted/30 py-4">
          <div className="container mx-auto px-4">
            <Breadcrumbs
              items={[
                { label: "事業内容", href: "/#services" },
                { label: "売りたい方" },
              ]}
            />
          </div>
        </section>

        {/* Page Label */}
        <section className="bg-primary/5 py-3">
          <div className="container mx-auto px-4">
            <p className="text-sm font-medium text-primary sm:text-base">
              <span className="inline-flex items-center gap-2">
                <Users className="h-4 w-4" />
                このページは「SaaS・Webサービスを売りたい個人・企業」向けです
              </span>
            </p>
          </div>
        </section>

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
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.8),0_0_20px_rgba(0,0,0,0.5)] sm:text-5xl md:text-6xl">
              Webサービス・SaaSの売却・買取
            </h1>
            <p className="mx-auto mb-6 text-xl font-semibold text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.7),0_0_15px_rgba(0,0,0,0.4)] sm:text-2xl">
              技術負債ごと受け止める売却支援
            </p>
            <p className="mx-auto mb-4 max-w-3xl text-lg text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.7),0_0_15px_rgba(0,0,0,0.4)] sm:text-xl">
              「このサービスを、きちんと引き継いでくれる人に託したい。」
            </p>
            <p className="mx-auto mb-6 max-w-3xl text-base text-white/90 [text-shadow:0_2px_6px_rgba(0,0,0,0.6),0_0_12px_rgba(0,0,0,0.3)] sm:text-lg">
              テックリードエンジニアが、事業とコードの両面から価値を見極め、納得感のある売却をサポートします。
            </p>
            <p className="mx-auto mb-4 max-w-3xl text-base text-white/95 [text-shadow:0_2px_6px_rgba(0,0,0,0.6),0_0_12px_rgba(0,0,0,0.3)] sm:text-lg">
              <strong className="font-semibold">納得感のある売却支援</strong>
              ：技術DD（デューデリジェンス）と事業DDの両面から適正価格を算定し、スピーディーかつ秘密保持を徹底した売却プロセスを実現します。
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
              <Button asChild size="lg" className="min-h-[48px] text-lg px-8">
                <Link href="/contact">
                  SaaS・Webサービスの売却について無料相談する
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="min-h-[48px] text-lg bg-background/90 backdrop-blur-sm px-8"
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

        {/* 売却事例 */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  SaaS・Webサービスの売却事例
                </h2>
                <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                  技術DDと事業DDの両面から適正価格を算定し、スピーディーな売却を実現した事例をご紹介します
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-xl border-2 border-border bg-background p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <Code className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">
                      事例1
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">
                    個人開発のタスク管理SaaS売却
                  </h3>
                  <ul className="mb-4 space-y-1 text-sm text-muted-foreground">
                    <li>• 月間ARR: 約50万円</li>
                    <li>• 技術スタック: Next.js + TypeScript</li>
                    <li>• 売却期間: 相談開始から約2ヶ月</li>
                    <li>• 技術DD結果: コード品質良好、適正価格で評価</li>
                  </ul>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    個人開発者が本業との両立が難しくなり売却を決意。技術負債が少なく、適正価格でスピーディーに売却が完了しました。
                  </p>
                </div>
                <div className="rounded-xl border-2 border-border bg-background p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <Code className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">
                      事例2
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">
                    小規模SaaSの事業売却
                  </h3>
                  <ul className="mb-4 space-y-1 text-sm text-muted-foreground">
                    <li>• 月間ARR: 約200万円</li>
                    <li>• 技術スタック: Ruby on Rails + React</li>
                    <li>• 売却期間: 相談開始から約3ヶ月</li>
                    <li>• 技術DD結果: 一部技術負債あり、改善計画を提示</li>
                  </ul>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    技術負債があったものの、改善可能性を評価し適正価格で売却。買い手企業は改善計画を踏まえて安心して買収を決断しました。
                  </p>
                </div>
                <div className="rounded-xl border-2 border-border bg-background p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <Code className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">
                      事例3
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">
                    事業再編に伴うサービス売却
                  </h3>
                  <ul className="mb-4 space-y-1 text-sm text-muted-foreground">
                    <li>• 月間ARR: 約150万円</li>
                    <li>• 技術スタック: Python + Django</li>
                    <li>• 売却期間: 相談開始から約2.5ヶ月</li>
                    <li>
                      • 技術DD結果: アーキテクチャ良好、ユーザー継続性も評価
                    </li>
                  </ul>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    会社の事業再編により売却を決意。秘密保持を徹底し、ユーザーに影響を与えることなくスムーズに売却が完了しました。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA - 中盤 */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
              SaaS・Webサービスの売却について無料相談する
            </h2>
            <p className="mx-auto mb-6 max-w-2xl text-base text-muted-foreground">
              技術DDと事業DDの両面から適正価格を算定し、スピーディーな売却を実現します。まずは無料相談から。
            </p>
            <Button asChild size="lg" className="min-h-[48px] text-base px-8">
              <Link href="/contact">無料相談はこちら</Link>
            </Button>
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
                        <div className="flex items-center gap-3">
                          <div className="hidden h-9 w-9 items-center justify-center rounded-full bg-primary/10 sm:flex">
                            <step.icon className="h-5 w-5 text-primary" />
                          </div>
                          <h4 className="text-xl font-semibold">
                            {step.title}
                          </h4>
                        </div>
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

        {/* 売却の成功事例（サンプル） */}
        <section className="bg-muted/30 py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-12 max-w-4xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                売却の成功事例イメージ
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
                実際の案件では守秘義務の関係で詳細は開示できませんが、
                よくあるケースをイメージしやすいように加工した事例をご紹介します。
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
              <div className="flex h-full flex-col rounded-xl border bg-card p-6 text-left shadow-sm">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-primary">
                  事例01／個人開発SaaSの事業売却
                </p>
                <h3 className="mb-3 text-lg font-bold">
                  月商80〜100万円規模のBtoB予約管理SaaS
                </h3>
                <ul className="mb-3 space-y-1 text-sm text-muted-foreground">
                  <li>・開発者1名による個人開発プロダクト</li>
                  <li>・顧客数：約80社／解約率：1〜2%台</li>
                  <li>・相談〜クロージング：約3ヶ月</li>
                </ul>
                <p className="mt-auto text-sm text-muted-foreground">
                  本業が多忙になり開発時間が取れなくなったオーナーからのご相談。
                  コードと事業をセットで評価し、同業他社への引き継ぎでユーザーも継続利用できる形で成約しました。
                </p>
              </div>
              <div className="flex h-full flex-col rounded-xl border bg-card p-6 text-left shadow-sm">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-primary">
                  事例02／事業再編に伴うサービス売却
                </p>
                <h3 className="mb-3 text-lg font-bold">
                  社内新規事業として立ち上げた業務支援ツール
                </h3>
                <ul className="mb-3 space-y-1 text-sm text-muted-foreground">
                  <li>・登録ユーザー：約3,000アカウント</li>
                  <li>・売上：月商150〜200万円／ARR約2,000〜2,500万円</li>
                  <li>・事業再編により非コア領域となり売却検討</li>
                </ul>
                <p className="mt-auto text-sm text-muted-foreground">
                  既存事業とのシナジーが高い買い手候補を探索し、
                  従業員の異動・ユーザーサポートの継続も含めた条件で譲渡。
                  クロージングまで約5ヶ月で完了しました。
                </p>
              </div>
              <div className="flex h-full flex-col rounded-xl border bg-card p-6 text-left shadow-sm">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-primary">
                  事例03／技術負債があるサービスの継承支援
                </p>
                <h3 className="mb-3 text-lg font-bold">
                  レガシーPHPで構築されたニッチ業界向けSaaS
                </h3>
                <ul className="mb-3 space-y-1 text-sm text-muted-foreground">
                  <li>・技術スタック：古いフレームワーク＋オンプレ環境</li>
                  <li>・売上：月商50万円前後／ARPU高め</li>
                  <li>・技術負債を棚卸ししたうえでリプレイス前提での譲渡</li>
                </ul>
                <p className="mt-auto text-sm text-muted-foreground">
                  技術負債の内容を可視化し、「どこまで直せば安全に運用できるか」を整理。
                  買い手側の開発チームと連携し、1〜2年かけてモダンスタックにリプレイスする前提での条件設計を行いました。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 査定の基準と考え方 */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  査定の基準と考え方
                </h2>
                <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                  「いくらで売れるのか？」というご質問に対して、
                  当社では売上や利益だけでなく、SaaS特有の指標と技術面を組み合わせて評価します。
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-xl border-2 border-border bg-background p-6 shadow-sm">
                  <h3 className="mb-2 text-lg font-semibold">事業指標の例</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>・月商／ARR（年間経常収益）の水準と推移</li>
                    <li>・解約率（チャーン）／継続率</li>
                    <li>・顧客数・契約単価・LTV</li>
                    <li>・チャネル構成（紹介／広告／インバウンド等）</li>
                  </ul>
                </div>
                <div className="rounded-xl border-2 border-border bg-background p-6 shadow-sm">
                  <h3 className="mb-2 text-lg font-semibold">
                    技術・運営面の例
                  </h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>・技術スタック／アーキテクチャのモダンさ・拡張性</li>
                    <li>・テスト実装・監視体制・セキュリティ</li>
                    <li>・インフラコスト・運用工数</li>
                    <li>・ドキュメント・引き継ぎのしやすさ</li>
                  </ul>
                </div>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                これらを総合的に評価し、「いまの価値」だけでなく「買い手にとっての将来価値」も踏まえて価格レンジをご提示します。
                技術負債がある場合も、直せる範囲かどうかを含めてフラットにお伝えします。
              </p>
            </div>
          </div>
        </section>

        {/* 費用体系 */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-8 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  費用体系
                </h2>
                <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                  売却支援・買取・仲介のいずれも、初回相談は無料です。
                  その後の料金は案件規模や役割によって個別にお見積もりいたします。
                </p>
              </div>
              <div className="overflow-hidden rounded-xl border bg-card shadow-sm">
                <table className="w-full text-sm">
                  <thead className="bg-muted/60">
                    <tr>
                      <th className="px-6 py-3 text-left font-semibold">
                        項目
                      </th>
                      <th className="px-6 py-3 text-left font-semibold">
                        目安
                      </th>
                      <th className="px-6 py-3 text-left font-semibold">
                        備考
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="px-6 py-3 font-medium">初回相談</td>
                      <td className="px-6 py-3">無料</td>
                      <td className="px-6 py-3">
                        オンラインで30〜45分程度、サービスの概要とお考えをお伺いします。
                      </td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-6 py-3 font-medium">
                        簡易評価・価格レンジ提示
                      </td>
                      <td className="px-6 py-3">無料〜20万円（税込）目安</td>
                      <td className="px-6 py-3">
                        売上規模やソースコードの開示範囲により変動します。
                      </td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-6 py-3 font-medium">
                        M&Aアドバイザリー（仲介・FA）
                      </td>
                      <td className="px-6 py-3">
                        成約金額の3〜5%程度＋最低報酬（要相談）
                      </td>
                      <td className="px-6 py-3">
                        案件規模・スキーム（株式譲渡／事業譲渡）に応じて個別に決定します。
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                ※
                上記はあくまで目安であり、具体的な金額・条件は案件内容や役割に応じて個別にご提案いたします。
              </p>
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

        {/* 関連リンク */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-6 text-center text-2xl font-bold tracking-tight sm:text-3xl">
                関連ページ
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <Link
                  href="/lp/ma/buy"
                  className="group rounded-lg border-2 border-border bg-background p-4 transition-all hover:border-primary/50 hover:shadow-md"
                >
                  <h3 className="mb-2 font-semibold text-foreground group-hover:text-primary">
                    買いたい方
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    SaaS・Webサービスの買収支援について
                  </p>
                </Link>
                <Link
                  href="/lp/ma/brokerage"
                  className="group rounded-lg border-2 border-border bg-background p-4 transition-all hover:border-primary/50 hover:shadow-md"
                >
                  <h3 className="mb-2 font-semibold text-foreground group-hover:text-primary">
                    仲介希望の方
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    M&A仲介・技術DDパートナーについて
                  </p>
                </Link>
                <Link
                  href="/company"
                  className="group rounded-lg border-2 border-border bg-background p-4 transition-all hover:border-primary/50 hover:shadow-md"
                >
                  <h3 className="mb-2 font-semibold text-foreground group-hover:text-primary">
                    会社概要
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    代表プロフィール・ミッション・バリュー
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Strip */}
        <section id="contact" className="bg-primary/5 py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              まずは課題の整理からご相談ください
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground">
              小さな悩みでも歓迎です。初回は現状・課題のメモだけで構いません。
            </p>
            <Button asChild size="lg" className="min-h-[48px] text-lg px-8">
              <Link href="/contact">
                SaaS・Webサービスの売却について無料相談する
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
