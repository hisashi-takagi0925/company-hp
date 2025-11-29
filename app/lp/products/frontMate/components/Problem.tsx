import React from "react";
import Image from "next/image";
import { TrendingDown, FileQuestion, UserX } from "lucide-react";

const problems = [
  {
    icon: <TrendingDown className="w-8 h-8 text-blue-600" />,
    title: "訪問者の90%が",
    subtitle: "何も残さず離脱",
    detail: "月100件の問い合わせ機会を損失、商談コスト換算で月500万円の機会損失",
    note: "※月間サイト訪問1,000件、潜在問い合わせ率10%、商談獲得単価5万円の場合を想定",
    image: "/image1.png",
  },
  {
    icon: <FileQuestion className="w-8 h-8 text-blue-600" />,
    title: "HP・LPだけでは",
    subtitle: "個別の課題に応えきれない",
    detail: "業種・規模・導入フェーズごとの細かな懸念点をカバーしきれず離脱",
    image: "/image2.png",
  },
  {
    icon: <UserX className="w-8 h-8 text-blue-600" />,
    title: "フォーム送信は",
    subtitle: "心理的ハードルが高い",
    detail: "「ちょっとした質問」で問い合わせるのは気が引け、70%が離脱",
    image: "/img3.png",
  },
];


export const Problem = () => {
  return (
    <section id="problem" className="py-20 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
            サイト訪問者を逃していませんか？
          </h2>
          <p className="text-lg text-gray-600">
            多くの企業が抱える、Webサイトの3つの課題
          </p>
        </div>
        
        {/* All problems as featured cards with images */}
        <div className="space-y-8">
          {problems.map((problem, index) => {
            const isEven = index % 2 === 0;
            const colors = [
              { bg: "from-blue-50 to-white", border: "border-blue-200" },
              { bg: "from-blue-50 to-white", border: "border-blue-200" },
              { bg: "from-blue-50 to-white", border: "border-blue-200" }
            ];
            
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${colors[index].bg} border-2 ${colors[index].border} rounded-3xl overflow-hidden shadow-lg`}
              >
                <div className={`grid md:grid-cols-2 gap-8 items-center ${isEven ? '' : 'md:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`p-8 md:p-10 ${isEven ? '' : 'md:order-2'}`}>
                    <div className="flex justify-center md:justify-start mb-6">
                      {problem.icon}
                    </div>
                    <p className="text-gray-700 font-semibold mb-2 text-center md:text-left">
                      {problem.title}
                    </p>
                    <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center md:text-left">
                      {problem.subtitle}
                    </p>
                    <p className="text-base text-gray-600 text-center md:text-left leading-relaxed">
                      {problem.detail}
                    </p>
                    {problem.note && (
                      <p className="text-xs text-gray-400 mt-2 text-center md:text-left">
                        {problem.note}
                      </p>
                    )}
                  </div>

                  {/* Image */}
                  {problem.image && (
                    <div className={`relative h-64 md:h-80 lg:h-96 ${isEven ? '' : 'md:order-1'}`}>
                      <Image
                        src={problem.image}
                        alt={problem.subtitle}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

