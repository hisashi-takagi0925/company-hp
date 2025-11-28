import React from "react";
import { FullWidthLayout } from "../layouts/FullWidthLayout";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";

const steps = [
  {
    number: "01",
    icon: "📁",
    title: "ナレッジを登録",
    body: "Notion、Jira、WebサイトのURLなどを管理画面から登録します。ドキュメントをアップロードすることも可能です。",
  },
  {
    number: "02",
    icon: "🧠",
    title: "AIが自動学習",
    body: "登録された情報をAIが解析し、知識ベースを構築します。管理画面から手動で修正・追加することも簡単です。",
  },
  {
    number: "03",
    icon: "</>",
    title: "サイトに埋め込み",
    body: "発行される埋め込みコード（iframe）をサイトに貼り付けるだけ。すぐにチャットボットが稼働し、顧客対応を開始します。",
  },
];

const nextActions = [
  "導入候補ページとナレッジの種類を共有（テンプレあり）",
  "15分のオンラインデモで実画面と数値計測の考え方をご説明",
  "ガバナンス要件を確認し、最短でPoC開始日をご提示",
];

export const HowItWorksSlide = () => {
  return (
    <FullWidthLayout>
      <SectionHeader
        title="導入は驚くほど簡単"
        description="専門的な知識は必要ありません。わずか3ステップで、あなたのサイトにAIチャットボットを導入できます。"
      />

      <div className="w-full flex-1 px-8 md:px-16 pb-8 flex flex-col lg:flex-row gap-8">
        <div className="flex flex-col md:flex-row justify-between items-start w-full gap-6 lg:w-2/3">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className={`flex flex-col items-center w-full md:w-1/3 ${
                idx < 2 ? "relative" : ""
              }`}
            >
              <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-4 text-2xl">
                {step.icon}
              </div>
              <Card className="flex flex-col items-center text-center h-56">
                <p className="text-xl font-bold text-blue-600 mb-2">{step.number}</p>
                <p className="text-lg font-semibold mb-3">{step.title}</p>
                <p className="text-gray-600 text-xs md:text-sm">{step.body}</p>
              </Card>
              {idx < 2 && (
                <div className="hidden md:block absolute top-14 right-[-30px] w-8 h-[2px] bg-blue-600">
                  <div className="absolute -right-1 -top-[3px] w-2 h-2 border-t-2 border-r-2 border-blue-600 rotate-45" />
                </div>
              )}
            </div>
          ))}
        </div>

        <Card className="lg:w-1/3 bg-gray-50 border-gray-100 h-fit">
          <p className="text-sm font-semibold text-blue-600 mb-2">次のアクション</p>
          <h3 className="text-lg font-bold text-gray-900 mb-3">
            1週間以内にPoC開始まで伴走します
          </h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
            {nextActions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="mt-4 text-xs text-gray-500 border-t border-gray-200 pt-3">
            NDA締結済みのお客様には、実装テンプレとUGCサンプルをお渡ししています。
          </div>
        </Card>
      </div>
    </FullWidthLayout>
  );
};

