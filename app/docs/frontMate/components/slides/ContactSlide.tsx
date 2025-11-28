import React from "react";
import { FullWidthLayout } from "../layouts/FullWidthLayout";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";

export const ContactSlide = () => {
  return (
    <FullWidthLayout>
      <SectionHeader
        title="お問い合わせ"
        description="Front Mateについてのご質問や、デモのご予約はこちらからお気軽にお問い合わせください。"
      />

      <div className="flex-1 flex flex-col md:flex-row px-8 md:px-16 gap-8">
        {/* 会社情報 */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <Card className="bg-gray-50 border-gray-100">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              ライチョウテックパートナーズ株式会社
            </h3>
            <div className="space-y-3 text-sm text-gray-700">
              <div>
                <p className="font-semibold mb-1">メールアドレス</p>
                <p className="text-gray-600">contact@example.com</p>
              </div>
              <div>
                <p className="font-semibold mb-1">電話番号</p>
                <p className="text-gray-600">03-1234-5678</p>
              </div>
              <div>
                <p className="font-semibold mb-1">営業時間</p>
                <p className="text-gray-600">平日 9:00〜18:00</p>
              </div>
              <div>
                <p className="font-semibold mb-1">所在地</p>
                <p className="text-gray-600">
                  〒100-0001
                  <br />
                  東京都千代田区千代田1-1-1
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* 問い合わせ先情報 */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <Card>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              次のアクションでご用意いただきたいもの
            </h3>
            <div className="space-y-4 text-sm text-gray-600">
              <p>
                DMで共有したLPの補足として、以下をお送りいただければ初回ミーティングで改善仮説と
                PoCスケジュールをご提示できます。
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>チャット導入を検討しているページURL（2〜3本）</li>
                <li>回答に使いたいナレッジの種類（Notion / PDF など）</li>
                <li>想定するCV（資料請求 / デモ予約 など）</li>
                <li>ご予算感（月額固定プランをご用意しています）</li>
              </ul>
              <div className="pt-3 border-t border-gray-200">
                <p className="text-xs text-gray-500">
                  ※通常2営業日以内に初回ミーティングの候補日をご連絡します。NDA締結済みのお客様には
                  実画面の動画とテンプレ資料もお渡しします。
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </FullWidthLayout>
  );
};
