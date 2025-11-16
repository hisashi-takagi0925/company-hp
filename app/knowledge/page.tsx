import { Header } from "@/app/_components/header";
import { Footer } from "@/app/_components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "コラム一覧 | ライチョウテックパートナーズ株式会社",
  description:
    "SaaS・WebサービスのM&Aや技術デューデリジェンスに関するコラムをまとめたページです。小規模SaaSや個人開発サービスのオーナー、買い手企業、仲介会社の方向けに、評価や価格検討の考え方を解説します。",
};

const articles = [
  {
    href: "/knowledge/saas-tech-dd",
    title: "SaaSの技術DDで見る5つのポイント",
    description:
      "ソースコード・アーキテクチャ・インフラ・テスト・セキュリティなど、技術デューデリジェンスの基本的な観点を整理します。",
    category: "買い手向け",
    readingTime: "約10分",
  },
  {
    href: "/knowledge/saas-valuation-axes",
    title: "小規模SaaSの価格レンジを考える3つの軸",
    description:
      "ARR・解約率・技術負債という3つの軸から、小規模SaaSのバリュエーションをどのように考えるかを解説します。",
    category: "買い手向け",
    readingTime: "約10分",
  },
  {
    href: "/knowledge/tech-debt-and-ma",
    title: "技術負債と事業価値のバランスを取るフレームワーク",
    description:
      "「全部リプレイス」か「現状維持」か、の二択になりがちな技術負債の扱いを、現実的な選択肢に分解するフレームワークを紹介します。",
    category: "買い手向け",
    readingTime: "約12分",
  },
  {
    href: "/knowledge/saas-ma-failure-patterns",
    title: "小規模SaaS M&Aでよくある失敗パターンとその回避策",
    description:
      "小規模SaaSのM&Aで起こりがちな認識ズレ・準備不足・技術面の見落としなどの失敗パターンと、その避け方を整理します。",
    category: "買い手向け",
    readingTime: "約12分",
  },
  {
    href: "/knowledge/saas-exit-preparation",
    title: "初めてのSaaS事業売却で準備しておきたいこと",
    description:
      "初めてサービス売却を検討するオーナー向けに、最低限そろえておくとスムーズになる数字・資料・整理のポイントを解説します。",
    category: "売り手向け",
    readingTime: "約10分",
  },
  {
    href: "/knowledge/saas-sell-or-keep-checklist",
    title: "SaaSを「売るか・続けるか」を判断するチェックリスト",
    description:
      "売却か継続か迷ったときに、時間・体力・資金・成長余地・リスクの観点から整理するためのチェックリストです。",
    category: "売り手向け",
    readingTime: "約10分",
  },
  {
    href: "/knowledge/saas-shutdown-alternatives",
    title: "小規模SaaSオーナーがやりがちな「もったいない畳み方」と代替案",
    description:
      "そのままクローズしてしまう前に検討できる、売却・部分譲渡・運営委託などの選択肢を整理します。",
    category: "売り手向け",
    readingTime: "約10分",
  },
  {
    href: "/knowledge/saas-user-communication-on-exit",
    title: "ユーザーへの告知と移行コミュニケーションのベストプラクティス",
    description:
      "サービス売却・移管時にユーザーへどのように告知し、不安を抑えながら移行していくかのポイントをまとめます。",
    category: "売り手向け",
    readingTime: "約12分",
  },
  {
    href: "/knowledge/saas-buy-side-fit-check",
    title: "自社で「持てるSaaS」かどうかを見極める事前チェック",
    description:
      "買収前に、技術スタック・チーム体制・投資余力・シナジー仮説の観点から、自社にフィットするかどうかを確認するチェックポイントです。",
    category: "買い手向け",
    readingTime: "約12分",
  },
  {
    href: "/knowledge/saas-synergy-patterns",
    title: "SaaS M&Aのシナジーパターン：機能買い・顧客基盤買い・チーム買い",
    description:
      "機能買い・顧客基盤買い・チーム買い・技術買いなど、SaaSのM&Aでよくあるシナジーパターンを整理します。",
    category: "買い手向け",
    readingTime: "約12分",
  },
  {
    href: "/knowledge/saas-ma-for-intermediaries",
    title: "SaaS案件で「技術がよく分からない」仲介が押さえておきたい論点",
    description:
      "技術に明るくない仲介・FAの方向けに、エンジニアに何を聞き、どこから専門家に任せるべきかの最低限の論点をまとめます。",
    category: "仲介向け",
    readingTime: "約12分",
  },
  {
    href: "/knowledge/saas-vs-traditional-ma",
    title: "一般事業M&AとSaaS M&Aの違い：「売り物」が何かが違う",
    description:
      "在庫・設備中心の事業と、コードと契約が中心のSaaS事業のM&Aの違いを、DDやリスクの観点から比較します。",
    category: "仲介向け",
    readingTime: "約10分",
  },
  {
    href: "/knowledge/tech-debt-acceptable-range",
    title: "この技術負債は許容範囲か？を判断するための目安",
    description:
      "どこまでの技術負債なら許容できるのか、どこからはさすがに危険なのかを、具体例とともに整理します。",
    category: "買い手向け",
    readingTime: "約12分",
  },
  {
    href: "/knowledge/post-acquisition-tech-strategy",
    title: "リプレイス vs 現行延命 vs ハイブリッド：買収後の技術戦略の選び方",
    description:
      "買収後の技術戦略としてよく議論される3パターンを比較し、それぞれに向いているケースと注意点を解説します。",
    category: "買い手向け",
    readingTime: "約12分",
  },
  {
    href: "/knowledge/saas-ma-loi-to-closing",
    title: "小規模SaaSのLOI〜最終契約までのざっくり流れ",
    description:
      "小規模SaaSのM&AにおけるLOI（基本合意）から最終契約までの大まかな流れと、各フェーズで決まることを整理します。",
    category: "買い手向け",
    readingTime: "約10分",
  },
  {
    href: "/knowledge/reps-warranties-and-tech",
    title: "表明保証で揉めやすいポイントと技術観点からの落としどころ",
    description:
      "SaaS案件で表明保証が問題になりやすいポイントと、技術DDの結果をどう条件に反映するかの考え方をまとめます。",
    category: "仲介向け",
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
            <p className="text-sm text-muted-foreground">コラム</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                SaaS・WebサービスM&Aコラム
              </h1>
              <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                小規模SaaS・個人開発サービスの売却・買収・仲介に関わる方のために、
                技術DDやバリュエーション、売却準備の考え方をコラムとしてまとめています。
              </p>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="container mx-auto px-4">
            {Object.entries(
              articles.reduce<Record<string, typeof articles>>(
                (grouped, article) => {
                  if (!grouped[article.category]) {
                    grouped[article.category] = [];
                  }
                  grouped[article.category].push(article);
                  return grouped;
                },
                {},
              ),
            )
              .sort(([a], [b]) => a.localeCompare(b, "ja"))
              .map(([category, items]) => (
                <section
                  key={category}
                  className="mx-auto mb-10 max-w-5xl last:mb-0"
                >
                  <h2 className="mb-4 text-sm font-semibold text-muted-foreground sm:text-base">
                    {category}
                  </h2>
                  <div className="grid gap-6 md:grid-cols-3">
                    {items.map((article) => (
                      <Link
                        key={article.href}
                        href={article.href}
                        className="group flex h-full flex-col rounded-xl border-2 border-border bg-card p-5 text-left shadow-sm transition-all hover:border-primary/50 hover:shadow-md"
                      >
                        <h3 className="mb-3 text-base font-semibold leading-snug group-hover:text-primary sm:text-lg">
                          {article.title}
                        </h3>
                        <p className="mb-4 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                          {article.description}
                        </p>
                        <span className="mt-auto text-xs font-medium text-primary group-hover:underline">
                          記事を読む →
                        </span>
                      </Link>
                    ))}
                  </div>
                </section>
              ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
