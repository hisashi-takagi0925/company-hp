import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { ValueBlocks } from "./components/ValueBlocks";
import { HowItWorks } from "./components/HowItWorks";
import { ConversionReport } from "./components/ConversionReport";
import { Footer } from "./components/Footer";

export default function FrontMateLP() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ValueBlocks />
      <Features />
      <HowItWorks />
      <ConversionReport />
      <Footer />
    </div>
  );
}
