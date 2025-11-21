import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { CATCH_COPY } from "@/app/_constants";
import { Analytics } from "@vercel/analytics/next";

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
    url: "https://raicho-tech.jp",
    siteName: "ライチョウテックパートナーズ株式会社",
    images: [
      {
        url: "https://raicho-tech.jp/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ライチョウテックパートナーズ株式会社 - SaaS・Webサービス特化のM&Aアドバイザリー",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ライチョウテックパートナーズ株式会社",
    description: `${CATCH_COPY}。柔軟に、誠実に、確かな技術で支えるテクノロジーパートナー。`,
    images: ["https://raicho-tech.jp/og-image.jpg"],
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
        <Analytics />
        <Script
          id="chatbot-widget-config"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.ChatbotWidgetConfig = {
                tenantId: '6933826e-fb70-48eb-ae1a-06371972ecb8',
                apiUrl: 'https://ai-chat-bot-flax-pi.vercel.app',
                position: 'bottom-right',
                width: 584,
                height: 720,
                zIndex: 9999,
              };
            `,
          }}
        />
        <Script
          src="https://ai-chat-bot-flax-pi.vercel.app/chatbot-widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
