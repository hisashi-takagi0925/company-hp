import React from "react";
import { FullWidthLayout } from "../layouts/FullWidthLayout";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";

const competitors = [
  { label: "Front Mate", embed: "◎", knowledge: "◎", cvGuide: "◎", autoFill: "◎", roi: "◎", support: "◎", note: "導入〜改善プランまでCSが伴走" },
  { label: "シナリオ型チャット", embed: "○", knowledge: "×", cvGuide: "△", autoFill: "×", roi: "×", support: "△", note: "シナリオ作成が属人化しやすい" },
  { label: "FAQ検索ボット", embed: "○", knowledge: "○", cvGuide: "×", autoFill: "×", roi: "△", support: "△", note: "CV導線の設計は別ツールが必要" },
  { label: "有人チャット＋ヘルプデスク", embed: "△", knowledge: "○", cvGuide: "○", autoFill: "×", roi: "△", support: "◎", note: "人件費と稼働の増減管理が必要" },
];

const headers = [
  { key: "embed", title: "埋め込み" },
  { key: "knowledge", title: "ナレッジ同期" },
  { key: "cvGuide", title: "CV誘導" },
  { key: "autoFill", title: "入力自動化" },
  { key: "roi", title: "ROI計測" },
  { key: "support", title: "運用サポート" },
];

export const CompetitiveSlide = () => {
  return (
    <FullWidthLayout>
      <SectionHeader
        title="競合比較"
        subtitle="CVに特化した設計と運用サポートが強み"
        description="一般的なFAQ/シナリオ型チャットとの違いを整理しました。Front Mateは“成果を出すための体験”を一気通貫で提供します。"
      />

      <div className="px-4 md:px-12 pb-8">
        <div className="overflow-auto rounded-2xl border border-gray-100 bg-white">
          <table className="w-full text-left text-sm text-gray-700">
            <thead className="bg-gray-50 text-xs uppercase text-gray-500">
              <tr>
                <th className="py-3 px-4">比較項目</th>
                {headers.map((header) => (
                  <th key={header.key} className="py-3 px-4">
                    {header.title}
                  </th>
                ))}
                <th className="py-3 px-4">補足</th>
              </tr>
            </thead>
            <tbody>
              {competitors.map((row) => (
                <tr key={row.label} className="border-t border-gray-100">
                  <td className="py-3 px-4 font-semibold text-gray-900">{row.label}</td>
                  {headers.map((header) => (
                    <td key={header.key} className="py-3 px-4 text-center">
                      {(row as any)[header.key]}
                    </td>
                  ))}
                  <td className="py-3 px-4 text-xs text-gray-500">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Card className="mt-6 bg-blue-50/60 border-blue-100 text-sm text-gray-700">
          <p className="font-semibold text-blue-700 mb-1">評価基準</p>
          <p>◎: 標準機能として提供 / ○: 設定 or オプションで対応 / △: 外部ツールと併用 / ×: 想定外</p>
        </Card>
      </div>
    </FullWidthLayout>
  );
};

