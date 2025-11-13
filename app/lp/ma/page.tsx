import { Header } from "@/app/_components/header";
import { Footer } from "@/app/_components/footer";
import { ContactForm } from "@/app/_components/contact";
import { Handshake, CheckCircle2, Award, Shield, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Webサービス・SaaSのM&Aアドバイザリー | ライチョウテックパートナーズ株式会社",
  description:
    "技術に強いM&A仲介。エンジニア視点で小規模SaaS・個人開発サービスを評価し、適切なマッチングを実現します。",
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

const salesSteps = [
  {
    step: 1,
    title: "購入希望のヒアリング",
    items: [
      "購入希望のサービス・事業の要件確認",
      "予算・条件の確認",
      "購入目的の明確化",
    ],
  },
  {
    step: 2,
    title: "候補サービスの探索・評価",
    items: [
      "市場調査・候補サービスの探索",
      "技術デューデリジェンスの実施（コード品質、依存関係、保守リスク、移行可否）",
      "事業デューデリジェンスの実施（財務状況、顧客基盤、成長性）",
      "厳しい査定をクリアした良質なサービスのみをご紹介",
    ],
  },
  {
    step: 3,
    title: "サービス紹介・選定",
    items: [
      "査定をクリアしたサービスのご紹介",
      "現在保有していないサービスも市場から買い付け",
      "安全で安心な査定をクリアしたサービスのみをご紹介",
    ],
  },
  {
    step: 4,
    title: "交渉・契約支援",
    items: ["適正価格の算定", "契約条件の調整", "交渉のサポート"],
  },
  {
    step: 5,
    title: "クロージング・移行支援",
    items: [
      "最終的な契約条件の確定",
      "クロージング手続きの支援",
      "技術移行の計画・実行支援",
      "データ移行の支援",
    ],
  },
];

const brokerageSteps = [
  {
    step: 1,
    title: "売却希望のヒアリング",
    items: [
      "サービス概要の確認",
      "売却理由の確認",
      "希望条件（価格、条件など）の確認",
    ],
  },
  {
    step: 2,
    title: "事業・コード評価",
    items: [
      "技術的な評価（コード品質、アーキテクチャ、依存関係、保守リスク）",
      "事業的な評価（収益性、顧客基盤、成長性）",
      "適正価格の算定",
    ],
  },
  {
    step: 3,
    title: "譲渡準備",
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
    items: ["適切な買い手の探索", "買い手への提案", "マッチングの調整"],
  },
  {
    step: 5,
    title: "交渉・契約支援",
    items: ["交渉のサポート", "契約条件の調整", "法的アドバイスの提供"],
  },
  {
    step: 6,
    title: "クロージング",
    items: ["最終的な契約条件の確定", "クロージング手続きの支援"],
  },
  {
    step: 7,
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

export default function MAPage() {
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
              Webサービス・SaaSのM&Aアドバイザリー
            </h1>
            <p className="mx-auto mb-10 max-w-3xl text-lg text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.7),0_0_15px_rgba(0,0,0,0.4)] sm:text-xl">
              テックリードエンジニアが、技術と事業の両面から価値を見極めます
              <br />
              エンジニア視点で小規模SaaS・個人開発サービスを評価し、適切なマッチングを実現します。
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
                <Link href="/">トップへ戻る</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* テックリードエンジニアの実績 */}
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
                  弊社では、業界歴17年以上で、日本の有名有料企業に多数参画した実績を持つテックリードエンジニアが、最新の技術的な知見およびビジネスとしての価値・健全性をクリアした良質なサービスのみを取り扱っています。
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

        {/* Webサービスの買取 */}
        <section className="py-24 bg-muted/30">
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

        {/* Webサービスの販売 */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Webサービスの販売
                </h2>
                <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                  「こんなサービスを買い取りたい」などがあれば、お気軽にお問い合わせください。
                </p>
                <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
                  技術面はもちろん、ビジネス面でも厳しい査定をクリアした良質なサービスを多数取り扱っています。
                  <br />
                  また、現在保有していないサービスであっても市場から買い付けを行い、安全で安心な査定をクリアしたサービスのみをご紹介させていただきます。
                </p>
              </div>
              <div className="space-y-6">
                <h3 className="mb-6 text-xl font-semibold">手続きの流れ</h3>
                <div className="space-y-6">
                  {salesSteps.map((step) => (
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

        {/* Webサービスの売買仲介 */}
        <section className="py-24 bg-muted/30">
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

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                お問い合わせ
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Webサービス・SaaSのM&Aアドバイザリーに関するご質問やご相談がございましたら、以下のフォームよりお気軽にお問い合わせください。
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
