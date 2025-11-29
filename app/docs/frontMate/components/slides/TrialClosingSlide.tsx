import React from "react";
import Image from "next/image";
import { TwoColumnLayout } from "../layouts/TwoColumnLayout";

export const TrialClosingSlide = () => {
  return (
    <TwoColumnLayout
      left={
        <>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-600">
            ぜひFront Mateの<br />
            トライアル導入をご検討ください
          </h2>
          
          <div className="space-y-6">
            <p className="text-xl text-gray-800 leading-relaxed font-medium">
              共にビジネス成長を実現する<br />
              パートナー企業様を募集しています
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                <p className="text-gray-700">
                  Front Mateを<span className="font-bold text-blue-600">合計6ヶ月無料</span>でご利用
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                <p className="text-gray-700">
                  貴社の<span className="font-bold text-blue-600">PR記事ページを作成</span>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                <p className="text-gray-700">
                  定期的な<span className="font-bold text-blue-600">サポート・改善提案</span>
                </p>
              </div>
            </div>

            <div className="mt-10 p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl">
              <p className="text-white text-center text-lg font-semibold mb-3">
                お問い合わせ
              </p>
              <div className="space-y-2 text-white">
                <p className="text-center text-sm">
                  📧 Email: info@raicho-tech.com
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-500 text-center mt-6">
              ご質問・ご相談など、お気軽にお問い合わせください
            </p>
          </div>
        </>
      }
      right={
        <div className="flex items-center justify-center h-full">
          <div className="w-full max-w-2xl">
            <Image
              src="/Closing.png"
              alt="Thank You"
              width={1000}
              height={750}
              className="w-full h-auto object-contain rounded-lg shadow-xl"
            />
          </div>
        </div>
      }
    />
  );
};
