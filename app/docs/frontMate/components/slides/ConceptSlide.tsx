import React from "react";
import { FullWidthLayout } from "../layouts/FullWidthLayout";
import { SectionHeader } from "../ui/SectionHeader";

const points = [
  {
    title: "ナレッジの活用とユーザー行動データの統合",
    body: "既存の社内ナレッジと、サイト訪問者の行動パターンを組み合わせることで、より精度の高い回答と適切なタイミングでの提案を実現します。",
  },
  {
    title: "BtoB向けコンバージョンエンジン",
    body: "一般的なチャットボットとは異なり、ビジネスの成約を高めることに特化。導入企業の商材・サービスへの理解を深め、検討段階に応じた適切な案内を行います。",
  },
  {
    title: "体験設計による導線最適化",
    body: "ユーザーの興味・関心や疑問点を会話から抽出し、資料請求やデモ予約などのコンバージョンポイントへ自然に誘導する体験フローをデザインします。",
  },
];

export const ConceptSlide = () => {
  return (
    <FullWidthLayout>
      <SectionHeader
        title="聞かれたことに答えるだけじゃない。「次のアクション」へ導くチャット"
        description="「ナレッジの活用」と「ユーザー行動データ」を組み合わせ、単なるQ&Aを超えた BtoB向けコンバージョンエンジンとして機能します。"
      />

      <div className="w-full flex flex-col px-8 md:px-16 pb-8 space-y-4 flex-1">
        {points.map((point, idx) => (
          <div
            key={point.title}
            className="flex items-start bg-blue-50/40 border-l-4 border-blue-600 rounded-lg p-5 hover:shadow-sm transition-shadow"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-600 font-bold text-lg mr-4">
              {idx + 1}
            </div>
            <div>
              <p className="text-lg font-medium mb-2">{point.title}</p>
              <p className="text-gray-600 text-sm md:text-base">{point.body}</p>
            </div>
          </div>
        ))}
      </div>
    </FullWidthLayout>
  );
};
