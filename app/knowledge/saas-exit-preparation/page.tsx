import { Header } from "@/app/_components/header";
import { Footer } from "@/app/_components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "初めてのSaaS事業売却で準備しておきたいこと | ライチョウテックパートナーズ株式会社",
  description:
    "初めてSaaS・Webサービスの売却を検討するオーナー向けに、売却検討の前後で準備しておくとスムーズになる数字・資料・整理のポイントをまとめました。小規模SaaS・個人開発サービスを前提としています。",
};

export default function SaaSExitPreparationPage() {
  return (
    <>
      <Header />
      <main>
        <section className="border-b bg-muted/30 py-4">
          <div className="container mx-auto px-4 text-sm text-muted-foreground">
            ナレッジ &gt; 初めてのSaaS事業売却で準備しておきたいこと
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <article className="mx-auto max-w-3xl">
              <header className="mb-8 sm:mb-10">
                <p className="mb-2 text-xs font-medium text-primary sm:text-sm">
                  売却準備・オーナー向け
                </p>
                <h1 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                  初めてのSaaS事業売却で準備しておきたいこと
                </h1>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  「そろそろサービスを誰かに引き継いでもらった方が良いかもしれない」と思っても、
                  何から手を付ければ良いか分からず、そのまま時間だけが過ぎてしまうことがあります。
                  本記事では、初めてSaaS事業の売却を検討するオーナー向けに、
                  <strong>事前に準備しておくとスムーズになるポイント</strong>
                  をまとめました。
                </p>
              </header>

              <section className="mb-8 sm:mb-10">
                <h2 className="mb-3 text-xl font-semibold tracking-tight sm:text-2xl">
                  1. 売却を考える理由を、自分の言葉で整理する
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  最初に整理しておきたいのは、
                  <strong>「なぜ売却を検討しているのか」</strong>
                  です。これは金額よりも重要な情報で、
                  買い手が「どのように引き継げば良いか」を考えるうえでの出発点になります。
                </p>
                <ul className="mb-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <li>時間が足りず、新機能開発や改善に手が回らない</li>
                  <li>本業との両立が難しくなってきた</li>
                  <li>技術負債が重く、これ以上1人で抱え続けるのが不安</li>
                  <li>別の事業に集中したいため、きちんと畳みたい・託したい</li>
                </ul>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  理由を言語化しておくと、
                  <strong>「どんな買い手に託すのが良いか」「どこまで関わり続けたいか」</strong>
                  も自然と見えてきます。
                </p>
              </section>

              <section className="mb-8 sm:mb-10">
                <h2 className="mb-3 text-xl font-semibold tracking-tight sm:text-2xl">
                  2. 売上・顧客・解約のシンプルな「数字のメモ」を作る
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  きれいな資料でなくても構いませんが、
                  <strong>最低限の数字</strong>
                  がすぐに出てくる状態にしておくと、初回相談や打ち合わせがとてもスムーズになります。
                </p>
                <ul className="mb-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <li>月次売上（直近12ヶ月分くらい）</li>
                  <li>顧客数・主要プラン別の契約数</li>
                  <li>大口顧客の有無と、その売上比率</li>
                  <li>解約件数・解約率のざっくりしたイメージ</li>
                </ul>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Excelやスプレッドシート、メモツールなど、形式は問いません。
                  <strong>「自分で見て状況が分かる」</strong>
                  程度の整理ができていれば十分なスタートになります。
                </p>
              </section>

              <section className="mb-8 sm:mb-10">
                <h2 className="mb-3 text-xl font-semibold tracking-tight sm:text-2xl">
                  3. 技術・運用の現状を、等身大で書き出してみる
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  技術的な状況や運用の実態も、
                  <strong>「良いところ」と「課題」をセットで</strong>
                  書き出しておくと、買い手との対話がしやすくなります。
                  完璧である必要はなく、むしろ正直な情報の方が信頼につながります。
                </p>
                <ul className="mb-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <li>主要な技術スタック（フロント・バックエンド・インフラ）</li>
                  <li>テストの有無・どの程度書かれているかの感覚</li>
                  <li>障害対応や問い合わせ対応の実態（頻度・負荷感）</li>
                  <li>「ここが不安」「ここは気に入っている」と感じているポイント</li>
                </ul>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  技術負債がある場合も、
                  <strong>「どこが負債だと思っているか」「どこまでなら自分でも直せそうか」</strong>
                  といった感覚を書いておくと、技術DDを行う側にとっても参考になります。
                </p>
              </section>

              <section className="mb-8 sm:mb-10">
                <h2 className="mb-3 text-xl font-semibold tracking-tight sm:text-2xl">
                  4. 売却後の関わり方のイメージを持っておく
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  小規模SaaSのM&amp;Aでは、
                  <strong>「売って終わり」ではなく、一定期間関わり続ける形</strong>
                  もよくあります。あらかじめ、
                  どの程度関わる意欲があるかを自分の中で整理しておくと、条件の議論がしやすくなります。
                </p>
                <ul className="mb-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <li>移行期間中は、どの程度時間を割けそうか（週◯時間など）</li>
                  <li>新オーナーの開発者に、どこまで技術的な引き継ぎを行えるか</li>
                  <li>顧客向けの告知やサポートに、どの程度関わりたいか</li>
                </ul>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  これらは、必ずしも最初から固める必要はありませんが、
                  <strong>「全く関わらない前提なのか」「一定期間は伴走できるのか」</strong>
                  のイメージがあるだけでも、候補となる買い手の幅が変わってきます。
                </p>
              </section>

              <section className="mb-10 rounded-lg bg-muted/30 p-5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                <h2 className="mb-2 text-sm font-semibold text-foreground sm:text-base">
                  「完璧な準備」より「素直な情報」を
                </h2>
                <p className="mb-2">
                  初めての事業売却では、
                  完璧な資料を作ろうとして手が止まってしまうことがあります。
                  実務的には、
                  <strong>完璧でなくても、素直に現状を共有してもらう方がずっと進めやすい</strong>
                  というのが正直なところです。
                </p>
                <p>
                  ライチョウテックパートナーズでは、
                  小規模SaaSや個人開発サービスのオーナーと一緒に現状を整理しながら、
                  売却の可能性や進め方を検討するところから伴走しています。
                  「売れる状態なのか分からない」「何から話せば良いか不安」という段階でも、お気軽にご相談ください。
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
                <Button asChild size="sm" className="sm:min-w-[240px]">
                  <Link href="/contact">
                    SaaS売却の準備について相談してみる
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


