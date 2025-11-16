import { Header } from "@/app/_components/header";
import { Footer } from "@/app/_components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "小規模SaaSの価格レンジを考える3つの軸 | ライチョウテックパートナーズ株式会社",
  description:
    "月商数十万〜数百万円規模の小規模SaaSのM&Aにおいて、どのように価格レンジを考えるか。ARR（売上規模）・解約率（継続性）・技術負債（追加投資コスト）の3つの軸から整理します。",
};

export default function SaaSValuationAxesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="border-b bg-muted/30 py-4">
          <div className="container mx-auto px-4 text-sm text-muted-foreground">
            ナレッジ &gt; 小規模SaaSの価格レンジを考える3つの軸
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <article className="mx-auto max-w-3xl">
              <header className="mb-8 sm:mb-10">
                <p className="mb-2 text-xs font-medium text-primary sm:text-sm">
                  バリュエーション・価格の考え方
                </p>
                <h1 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                  小規模SaaSの価格レンジを考える3つの軸
                </h1>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  小規模SaaS・個人開発サービスのM&amp;Aでは、
                  「いくらぐらいで売れる／買えるのか」という問いに明確な答えがなく、悩まれるケースが多くあります。
                  本記事では、あくまで一般論として、
                  <strong>価格レンジを考えるときの3つの軸</strong>
                  を整理します。
                </p>
              </header>

              <section className="mb-10 rounded-lg bg-muted/50 p-4 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                <h2 className="mb-2 text-sm font-semibold text-foreground sm:text-base">
                  注意書き
                </h2>
                <p className="mb-2">
                  ここで述べる内容は、あくまで一般的な考え方であり、
                  特定の案件の価格を示すものではありません。
                  実際の価格は、個別の状況（成長性・シナジー・交渉状況など）によって大きく変動します。
                </p>
              </section>

              <section className="mb-8 sm:mb-10">
                <h2 className="mb-3 text-xl font-semibold tracking-tight sm:text-2xl">
                  1. ARR（売上規模）という縦軸
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  まず最初の軸は、シンプルに
                  <strong>年間売上（ARR: Annual Recurring Revenue）</strong>
                  です。サブスク型のSaaSでは、月次売上を12倍した値をベースに考えることが多くなります。
                </p>
                <ul className="mb-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <li>月商30万円 → ARR約360万円</li>
                  <li>月商100万円 → ARR約1,200万円</li>
                  <li>月商300万円 → ARR約3,600万円</li>
                </ul>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  一般論としては、このARRに対して「何倍ぐらいのマルチプルが妥当か」
                  を考えることになります。ただし、小規模SaaSの場合、
                  大企業向けの公開事例のような高いマルチプルがそのまま当てはまるとは限りません。
                </p>
              </section>

              <section className="mb-8 sm:mb-10">
                <h2 className="mb-3 text-xl font-semibold tracking-tight sm:text-2xl">
                  2. 解約率・継続率という安定性の軸
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  同じARRであっても、
                  <strong>解約率（チャーンレート）</strong>
                  が異なれば、将来のキャッシュフローの見通しは大きく変わります。
                  そのため、単純な売上規模だけでなく、
                  <strong>「どれくらいの確率で続いてくれそうか」</strong>
                  も重要な評価軸になります。
                </p>
                <ul className="mb-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <li>月次解約率1〜2%：比較的安定したサービス</li>
                  <li>月次解約率5%以上：入れ替わりが激しく、将来予測が難しい</li>
                  <li>
                    シーズナル要因（年度末・繁忙期）なども加味して、直近数ヶ月だけで判断しない
                  </li>
                </ul>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  解約率が低く、ユーザーが長く使ってくれているサービスは、
                  売上規模が同じでも
                  <strong>「質の良いARR」</strong>
                  として、相対的に高く評価される傾向があります。
                </p>
              </section>

              <section className="mb-8 sm:mb-10">
                <h2 className="mb-3 text-xl font-semibold tracking-tight sm:text-2xl">
                  3. 技術負債・追加投資コストというコストの軸
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  3つ目の軸が、
                  <strong>技術負債と、それを解消するための追加投資コスト</strong>
                  です。売上や解約率だけを見ると魅力的でも、
                  「技術的に持てない」レベルの負債がある場合は、価格に大きく影響します。
                </p>
                <ul className="mb-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <li>フレームワーク・言語がすでにEOLを迎えている</li>
                  <li>テストがほぼなく、変更のたびに大きな不具合が出ている</li>
                  <li>インフラコストが売上に対して過大で、構成の見直しが必須</li>
                  <li>特定の1人しか全体像を把握していない（バス係数が1に近い）</li>
                </ul>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  技術DDでは、これらを
                  <strong>
                    「1〜2年でどこまで直すべきか」「そのためにどの程度の工数が必要か」
                  </strong>
                  という形に見積もり、価格レンジの調整材料として使っていきます。
                </p>
              </section>

              <section className="mb-10 rounded-lg bg-muted/30 p-5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                <h2 className="mb-2 text-sm font-semibold text-foreground sm:text-base">
                  3つの軸をどう組み合わせて考えるか
                </h2>
                <p className="mb-2">
                  実務では、上記3軸をおおまかに掛け合わせて、
                  「このレンジなら前向きに検討できそう」というゾーンを探っていきます。
                </p>
                <ul className="mb-2 list-disc space-y-1 pl-5">
                  <li>ARR：現在の売上規模の把握</li>
                  <li>解約率：売上がどれくらい維持・成長しそうかの見立て</li>
                  <li>
                    技術負債：将来の投資コスト（追加開発・リプレイス・人件費）の見立て
                  </li>
                </ul>
                <p>
                  たとえば、ARRはそれほど大きくなくても、
                  解約率が低く、技術的にも健全であれば、
                  <strong>「少し高めでも長期的に回収できる」</strong>
                  と判断されることがあります。
                  逆に、売上は大きくても解約率が高く技術負債も重い場合は、
                  <strong>慎重な価格設定や条件調整が必要</strong>
                  になります。
                </p>
              </section>

              <section className="mb-10 text-sm leading-relaxed text-muted-foreground sm:text-base">
                <h2 className="mb-3 text-xl font-semibold tracking-tight sm:text-2xl">
                  「いくらで売れるか」より「どの条件なら納得できるか」
                </h2>
                <p className="mb-3">
                  小規模SaaSのM&amp;Aでは、
                  一意の「正しい価格」を見つけることはほぼ不可能です。
                  それよりも、
                  <strong>
                    「どのレンジ・条件なら、売り手・買い手の双方が納得できるか」
                  </strong>
                  を対話しながら探ることが現実的です。
                </p>
                <p className="mb-3">
                  ライチョウテックパートナーズでは、売上や指標だけでなく、
                  技術負債や追加投資コストも含めて整理することで、
                  <strong>感覚的な「高い／安い」の議論を減らし</strong>
                  、数字と前提を共有したうえで条件を検討できるようにすることを重視しています。
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
                    価格レンジの考え方について相談してみる
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


