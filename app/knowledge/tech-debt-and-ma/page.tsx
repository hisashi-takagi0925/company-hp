import { Header } from "@/app/_components/header";
import { Footer } from "@/app/_components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "技術負債と事業価値のバランスを取るフレームワーク | ライチョウテックパートナーズ株式会社",
  description:
    "技術負債のあるSaaS・WebサービスをM&Aで引き継ぐ際に、「全部リプレイス」か「現状維持」かの二択に陥らないための考え方を整理します。どこまで・どの順番で直すかを決めるためのフレームワークを紹介します。",
};

export default function TechDebtAndMAPage() {
  return (
    <>
      <Header />
      <main>
        <section className="border-b bg-muted/30 py-4">
          <div className="container mx-auto px-4 text-sm text-muted-foreground">
            ナレッジ &gt; 技術負債と事業価値のバランスを取るフレームワーク
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <article className="mx-auto max-w-3xl">
              <header className="mb-8 sm:mb-10">
                <p className="mb-2 text-xs font-medium text-primary sm:text-sm">
                  技術負債・PMI
                </p>
                <h1 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                  技術負債と事業価値のバランスを取るフレームワーク
                </h1>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  技術負債を抱えたSaaSのM&amp;Aでは、
                  「全部リプレイスした方が早い」「とりあえず売上さえ維持できれば良い」といった極端な議論になりがちです。
                  本記事では、
                  <strong>どこまで・どの順番で直すか</strong>
                  を決めるためのシンプルなフレームワークを紹介します。
                </p>
              </header>

              <section className="mb-8 sm:mb-10">
                <h2 className="mb-3 text-xl font-semibold tracking-tight sm:text-2xl">
                  前提：技術負債は「ある／ない」でなく「どのくらい／どこに」
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  まず押さえたいのは、
                  <strong>技術負債はゼロか100かではない</strong> ということです。
                  重要なのは、
                  <strong>「どの領域に、どれくらいの負債があるか」</strong>
                  を分解して捉えることです。
                </p>
                <ul className="mb-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <li>頻繁に変更が入る機能に負債が集中しているか</li>
                  <li>法令対応やセキュリティに直結する部分に負債があるか</li>
                  <li>インフラコストや障害リスクを押し上げている要因になっているか</li>
                </ul>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  同じ「技術負債がある」という言葉でも、
                  事業への影響度は大きく異なります。
                  M&amp;Aでは、
                  <strong>事業価値と照らし合わせながら優先順位を付ける</strong>
                  ことが欠かせません。
                </p>
              </section>

              <section className="mb-8 sm:mb-10">
                <h2 className="mb-3 text-xl font-semibold tracking-tight sm:text-2xl">
                  フレームワーク①：影響度 × 発生頻度 で優先度を分ける
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  1つ目のフレームは、
                  <strong>「影響度 × 発生頻度」</strong>
                  で技術負債を4象限に分けるシンプルな方法です。
                </p>
                <ul className="mb-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <li>影響度：問題が起きたときのインパクト（売上・信頼・法令など）</li>
                  <li>発生頻度：そのコードに変更が入る頻度／障害が起こる頻度</li>
                </ul>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  これを縦軸・横軸にとると、次のような優先度イメージになります。
                </p>
                <ul className="mb-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <li>
                    高影響・高頻度：
                    <strong>最優先で手を入れるべき領域</strong>
                  </li>
                  <li>
                    高影響・低頻度：
                    <strong>障害時の手順や監視を厚くしてリスクを抑える</strong>
                  </li>
                  <li>
                    低影響・高頻度：
                    <strong>開発効率改善の観点で検討</strong>
                  </li>
                  <li>
                    低影響・低頻度：
                    <strong>当面は「見ない」選択もありうる</strong>
                  </li>
                </ul>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  すべての負債を一括で解消しようとするのではなく、
                  <strong>「どこまでなら現実的に手当できるか」</strong>
                  をこのマトリクスを使って整理していきます。
                </p>
              </section>

              <section className="mb-8 sm:mb-10">
                <h2 className="mb-3 text-xl font-semibold tracking-tight sm:text-2xl">
                  フレームワーク②：PMIのフェーズに分けて考える
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  M&amp;A後の統合作業（PMI）には、おおまかに3つのフェーズがあります。
                  技術負債に手を入れるタイミングも、それぞれのフェーズで役割が異なります。
                </p>
                <ol className="mb-3 list-decimal space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <li>0〜3ヶ月：障害を出さずに引き継ぐフェーズ</li>
                  <li>3〜12ヶ月：最低限の負債を解消し、チームに馴染ませるフェーズ</li>
                  <li>1〜3年：将来を見据えたリプレイスや大規模改修のフェーズ</li>
                </ol>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  よくある失敗は、
                  <strong>買収直後に大規模リプレイスに着手してしまうこと</strong>
                  です。まずは現状を安全に運用できる状態を作り、そのうえで
                  「最初の1年でどこまで手を入れるか」「2〜3年スパンで何を目指すか」
                  を段階的に設計する方が、全体としてのリスクは低くなります。
                </p>
              </section>

              <section className="mb-8 sm:mb-10">
                <h2 className="mb-3 text-xl font-semibold tracking-tight sm:text-2xl">
                  フレームワーク③：売上・コスト・リスクの3軸で投資判断する
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  個々の負債を洗い出したあとは、
                  <strong>「どの施策にどれだけ投資するか」</strong>
                  を決める必要があります。その際の整理軸として、
                  次の3つで効果を見積もることが有効です。
                </p>
                <ul className="mb-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <li>売上：売上の維持・成長にどれだけ寄与するか</li>
                  <li>コスト：開発・運用コストをどれだけ下げられるか</li>
                  <li>リスク：障害・セキュリティ・法令違反リスクをどれだけ下げられるか</li>
                </ul>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  これら3軸で見たときに、
                  <strong>「短期的に効く施策」</strong>
                  と
                  <strong>「中長期で効いてくる施策」</strong>
                  を分けてポートフォリオを組むイメージです。
                  すべてを短期回収で考えようとすると、どうしても場当たり的になってしまいます。
                </p>
              </section>

              <section className="mb-10 rounded-lg bg-muted/30 p-5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                <h2 className="mb-2 text-sm font-semibold text-foreground sm:text-base">
                  「全部リプレイスする」べきケースは限定的
                </h2>
                <p className="mb-2">
                  稀に、
                  <strong>「どう見ても現状のままでは危険」</strong>
                  というレベルで技術負債が蓄積しているケースもあります。
                  その場合、リプレイス前提で条件や体制を考えるのは妥当です。
                  ただ、実務上は次のような条件が揃うケースに限られることが多いです。
                </p>
                <ul className="mb-2 list-disc space-y-1 pl-5">
                  <li>セキュリティや法令対応上、そのままでは明確に問題がある</li>
                  <li>採用市場的に、現行スタックのエンジニア確保がほぼ不可能</li>
                  <li>
                    リプレイスに必要な投資額・期間を許容できるだけのリターンが見込める
                  </li>
                </ul>
                <p>
                  多くの場合は、
                  <strong>
                    「守るべきところを守りつつ、改善の順番を工夫しながら付き合っていく」
                  </strong>
                  という現実的な落としどころを探ることになります。
                </p>
              </section>

              <section className="mb-10 text-sm leading-relaxed text-muted-foreground sm:text-base">
                <h2 className="mb-3 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                  技術負債を「怖いもの」から「制御可能なもの」へ
                </h2>
                <p className="mb-3">
                  技術負債があるからといって、そのサービスの価値がゼロになるわけではありません。
                  大事なのは、
                  <strong>「どこに、どれくらい、何があるか」</strong>
                  を可視化し、事業の将来像と照らし合わせながら付き合い方を決めることです。
                </p>
                <p className="mb-3">
                  ライチョウテックパートナーズでは、こうしたフレームワークを用いて、
                  技術負債を
                  <strong>「よく分からないから怖いもの」から「前提を踏まえた上で制御可能なもの」</strong>
                  に変えることを重視しています。
                  技術DDレポートでは、
                  上記のような整理を踏まえたうえで、投資計画や条件設計の議論を支援します。
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
                    技術負債とM&Aの進め方を相談してみる
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


