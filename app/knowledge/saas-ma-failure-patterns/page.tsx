import { Header } from "@/app/_components/header";
import { Footer } from "@/app/_components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "小規模SaaS M&Aでよくある失敗パターンとその回避策 | ライチョウテックパートナーズ株式会社",
  description:
    "月商数十万〜数百万円規模の小規模SaaS・個人開発サービスのM&Aで起こりがちな失敗パターンを整理し、売り手・買い手・仲介それぞれの立場から、どのように回避していくかのヒントをまとめました。",
};

export default function SaaSMAFailurePatternsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="border-b bg-muted/30 py-4">
          <div className="container mx-auto px-4 text-sm text-muted-foreground">
            ナレッジ &gt; 小規模SaaS M&amp;Aでよくある失敗パターンとその回避策
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <article className="mx-auto max-w-3xl">
              <header className="mb-8 sm:mb-10">
                <p className="mb-2 text-xs font-medium text-primary sm:text-sm">
                  小規模SaaS M&amp;A・失敗パターン
                </p>
                <h1 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                  小規模SaaS M&amp;Aでよくある失敗パターンとその回避策
                </h1>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  小規模SaaS・個人開発サービスのM&amp;Aでは、
                  「金額もそんなに大きくないから大丈夫だろう」と油断した結果、
                  後から思わぬトラブルになるケースがあります。
                  本記事では、実務で見かけることが多い失敗パターンをいくつか抽象化し、
                  それぞれの回避策を整理します。
                </p>
              </header>

              <section className="mb-10 rounded-lg bg-muted/50 p-4 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                <h2 className="mb-2 text-sm font-semibold text-foreground sm:text-base">
                  対象としているケース
                </h2>
                <ul className="list-disc space-y-1 pl-5">
                  <li>月商数十万〜数百万円規模のSaaS・Webサービス</li>
                  <li>オーナー1〜2名、開発者も少人数の体制</li>
                  <li>
                    初めてM&amp;Aを経験する個人オーナー・小規模事業会社・仲介会社を想定
                  </li>
                </ul>
              </section>

              <section className="mb-8 sm:mb-10">
                <h2 className="mb-3 text-xl font-semibold tracking-tight sm:text-2xl">
                  パターン1：売り手・買い手で「何を引き継ぐか」の認識がずれている
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  最も典型的なのが、
                  <strong>引き継ぎ範囲の認識ズレ</strong>
                  です。売り手は「このサービス全部」と思っていても、
                  買い手は「コードとドメインだけ」とイメージしている、といったケースです。
                </p>
                <ul className="mb-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <li>顧客リスト・問い合わせ履歴・マニュアル類は含まれるのか</li>
                  <li>運用に使っている外部SaaS（Slack, Notion, Zendeskなど）はどうするか</li>
                  <li>インフラやアカウント（AWS, GCP, GitHub, Stripeなど）の名義変更可否</li>
                </ul>
                <p className="mb-2 text-sm font-medium text-primary sm:text-base">
                  回避策：最初期に「引き継ぎスコープ表」を作る
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  ざっくりで構わないので、
                  <strong>「技術」「顧客・データ」「運用・サポート」「その他権利」</strong>
                  といった項目ごとに、何を含めるか／含めないかをテキストで整理しておくと、
                  後からの認識ズレを大きく減らせます。
                </p>
              </section>

              <section className="mb-8 sm:mb-10">
                <h2 className="mb-3 text-xl font-semibold tracking-tight sm:text-2xl">
                  パターン2：売り手側の準備不足で、途中から情報が出てくる
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  売り手にとって初めてのM&amp;Aの場合、
                  「何をどこまで出せばよいか」が分からず、
                  <strong>後から重要な情報が出てきてしまう</strong>
                  ことがあります。
                  これは買い手の不信感につながり、条件の見直しや破談の原因にもなります。
                </p>
                <ul className="mb-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <li>大口顧客の解約予定やトラブルが、交渉の後半で判明する</li>
                  <li>主要機能が実は特定顧客向けのカスタムであることが後出しになる</li>
                  <li>インフラコストが想定より高く、後から請求額が判明する</li>
                </ul>
                <p className="mb-2 text-sm font-medium text-primary sm:text-base">
                  回避策：売却検討の初期段階で「棚卸しの時間」を取る
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  売り手側は、M&amp;Aの検討に入る前に、
                  <strong>売上構成・主要顧客・解約状況・コスト構造・技術的な懸念点</strong>
                  を一度棚卸ししておくと、安全に話を進めやすくなります。
                  第三者と一緒に棚卸しすることで、抜け漏れのリスクも減らせます。
                </p>
              </section>

              <section className="mb-8 sm:mb-10">
                <h2 className="mb-3 text-xl font-semibold tracking-tight sm:text-2xl">
                  パターン3：技術リスクが十分に評価されず、買収後に想定外の負担が乗る
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  小規模案件では、コストや工数を抑えるために、
                  <strong>技術DDがほとんど行われないままクロージング</strong>
                  してしまうケースもあります。その結果、
                  買収後に技術負債やセキュリティリスクが顕在化し、
                  想定以上の追加投資を迫られることがあります。
                </p>
                <ul className="mb-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <li>テストがほぼなく、軽微な改修でも障害が頻発する</li>
                  <li>フレームワークがEOLで、サポートが受けられない</li>
                  <li>個人アカウントに権限が集中していて、運用変更に時間がかかる</li>
                </ul>
                <p className="mb-2 text-sm font-medium text-primary sm:text-base">
                  回避策：スモールスコープでも良いので技術DDを入れる
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  フルスコープの技術DDが難しくても、
                  <strong>「主要機能」「認証まわり」「インフラ構成」だけでも確認する</strong>
                  といったスコープ設定は可能です。
                  重要なのは、「見ていない領域」を自覚したうえで条件や価格を検討することです。
                </p>
              </section>

              <section className="mb-8 sm:mb-10">
                <h2 className="mb-3 text-xl font-semibold tracking-tight sm:text-2xl">
                  パターン4：コミュニケーション不足で、信頼関係が崩れる
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  金額や条件の前に、
                  <strong>「この人に託せるか／一緒にやれるか」</strong>
                  という感情面の信頼が崩れると、
                  それだけで話が止まってしまうことがあります。
                  特に小規模SaaSでは、オーナーの思い入れが強いことも多く、
                  その温度差が原因になることもあります。
                </p>
                <ul className="mb-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <li>メール・チャットだけで進め、表情の見える対話がほとんどない</li>
                  <li>技術的な事情や制約を、売り手・買い手それぞれが十分に理解していない</li>
                  <li>仲介・アドバイザーを通すあまり、意図が伝言ゲームで歪む</li>
                </ul>
                <p className="mb-2 text-sm font-medium text-primary sm:text-base">
                  回避策：節目ごとに「同期的な対話」と「前提の言語化」を挟む
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  重要な局面では、
                  <strong>オンラインミーティングで直接話し、合意した前提をテキストで残す</strong>
                  ことが有効です。
                  技術的な論点は、エンジニア同士が直接話す場を設けることで、
                  誤解を減らすことができます。
                </p>
              </section>

              <section className="mb-10 rounded-lg bg-muted/30 p-5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                <h2 className="mb-2 text-sm font-semibold text-foreground sm:text-base">
                  売り手・買い手・仲介それぞれができること
                </h2>
                <ul className="mb-2 list-disc space-y-1 pl-5">
                  <li>
                    売り手：
                    売上・顧客・技術・運用の現状を正直に棚卸しし、「良いところ」と「課題」をセットで共有する
                  </li>
                  <li>
                    買い手：
                    自社の前提（技術スタック・チーム体制・投資可能なリソース）を伝えたうえで、
                    持てるかどうかを率直に議論する
                  </li>
                  <li>
                    仲介：
                    売り手・買い手双方の言語を翻訳し、前提条件・合意事項を文章として整理する
                  </li>
                </ul>
                <p>
                  ライチョウテックパートナーズでは、こうした失敗パターンを踏まえながら、
                  小規模SaaSのオーナー・買い手・仲介の間に立ち、
                  <strong>「前提を揃えること」</strong>
                  に重きを置いてご支援しています。
                </p>
              </section>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


