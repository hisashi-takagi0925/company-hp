import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { ValueBlocks } from "./components/ValueBlocks";
import { HowItWorks } from "./components/HowItWorks";
import { ConversionReport } from "./components/ConversionReport";
import { Footer } from "./components/Footer";
import { ContactForm } from "./components/ContactForm";

export default function FrontMateLP() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ValueBlocks />
      <Features />
      <HowItWorks />
      <ConversionReport />
      {/* 問い合わせフォームセクション */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
              お問い合わせ・資料請求
            </h2>
            <p className="text-lg text-gray-600">
              Front
              Mateについてのご質問や、デモのご予約はこちらからお気軽にお問い合わせください。
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
      <Footer />
    </div>
  );
}
