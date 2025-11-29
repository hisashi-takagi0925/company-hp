import React from "react";
import { MessageCircle, HelpCircle, Mail, Phone, ClipboardList, Target, MessageSquare, Users } from "lucide-react";

export const QASlide = () => {
  return (
    <div className="flex flex-col h-full bg-white p-8 md:p-10">
      {/* ヘッダー */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-3">
          質疑応答・貴社ヒアリング
        </h2>
        <p className="text-lg text-gray-600">
          ご質問とあわせて、貴社のビジネスについてお聞かせください
        </p>
      </div>

      {/* メインコンテンツ */}
      <div className="flex-1 grid md:grid-cols-2 gap-8">
        {/* 左側：質疑応答 */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <MessageCircle className="w-8 h-8 text-blue-600" />
            質疑応答
          </h3>
          
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                <HelpCircle className="w-7 h-7 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2 text-lg">どんな質問でもOK</h4>
                <p className="text-base text-gray-600 leading-relaxed">
                  製品機能、導入プロセス、料金、サポート体制など、お気軽にご質問ください
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center">
                <Mail className="w-7 h-7 text-indigo-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2 text-lg">後日のご相談も歓迎</h4>
                <p className="text-base text-gray-600 leading-relaxed">
                  本日お聞きできなかったことは、メールやお電話でいつでもお問い合わせください
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 右側：貴社ヒアリング */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <ClipboardList className="w-8 h-8 text-blue-600" />
            貴社業務のヒアリング
          </h3>
          
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-start gap-4">
                <Target className="w-7 h-7 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 text-base mb-2">ビジネスモデル・ターゲット顧客</h4>
                  <p className="text-sm text-gray-600">主要な顧客層、提供サービス・製品について</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-start gap-4">
                <MessageSquare className="w-7 h-7 text-indigo-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 text-base mb-2">現状の問い合わせ対応</h4>
                  <p className="text-sm text-gray-600">月間問い合わせ数、よくある質問、課題</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-start gap-4">
                <ClipboardList className="w-7 h-7 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 text-base mb-2">既存のナレッジ管理</h4>
                  <p className="text-sm text-gray-600">Notion、Googleドライブ等の活用状況</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-start gap-4">
                <Users className="w-7 h-7 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 text-base mb-2">期待する成果・KPI</h4>
                  <p className="text-sm text-gray-600">Front Mate導入で達成したい目標</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
