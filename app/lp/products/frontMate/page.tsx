import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { Solution } from "./components/Solution";
import { Comparison } from "./components/Comparison";
import { Trust } from "./components/Trust";
import { Footer } from "./components/Footer";
import { ContactForm } from "./components/ContactForm";
import { CTA } from "./components/CTA";
import { FAQ } from "./components/FAQ";
import { HowToStart } from "./components/HowToStart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Front Mate",
  description: "サイト訪問を「商談」へつなげるAI営業アシスタント",
};

export default function FrontMateLP() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* 1. ヒーロー - ファーストインプレッション */}
      <Hero />

      {/* 2. 課題提起 - 共感を得る */}
      <Problem />

      {/* 3. ソリューション - 簡潔な価値提案 */}
      <Solution />

      {/* 4. 競合比較 - 差別化を明確に */}
      <Comparison />

      {/* 5. 社会的証明 - 信頼構築 */}
      {/* <Trust /> */}

      {/* 6. 導入フロー - 簡単さを訴求 */}
      <HowToStart />

      {/* 7. 強力なCTA - 問い合わせ誘導 */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <CTA />
        </div>
      </section>

      {/* 8. FAQ - 不安解消 */}
      <FAQ />

      {/* 9. 問い合わせフォーム - 最終CV */}
      <section id="contact" className="py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
              お問い合わせ
            </h2>
            <p className="text-lg text-gray-600">
              無料デモ・課題ヒアリング・導入相談など、お気軽にご連絡ください
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
