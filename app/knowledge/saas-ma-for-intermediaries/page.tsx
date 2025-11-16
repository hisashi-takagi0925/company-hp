import { Header } from "@/app/_components/header";
import { Footer } from "@/app/_components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "SaaS案件で「技術がよく分からない」仲介が押さえておきたい論点 | ライチョウテックパートナーズ株式会社",
  description:
    "SaaS・WebサービスのM&A案件を扱う仲介・FAの方向けに、技術に詳しくなくても押さえておきたい最低限の論点と、どこから専門家に任せるべきかの目安を整理しました。",
};

export default function SaaSMaForIntermediariesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="border-b bg-muted/30 py-4">
          <div className="container mx-auto px-4 text-sm text-muted-foreground">
            コラム &gt; SaaS案件で「技術がよく分からない」仲介が押さえておきたい論点
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <article className="mx-auto max-w-3xl">
              <header className="mb-8 sm:mb-10">
                <p className="mb-2 text-xs font-medium text-primary sm:text-sm">
                  仲介・FA向け
                </p>
                <h1 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                  SaaS案件で「技術がよく分からない」仲介が押さえておきたい論点
                </h1>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  SaaS・WebサービスのM&amp;A案件では、
                  「技術的なことはよく分からないが、案件として扱っている」という仲介・FAの方も多くいらっしゃいます。
                  本稿では、
                  <strong>技術の専門家でなくても押さえておきたい最低限の論点</strong>
                  と、
                  <strong>どこから専門家に任せるべきかの目安</strong>
                  を整理します。
                </p>
              </header>

              <section className="mb-8 sm:mb-10">
                <h2 className="mb-3 text-xl font-semibold tracking-tight sm:text-2xl">
                  1. 「何で動いているのか」をざっくり聞く
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  まずは、
                  <strong>技術スタックの概要</strong>
                  をざっくり把握します。細かい違いまで理解する必要はありませんが、
                  次のような質問ができると、技術パートナーにも橋渡ししやすくなります。
                </p>
                <ul className="mb-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <li>フロントエンド・バックエンドの主要な言語・フレームワークは何か</li>
                  <li>インフラはどのクラウド（AWS/GCP/Azureなど）を使っているか</li>
                  <li>大きな外部サービスへの依存（決済・通知・分析など）はあるか</li>
                </ul>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  ここで得た情報は、そのまま技術DDの入口情報として活用できます。
                </p>
              </section>

              <section className="mb-8 sm:mb-10">
                <h2 className="mb-3 text-xl font-semibold tracking-tight sm:text-2xl">
                  2. 技術負債と運用体制について、オーナーの認識を聞く
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  技術負債の詳細は専門家に任せるとしても、
                  <strong>オーナー自身がどう感じているか</strong>
                  を聞いておくことで、リスクの目安をつかむことができます。
                </p>
                <ul className="mb-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <li>技術的に不安に感じているところはどこか</li>
                  <li>障害やトラブルはどのくらいの頻度で起きているか</li>
                  <li>どの程度の時間を保守・運用に使っているか</li>
                  <li>一人が全体を把握している「属人状態」になっていないか</li>
                </ul>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  こうしたヒアリング結果を、
                  <strong>案件メモに素直に書いておく</strong>
                  だけでも、技術パートナーが入りやすくなります。
                </p>
              </section>

              <section className="mb-10 text-sm leading-relaxed text-muted-foreground sm:text-base">
                <h2 className="mb-3 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                  3. どこから専門家に任せるべきかの目安
                </h2>
                <p className="mb-2">
                  次のような状況が見えてきたら、
                  <strong>技術DDの専門家と一緒に進める</strong>
                  ことを検討するのがおすすめです。
                </p>
                <ul className="mb-2 list-disc space-y-1 pl-5">
                  <li>オーナー自身が技術負債の内容をうまく説明できない</li>
                  <li>フレームワークやインフラが古く、今後の維持が不安そう</li>
                  <li>買い手側に十分な技術リソースがない、または不安を感じている</li>
                  <li>情報セキュリティや個人情報の扱いに懸念がありそう</li>
                </ul>
                <p>
                  ライチョウテックパートナーズでは、こうしたSaaS案件において、
                  <strong>仲介・FAの方と協業して技術DDを行うパートナー</strong>
                  として関わることが多くあります。
                  まずは「技術的にどこが見えていないか」を一緒に整理するところからお手伝いできます。
                </p>
              </section>

              <section className="mt-8 flex flex-col gap-3 border-t pt-6 sm:flex-row sm:justify-between">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="sm:min-w-[180px]"
                >
                  <Link href="/knowledge">コラム一覧に戻る</Link>
                </Button>
                <Button asChild size="sm" className="sm:min-w-[260px]">
                  <Link href="/contact">
                    SaaS案件の技術DDパートナー相談をする
                  </Link>
                </Button>
              </section>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


