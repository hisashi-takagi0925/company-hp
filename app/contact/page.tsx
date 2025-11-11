import { ContactForm } from "@/app/components/contact";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";

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
