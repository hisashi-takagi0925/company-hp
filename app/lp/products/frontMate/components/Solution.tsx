import React from "react";
import Image from "next/image";
import { Target, Sparkles, Brain, Zap } from "lucide-react";

const solutions = [
  {
    icon: <Target className="w-10 h-10 text-blue-600" />,
    title: "離脱を防ぎ、CVへ直結",
    description: "単なるQ&A窓口ではなく「コンバージョンを生む接客担当」。離脱前のユーザーを資料請求や問い合わせへスムーズに導きます",
    image: "/conversion-image1.png",
  },
  {
    icon: <Sparkles className="w-10 h-10 text-blue-600" />,
    title: "設定は超簡単、即日稼働",
    description: "Notion・Googleドライブなど既存ナレッジを登録するだけ。FAQ作成やシナリオ設計は不要で、今日から使えます",
    image: "/knowledge.png",
  },
  {
    icon: <Brain className="w-10 h-10 text-blue-600" />,
    title: "固有の課題に最適回答",
    description: "HPでは拾いきれない業種・規模別の細かな懸念点も、コンテクストを理解して具体的に回答します",
    image: "/lp.png",
  },
  {
    icon: <Zap className="w-10 h-10 text-blue-600" />,
    title: "最適なタイミングでCV誘導",
    description: "会話履歴から検討フェーズを推定。疑問が解消されたタイミングで、押し付け感なくクロージングします",
    image: "/goal.png",
  },
];

export const Solution = () => {
  return (
    <section id="solution" className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="space-y-12">
          {solutions.map((solution, index) => {
            const isReversed = index % 2 === 1;
            
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50/50 to-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className={`grid md:grid-cols-2 gap-8 items-center ${isReversed ? 'md:flex-row-reverse' : ''}`}>
                  {/* Image */}
                  <div className={`relative h-64 md:h-80 lg:h-96 ${isReversed ? 'md:order-2' : ''}`}>
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className={`p-8 md:p-10 ${isReversed ? 'md:order-1' : ''}`}>
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-sm mb-6">
                      {solution.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};



