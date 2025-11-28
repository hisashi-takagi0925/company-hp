import React from "react";
import { FullWidthLayout } from "../layouts/FullWidthLayout";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";

const pains = [
  "サイト上の情報だけでは決裁者の疑問を解消しきれない",
  "チャットボット導入後のCV貢献が見えず、継続判断が難しい",
  "FAQやシナリオ作成にリソースを割けず、更新が止まっている",
];

const stats = [
  {
    label: "CVR +38%",
    body: "製造業A社／資料請求導線にFront Mateを常設し、3カ月でCVRが38%向上。",
  },
  {
    label: "1.7x",
    body: "ITサービスB社／チャット経由の商談化率が1.7倍。ナレッジ同期は週1の自動実行のみ。",
  },
  {
    label: "サポート工数 -45%",
    body: "不動産C社／一次回答をAIが引き受け、有人対応は重要案件に集中。",
  },
];

const checklist = [
  "Slack / Teamsで週次レポートを自動共有",
  "会話ログから“次に仕込むCTA”を提案",
  "NDA締結後に実画面＋ベースライン調査を共有",
];

export const CaseHighlightsSlide = () => {
  return (
    <FullWidthLayout>
      <SectionHeader
        title="よくある課題と、Front Mateが出した結果"
        description="商談でヒアリングしたボトルネックを3時間以内に可視化し、改善仮説とセットでご提案しています。"
      />

      <div className="flex-1 flex flex-col md:flex-row px-8 md:px-16 pb-8 gap-6">
        <Card className="md:w-1/2 bg-blue-50/60 border-blue-100">
          <p className="text-sm font-semibold text-blue-600 mb-3">こんな声が多い</p>
          <ul className="space-y-3 text-sm text-gray-700 list-disc list-inside">
            {pains.map((pain) => (
              <li key={pain}>{pain}</li>
            ))}
          </ul>
          <div className="mt-5 p-4 rounded-lg bg-white border border-blue-100 text-sm text-gray-600">
            <p className="font-semibold text-gray-800 mb-1">進め方</p>
            <p>
              事前にアクセスログや現行チャットのスクショを共有いただければ、初回ミーティングで改善案と数値仮説をお渡しします。
            </p>
          </div>
        </Card>

        <div className="md:w-1/2 space-y-4">
          {stats.map((item) => (
            <Card key={item.label} className="flex flex-col gap-1">
              <p className="text-sm font-semibold text-blue-600">{item.label}</p>
              <p className="text-sm text-gray-700 leading-relaxed">{item.body}</p>
            </Card>
          ))}
          <Card className="bg-gray-50">
            <p className="text-sm font-semibold text-gray-800 mb-2">ご提供すること</p>
            <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-600">
              {checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </FullWidthLayout>
  );
};
