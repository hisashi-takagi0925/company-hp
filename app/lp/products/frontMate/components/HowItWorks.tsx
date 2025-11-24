import React from "react";
import { FileText, RefreshCw, MessageSquare } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <FileText className="w-8 h-8 text-blue-600" />,
    title: "ナレッジを登録",
    description:
      "Notion、Jira、WebサイトのURLなどを管理画面から登録します。ドキュメントをアップロードすることも可能です。",
  },
  {
    number: "02",
    icon: <RefreshCw className="w-8 h-8 text-blue-600" />,
    title: "AIが自動学習",
    description:
      "登録された情報をAIが解析し、知識ベースを構築します。Webサイトの更新に合わせて自動的に再学習させることもできます。",
  },
  {
    number: "03",
    icon: <MessageSquare className="w-8 h-8 text-blue-600" />,
    title: "サイトに埋め込み",
    description:
      "発行される埋め込みコード（iframe）をサイトに貼り付けるだけ。すぐにチャットボットが稼働し、顧客対応を開始します。",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            導入は驚くほど簡単
          </h2>
          <p className="text-lg text-gray-600">
            専門的な知識は必要ありません。わずか3ステップで、あなたのサイトにAIチャットボットを導入できます。
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-100 -z-10"></div>
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center bg-white p-6"
            >
              <div className="w-24 h-24 bg-white border-4 border-blue-50 rounded-full flex items-center justify-center mb-6 shadow-sm relative z-10">
                {step.icon}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm border-4 border-white">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

