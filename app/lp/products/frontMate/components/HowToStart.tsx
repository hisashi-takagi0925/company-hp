import React from "react";
import { Check, Circle } from "lucide-react";

const steps = [
  {
    day: "本日",
    title: "お申し込み",
    description: "フォーム送信後、即アカウント発行",
    duration: "5分",
  },
  {
    day: "1-2日目",
    title: "ナレッジ登録",
    description: "NotionやGoogleドライブを連携",
    duration: "30分",
  },
  {
    day: "3日目〜",
    title: "本番稼働",
    description: "タグを1行貼り付けて完了",
    duration: "5分",
  },
];

export const HowToStart = () => {
  return (
    <section id="how-to-start" className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
            導入はたったの3ステップ*
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            専門知識不要、最短3日で本番稼働*
          </p>
          <p className="text-xs text-gray-400">
            *プロンプト設定、ナレッジ設定などの導入コンサルなしの場合
          </p>
        </div>
        
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600"></div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative h-full">
                {/* Step Card */}
                <div className="h-full bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow relative z-10 flex flex-col">
                  {/* Day Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-600 text-white text-sm font-semibold mb-4 mx-auto">
                    <Circle className="w-3 h-3 fill-current" />
                    {step.day}
                  </div>
                  
                  {/* Step Number */}
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-white">{index + 1}</span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-4 flex-grow">
                    {step.description}
                  </p>
                  
                  {/* Duration */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mx-auto">
                    <Check className="w-4 h-4" />
                    約{step.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-4">
            <span className="font-bold text-blue-600">最短3日</span>で、あなたのサイトがコンバージョンエンジンに
          </p>
        </div>
      </div>
    </section>
  );
};
