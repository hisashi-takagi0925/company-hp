import { Header } from "@/app/_components/header";
import { Footer } from "@/app/_components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "表明保証で揉めやすいポイントと技術観点からの落としどころ | ライチョウテックパートナーズ株式会社",
  description:
    "SaaS・WebサービスのM&Aにおいて、表明保証（Reps & Warranties）が問題になりやすいポイントと、技術DDの結果をどのように条件へ反映するかの考え方を整理します。",
};

export default function RepsWarrantiesAndTechPage() {
  return (
    <>
      <Header />
      <main>
        <section className="border-b bg-muted/30 py-4">
          <div className="container mx-auto px-4 text-sm text-muted-foreground">
            コラム &gt; 表明保証で揉めやすいポイントと技術観点からの落としどころ
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <article className="mx-auto max-w-3xl">
              <header className="mb-8 sm:mb-10">
                <p className="mb-2 text-xs font-medium text-primary sm:text-sm">
                  契約・リスク・技術DD
                </p>
                <h1 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                  表明保証で揉めやすいポイントと技術観点からの落としどころ
                </h1>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  M&amp;Aの最終契約では、
                  <strong>表明保証（Reps &amp; Warranties）</strong>
                  が必ずと言っていいほど登場します。
                  SaaS案件では特に、
                  <strong>技術・セキュリティ・データ周りの表明保証</strong>
                  で議論になることが少なくありません。
                  本稿では、よく揉めるポイントと、その落としどころの考え方を整理します。
                </p>
              </header>

              <section className="mb-8 sm:mb-10">
                <h2 className="mb-3 text-xl font-semibold tracking-tight sm:text-2xl">
                  1. 表明保証とは何か（ざっくり）
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  表明保証は、
                  <strong>「売り手が事実としてこうなっています」と約束する条項</strong>
                  です。
                  もし後から重大な齟齬が見つかった場合、
                  買い手が損害賠償などを請求できる根拠になります。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  SaaS案件では、他の事業と同様に
                  財務・法務・税務・人事に関するものに加え、
                  <strong>知財・ソフトウェア・データ・セキュリティ</strong>
                  に関する表明保証が入ることが多くなります。
                </p>
              </section>

              <section className="mb-8 sm:mb-10">
                <h2 className="mb-3 text-xl font-semibold tracking-tight sm:text-2xl">
                  2. SaaS案件で揉めやすい技術系の表明保証
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  代表的には、次のような表明保証が議論の対象になりやすいです。
                </p>
                <ul className="mb-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <li>ソフトウェアに重大なバグや脆弱性が存在しないこと</li>
                  <li>第三者の知的財産権を侵害していないこと</li>
                  <li>個人情報・機密情報を適切に取り扱っていること</li>
                  <li>重大なインシデント（情報漏洩・長時間障害など）が過去にないこと</li>
                </ul>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  しかし実務では、
                  <strong>「重大なバグ」がどこまでか、「適切な取り扱い」が何を指すか</strong>
                  があいまいなため、そのままでは現実的でない表現になってしまうこともあります。
                </p>
              </section>

              <section className="mb-10 rounded-lg bg-muted/30 p-5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                <h2 className="mb-2 text-sm font-semibold text-foreground sm:text-base">
                  3. 技術DDの結果をどう表明保証に反映するか
                </h2>
                <p className="mb-2">
                  技術DDで判明した内容を踏まえ、
                  <strong>表明保証の範囲を現実的なものに調整する</strong>
                  ことが重要です。
                  例えば次のような考え方があります。
                </p>
                <ul className="mb-2 list-disc space-y-1 pl-5">
                  <li>
                    既知のバグや脆弱性については、
                    表明保証の対象外としつつ、別途改善計画や価格調整で取り扱う
                  </li>
                  <li>
                    「重大なバグ」の定義を、サービス停止や情報漏洩に至るレベルに限定する
                  </li>
                  <li>
                    セキュリティについては、「現時点で一般的に合理的と考えられる水準」という表現にとどめる
                  </li>
                </ul>
                <p>
                  ライチョウテックパートナーズでは、技術DDのレポートをもとに、
                  どのリスクを表明保証で、どのリスクを条件や価格・改善計画で扱うかを整理し、
                  <strong>現実的な落としどころ</strong>
                  を検討するお手伝いを行っています。
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
                    表明保証と技術リスクの整理を相談してみる
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


