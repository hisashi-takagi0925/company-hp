import { Header } from "@/app/_components/header";
import { Footer } from "@/app/_components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "小規模SaaSオーナーがやりがちな「もったいない畳み方」と代替案 | ライチョウテックパートナーズ株式会社",
  description:
    "小規模SaaSや個人開発サービスをそのままクローズしてしまう前に検討できる、売却・部分譲渡・運営委託などの代替案を整理します。",
};

export default function SaaSShutdownAlternativesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="border-b bg-muted/30 py-4">
          <div className="container mx-auto px-4 text-sm text-muted-foreground">
            コラム &gt; 小規模SaaSオーナーがやりがちな「もったいない畳み方」と代替案
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <article className="mx-auto max-w-3xl">
              <header className="mb-8 sm:mb-10">
                <p className="mb-2 text-xs font-medium text-primary sm:text-sm">
                  オーナー判断・サービスの畳み方
                </p>
                <h1 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                  小規模SaaSオーナーがやりがちな「もったいない畳み方」と代替案
                </h1>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  時間や状況の変化から、サービスを畳まざるを得ない場面はどうしても出てきます。
                  そのときに、
                  <strong>「静かにクローズして終わり」にしてしまうのは少しもったいない</strong>
                  ケースも多くあります。
                  本記事では、よくある「もったいない畳み方」と、その代わりに検討できる選択肢を整理します。
                </p>
              </header>

              <section className="mb-8 sm:mb-10">
                <h2 className="mb-3 text-xl font-semibold tracking-tight sm:text-2xl">
                  パターン1：ユーザーに短い告知だけして、そのまま終了
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  よくあるのが、
                  <strong>「◯月末でサービスを終了します」の一通だけでクローズ</strong>
                  してしまうパターンです。
                  オーナー側からはやむを得ない判断でも、ユーザーからすると突然の終了に感じられることがあります。
                </p>
                <p className="mb-2 text-sm font-medium text-primary sm:text-base">
                  代替案：引き継ぎ先の検討 or 最低限の移行期間の確保
                </p>
                <ul className="mb-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <li>引き継ぎ先（買い手や運営委託先）を探してみる</li>
                  <li>終了までの期間を少し長めに取り、エクスポート機能や代替サービスを案内する</li>
                  <li>ユーザーの使い方や依存度を確認し、影響の大きいユーザーには個別に連絡する</li>
                </ul>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  完璧な移行ができなくても、
                  <strong>「できる範囲でユーザーの次の一歩を用意する」</strong>
                  だけでも印象は大きく変わります。
                </p>
              </section>

              <section className="mb-8 sm:mb-10">
                <h2 className="mb-3 text-xl font-semibold tracking-tight sm:text-2xl">
                  パターン2：コードもデータも全て自分のローカルに眠らせる
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  クローズ後、ソースコードやデータを
                  <strong>個人のストレージに眠らせたまま</strong>
                  にしてしまうケースも多くあります。
                  これはオーナーにとっても、潜在的な買い手にとっても、チャンスを失っている状態です。
                </p>
                <p className="mb-2 text-sm font-medium text-primary sm:text-base">
                  代替案：売却・部分譲渡・オープンにできる部分の検討
                </p>
                <ul className="mb-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <li>サービス全体の売却や、機能単位の部分譲渡ができないか検討する</li>
                  <li>一部の技術要素やノウハウを、OSSや記事として公開できないか考える</li>
                  <li>後から振り返れるよう、学びや数字を簡単にまとめておく</li>
                </ul>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  すぐに買い手が見つからなくても、
                  <strong>「価値の棚卸し」</strong>
                  をしておくことで、将来のチャンスにつながることがあります。
                </p>
              </section>

              <section className="mb-8 sm:mb-10">
                <h2 className="mb-3 text-xl font-semibold tracking-tight sm:text-2xl">
                  パターン3：オーナーの時間だけを理由に畳んでしまう
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  「本業が忙しくなったので畳みます」というケースもよくあります。
                  これは自然な理由ですが、
                  <strong>サービス自体の価値とオーナーの時間の問題が混ざってしまっている</strong>
                  ことも少なくありません。
                </p>
                <p className="mb-2 text-sm font-medium text-primary sm:text-base">
                  代替案：運営委託・共同運営・チーム化の可能性を探る
                </p>
                <ul className="mb-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <li>信頼できる個人・小規模チームに、運営や開発の一部を委託する</li>
                  <li>コミュニティやSNSで、一緒に運営してくれるパートナーを募る</li>
                  <li>自社の他メンバーや友人に、関わりたい人がいないか声をかけてみる</li>
                </ul>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  「自分一人では無理」でも、
                  <strong>「誰かとなら続けられる」</strong>
                  ケースは意外と多くあります。
                </p>
              </section>

              <section className="mb-10 rounded-lg bg-muted/30 p-5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                <h2 className="mb-2 text-sm font-semibold text-foreground sm:text-base">
                  もったいなさを減らすためにできる小さな一歩
                </h2>
                <p className="mb-2">
                  すべてのサービスが売却や引き継ぎの対象になるわけではありません。
                  それでも、
                  <strong>「クローズ以外にどんな選択肢があるか」</strong>
                  を一度洗い出してみることには意味があります。
                </p>
                <ul className="mb-2 list-disc space-y-1 pl-5">
                  <li>サービスの現状と数字を簡単に整理してみる</li>
                  <li>信頼できる第三者に相談し、「引き継ぎの余地があるか」を聞いてみる</li>
                  <li>ユーザーへの影響と、自分の負担のバランスを一緒に考えてみる</li>
                </ul>
                <p>
                  ライチョウテックパートナーズでは、
                  「畳む前に一度、誰かに引き継げないか」を一緒に検討するご相談もお受けしています。
                  クローズを前提にせず、
                  <strong>サービスとユーザーにとって一番良い出口</strong>
                  を一緒に探していければと考えています。
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
                    クローズ前の選択肢について相談してみる
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


