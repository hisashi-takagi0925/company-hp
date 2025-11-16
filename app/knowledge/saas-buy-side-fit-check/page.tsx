import { Header } from "@/app/_components/header";
import { Footer } from "@/app/_components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "自社で「持てるSaaS」かどうかを見極める事前チェック | ライチョウテックパートナーズ株式会社",
  description:
    "買収前に、自社の技術スタック・チーム体制・投資余力・シナジー仮説の観点から、検討中のSaaSが自社にフィットするかどうかを確認するためのチェックポイントをまとめました。",
};

export default function SaaSBuySideFitCheckPage() {
  return (
    <>
      <Header />
      <main>
        <section className="border-b bg-muted/30 py-4">
          <div className="container mx-auto px-4 text-sm text-muted-foreground">
            コラム &gt; 自社で「持てるSaaS」かどうかを見極める事前チェック
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <article className="mx-auto max-w-3xl">
              <header className="mb-8 sm:mb-10">
                <p className="mb-2 text-xs font-medium text-primary sm:text-sm">
                  買い手向け・事前検討
                </p>
                <h1 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                  自社で「持てるSaaS」かどうかを見極める事前チェック
                </h1>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  SaaS・Webサービスの買収を検討する際、
                  「良いサービスに見えるが、自社で本当に持てるのか」という不安はよくあります。
                  本稿では、
                  <strong>
                    技術・組織・投資余力・シナジーの4つの観点での事前チェック
                  </strong>
                  をまとめました。
                </p>
              </header>

              <section className="mb-8 sm:mb-10">
                <h2 className="mb-3 text-xl font-semibold tracking-tight sm:text-2xl">
                  1. 技術スタックと開発文化が自社と大きく乖離していないか
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  まずは、
                  <strong>技術的に「持てるか」</strong>
                  の観点です。
                  完全に同じスタックである必要はありませんが、自社のエンジニアがキャッチアップ可能かどうかは重要です。
                </p>
                <ul className="mb-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <li>主要な言語・フレームワークは、自社に知見があるか</li>
                  <li>モダンかレガシーかではなく、「自社のチームが触れるか」が鍵</li>
                  <li>開発プロセスやコードレビュー文化が、自社と極端に離れていないか</li>
                </ul>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  乖離が大きい場合でも、
                  <strong>「移行期間中にどう橋渡しするか」</strong>
                  を含めて検討できるかがポイントになります。
                </p>
              </section>

              <section className="mb-8 sm:mb-10">
                <h2 className="mb-3 text-xl font-semibold tracking-tight sm:text-2xl">
                  2. チーム体制：誰が責任を持ち、どのくらいの工数を割けるか
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  次に、
                  <strong>人のリソース</strong>
                  の観点です。買収後、そのサービスを「誰が」「どれくらいの時間」で見るのかを事前にイメージしておく必要があります。
                </p>
                <ul className="mb-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <li>責任者（プロダクトオーナー／PM／技術責任者）は誰になるか</li>
                  <li>開発・運用を担うエンジニアは何名程度アサインできそうか</li>
                  <li>既存プロダクトとの兼務になりすぎていないか</li>
                </ul>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  「誰が見るのか」が曖昧なまま買収してしまうと、
                  <strong>結果的に放置されてしまうリスク</strong>
                  が高まります。
                </p>
              </section>

              <section className="mb-8 sm:mb-10">
                <h2 className="mb-3 text-xl font-semibold tracking-tight sm:text-2xl">
                  3. 投資余力：技術負債や改善に対して、どこまで投資できるか
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  サービスの現状に技術負債やUI/UX上の課題がある場合、
                  <strong>どの程度の投資余力があるか</strong>
                  も重要です。
                  「課題は分かっているが、当面は何も手が付けられない」という状態は避けたいところです。
                </p>
                <ul className="mb-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <li>買収後1〜2年で、どの程度の開発工数や予算を投下できるか</li>
                  <li>最低限解消すべき技術負債に、優先的に使える余力があるか</li>
                  <li>その他の社内プロジェクトとの優先度のバランスはどうか</li>
                </ul>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  技術DDの結果と、自社の投資余力を照らし合わせて、
                  <strong>「持てる範囲かどうか」</strong>
                  を判断していくことになります。
                </p>
              </section>

              <section className="mb-10 text-sm leading-relaxed text-muted-foreground sm:text-base">
                <h2 className="mb-3 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                  4. シナジー仮説：何のために買うのかを一文で言えるか
                </h2>
                <p className="mb-2">
                  最後に、
                  <strong>「なぜそのサービスを買うのか」</strong>
                  を一文で言えるかどうかをチェックしてみてください。
                </p>
                <ul className="mb-2 list-disc space-y-1 pl-5">
                  <li>既存プロダクトの機能拡張のため（機能買い）</li>
                  <li>新しい顧客セグメントやチャネルの獲得のため（顧客基盤買い）</li>
                  <li>特定ドメインに強いチームや技術力の獲得のため（チーム・技術買い）</li>
                </ul>
                <p>
                  ライチョウテックパートナーズでは、こうした事前チェックを一緒に行いながら、
                  <strong>「自社で本当に持てるSaaSかどうか」</strong>
                  を技術・事業両面から検討するお手伝いをしています。
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
                    自社にフィットするSaaSか相談してみる
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


