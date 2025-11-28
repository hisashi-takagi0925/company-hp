import React from "react";
import { FullWidthLayout } from "../layouts/FullWidthLayout";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";

const metrics = [
  { label: "総会話数", value: "1,248" },
  { label: "CV獲得数", value: "156" },
  { label: "CVR", value: "12.5%" },
];

const proofPoints = [
  {
    company: "製造業A社",
    result: "+38% CVR",
    detail: "ナレッジ自動同期と会話分析で資料請求導線を週次で最適化。",
  },
  {
    company: "SaaS B社",
    result: "商談化1.7倍",
    detail: "チャットからのデモ予約誘導を自動化し、SQL件数を倍増。",
  },
];

const insightBullets = [
  "ページ別・CTA別の貢献度をスコアリングし、次に仕込むシナリオを提案",
  "Slack / Teams に日次速報を配信し、マーケ・営業・CSで同じ指標を共有",
  "会話単位で引用ナレッジと出典URLを紐付け、レビューを効率化",
];

export const ReportSlide = () => {
  return (
    <FullWidthLayout>
      <SectionHeader
        title="分析レポート"
        subtitle="ROIを可視化"
        description="リアルタイムでCV貢献を把握し、次に打つ施策を数値ベースで決定できます。"
      />

      <div className="flex-1 flex flex-col xl:flex-row px-8 md:px-16 pb-6 gap-8">
        <div className="xl:w-2/3 space-y-4">
          <div>
            <p className="text-base font-medium mb-1">コンバージョン推移（直近30日）</p>
            <div className="bg-white rounded-lg p-3 border border-gray-100 shadow-sm h-64 flex flex-col justify-between">
              <div className="flex-1 flex items-end gap-1">
                {Array.from({ length: 20 }).map((_, i) => {
                  const height = 30 + ((i * 7) % 60);
                  return (
                    <div key={i} className="flex-1 flex items-end">
                      <div
                        className="w-full rounded-t bg-gradient-to-t from-blue-500/40 to-blue-200"
                        style={{ height: `${height}%` }}
                      />
                    </div>
                  );
                })}
              </div>
              <p className="text-[11px] text-gray-400 mt-2 italic text-right">
                サンプルデータです。実際の画面では会話ID・ページURLまでドリルダウン可能です。
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {metrics.map((m) => (
              <Card key={m.label} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-base font-semibold">
                  {m.value}
                </div>
                <div>
                  <p className="text-xs text-gray-500">{m.label}</p>
                  <p className="text-sm text-gray-700">30日ローリング</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="xl:w-1/3 space-y-4">
          <Card className="bg-blue-50/60 border-blue-100">
            <p className="text-sm font-semibold text-blue-600 mb-3">導入実績の一例</p>
            <div className="space-y-3">
              {proofPoints.map((item) => (
                <div key={item.company}>
                  <p className="text-sm font-semibold text-gray-900">
                    {item.company} — {item.result}
                  </p>
                  <p className="text-xs text-gray-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="bg-gray-50">
            <p className="text-sm font-semibold text-gray-800 mb-2">ダッシュボードで出来ること</p>
            <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-600">
              {insightBullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </FullWidthLayout>
  );
};
