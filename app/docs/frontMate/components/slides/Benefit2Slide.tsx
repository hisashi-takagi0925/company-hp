import React from "react";
import { TwoColumnLayout } from "../layouts/TwoColumnLayout";
import { PointCard } from "../ui/PointCard";
import { Benefit2Visual } from "../illustrations/Benefit2Visual";

const points = [
  {
    title: "既存ナレッジの活用",
    body: "FAQ やシナリオフローを一から作り込む必要はありません。既存のドキュメントをナレッジソースとして登録するだけで回答できます。",
  },
  {
    title: "複数ソースに対応",
    body: "Notion・Jira・Confluence・公式サイト・Google ドライブなど、様々なソースに対応し、内容を自動で読み取ります。",
  },
  {
    title: "自動同期でいつも最新",
    body: "元ドキュメント側で内容を更新すれば、同期ジョブによって最新情報が自動でチャットボットに反映されます。",
  },
];

export const Benefit2Slide = () => {
  return (
    <TwoColumnLayout
      left={
        <>
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-blue-600">
              メリット②
            </h2>
            <h3 className="text-xl md:text-2xl font-medium text-gray-800 mb-6">
              面倒なQ&A作成はゼロ。社内ドキュメントを渡すだけ
            </h3>
          </div>

          <div className="space-y-4">
            {points.map((point) => (
              <PointCard key={point.title} title={point.title} body={point.body} />
            ))}
          </div>
        </>
      }
      right={<Benefit2Visual />}
    />
  );
};

