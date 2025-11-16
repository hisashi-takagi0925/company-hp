"use client";

import { Header } from "@/app/_components/header";
import { Footer } from "@/app/_components/footer";
import { ContactForm } from "@/app/_components/contact";
import { Button } from "@/components/ui/button";
import Link from "next/link";
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
                  <div className="mb-6 space-y-2 text-sm text-muted-foreground">
                    <p>担当者より、3営業日以内に返信いたします。</p>
                    <div className="mx-auto max-w-md text-left text-xs leading-relaxed text-muted-foreground">
                      <p className="font-semibold text-foreground">
                        送信後の流れ
                      </p>
                      <ol className="mt-1 list-inside list-decimal space-y-1">
                        <li>担当者がお問い合わせ内容を確認します。</li>
                        <li>
                          1〜3営業日以内に、メールにてご返信・日程調整のご連絡を差し上げます。
                        </li>
                        <li>
                          オンライン（または対面）での初回相談にて、現状やご希望を詳しくお伺いします。
                        </li>
                      </ol>
                    </div>
                  </div>
                  <Link href="/">
                    <Button size="lg">ホームに戻る</Button>
                  </Link>
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
