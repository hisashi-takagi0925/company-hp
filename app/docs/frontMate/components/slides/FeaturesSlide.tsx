import Image from "next/image";
import React from "react";
import { FullWidthLayout } from "../layouts/FullWidthLayout";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";

const coreFeatures = [
  {
    icon: "🧠",
    title: "ナレッジ自動同期",
    body: "Notion / Confluence / GoogleDrive などの原稿を指定するだけ。同期ジョブが更新を検知し、チャットの回答に反映します。",
  },
  {
    icon: "🗂",
    title: "会話ログ × CTA 設計",
    body: "どの質問にどんなCTAを出したかを自動記録。成果に直結した“押しどころ”を提案します。",
  },
  {
    icon: "📊",
    title: "ダッシュボードでROI測定",
    body: "CV数・会話品質・ページ別貢献を1画面で把握。Slack / Teamsへ週次レポートを自動配信できます。",
  },
];

const adminBullets = [
  "iframe 1行で埋め込み。Studio / WordPress など主要CMSに対応",
  "会話エスカレーションをZapier / Slack連携で自動化",
  "顧客データでの学習は一切なし。IP制限やSAML認証など、エンタープライズ水準のセキュリティ",
];

export const FeaturesSlide = () => {
  return (
    <FullWidthLayout>
      <SectionHeader
        title="管理画面で“成果を作る”体験を完結"
        description="プロダクトチームが日常的に使う前提でUIを設計。ナレッジ運用・CTA設計・成果確認まで1画面で回せます。"
      />

      <div className="w-full flex-1 px-8 md:px-16 pb-8 flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2 grid grid-cols-1 gap-4">
          {coreFeatures.map((feature) => (
            <Card key={feature.title} className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.body}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="lg:w-1/2 space-y-4">
          <Card className="relative overflow-hidden">
            <p className="text-sm font-semibold text-blue-600 mb-3">ダッシュボード抜粋</p>
            <div className="rounded-xl border border-gray-100 overflow-hidden bg-white">
              <Image
                src="/docs_top.png"
                alt="Front Mate dashboard preview"
                width={900}
                height={520}
                className="w-full h-auto object-cover"
                priority={false}
              />
            </div>
          </Card>
          <Card className="bg-gray-50">
            <p className="text-sm font-semibold text-gray-800 mb-2">運用チームが見る指標</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
              {adminBullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </FullWidthLayout>
  );
};

