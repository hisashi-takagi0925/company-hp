import { Header } from "@/app/_components/header";
import { Footer } from "@/app/_components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "リプレイス vs 現行延命 vs ハイブリッド：買収後の技術戦略の選び方 | ライチョウテックパートナーズ株式会社",
  description:
    "SaaS・Webサービスを買収した後の技術戦略として、「全面リプレイス」「現行延命」「ハイブリッド」の3パターンを比較し、それぞれ向いているケースと注意点を整理します。",
};

export default function PostAcquisitionTechStrategyPage() {
  return (
    <>
      <Header />
      <main>
        <section className="border-b bg-muted/30 py-4">
          <div className="container mx-auto px-4 text-sm text-muted-foreground">
            コラム &gt; リプレイス vs 現行延命 vs ハイブリッド：買収後の技術戦略の選び方
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <article className="mx-auto max-w-3xl">
              <header className="mb-8 sm:mb-10">
                <p className="mb-2 text-xs font-medium text-primary sm:text-sm">
                  買収後の技術戦略
                </p>
                <h1 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                  リプレイス vs 現行延命 vs ハイブリッド：買収後の技術戦略の選び方
                </h1>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  SaaSを買収した後、
                  <strong>
                    「全部作り直すべきか」「現行のまましばらく運用するか」
                  </strong>
                  は悩ましいテーマです。
                  本稿では、「全面リプレイス」「現行延命」「ハイブリッド」の3パターンを比較し、
                  どのような状況でどの方針が向いているかを整理します。
                </p>
              </header>

              <section className="mb-8 sm:mb-10">
                <h2 className="mb-3 text-xl font-semibold tracking-tight sm:text-2xl">
                  パターン1：全面リプレイス
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  現行システムを一度凍結し、あらためてゼロから作り直すパターンです。
                  技術的には理想的なアーキテクチャを選びやすい一方で、
                  <strong>コストとリスクが大きくなりがち</strong>
                  です。
                </p>
                <p className="mb-2 text-sm font-medium text-primary sm:text-base">
                  向いているケース
                </p>
                <ul className="mb-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <li>現行システムの技術負債が極めて大きく、延命がほぼ不可能</li>
                  <li>セキュリティや法令対応の観点で、現行のままでは危険</li>
                  <li>十分な開発リソース・期間・予算を確保できる</li>
                </ul>
                <p className="mb-2 text-sm font-medium text-primary sm:text-base">
                  注意点
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  リプレイス中にビジネスが止まってしまわないよう、
                  <strong>現行システムの維持と並行しながら進める計画</strong>
                  が必要です。
                  「完成するまでローンチできない」状態は避けたいところです。
                </p>
              </section>

              <section className="mb-8 sm:mb-10">
                <h2 className="mb-3 text-xl font-semibold tracking-tight sm:text-2xl">
                  パターン2：現行延命（現行をベースに改善していく）
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  現行システムをそのまま使い続けつつ、
                  <strong>優先度の高い負債から順に解消していく</strong>
                  パターンです。
                  買収直後のリスクを抑えやすく、小規模SaaSでは現実的な選択肢となることが多いです。
                </p>
                <p className="mb-2 text-sm font-medium text-primary sm:text-base">
                  向いているケース
                </p>
                <ul className="mb-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <li>技術負債はあるが、致命的ではなく段階的な改善が可能</li>
                  <li>リプレイスに必要な投資余力が限られている</li>
                  <li>ユーザーへの影響を最小限に抑えたい</li>
                </ul>
                <p className="mb-2 text-sm font-medium text-primary sm:text-base">
                  注意点
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  「いつかリプレイスしたい」という前提だけを置き、
                  実際には何も進まない状態に陥らないよう、
                  <strong>1〜2年での具体的な改善計画</strong>
                  を持つことが重要です。
                </p>
              </section>

              <section className="mb-10 text-sm leading-relaxed text-muted-foreground sm:text-base">
                <h2 className="mb-3 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                  パターン3：ハイブリッド（新旧を共存させながら徐々に移行）
                </h2>
                <p className="mb-2">
                  コア部分は現行を維持しつつ、周辺機能や新規開発部分から新アーキテクチャに移行していくパターンです。
                  リスクとコストのバランスが取りやすく、
                  <strong>中長期的なリプレイス戦略として採用されることが多い</strong>
                  です。
                </p>
                <p className="mb-2">
                  どのパターンを選ぶにしても、
                  <strong>「何年スパンで、どこまで持たせるのか」</strong>
                  という時間軸と、
                  <strong>「売上・コスト・リスクのバランス」</strong>
                  を数字で整理することが重要です。
                  ライチョウテックパートナーズでは、技術DDの結果をもとに、
                  こうした技術戦略の検討もご支援しています。
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
                    買収後の技術戦略について相談してみる
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


