import { Header } from "@/app/_components/header";
import { Footer } from "@/app/_components/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "会社概要 | ライチョウテックパートナーズ株式会社",
  description:
    "ライチョウテックパートナーズ株式会社の会社概要。長野発の小規模精鋭チームが、厳しい環境でも成果にこだわる「現場知」で事業と人を前へ導きます。",
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

  return (
    <>
      <Header />
      <main>
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

        {/* Mission */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
                ミッション
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                厳しい環境でも成果にこだわる"現場知"で、事業と人を前へ。
              </p>
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

