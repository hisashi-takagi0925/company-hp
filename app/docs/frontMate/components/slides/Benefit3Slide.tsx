import React from "react";
import { TwoColumnLayout } from "../layouts/TwoColumnLayout";
import { PointCard } from "../ui/PointCard";
import { Benefit3Visual } from "../illustrations/Benefit3Visual";

const points = [
  {
    title: "HP・LPでは拾いきれない懸念点",
    body: "一般的なFAQやプロダクトページだけでは、業界特有の細かな懸念点までカバーしきれません。",
  },
  {
    title: "業種・規模・導入ステージごとの対応",
    body: "ユーザーの属性や導入フェーズに応じた固有の課題に対して、的確なサポートを提供します。",
  },
  {
    title: "自社ケースに対する具体的回答",
    body: "「自社のこのケースだとどうなるか？」といった具体的な質問に、ナレッジソースを根拠とした回答を提供します。",
  },
];

export const Benefit3Slide = () => {
  return (
    <TwoColumnLayout
      left={
        <>
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-blue-600">
              メリット③
            </h2>
            <h3 className="text-xl md:text-2xl font-medium text-gray-800 mb-6">
              「自社の場合はどうなる？」個別の疑問にも、ズバリ回答
            </h3>
          </div>

          <div className="space-y-4">
            {points.map((point) => (
              <PointCard key={point.title} title={point.title} body={point.body} />
            ))}
          </div>
        </>
      }
      right={<Benefit3Visual />}
    />
  );
};

