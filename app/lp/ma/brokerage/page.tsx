import { Header } from "@/app/_components/header";
import { Footer } from "@/app/_components/footer";
import {
  Handshake,
  CheckCircle2,
  HelpCircle,
  Code,
  Shield,
  Users,
  Sparkles,
  ArrowRight,
  Search,
  MessageCircle,
  FileCode2,
  FileText,
  Users2,
  FileSignature,
  BadgeCheck,
  Rocket,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webサービス・SaaSの売買仲介 | ライチョウテックパートナーズ株式会社",
  description:
    "売り手と買い手の適切なマッチングを実現し、スムーズな取引をサポートします。テックリードエンジニアが技術と事業の両面から価値を評価します。",
};

const brokerageSteps = [
  {
    step: 1,
    title: "売却希望のヒアリング",
    icon: MessageCircle,
    items: [
      "サービス概要の確認",
      "売却理由の確認",
      "希望条件（価格、条件など）の確認",
    ],
  },
  {
    step: 2,
    title: "事業・コード評価",
    icon: FileCode2,
    items: [
      "技術的な評価（コード品質、アーキテクチャ、依存関係、保守リスク）",
      "事業的な評価（収益性、顧客基盤、成長性）",
      "適正価格の算定",
    ],
  },
  {
    step: 3,
    title: "譲渡準備",
    icon: FileText,
    items: [
      "ティーザーの作成",
      "情報開示資料（IM）の作成",
      "移行チェックリストの作成",
      "デューデリジェンス準備",
    ],
  },
  {
    step: 4,
    title: "買い手の探索・マッチング",
    icon: Users2,
    items: ["適切な買い手の探索", "買い手への提案", "マッチングの調整"],
  },
  {
    step: 5,
    title: "交渉・契約支援",
    icon: FileSignature,
    items: ["交渉のサポート", "契約条件の調整", "法的アドバイスの提供"],
  },
  {
    step: 6,
    title: "クロージング",
    icon: BadgeCheck,
    items: ["最終的な契約条件の確定", "クロージング手続きの支援"],
  },
  {
    step: 7,
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

export default function BrokeragePage() {
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
              Webサービス・SaaSの売買仲介
            </h1>
            <p className="mx-auto mb-10 max-w-3xl text-lg text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.7),0_0_15px_rgba(0,0,0,0.4)] sm:text-xl">
              売り手と買い手の適切なマッチングを実現し、スムーズな取引をサポートします。
              <br />
              テックリードエンジニアが、コードと事業の両面からリスクと価値を判断します。
            </p>
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
                  自社だけではカバーしきれないSaaS・Webサービス案件を、技術に強いパートナーと一緒に支援したい方へ
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
                        技術案件を任せられるパートナーを探しているM&A仲介・士業の方
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        小規模SaaSや技術的難度の高い案件について、信頼できる技術パートナーと組みたい方
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
                        ファイナンス・事業に強く、技術評価だけ外部に委ねたいアドバイザーの方
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        財務・事業面は自社で見つつ、コードやインフラなどの技術DDを外部のテックリードに任せたい方
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
                        自社サービスのユーザーや関係者から売却相談を受ける事業会社の方
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        日頃の関係性から相談は受けるものの、M&A実務までは自社で対応しきれない方
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
                        小規模SaaS案件を丁寧に扱ってくれる紹介先を探している方
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        案件規模は大きくないが、紹介者として「きちんと扱ってくれる先」に預けたい方
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ライチョウテックパートナーズが選ばれる理由（仲介希望の方へ） */}
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
                        テックリードが入る「技術に強い」売買仲介
                      </h3>
                      <p className="text-base leading-relaxed text-muted-foreground">
                        コード品質・依存関係・技術負債・運用コストを現役テックリードが直接評価。技術的に無理のある案件を事前にふるい落とし、紹介者の信用を守ります。
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
                        小規模・技術難度の高い案件も丁寧に扱う
                      </h3>
                      <p className="text-base leading-relaxed text-muted-foreground">
                        一般的な仲介では後回しになりがちな小規模SaaSや技術的に複雑な案件も、案件の価値に向き合いながら丁寧にサポートします。
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
                        紹介者の顔を守る、誠実なコミュニケーション
                      </h3>
                      <p className="text-base leading-relaxed text-muted-foreground">
                        売り手・買い手ともに、進捗や論点を丁寧に共有。紹介元の方の信頼を損なわないよう、誠実なコミュニケーションを徹底します。
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
                        情報整理・資料作成まで含めた実務サポート
                      </h3>
                      <p className="text-base leading-relaxed text-muted-foreground">
                        ティーザーやIM、移行チェックリストなど、売買仲介に必要な資料の作成も支援。紹介者側の実務負担を最小限に抑えます。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 仲介希望の方にとってのメリット */}
        <section className="bg-muted/30 py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  仲介希望の方にとってのメリット
                </h2>
              </div>
              <div className="grid gap-6 sm:grid-cols-3">
                <div className="rounded-xl border-2 border-border bg-background p-6 text-center shadow-sm">
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-lg bg-primary/10 p-3">
                      <ArrowRight className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="mb-3 text-lg font-semibold">
                    紹介できる案件の幅が広がる
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    自社だけでは対応しづらい小規模SaaSや技術的な案件も、技術に強いパートナーと一緒に提案できます。
                  </p>
                </div>
                <div className="rounded-xl border-2 border-border bg-background p-6 text-center shadow-sm">
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-lg bg-primary/10 p-3">
                      <Shield className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="mb-3 text-lg font-semibold">
                    技術評価を任せられる安心感
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    コードやインフラの評価をテックリードに任せられるため、自社リソースを圧迫せずに案件を進められます。
                  </p>
                </div>
                <div className="rounded-xl border-2 border-border bg-background p-6 text-center shadow-sm">
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-lg bg-primary/10 p-3">
                      <Handshake className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="mb-3 text-lg font-semibold">
                    紹介者としての信頼を守る
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    売り手・買い手双方にとって無理のない条件を探ることで、「紹介してよかった」と思ってもらえる取引を目指します。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Webサービスの売買仲介 */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Webサービスの売買仲介
                </h2>
                <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                  売り手と買い手の適切なマッチングを実現し、スムーズな取引をサポートします。
                </p>
              </div>
              <div className="space-y-6">
                <h3 className="mb-6 text-xl font-semibold">手続きの流れ</h3>
                <div className="space-y-6">
                  {brokerageSteps.map((step) => (
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
                  売買仲介に関するご質問
                </p>
              </div>
              <div className="space-y-6">
                <div className="rounded-xl border-2 border-border bg-background p-6 shadow-sm">
                  <h3 className="mb-3 text-lg font-semibold">
                    Q. 仲介サービスではどのようなサポートを受けられますか？
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    A.
                    売り手と買い手の適切なマッチング、交渉のサポート、契約条件の調整、法的アドバイスの提供、クロージング手続きの支援まで、取引の全プロセスをサポートいたします。テックリードエンジニアが技術面からも評価・アドバイスを行います。
                  </p>
                </div>
                <div className="rounded-xl border-2 border-border bg-background p-6 shadow-sm">
                  <h3 className="mb-3 text-lg font-semibold">
                    Q. マッチングはどのように行われますか？
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    A.
                    売り手のサービスを技術面・事業面から評価し、適切な買い手を探索します。買い手の要件と売り手のサービスの特徴を照らし合わせ、最適なマッチングを実現します。ティーザーやIM（情報開示資料）を作成し、効果的な提案を行います。
                  </p>
                </div>
                <div className="rounded-xl border-2 border-border bg-background p-6 shadow-sm">
                  <h3 className="mb-3 text-lg font-semibold">
                    Q. 交渉はどのように進められますか？
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    A.
                    適正価格の算定から始まり、契約条件の調整、交渉のサポートまで一貫してサポートいたします。技術的な評価に基づいた適切な価格設定により、双方が納得できる取引を実現します。
                  </p>
                </div>
                <div className="rounded-xl border-2 border-border bg-background p-6 shadow-sm">
                  <h3 className="mb-3 text-lg font-semibold">
                    Q. 仲介手数料はどのように発生しますか？
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    A.
                    仲介手数料は、取引が成立した場合に発生します。具体的な手数料については、案件の内容に応じてご案内いたします。初回相談は無料ですので、まずはお気軽にご相談ください。
                  </p>
                </div>
                <div className="rounded-xl border-2 border-border bg-background p-6 shadow-sm">
                  <h3 className="mb-3 text-lg font-semibold">
                    Q. 取引の秘密性は保たれますか？
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    A.
                    はい、取引の秘密性は厳守いたします。情報開示は適切な買い手候補に対してのみ行い、守秘義務を徹底しております。売り手の情報が不必要に広まることはありません。
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
