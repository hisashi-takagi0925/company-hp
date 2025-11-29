import React from "react";
import { BarChart3, Calendar, FileText } from "lucide-react";

export const TrialRequestsSlide = () => {
  return (
    <div className="flex flex-col h-full items-center justify-center px-12 py-8">
      <div className="w-full max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-600">
          トライアル企業様へのお願い
        </h2>
        
        <p className="text-gray-600 mb-8 leading-relaxed">
          より良い製品開発のため、以下3点にご協力をお願いいたします
        </p>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center">
              <BarChart3 className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold">1</span>
                運用実績データの確認
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Front Mateの運用実績データ（会話数、CV数、CVR等）を
                定期的に確認させてください。製品改善の貴重なインサイトとなります。
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center">
              <Calendar className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold">2</span>
                定期フィードバックMTGの実施
              </h3>
              <p className="text-gray-600 leading-relaxed">
                隔週で30分程度、フィードバックミーティングを実施させてください。
                運用状況のヒアリングや改善提案をさせていただきます。
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center">
              <FileText className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-purple-600 text-white text-xs font-bold">3</span>
                導入事例としてのLP掲載
              </h3>
              <p className="text-gray-600 leading-relaxed">
                貴社のトライアル結果を、Front MateのLPに
                導入企業様の声として掲載させてください。
                （事前に内容のご確認・承認をいただきます）
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
