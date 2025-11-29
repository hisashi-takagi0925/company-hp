"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "設定は簡単ですか？",
    answer: "はい。Notion、Googleドライブなど既存のナレッジソースを登録するだけ。FAQ作成やシナリオ設計は不要です。",
  },
  {
    question: "導入にどれくらい時間がかかりますか？",
    answer: "最短5分で導入可能です。発行された1行のタグをサイトに貼り付けるだけで完了します。",
  },
  {
    question: "費用はいくらですか？",
    answer: "月額3万円〜のプランをご用意しています。利用規模や機能に応じて複数プランがあります。まずは無料デモで詳細をご確認ください。",
  },
  {
    question: "既存のCMSやWebサイトでも使えますか？",
    answer: "はい。WordPress、Wix、Next.js、その他あらゆるWebサイトで利用可能です。",
  },
  {
    question: "サポートはありますか？",
    answer: "はい。導入から運用まで専任チームが丁寧にサポートいたします。",
  },
  {
    question: "無料トライアルはありますか？",
    answer: "はい。14日間、全機能を無料でお試しいただけます。クレジットカードの登録も不要です。",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
            よくある質問
          </h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-blue-600 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 flex items-center">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
