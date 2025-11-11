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
    "システム導入・運用コンサルティング、Webサービス・SaaSのM&Aアドバイザリー。現場で戦うエンジニアによる実践的な支援で、お客様の課題解決をサポートします。",
  keywords: [
    "DXコンサルティング",
    "システム導入支援",
    "WebサービスM&A",
    "SaaS M&A",
    "技術デューデリ",
    "長野県",
    "ライチョウテックパートナーズ",
  ],
  openGraph: {
    title: "ライチョウテックパートナーズ株式会社",
    description:
      `${CATCH_COPY}。柔軟に、誠実に、確かな技術で支えるテクノロジーパートナー。`,
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "ライチョウテックパートナーズ株式会社",
    description:
      `${CATCH_COPY}。柔軟に、誠実に、確かな技術で支えるテクノロジーパートナー。`,
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
