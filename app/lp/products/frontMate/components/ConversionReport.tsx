import React from "react";
import { BarChart3, PieChart, TrendingUp } from "lucide-react";

export const ConversionReport = () => {
  return (
    <section id="conversion" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white border border-gray-200 rounded-2xl shadow-xl p-6 md:p-8">
              {/* Mock Chart UI */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h4 className="text-lg font-bold text-gray-900">
                    コンバージョン推移
                  </h4>
                  <p className="text-sm text-gray-500">直近30日間</p>
                </div>
                <div className="flex gap-2">
                  <div className="px-3 py-1 bg-blue-50 text-blue-600 rounded text-xs font-medium">
                    CV数
                  </div>
                  <div className="px-3 py-1 bg-gray-50 text-gray-600 rounded text-xs font-medium">
                    CVR
                  </div>
                </div>
              </div>

              <div className="h-48 flex items-end justify-between gap-2 mb-6">
                {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                  <div
                    key={i}
                    className="w-full bg-blue-100 rounded-t-sm relative group"
                  >
                    <div
                      className="absolute bottom-0 left-0 right-0 bg-blue-600 rounded-t-sm transition-all duration-500"
                      style={{ height: `${h}%` }}
                    ></div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                <div>
                  <p className="text-xs text-gray-500 mb-1">総会話数</p>
                  <p className="text-xl font-bold text-gray-900">1,248</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">CV獲得数</p>
                  <p className="text-xl font-bold text-blue-600">156</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">CVR</p>
                  <p className="text-xl font-bold text-gray-900">12.5%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-600 text-sm font-medium w-fit mb-6">
              <TrendingUp size={16} />
              ROIを可視化
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              チャットボットの貢献度を
              <br />
              <span className="text-blue-600">一目で把握</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              単なる問い合わせ対応だけでなく、ビジネス成果への貢献度を可視化します。
              どのページで、どの会話がコンバージョン（資料請求や購入）に繋がったかを分析し、
              改善のサイクルを回すことができます。
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                  <BarChart3 size={14} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    詳細なコンバージョン分析
                  </h4>
                  <p className="text-sm text-gray-600">
                    日次・週次・月次でのCV数やCVRの推移をグラフで確認できます。
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                  <PieChart size={14} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    ページ別パフォーマンス
                  </h4>
                  <p className="text-sm text-gray-600">
                    どのページからの問い合わせが最も成果に繋がっているかを特定します。
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

