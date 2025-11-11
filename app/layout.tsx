import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "ライチョウテックパートナーズ株式会社 | テクノロジーで、事業を次のステージへ",
  description:
    "受託開発、業務委託、システム導入・運用のコンサルティング、WebサービスのM&A仲介。柔軟に、誠実に、確かな技術で支えるテクノロジーパートナー。",
  keywords: [
    "受託開発",
    "業務委託",
    "DXコンサルティング",
    "WebサービスM&A",
    "長野県",
    "ライチョウテックパートナーズ",
  ],
  openGraph: {
    title: "ライチョウテックパートナーズ株式会社",
    description:
      "テクノロジーで、事業を次のステージへ。柔軟に、誠実に、確かな技術で支えるテクノロジーパートナー。",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "ライチョウテックパートナーズ株式会社",
    description:
      "テクノロジーで、事業を次のステージへ。柔軟に、誠実に、確かな技術で支えるテクノロジーパートナー。",
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
