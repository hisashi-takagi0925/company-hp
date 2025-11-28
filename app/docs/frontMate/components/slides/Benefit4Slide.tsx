import React from "react";
import { TwoColumnLayout } from "../layouts/TwoColumnLayout";
import { PointCard } from "../ui/PointCard";
import { Benefit4Visual } from "../illustrations/Benefit4Visual";

const points = [
  {
    title: "会話コンテクストを理解",
    body: "会話履歴をセッション単位で保持し、ユーザーとの対話の流れや背景を継続的に把握します。",
  },
  {
    title: "検討フェーズを推定",
    body: "ユーザーが今どの検討フェーズにいるかをコンテクストから推定し、適切なタイミングでサポートします。",
  },
  {
    title: "問い合わせ内容を自動生成",
    body: "会話の文脈から「件名」と「本文」をAIが自動生成。ユーザーは名前とメアドを入れるだけで、驚くほど簡単に問い合わせが完了します。",
  },
];

export const Benefit4Slide = () => {
  return (
    <TwoColumnLayout
      left={
        <>
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-blue-600">
              メリット④
            </h2>
            <h3 className="text-xl md:text-2xl font-medium text-gray-800 mb-6">
              「欲しい」と思ったその瞬間に。会話の流れでフォームを差し出す
            </h3>
          </div>

          <div className="space-y-4">
            {points.map((point) => (
              <PointCard key={point.title} title={point.title} body={point.body} />
            ))}
          </div>
        </>
      }
      right={<Benefit4Visual />}
    />
  );
};

