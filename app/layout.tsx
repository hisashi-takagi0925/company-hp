import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { CATCH_COPY } from "@/app/_constants";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: `ライチョウテックパートナーズ株式会社 | ${CATCH_COPY}`,
  description:
    "SaaSのM&A＋再生の専門会社です。技術に強いM&A仲介として、エンジニア視点で小規模SaaS・個人開発サービスを評価し、適切なマッチングを実現します。",
  keywords: [
    "WebサービスM&A",
    "SaaS M&A",
    "技術デューデリ",
    "個人開発サービス買取",
    "長野県",
    "ライチョウテックパートナーズ",
  ],
  openGraph: {
    title: "ライチョウテックパートナーズ株式会社",
    description: `${CATCH_COPY}。柔軟に、誠実に、確かな技術で支えるテクノロジーパートナー。`,
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "ライチョウテックパートナーズ株式会社",
    description: `${CATCH_COPY}。柔軟に、誠実に、確かな技術で支えるテクノロジーパートナー。`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
