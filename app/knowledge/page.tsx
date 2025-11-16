import { Header } from "@/app/_components/header";
import { Footer } from "@/app/_components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ナレッジ | ライチョウテックパートナーズ株式会社",
  description:
    "SaaS・WebサービスのM&Aや技術デューデリジェンスに関するナレッジをまとめたページです。小規模SaaSや個人開発サービスのオーナー、買い手企業、仲介会社の方向けに、評価や価格検討の考え方を解説します。",
};

const articles = [
  {
    href: "/knowledge/saas-tech-dd",
    title: "SaaSの技術DDで見る5つのポイント",
    description:
      "ソースコード・アーキテクチャ・インフラ・テスト・セキュリティなど、技術デューデリジェンスの基本的な観点を整理します。",
    category: "技術DD",
    readingTime: "約10分",
  },
  {
    href: "/knowledge/saas-valuation-axes",
    title: "小規模SaaSの価格レンジを考える3つの軸",
    description:
      "ARR・解約率・技術負債という3つの軸から、小規模SaaSのバリュエーションをどのように考えるかを解説します。",
    category: "バリュエーション",
    readingTime: "約10分",
  },
  {
    href: "/knowledge/tech-debt-and-ma",
    title: "技術負債と事業価値のバランスを取るフレームワーク",
    description:
      "「全部リプレイス」か「現状維持」か、の二択になりがちな技術負債の扱いを、現実的な選択肢に分解するフレームワークを紹介します。",
    category: "技術負債",
    readingTime: "約12分",
  },
];

export default function KnowledgeIndexPage() {
  return (
    <>
      <Header />
      <main>
        <section className="border-b bg-muted/30 py-4">
          <div className="container mx-auto px-4">
            <p className="text-sm text-muted-foreground">ナレッジ</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                SaaS・WebサービスM&Aナレッジ
              </h1>
              <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                小規模SaaS・個人開発サービスの売却・買収・仲介に関わる方のために、
                技術DDやバリュエーションの考え方を記事としてまとめています。
              </p>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
              {articles.map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="group flex h-full flex-col rounded-xl border-2 border-border bg-card p-5 text-left shadow-sm transition-all hover:border-primary/50 hover:shadow-md"
                >
                  <p className="mb-2 text-xs font-medium text-primary">
                    {article.category}・{article.readingTime}
                  </p>
                  <h2 className="mb-3 text-base font-semibold leading-snug group-hover:text-primary sm:text-lg">
                    {article.title}
                  </h2>
                  <p className="mb-4 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {article.description}
                  </p>
                  <span className="mt-auto text-xs font-medium text-primary group-hover:underline">
                    記事を読む →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
