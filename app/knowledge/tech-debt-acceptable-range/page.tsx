import { Header } from "@/app/_components/header";
import { Footer } from "@/app/_components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "この技術負債は許容範囲か？を判断するための目安 | ライチョウテックパートナーズ株式会社",
  description:
    "SaaS・Webサービスの技術負債について、「どこまでなら許容できるか」「どこからは危険か」を判断するための目安を、影響度と発生頻度の観点から整理します。",
};

export default function TechDebtAcceptableRangePage() {
  return (
    <>
      <Header />
      <main>
        <section className="border-b bg-muted/30 py-4">
          <div className="container mx-auto px-4 text-sm text-muted-foreground">
            コラム &gt; この技術負債は許容範囲か？を判断するための目安
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <article className="mx-auto max-w-3xl">
              <header className="mb-8 sm:mb-10">
                <p className="mb-2 text-xs font-medium text-primary sm:text-sm">
                  技術負債・リスク評価
                </p>
                <h1 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                  この技術負債は許容範囲か？を判断するための目安
                </h1>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  技術負債は、
                  <strong>まったく無い状態を目指すものではなく、付き合い方をデザインするもの</strong>
                  です。
                  本稿では、「どこまでなら許容できるか」「どこからは危険か」を判断するためのシンプルな目安を紹介します。
                </p>
              </header>

              <section className="mb-8 sm:mb-10">
                <h2 className="mb-3 text-xl font-semibold tracking-tight sm:text-2xl">
                  1. 影響度 × 発生頻度で4象限に分けてみる
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  個々の技術負債を評価するときは、
                  <strong>「影響度」と「発生頻度」</strong>
                  の2軸でざっくり分けてみると整理しやすくなります。
                </p>
                <ul className="mb-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <li>影響度：問題が起きたときのインパクト（売上・信頼・法令など）</li>
                  <li>発生頻度：その部分に変更が入る頻度／障害が起こる頻度</li>
                </ul>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  高影響×高頻度の負債は、
                  <strong>短期的に解消すべき危険ゾーン</strong>
                  であり、
                  低影響×低頻度の負債は「当面は様子見でもよいゾーン」といった形で優先順位をつけることができます。
                </p>
              </section>

              <section className="mb-8 sm:mb-10">
                <h2 className="mb-3 text-xl font-semibold tracking-tight sm:text-2xl">
                  2. 許容しやすい負債・危険になりやすい負債の例
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  具体例として、次のような負債は「比較的許容しやすい」一方で、
                  どのような状態は「さすがに危険」と言えるかを整理します。
                </p>
                <ul className="mb-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <li>
                    許容しやすい例：
                    管理画面のUIが古い／内部的に少し冗長なコードだが、障害は出ていない
                  </li>
                  <li>
                    危険な例：
                    認証・課金周りにテストがなく、過去に何度も障害が出ている
                  </li>
                  <li>
                    危険寄りの例：
                    すでにサポート切れのフレームワークに依存しており、セキュリティパッチも当てられない
                  </li>
                </ul>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  重要なのは、
                  <strong>「ユーザーの信頼や法令遵守に直結する部分」に負債が集中していないか</strong>
                  を見ることです。
                </p>
              </section>

              <section className="mb-10 rounded-lg bg-muted/30 p-5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                <h2 className="mb-2 text-sm font-semibold text-foreground sm:text-base">
                  3. 許容可否の判断は「時間軸」とセットで考える
                </h2>
                <p className="mb-2">
                  ある負債が許容できるかどうかは、
                  <strong>「今この瞬間」だけでなく、「1〜2年の時間軸」</strong>
                  で考える必要があります。
                </p>
                <ul className="mb-2 list-disc space-y-1 pl-5">
                  <li>今すぐ直さないと危険なもの</li>
                  <li>1年以内に手を入れるべきもの</li>
                  <li>2〜3年スパンでリプレイスを検討すればよいもの</li>
                  <li>現状のままでも大きな問題になりにくいもの</li>
                </ul>
                <p>
                  ライチョウテックパートナーズでは、技術DDの場でこうした区分けを行い、
                  <strong>「許容できる負債」と「前提として価格や条件に織り込むべき負債」</strong>
                  を整理したうえで、投資判断の材料とすることを重視しています。
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
                    技術負債の許容範囲について相談してみる
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


