import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { Hero } from "@/app/components/hero";
import { Services } from "@/app/components/services";
import { Mission } from "@/app/components/mission";
import { Company } from "@/app/components/company";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Mission />
        <Company />
      </main>
      <Footer />
    </>
  );
}
