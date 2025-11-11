import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { Hero } from "@/app/components/hero";
import { Services } from "@/app/components/services";
import { Mission } from "@/app/components/mission";
import { Company } from "@/app/components/company";
import { ContactForm } from "@/app/components/contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Mission />
        <Company />
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                お問い合わせ
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                ご質問やご相談がございましたら、以下のフォームよりお気軽にお問い合わせください。
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
