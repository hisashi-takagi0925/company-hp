import React from "react";
import { TwoColumnLayout } from "../layouts/TwoColumnLayout";
import { CheckCircle2, Calendar, MessageSquare, Settings, Rocket, Flag } from "lucide-react";

const trialSteps = [
  { icon: MessageSquare, title: "課題ヒアリング", description: "貴社のビジネス課題と目標を詳しくお伺いします", color: "bg-blue-100 text-blue-600" },
  { icon: Settings, title: "プロンプト・外観設定", description: "貴社に最適なAI設定とデザインをカスタマイズ", color: "bg-indigo-100 text-indigo-600" },
  { icon: Rocket, title: "導入", description: "貴社サイトへの実装とテスト運用を開始", color: "bg-purple-100 text-purple-600" },
  { icon: Calendar, title: "FBミーティング", description: "隔週30分程度、運用状況の確認と改善提案", color: "bg-green-100 text-green-600" },
  { icon: Flag, title: "終了", description: "3ヶ月間の成果レビューと今後の方針決定", color: "bg-orange-100 text-orange-600" },
];

export const TrialProcessSlide = () => {
  return (
    <TwoColumnLayout
      left={
        <>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-blue-600 leading-tight">
            トライアルの内容
          </h2>
          
          <div className="space-y-6">
            {trialSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg ${step.color} flex items-center justify-center`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {index + 1}. {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                </div>
              );
            })}
          </div>
        </>
      }
      right={
        <div className="flex items-center justify-center h-full">
          <div className="w-full max-w-md space-y-8">
            {/* トライアル期間 */}
            <div className="text-center p-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl shadow-2xl text-white">
              <div className="mb-4">
                <Calendar className="w-16 h-16 mx-auto mb-3" />
              </div>
              <h3 className="text-2xl font-bold mb-2">トライアル期間</h3>
              <div className="text-6xl font-bold mb-3">3</div>
              <p className="text-xl text-blue-100">ヶ月間</p>
            </div>

            {/* サポート体制 */}
            <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200">
              <h4 className="font-bold text-gray-900 mb-3 text-center">充実のサポート体制</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <p className="text-gray-700">専任担当者による伴走支援</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <p className="text-gray-700">隔週のフィードバックMTG</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <p className="text-gray-700">運用データの定期分析</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <p className="text-gray-700">継続的な改善提案</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};
