"use client";

import { Header } from "@/app/_components/header";
import { Footer } from "@/app/_components/footer";
import { ContactForm } from "@/app/_components/contact";
import { useState } from "react";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <div className="mb-12 text-center">
                <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
                  お問い合わせ
                </h1>
                <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                  初回は現状・課題のメモだけで構いません。まずはお気軽にご相談ください。
                </p>
              </div>

              {isSubmitted ? (
                <div className="mx-auto max-w-2xl rounded-lg border bg-card p-8 text-center shadow-sm">
                  <h2 className="mb-4 text-2xl font-bold">
                    お問い合わせありがとうございます
                  </h2>
                  <p className="text-muted-foreground">
                    2営業日以内に返信いたします。
                  </p>
                </div>
              ) : (
                <ContactForm onSuccess={() => setIsSubmitted(true)} />
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
