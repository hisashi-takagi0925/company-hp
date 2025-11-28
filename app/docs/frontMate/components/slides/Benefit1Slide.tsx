import React from "react";
import { TwoColumnLayout } from "../layouts/TwoColumnLayout";
import { PointCard } from "../ui/PointCard";
import { Benefit1Visual } from "../illustrations/Benefit1Visual";

const points = [
  {
    title: "コンバージョンを生む接客担当",
    body: "Front Mateは単なる問い合わせ窓口ではなく「コンバージョンを生む接客担当」として設計されています。",
  },
  {
    title: "離脱前の即時回答",
    body: "ページ内で探しきれなかった情報や、検討の最終一押しとなる疑問に即時回答し、離脱を防ぎます。",
  },
  {
    title: "資料請求・問い合わせへの誘導",
    body: "疑問解決から資料請求や問い合わせフォームへとユーザーをスムーズに導き、CVRを高めます。",
  },
];

export const Benefit1Slide = () => {
  return (
    <TwoColumnLayout
      left={
        <>
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-blue-600">
              メリット①
            </h2>
            <h3 className="text-xl md:text-2xl font-medium text-gray-800 mb-6">
              サイトを去ろうとするその前に。AIが「接客」して引き留めます
            </h3>
          </div>

          <div className="space-y-4">
            {points.map((point) => (
              <PointCard
                key={point.title}
                title={point.title}
                body={point.body}
              />
            ))}
          </div>
        </>
      }
      right={<Benefit1Visual />}
    />
  );
};
