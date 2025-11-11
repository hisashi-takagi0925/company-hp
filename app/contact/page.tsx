import { ContactForm } from "@/app/_components/contact";
import { Header } from "@/app/_components/header";
import { Footer } from "@/app/_components/footer";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="py-20">
          <div className="container px-4">
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
