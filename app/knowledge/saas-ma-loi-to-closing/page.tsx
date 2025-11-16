import { Header } from "@/app/_components/header";
import { Footer } from "@/app/_components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "小規模SaaSのLOI〜最終契約までのざっくり流れ | ライチョウテックパートナーズ株式会社",
  description:
    "小規模SaaS・個人開発サービスのM&Aにおける、LOI（基本合意）から最終契約までのおおまかな流れと、各フェーズで決まること・準備すべきことを整理します。",
};

export default function SaaSMaLoiToClosingPage() {
  return (
    <>
      <Header />
      <main>
        <section className="border-b bg-muted/30 py-4">
          <div className="container mx-auto px-4 text-sm text-muted-foreground">
            コラム &gt; 小規模SaaSのLOI〜最終契約までのざっくり流れ
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <article className="mx-auto max-w-3xl">
              <header className="mb-8 sm:mb-10">
                <p className="mb-2 text-xs font-medium text-primary sm:text-sm">
                  プロセス・進め方
                </p>
                <h1 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                  小規模SaaSのLOI〜最終契約までのざっくり流れ
                </h1>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  初めてSaaSのM&amp;Aを経験するオーナーや買い手にとって、
                  LOI（基本合意）から最終契約までの流れはイメージしにくいものです。
                  本稿では、小規模SaaSを想定した場合の
                  <strong>おおまかなステップと、各フェーズで決まること</strong>
                  を整理します。
                </p>
              </header>

              <section className="mb-8 sm:mb-10">
                <h2 className="mb-3 text-xl font-semibold tracking-tight sm:text-2xl">
                  ステップ1：条件の大枠をすり合わせる（LOI前〜LOI）
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  最初のステップでは、
                  <strong>大まかな価格レンジやスキーム、スケジュール</strong>
                  などの方向性をすり合わせます。
                  この時点では、詳細なデューデリジェンスは行われていないことが多いです。
                </p>
                <ul className="mb-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <li>希望価格レンジと、それに対する買い手の感触</li>
                  <li>スキーム（株式譲渡／事業譲渡など）の方向性</li>
                  <li>
                    おおまかなスケジュール感（いつまでにクロージングしたいか）
                  </li>
                </ul>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  ここで合意した内容をもとに、LOI（基本合意書）を交わすことで、
                  <strong>「この相手と真剣に検討を進める」</strong>
                  という意思表示になります。
                </p>
              </section>

              <section className="mb-8 sm:mb-10">
                <h2 className="mb-3 text-xl font-semibold tracking-tight sm:text-2xl">
                  ステップ2：デューデリジェンス（技術・事業・財務など）
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  LOI締結後は、
                  <strong>
                    技術・事業・財務・法務などのデューデリジェンス
                  </strong>
                  に進みます。
                  小規模SaaSでは、規模に応じてスコープを絞りながら実施されることが多いです。
                </p>
                <ul className="mb-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <li>
                    技術DD：コード品質・技術負債・インフラコスト・セキュリティなど
                  </li>
                  <li>事業DD：売上推移・解約率・顧客構成・成長余地など</li>
                  <li>財務・法務DD：債務・契約関係・知財・労務など</li>
                </ul>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  ここでの結果を踏まえて、
                  <strong>価格や条件の微調整</strong>
                  が行われることもあります。
                </p>
              </section>

              <section className="mb-10 rounded-lg bg-muted/30 p-5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                <h2 className="mb-2 text-sm font-semibold text-foreground sm:text-base">
                  ステップ3：最終契約の条件調整〜クロージング
                </h2>
                <p className="mb-2">
                  デューデリジェンスの結果を踏まえ、
                  <strong>最終契約書（SPAや事業譲渡契約など）の条件</strong>
                  を詰めていきます。 具体的には、次のような項目が調整されます。
                </p>
                <ul className="mb-2 list-disc space-y-1 pl-5">
                  <li>最終的な価格と支払い方法（分割・アーンアウトなど）</li>
                  <li>表明保証・補償条項の範囲</li>
                  <li>引き継ぎ期間中のオーナーの関わり方</li>
                  <li>クロージングの前提条件（必要な手続きや合意）</li>
                </ul>
                <p>
                  ライチョウテックパートナーズでは、小規模SaaSの案件において、
                  <strong>
                    技術DDの結果を分かりやすく整理したうえで、LOI〜クロージングまでの議論を支援
                  </strong>
                  しています。
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
                    SaaS M&Aの進め方について相談してみる
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
