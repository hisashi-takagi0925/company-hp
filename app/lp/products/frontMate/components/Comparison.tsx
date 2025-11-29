import React from "react";
import { Check, X } from "lucide-react";

const comparisons = [
  {
    feature: "設定方法",
    competitor: "シナリオ設計・FAQ作成が必要",
    frontMate: "既存ナレッジを登録するだけ",
  },
  {
    feature: "回答の柔軟性",
    competitor: "固定的な回答のみ",
    frontMate: "コンテクストを理解して最適回答",
  },
  {
    feature: "更新作業",
    competitor: "手動で更新が必要",
    frontMate: "ナレッジソースと自動同期",
  },
  {
    feature: "個別対応",
    competitor: "画一的な対応",
    frontMate: "業種・規模別に最適化",
  },
  {
    feature: "コンバージョン",
    competitor: "単なるQ&A窓口",
    frontMate: "CV誘導に特化した設計",
  },
  {
    feature: "導入期間",
    competitor: "数週間〜数ヶ月",
    frontMate: "最短3日で本番稼働",
  },
];

export const Comparison = () => {
  return (
    <section id="comparison" className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
            コンバージョンを生む、次世代のAI営業アシスタント
          </h2>
          <p className="text-lg text-gray-600">
            単なるFAQボットではなく、ビジネス成果に直結するエンジンです
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-gradient-to-br from-blue-50/50 to-white rounded-3xl overflow-hidden border-2 border-gray-200 shadow-xl">
          {/* Header */}
          <div className="grid grid-cols-3 gap-4 p-6 bg-gradient-to-r from-blue-600 to-indigo-600 border-b-2 border-blue-700">
            <div className="text-sm font-semibold text-white"></div>
            <div className="text-center">
              <div className="text-sm font-semibold text-blue-100 mb-1">AI営業アシスタント</div>
              <div className="text-xl font-bold text-white">
                Front Mate
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold text-blue-100 mb-1">一般的な</div>
              <div className="text-base font-bold text-white/90">チャットボット</div>
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="divide-y divide-gray-200">
            {comparisons.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-3 gap-4 p-6 hover:bg-white/50 transition-colors"
              >
                {/* Feature Name */}
                <div className="flex items-center">
                  <span className="font-semibold text-gray-900">{item.feature}</span>
                </div>

                {/* Front Mate - 最初に配置 */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-base font-bold text-blue-600">{item.frontMate}</span>
                </div>

                {/* Competitor - 後に配置 */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                    <X className="w-4 h-4 text-red-600" />
                  </div>
                  <span className="text-sm text-gray-600">{item.competitor}</span>
                </div>
              </div>
            ))}
          </div>


        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Front Mateは、BtoB向けに最適化された唯一のコンバージョンエンジンです
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-blue-200 shadow-sm">
              <Check className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-gray-700">問い合わせ3.2倍増</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-blue-200 shadow-sm">
              <Check className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-gray-700">設定不要で即日稼働</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-blue-200 shadow-sm">
              <Check className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-gray-700">投資回収3ヶ月</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
