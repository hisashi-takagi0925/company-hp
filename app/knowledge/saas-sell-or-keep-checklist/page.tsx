import { Header } from "@/app/_components/header";
import { Footer } from "@/app/_components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "SaaSを「売るか・続けるか」を判断するチェックリスト | ライチョウテックパートナーズ株式会社",
  description:
    "小規模SaaSや個人開発サービスについて、「売却すべきか、もう少し続けるべきか」を迷ったときに、時間・体力・資金・成長余地・リスクの観点から整理するためのチェックリストです。",
};

export default function SaaSSellOrKeepChecklistPage() {
  return (
    <>
      <Header />
      <main>
        <section className="border-b bg-muted/30 py-4">
          <div className="container mx-auto px-4 text-sm text-muted-foreground">
            コラム &gt; SaaSを「売るか・続けるか」を判断するチェックリスト
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <article className="mx-auto max-w-3xl">
              <header className="mb-8 sm:mb-10">
                <p className="mb-2 text-xs font-medium text-primary sm:text-sm">
                  オーナー判断・売却検討
                </p>
                <h1 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                  SaaSを「売るか・続けるか」を判断するチェックリスト
                </h1>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  サービスが一定まで育ってくると、
                  「このまま自分で続けるか」「誰かに引き継いでもらうか」を考えるタイミングが訪れます。
                  どちらが正解というわけではありませんが、
                  <strong>
                    いくつかの観点で整理してみることで、納得感のある決断
                  </strong>
                  に近づけることができます。
                </p>
              </header>

              <section className="mb-8 sm:mb-10">
                <h2 className="mb-3 text-xl font-semibold tracking-tight sm:text-2xl">
                  1. 時間と体力：今後1〜2年の生活と並行できるか
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  まずは、
                  <strong>自分の時間と体力の観点</strong>
                  から見ていきます。売却の是非に関わらず、
                  ここが破綻しているとサービスも生活も苦しくなりがちです。
                </p>
                <ul className="mb-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <li>週あたり何時間程度、サービスに割けているか</li>
                  <li>本業や家庭との両立で、継続が負担になっていないか</li>
                  <li>1〜2年後も同程度の時間を割ける見込みがあるか</li>
                </ul>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  「今はなんとかやれているが、正直きつい」という場合、
                  <strong>一度立ち止まって選択肢を検討するサイン</strong>
                  かもしれません。
                </p>
              </section>

              <section className="mb-8 sm:mb-10">
                <h2 className="mb-3 text-xl font-semibold tracking-tight sm:text-2xl">
                  2. 資金とキャッシュフロー：投資を続けられる余裕があるか
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  次に、
                  <strong>お金の観点</strong>
                  です。売上が黒字であっても、今後の投資やランニングコストを考えると、
                  個人で抱え続けるのは難しいケースもあります。
                </p>
                <ul className="mb-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <li>
                    インフラ・外部サービス費用を含めた月次の固定費はいくらか
                  </li>
                  <li>
                    今後必要になりそうな開発・改善投資（改修・リプレイスなど）はどの程度か
                  </li>
                  <li>それらを自分一人で負担し続けても良いと思えるか</li>
                </ul>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  「売上はあるが、今後必要な投資を考えると一人では重い」という状況なら、
                  <strong>パートナーや買い手と一緒に支える形</strong>
                  も選択肢になります。
                </p>
              </section>

              <section className="mb-8 sm:mb-10">
                <h2 className="mb-3 text-xl font-semibold tracking-tight sm:text-2xl">
                  3. 成長余地とモチベーション：まだ伸ばしたいと思えているか
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  サービスに
                  <strong>伸びしろがあるかどうか</strong>
                  に加えて、
                  <strong>自分自身がそこに時間を投下したいか</strong>
                  も重要なポイントです。
                </p>
                <ul className="mb-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <li>まだ手を付けられていない明確な伸びしろがあるか</li>
                  <li>その伸びしろに対して、自分がワクワクできているか</li>
                  <li>
                    やりたいことと、ユーザーが求めているものが大きくズレていないか
                  </li>
                </ul>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  「伸ばせそうだが、自分は別のことに集中したい」という場合、
                  <strong>
                    サービスとしては続くべきだが、担い手は別でも良い
                  </strong>
                  というサインかもしれません。
                </p>
              </section>

              <section className="mb-8 sm:mb-10">
                <h2 className="mb-3 text-xl font-semibold tracking-tight sm:text-2xl">
                  4. リスクと責任：どこまで背負い続けたいか
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  サービスを持ち続けることは、
                  <strong>ユーザー・データ・法令対応などの責任</strong>
                  を持ち続けることでもあります。規模が大きくなるほど、この重みは増していきます。
                </p>
                <ul className="mb-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <li>個人情報・決済情報などの扱いに不安を感じていないか</li>
                  <li>
                    障害やインシデントが起きたとき、一人で対応し続けられるか
                  </li>
                  <li>将来的な法改正や規制強化に対応していく余力があるか</li>
                </ul>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  「サービスを止めたくはないが、責任を一人で持ち続けるのは怖い」という場合は、
                  <strong>
                    責任の分散も含めて売却・パートナーシップを検討する価値
                  </strong>
                  があります。
                </p>
              </section>

              <section className="mb-10 text-sm leading-relaxed text-muted-foreground sm:text-base">
                <h2 className="mb-3 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                  5. チェック結果から「今取るべき次の一歩」を決める
                </h2>
                <p className="mb-2">
                  上記の観点をざっくりチェックしたうえで、
                  次のような方向性に分かれることが多いです。
                </p>
                <ul className="mb-2 list-disc space-y-1 pl-5">
                  <li>
                    時間・体力・資金・モチベーションすべてに余裕がある：
                    継続・投資を前提に、伸ばし方の戦略を考える
                  </li>
                  <li>
                    サービスに伸びしろはあるが、自分の時間・体力・資金が厳しい：
                    売却やパートナー探しを含めて検討する
                  </li>
                  <li>
                    サービスの役割は果たしたと感じる：
                    ユーザーへの影響を最小化しながら、クローズか引き継ぎかを検討する
                  </li>
                </ul>
                <p>
                  どの選択肢を取るにしても、
                  <strong>オーナー自身が納得できる理由</strong>
                  を持っておくことが、後悔の少ない決断につながります。
                  ライチョウテックパートナーズでは、
                  こうした「売るか・続けるか」の段階から一緒に整理するご相談もお受けしています。
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
                    売るか・続けるか一緒に整理してほしい
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
