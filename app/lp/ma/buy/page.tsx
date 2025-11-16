import { Header } from "@/app/_components/header";
import { Footer } from "@/app/_components/footer";
import {
  Handshake,
  CheckCircle2,
  Code,
  CheckSquare,
  HelpCircle,
  Users,
  Shield,
  Sparkles,
  ArrowRight,
  Search,
  MessageCircle,
  Rocket,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Webサービス・SaaSの調達・評価支援 | ライチョウテックパートナーズ株式会社",
  description:
    "「こんなサービスを買い取りたい」などがあれば、お気軽にお問い合わせください。技術負債・運用コスト・継続性などに対する厳しい査定をクリアした良質なサービスを多数取り扱っています。",
};

const buySteps = [
  {
    step: 1,
    title: "購入希望のヒアリング",
    icon: MessageCircle,
    items: [
      "購入したいサービス・事業のイメージや目的の確認",
      "予算・スケジュール・制約条件の確認",
      "自社プロダクトや事業とのシナジーの確認",
    ],
  },
  {
    step: 2,
    title: "候補サービスの探索・一次評価",
    icon: Search,
    items: [
      "市場からの候補サービス探索",
      "公開情報ベースでの事業・技術面の一次評価",
      "候補リストのご提示",
    ],
  },
  {
    step: 3,
    title: "詳細評価・候補の絞り込み",
    icon: Code,
    items: [
      "技術デューデリジェンス（コード品質・依存関係・保守リスク・移行可否）",
      "事業デューデリジェンス（収益性・顧客基盤・成長性）",
      "購入候補の優先順位付け",
    ],
  },
  {
    step: 4,
    title: "交渉・条件調整のサポート",
    icon: Handshake,
    items: [
      "適正価格レンジの検討",
      "条件シミュレーションのサポート",
      "売り手とのコミュニケーション支援",
    ],
  },
  {
    step: 5,
    title: "クロージング・移行支援",
    icon: Rocket,
    items: [
      "M&A後の技術移行計画の策定",
      "移行チェックリストの作成",
      "ローンチ後の運用体制構築の相談",
    ],
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

export default function BuyPage() {
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
              Webサービス・SaaSの調達・評価支援
            </h1>
            <p className="mx-auto mb-4 max-w-3xl text-lg text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.7),0_0_15px_rgba(0,0,0,0.4)] sm:text-xl">
              「本当にこのサービスを買って大丈夫か？」
            </p>
            <p className="mx-auto mb-6 max-w-3xl text-base text-white/90 [text-shadow:0_2px_6px_rgba(0,0,0,0.6),0_0_12px_rgba(0,0,0,0.3)] sm:text-lg">
              テックリードエンジニアが、コードと事業の両面からリスクと価値を見極めます。
            </p>
            <p className="mx-auto mb-10 max-w-3xl text-sm text-white/80 [text-shadow:0_2px_6px_rgba(0,0,0,0.6),0_0_12px_rgba(0,0,0,0.3)] sm:text-base">
              自社プロダクトの拡張、事業シナジー、技術獲得など、多様な目的の調達を支援します。
            </p>
            <div className="mx-auto mb-10 flex flex-wrap justify-center gap-4 text-sm text-white/90 [text-shadow:0_2px_6px_rgba(0,0,0,0.6),0_0_12px_rgba(0,0,0,0.3)] sm:text-base">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" />
                <span>技術負債・運用コストまで踏まえた評価</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" />
                <span>小規模〜中規模SaaS・Webサービスにも対応</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" />
                <span>買収後の技術移行・統合もサポート</span>
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

        {/* サービス内容 */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Webサービスの調達・評価サービス
              </h2>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
                技術負債・運用コスト・継続性などに対する厳しい査定をクリアした良質なサービスを多数取り扱っています。
                <br />
                また、現在保有していないサービスであっても市場から買い付けを行い、安全で安心な査定をクリアしたサービスのみをご紹介させていただきます。
              </p>
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
                  自社プロダクトの拡張から新規事業の足掛かりまで、様々な目的での調達をサポートします
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
                        自社プロダクトを手っ取り早く拡張したい企業
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        既存領域と近いSaaSを買い、自社のラインアップを広げたい方
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
                        新規事業の足掛かりとしてSaaSを買いたい企業・個人
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        ゼロから作るのではなく、既存プロダクトをベースに始めたい方
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
                        技術・チームごと獲得したいCTO/開発責任者
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        技術スタックやコード品質も含めて中身を見て判断したい方
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
                        M&A経験が少なく、技術リスクの見極めに不安がある方
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        ファイナンスやビジネスは見られるが、技術面のDDに自信がない方
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ライチョウテックパートナーズが選ばれる理由（買い手の方へ） */}
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
                        テックリードによる技術DDと事業DDの一体化
                      </h3>
                      <p className="text-base leading-relaxed text-muted-foreground">
                        コード品質・依存関係・技術負債・運用コストと、収益性・顧客基盤・成長性を同じテーブルで評価します。「技術的に持てない案件」を事前にふるい落とします。
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
                        技術負債・運用コストを前提とした「本当の総コスト」評価
                      </h3>
                      <p className="text-base leading-relaxed text-muted-foreground">
                        表面上の売上・利益だけでなく、「直すのにどれだけコストがかかるか」「どこまで伸ばせるか」を数字で整理します。
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border-2 border-border bg-background p-8 shadow-sm">
                  <div className="mb-4 flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 rounded-lg bg-primary/10 p-3">
                      <Search className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-3 text-xl font-semibold">
                        市場探索〜候補提案まで一気通貫
                      </h3>
                      <p className="text-base leading-relaxed text-muted-foreground">
                        既存の取り扱い案件だけでなく、市場からの買い付けも含めて候補を探索。ご希望の条件に合うサービスだけを厳選してご紹介します。
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
                        買収後の技術移行・統合も伴走
                      </h3>
                      <p className="text-base leading-relaxed text-muted-foreground">
                        導入フェーズでつまづきやすい技術移行・デプロイ・監視体制の整備などを、テックリードが具体的にサポートします。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 手続きの流れ */}
        <section className="bg-muted/30 py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  手続きの流れ
                </h2>
                <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                  購入のご相談からクロージング・移行までの、おおまかな流れです。
                </p>
              </div>
              <div className="space-y-6">
                {buySteps.map((step) => (
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
                        <h4 className="text-xl font-semibold">{step.title}</h4>
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
        </section>

        {/* 買い手にとってのメリット */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  買い手の方にとってのメリット
                </h2>
                <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                  この会社を使うと、買う側として何が嬉しいのか
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-3">
                <div className="rounded-xl border-2 border-border bg-background p-6 text-center shadow-sm">
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-lg bg-primary/10 p-3">
                      <Shield className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="mb-3 text-lg font-semibold">
                    技術リスクを見落とさない安心感
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    技術負債・スタック・運用コストまで見た上で意思決定できる
                  </p>
                </div>
                <div className="rounded-xl border-2 border-border bg-background p-6 text-center shadow-sm">
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-lg bg-primary/10 p-3">
                      <ArrowRight className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="mb-3 text-lg font-semibold">
                    候補探索〜評価までの工数削減
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    自社で一から案件を探し、コードを読み込む手間を大幅削減
                  </p>
                </div>
                <div className="rounded-xl border-2 border-border bg-background p-6 text-center shadow-sm">
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-lg bg-primary/10 p-3">
                      <CheckCircle2 className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="mb-3 text-lg font-semibold">
                    買収後の失敗確率を下げる
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    「買ってみたら想定以上に大変だった」を避けるための事前チェック
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
                      <CheckSquare className="h-5 w-5 text-primary" />
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
                      <CheckSquare className="h-5 w-5 text-primary" />
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
                      <CheckSquare className="h-5 w-5 text-primary" />
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
                      <CheckSquare className="h-5 w-5 text-primary" />
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
                      <CheckSquare className="h-5 w-5 text-primary" />
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

        {/* 成果物例 */}
        <section className="py-24 bg-muted/30">
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

        {/* 費用体系 */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-8 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  費用体系
                </h2>
                <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                  案件規模や役割によって個別にお見積もりいたしますが、
                  代表的な価格イメージは下記の通りです（※実際の条件は個別にご提示します）。
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
                        案件の有無にかかわらず、オンラインで30〜45分程度ヒアリングします。
                      </td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-6 py-3 font-medium">
                        技術・事業DDレポート
                      </td>
                      <td className="px-6 py-3">
                        30〜80万円（税込）目安／案件
                      </td>
                      <td className="px-6 py-3">
                        対象サービスの規模（売上・画面数・機能数）に応じて変動します。
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
                        案件規模・役割（単独／共同）によって個別に決定します。
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

        {/* 買収に関する不安とその解消策 */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  よくある不安と、その解消の仕方
                </h2>
                <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                  初めてのSaaS・Webサービスの買収では、技術・事業・運営など様々な不安が生まれます。
                  代表的な3つの不安と、それに対して当社がどのように向き合うかをまとめました。
                </p>
              </div>
              <div className="space-y-6">
                <div className="rounded-xl border-2 border-border bg-background p-6 shadow-sm">
                  <h3 className="mb-2 text-lg font-semibold">
                    「技術負債やセキュリティリスクを引き継いでしまわないか不安」
                  </h3>
                  <p className="mb-2 text-sm font-medium text-primary">
                    →
                    ソースコードとインフラ構成を前提とした技術DDでリスクを可視化します
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    コード品質・依存関係・テスト状況・インフラ構成・権限管理などをチェックし、
                    &quot;どこが危ないのか&quot; をレポートに落とし込みます。
                    必要に応じて、「買収後◯ヶ月で解消可能な範囲かどうか」も一緒に評価します。
                  </p>
                </div>
                <div className="rounded-xl border-2 border-border bg-background p-6 shadow-sm">
                  <h3 className="mb-2 text-lg font-semibold">
                    「数字は悪くないが、本当に伸びるサービスなのか見極められるか不安」
                  </h3>
                  <p className="mb-2 text-sm font-medium text-primary">
                    →
                    解約率や継続率、機能ごとの利用状況などを踏まえて中長期のポテンシャルを評価します
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    単なる売上推移だけでなく、ユーザー数・利用頻度・チャーン理由などを確認し、
                    「どこを伸ばせば良いか」「どこに壁があるか」を整理します。
                  </p>
                </div>
                <div className="rounded-xl border-2 border-border bg-background p-6 shadow-sm">
                  <h3 className="mb-2 text-lg font-semibold">
                    「自社のチームにきちんと引き継げるか不安」
                  </h3>
                  <p className="mb-2 text-sm font-medium text-primary">
                    →
                    買収後の技術移行・オンボーディング計画までセットで検討します
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    どのような役割のエンジニアが何人いれば安全に運用できるか、
                    どの部分から着手すべきかなど、既存チーム構成も踏まえた現実的な移行計画を一緒に作ります。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-24">
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
                  買取・調達に関するご質問
                </p>
              </div>
              <div className="space-y-6">
                <div className="rounded-xl border-2 border-border bg-background p-6 shadow-sm">
                  <h3 className="mb-3 text-lg font-semibold">
                    Q. どのようなサービスを買い取ることができますか？
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    A.
                    個人開発から小規模SaaSまで、Webサービス・SaaS全般に対応しています。技術面・ビジネス面で厳しい査定をクリアした良質なサービスのみを取り扱っています。現在保有していないサービスでも、市場から買い付けを行い、安全で安心な査定をクリアしたサービスのみをご紹介します。
                  </p>
                </div>
                <div className="rounded-xl border-2 border-border bg-background p-6 shadow-sm">
                  <h3 className="mb-3 text-lg font-semibold">
                    Q. 技術デューデリジェンスはどのように行われますか？
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    A.
                    テックリードエンジニアが直接、コード品質、依存関係、保守リスク、移行可否などを評価します。技術負債の有無や程度も正確に把握し、適切な価格設定と移行計画を提案いたします。
                  </p>
                </div>
                <div className="rounded-xl border-2 border-border bg-background p-6 shadow-sm">
                  <h3 className="mb-3 text-lg font-semibold">
                    Q. どのような技術スタックに対応していますか？
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    A. 主要なWeb技術スタック（React、Vue、Next.js、Ruby on
                    Rails、Python、Node.jsなど）に対応しています。テックリードエンジニアが直接評価するため、最新の技術トレンドも踏まえた適切な評価が可能です。
                  </p>
                </div>
                <div className="rounded-xl border-2 border-border bg-background p-6 shadow-sm">
                  <h3 className="mb-3 text-lg font-semibold">
                    Q. 買取後の技術移行はどのようにサポートされますか？
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    A.
                    技術移行の計画・実行支援、データ移行の支援、チーム統合のサポートまで一貫してサポートいたします。移行チェックリストを作成し、スムーズな引き継ぎを実現します。
                  </p>
                </div>
                <div className="rounded-xl border-2 border-border bg-background p-6 shadow-sm">
                  <h3 className="mb-3 text-lg font-semibold">
                    Q. 希望するサービスが見つからない場合はどうなりますか？
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    A.
                    現在保有していないサービスでも、市場から買い付けを行います。ご希望の要件をお聞かせいただければ、適切なサービスを探索し、厳しい査定をクリアした良質なサービスのみをご紹介いたします。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Strip */}
        <section id="contact" className="bg-muted/30 py-24">
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
