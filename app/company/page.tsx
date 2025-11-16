import { Header } from "@/app/_components/header";
import { Footer } from "@/app/_components/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { BreadcrumbListSchema } from "@/app/_components/structured-data/breadcrumb-list";
import { OrganizationSchema } from "@/app/_components/structured-data/organization";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "会社概要 | ライチョウテックパートナーズ株式会社",
  description:
    "ライチョウテックパートナーズ株式会社の会社概要。SaaS・Webサービス特化のM&Aアドバイザリーとして、小規模SaaS・個人開発サービスの事業売却・事業買収・仲介を、テックリードエンジニアが技術DDと事業DDの両面から支援します。",
};

const companyInfo = [
  { label: "会社名", value: "ライチョウテックパートナーズ株式会社" },
  { label: "代表者", value: "高木 悠" },
  { label: "設立", value: "2025年10月1日" },
  { label: "所在地", value: "〒380-0824 長野県長野市南石堂町1423-4" },
  { label: "資本金", value: "1,000,000円" },
  {
    label: "事業内容",
    value: "Webサービス・SaaSのM&Aアドバイザリー",
  },
];

export default function CompanyPage() {
  const address = "長野県長野市南石堂町1423-4";
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    address
  )}&output=embed`;

  const breadcrumbItems = [{ label: "会社概要" }];

  return (
    <>
      <BreadcrumbListSchema items={breadcrumbItems} />
      <OrganizationSchema
        name="ライチョウテックパートナーズ株式会社"
        url="https://raicho-tech.jp"
        logo="https://raicho-tech.jp/logo.svg"
        founder="高木 悠"
        address={{
          streetAddress: "南石堂町1423-4",
          addressLocality: "長野市",
          addressRegion: "長野県",
          postalCode: "380-0824",
          addressCountry: "JP",
        }}
      />
      <Header />
      <main>
        {/* Breadcrumbs */}
        <section className="border-b bg-muted/30 py-4">
          <div className="container mx-auto px-4">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
                会社概要
              </h1>
            </div>
          </div>
        </section>

        {/* Company Info Table */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <div className="mb-8 overflow-hidden rounded-lg border">
                <table className="w-full">
                  <tbody>
                    {companyInfo.map((info, index) => (
                      <tr
                        key={index}
                        className="border-b last:border-b-0 even:bg-muted/50"
                      >
                        <th className="w-32 px-6 py-4 text-left font-semibold md:w-40">
                          {info.label}
                        </th>
                        <td className="px-6 py-4">{info.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* 代表プロフィール */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 text-center text-2xl font-bold tracking-tight sm:text-3xl">
                代表プロフィール
              </h2>
              <div className="rounded-lg border bg-card p-8 shadow-sm">
                <p className="mb-2 text-sm font-semibold text-primary">
                  代表取締役 / テックリードエンジニア
                </p>
                <p className="mb-4 text-lg font-bold">高木 悠</p>
                <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                  <p>
                    Webエンジニアとしてキャリアをスタートし、スタートアップから上場企業まで
                    10年以上にわたりSaaS・Webサービスの開発・グロースに従事。
                    フロントエンド・バックエンド・インフラまで横断的に関わるテックリードとして、
                    プロダクトの立ち上げから数十万ユーザー規模への拡大までを経験。
                  </p>
                  <p>
                    その過程で、「良いサービスなのに承継されずに畳まれてしまう」「技術負債が理由で本来の価値より安く評価される」
                    といった場面を数多く目にしたことから、SaaS・Webサービスに特化したM&Aアドバイザリー事業を立ち上げる。
                  </p>
                  <p>
                    現在は、小規模SaaS・個人開発サービスを中心に、
                    事業オーナー・買い手企業・仲介パートナーの三者が納得できる継承を実現するため、
                    技術DD（ソースコード・アーキテクチャ・インフラ）と事業DD（売上・解約率・LTVなど）を一体で行う支援を提供している。
                  </p>
                  <p>
                    専門領域は、SaaSアーキテクチャ設計、技術デューデリジェンス、PMF後のグロース支援、
                    M&amp;A後のPMI初期フェーズにおける技術統合・チーム立ち上げなど。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ミッション・バリュー */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 text-center text-2xl font-bold tracking-tight sm:text-3xl">
                ミッション・バリュー
              </h2>
              <div className="space-y-6 rounded-lg border bg-card p-8 shadow-sm">
                <div>
                  <h3 className="mb-2 text-lg font-semibold">
                    ミッション：良いWebサービスが、きちんと次の担い手につながる世界をつくる
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    技術負債やオーナーの事情によって、まだ価値のあるサービスが静かに終了してしまうケースを減らし、
                    作り手・送り手・受け手の三者が納得できる継承を実現することを目指しています。
                    社名の由来である「ライチョウ」は、個体数が少なく絶滅の危機にありながら、高山の厳しい環境で戦略的に生き抜く存在です。
                    その姿を、時間やリソースが限られた中でも工夫しながら価値を届け続ける個人開発者・小規模SaaS開発者になぞらえ、
                    そうしたプロダクトと開発者のパートナーでありたい、という思いを込めています。
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">バリュー</h3>
                  <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                    <li>
                      ・
                      <span className="font-semibold">
                        コードと事業の両方を見る
                      </span>
                      ：
                      売上やKPIだけでなく、ソースコードやインフラも含めて総合的に評価します。
                    </li>
                    <li>
                      ・
                      <span className="font-semibold">
                        小さなSaaSも真剣に扱う
                      </span>
                      ：
                      月商規模にかかわらず、プロダクトとユーザーに敬意を持って向き合います。
                    </li>
                    <li>
                      ・
                      <span className="font-semibold">
                        厳しい環境で戦う開発者の伴走者でいる
                      </span>
                      ：
                      高山でしなやかに生きるライチョウのように、限られた時間や人員のなかでサービスを育ててきた個人開発者・小規模SaaSの挑戦に寄り添います。
                    </li>
                    <li>
                      ・
                      <span className="font-semibold">
                        オーナーの言語で話す
                      </span>
                      ：
                      エンジニア・経営者・投資家、それぞれの立場の言葉を翻訳しながらコミュニケーションします。
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Track Record */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-center text-2xl font-bold tracking-tight sm:text-3xl">
                業務委託参画実績
              </h2>
              <div className="rounded-lg border bg-card p-8 shadow-sm">
                <p className="mb-6 text-center text-sm text-muted-foreground">
                  敬称略、順不同
                </p>
                <ul className="mb-4 space-y-3">
                  <li className="flex items-center border-b pb-3 text-base last:border-b-0 last:pb-0">
                    <span className="font-medium">株式会社DMM Boost</span>
                  </li>
                  <li className="flex items-center border-b pb-3 text-base last:border-b-0 last:pb-0">
                    <span className="font-medium">株式会社カオナビ</span>
                  </li>
                  <li className="flex items-center border-b pb-3 text-base last:border-b-0 last:pb-0">
                    <span className="font-medium">株式会社カカクコム</span>
                  </li>
                  <li className="flex items-center border-b pb-3 text-base last:border-b-0 last:pb-0">
                    <span className="font-medium">西川計測株式会社</span>
                  </li>
                  <li className="flex items-center border-b pb-3 text-base last:border-b-0 last:pb-0">
                    <span className="font-medium">株式会社みらい翻訳</span>
                  </li>
                  <li className="flex items-center border-b pb-3 text-base last:border-b-0 last:pb-0">
                    <span className="font-medium">弥生株式会社</span>
                  </li>
                  <li className="flex items-center text-base">
                    <span className="font-medium">その他</span>
                  </li>
                </ul>
                <p className="text-xs text-muted-foreground">
                  ※ エージェント経由での参画実績となります。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 text-center text-2xl font-bold tracking-tight sm:text-3xl">
                アクセス
              </h2>
              <div className="overflow-hidden rounded-lg border">
                <iframe
                  src={mapUrl}
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                  title="会社所在地"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <Button asChild size="lg" className="text-lg">
              <Link href="/contact">お問い合わせ</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
