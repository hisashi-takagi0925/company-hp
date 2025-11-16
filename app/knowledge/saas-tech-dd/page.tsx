import { Header } from "@/app/_components/header";
import { Footer } from "@/app/_components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "SaaSの技術DDで見る5つのポイント | ライチョウテックパートナーズ株式会社",
  description:
    "SaaS・Webサービスの技術デューデリジェンス（技術DD）で必ず確認している5つの観点を解説します。コード品質・アーキテクチャ・テスト・インフラ構成・セキュリティをどのように評価し、M&Aの意思決定にどうつなげるかを整理しました。",
};

export default function SaaSTechDDPage() {
  return (
    <>
      <Header />
      <main>
        <section className="border-b bg-muted/30 py-4">
          <div className="container mx-auto px-4 text-sm text-muted-foreground">
            ナレッジ &gt; SaaSの技術DDで見る5つのポイント
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <article className="mx-auto max-w-3xl">
              <header className="mb-8 sm:mb-10">
                <p className="mb-2 text-xs font-medium text-primary sm:text-sm">
                  技術DD・デューデリジェンス
                </p>
                <h1 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                  SaaSの技術DDで見る5つのポイント
                </h1>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  小規模〜中規模のSaaS・WebサービスのM&amp;Aでは、
                  「売上は悪くないが、技術的に持てるのか」が最大の論点になります。
                  本記事では、実務で技術DDを行う際に必ず見る5つの観点と、
                  それをどのように意思決定に落とし込むかを整理します。
                </p>
              </header>

              <section className="mb-10 rounded-lg bg-muted/50 p-4 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                <h2 className="mb-2 text-sm font-semibold text-foreground sm:text-base">
                  この記事の前提
                </h2>
                <ul className="list-disc space-y-1 pl-5">
                  <li>月商数十万〜数百万円規模のSaaS・Webサービスを想定</li>
                  <li>
                    売り手・買い手ともに、専任のCTOやSREチームがいない前提（少人数開発）
                  </li>
                  <li>
                    「技術的に運用しきれないリスク」を事前に見極めたい買い手側のニーズを想定
                  </li>
                </ul>
              </section>

              <section className="mb-8 sm:mb-10">
                <h2 className="mb-3 text-xl font-semibold tracking-tight sm:text-2xl">
                  1. 技術スタックとアーキテクチャ
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  最初の観点は、「どの技術で、どのような構造で作られているか」です。
                  ここでは良し悪しというより、
                  <strong>自社のチームが持てるかどうか</strong>{" "}
                  を判断するための情報整理が中心になります。
                </p>
                <ul className="mb-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <li>フロントエンド・バックエンド・インフラの主要技術</li>
                  <li>モノリスかマイクロサービスか、レイヤー分割の有無</li>
                  <li>主要な外部SaaS・ミドルウェアへの依存関係</li>
                </ul>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  ここで重要なのは、
                  <strong>
                    「理想的な構成かどうか」よりも「自社で安全に運用できる射程にあるか」
                  </strong>
                  です。多少の古いスタックであっても、
                  チームの経験と合っていれば大きな問題ではないケースも多くあります。
                </p>
              </section>

              <section className="mb-8 sm:mb-10">
                <h2 className="mb-3 text-xl font-semibold tracking-tight sm:text-2xl">
                  2. コード品質と設計方針
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  次に見るのは、ソースコードそのものです。
                  行数やファイル数といった表面的な情報だけでなく、
                  <strong>「変更がどれだけ怖くないか」</strong>{" "}
                  を中心に評価します。
                </p>
                <ul className="mb-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <li>責務ごとにファイル・コンポーネントが分割されているか</li>
                  <li>コピー＆ペーストの多用や、巨大なGodクラスの有無</li>
                  <li>命名規則・ディレクトリ構造に一貫性があるか</li>
                  <li>ビジネスロジックとUIロジックが混在しすぎていないか</li>
                </ul>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  完璧なクリーンアーキテクチャを求める必要はありませんが、
                  <strong>「どこを触れば何が起きるかが読み取れるか」</strong>
                  は重要です。ここが読めない場合、
                  買収後の機能追加や法対応のたびに大きなリスクを抱えることになります。
                </p>
              </section>

              <section className="mb-8 sm:mb-10">
                <h2 className="mb-3 text-xl font-semibold tracking-tight sm:text-2xl">
                  3. テストとリリースプロセス
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  SaaSを引き継いだあと、
                  <strong>安全に変更できるかどうか</strong>{" "}
                  を左右するのがこのパートです。
                  テストコードの有無だけでなく、実際の運用フローも含めて確認します。
                </p>
                <ul className="mb-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <li>単体テスト・統合テスト・E2Eテストの有無とカバレッジ感</li>
                  <li>
                    本番リリースまでの流れ（ブランチ運用・レビュー・CI/CD）
                  </li>
                  <li>障害発生時のロールバック手順や対応フロー</li>
                </ul>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  テストが薄い場合でも、
                  <strong>「どの範囲からテストを足せば現実的か」</strong>
                  を見立てることで、買収後1〜2年の改善ロードマップに落とし込むことができます。
                  その意味で、技術DDは「買わないためのチェック」だけでなく、
                  <strong>「買ったあとにどう改善するかの設計」</strong>
                  でもあります。
                </p>
              </section>

              <section className="mb-8 sm:mb-10">
                <h2 className="mb-3 text-xl font-semibold tracking-tight sm:text-2xl">
                  4. インフラ構成と運用コスト
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  インフラは、<strong>毎月の固定費と運用リスク</strong>{" "}
                  に直結します。 Cloud
                  Providerやマネージドサービスの選定だけでなく、
                  実際の課金状況や監視体制も含めて確認します。
                </p>
                <ul className="mb-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <li>本番・ステージング環境の有無と分離のされ方</li>
                  <li>インフラコストの大まかな内訳と、売上に対する比率</li>
                  <li>監視・アラート・ログ収集の有無</li>
                </ul>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  特に小規模SaaSでは、売上に比してインフラコストが高止まりしているケースも少なくありません。
                  技術DDでは、
                  <strong>
                    「構成を少し整理するだけでどの程度コストを落とせるか」の見込み
                  </strong>
                  までセットで評価することが重要です。
                </p>
              </section>

              <section className="mb-8 sm:mb-10">
                <h2 className="mb-3 text-xl font-semibold tracking-tight sm:text-2xl">
                  5. セキュリティと継続性（バス係数）
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  最後に、<strong>サービスを安心して預かれるか</strong>{" "}
                  という観点で、
                  セキュリティと「人」にまつわる継続性を確認します。
                </p>
                <ul className="mb-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <li>認証・認可まわりの実装と、権限設計の有無</li>
                  <li>個人情報・決済情報などセンシティブデータの扱い</li>
                  <li>
                    ドメイン・リポジトリ・各種SaaSの権限管理と引き継ぎのしやすさ
                  </li>
                  <li>
                    バス係数（特定の1人が抜けた瞬間にサービスが止まるリスク）の大きさ
                  </li>
                </ul>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  セキュリティは「完璧かどうか」ではなく、
                  <strong>
                    「重大な穴がないか」「どこから手当てすべきか」
                  </strong>
                  を見極めることが現実的です。技術DDのレポートでは、
                  優先度順に改善案を提示することで、買収後の投資計画づくりを支援します。
                </p>
              </section>

              <section className="mb-10 rounded-lg bg-muted/30 p-5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                <h2 className="mb-2 text-sm font-semibold text-foreground sm:text-base">
                  技術DDの結果をどう意思決定につなげるか
                </h2>
                <p className="mb-2">
                  技術DDのゴールは、「買う／買わない」だけではありません。
                  実務では次のような形で意思決定につなげていきます。
                </p>
                <ul className="mb-2 list-disc space-y-1 pl-5">
                  <li>買収の是非そのもの（地雷案件でないか）の判断</li>
                  <li>
                    価格レンジの調整（技術負債や追加投資コストを織り込む）
                  </li>
                  <li>買収後1〜2年の技術投資計画・チーム体制の見立て</li>
                  <li>
                    契約条件（表明保証・移行期間・オーナーの関与期間など）への反映
                  </li>
                </ul>
                <p>
                  ライチョウテックパートナーズでは、 こうした技術DDの観点を
                  <strong>「投資判断にそのまま使えるレポート」</strong>
                  として整理し、買い手・売り手・仲介の三者が同じ前提に立てるよう支援しています。
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
                <Button asChild size="sm" className="sm:min-w-[230px]">
                  <Link href="/contact">技術DDの相談をしてみる</Link>
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
