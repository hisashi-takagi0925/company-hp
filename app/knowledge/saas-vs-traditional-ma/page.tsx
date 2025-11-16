import { Header } from "@/app/_components/header";
import { Footer } from "@/app/_components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "一般事業M&AとSaaS M&Aの違い：「売り物」が何かが違う | ライチョウテックパートナーズ株式会社",
  description:
    "在庫・設備が中心の一般事業M&Aと、コードと契約が中心となるSaaS M&Aの違いを、デューデリジェンスやリスクの観点から整理します。",
};

export default function SaaSVsTraditionalMaPage() {
  return (
    <>
      <Header />
      <main>
        <section className="border-b bg-muted/30 py-4">
          <div className="container mx-auto px-4 text-sm text-muted-foreground">
            コラム &gt; 一般事業M&amp;AとSaaS M&amp;Aの違い：「売り物」が何かが違う
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <article className="mx-auto max-w-3xl">
              <header className="mb-8 sm:mb-10">
                <p className="mb-2 text-xs font-medium text-primary sm:text-sm">
                  比較・解説
                </p>
                <h1 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                  一般事業M&amp;AとSaaS M&amp;Aの違い：「売り物」が何かが違う
                </h1>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  SaaSのM&amp;Aは、従来の在庫・設備・人員が中心の事業と比べて、
                  <strong>「何を引き継ぐのか」</strong>
                  が大きく異なります。
                  本稿では、一般事業M&amp;AとSaaS M&amp;Aの違いを、デューデリジェンスやリスクの観点から整理します。
                </p>
              </header>

              <section className="mb-8 sm:mb-10">
                <h2 className="mb-3 text-xl font-semibold tracking-tight sm:text-2xl">
                  1. 売り物の中心：物・人・契約 vs コード・契約・データ
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  一般的な事業M&amp;Aでは、
                  <strong>在庫・設備・店舗・従業員</strong>
                  などのハードな資産が中心になることが多いですが、SaaSでは、
                  <strong>ソフトウェア（コード）と顧客契約・データ</strong>
                  が主要な「売り物」になります。
                </p>
                <ul className="mb-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <li>コード：将来の機能追加・改善の基盤</li>
                  <li>顧客契約：継続課金の源泉</li>
                  <li>データ：プロダクトの価値とユーザー体験の蓄積</li>
                </ul>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  そのため、SaaS M&amp;Aでは、
                  <strong>技術DDやデータの扱いに関する確認の比重が大きくなる</strong>
                  傾向があります。
                </p>
              </section>

              <section className="mb-8 sm:mb-10">
                <h2 className="mb-3 text-xl font-semibold tracking-tight sm:text-2xl">
                  2. デューデリジェンスの重心：財務中心から技術・プロダクト中心へ
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  一般事業では、財務・法務・税務・人事DDの比重が大きくなりますが、
                  SaaSではそこに
                  <strong>技術DD・プロダクトDD</strong>
                  が加わります。
                  特に小規模SaaSでは、財務情報だけでは見えないリスクが多く存在します。
                </p>
                <ul className="mb-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <li>コード品質・技術負債・テスト状況</li>
                  <li>インフラ構成・運用コスト・セキュリティ</li>
                  <li>機能別利用状況・解約率・継続率</li>
                </ul>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  こうした情報を踏まえて初めて、
                  <strong>「このSaaSを自社で持てるのか」「どの程度の追加投資が必要か」</strong>
                  を判断できるようになります。
                </p>
              </section>

              <section className="mb-10 rounded-lg bg-muted/30 p-5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                <h2 className="mb-2 text-sm font-semibold text-foreground sm:text-base">
                  3. リスクの出方：在庫・設備 vs 継続課金と技術負債
                </h2>
                <p className="mb-2">
                  一般事業では、「在庫リスク」「店舗や設備の老朽化」「人員の引き継ぎ」などが主なリスクになりますが、
                  SaaSでは次のようなリスクが中心になります。
                </p>
                <ul className="mb-2 list-disc space-y-1 pl-5">
                  <li>技術負債による開発コスト増大・障害リスク</li>
                  <li>継続課金の解約リスク（チャーン）</li>
                  <li>セキュリティ・個人情報保護に関するリスク</li>
                </ul>
                <p>
                  ライチョウテックパートナーズでは、こうしたSaaS特有のリスクを、
                  <strong>技術DDと事業DDを組み合わせる形で可視化する</strong>
                  ことで、一般的なM&amp;Aの枠組みとの橋渡しを行っています。
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
                    SaaS案件の進め方について相談してみる
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


