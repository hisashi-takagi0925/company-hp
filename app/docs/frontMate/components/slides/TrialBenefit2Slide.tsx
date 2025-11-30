import React from "react";
import Image from "next/image";
import { TwoColumnLayout } from "../layouts/TwoColumnLayout";

export const TrialBenefit2Slide = () => {
  return (
    <TwoColumnLayout
      left={
        <>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-600">
            トライアル特典 ②
          </h2>
          
          <div className="space-y-6">
            {/* メインの特典 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl">
                  📰
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  貴社PRページの無料作成・掲載
                </h3>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-3">
                貴社の製品・サービスを弊社メディア（HP/製品LP）で
                <span className="font-bold text-blue-700">導入事例</span>として紹介します。
              </p>
              
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <div className="font-semibold text-blue-700 mb-1">作成条件</div>
                    <div className="text-gray-600">3ヶ月のトライアル終了後</div>
                  </div>
                  <div>
                    <div className="font-semibold text-blue-700 mb-1">掲載条件</div>
                    <div className="text-gray-600">Front Mate利用中</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 最大のメリット */}
            <div className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 rounded-xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🎯</span>
                <h4 className="text-xl font-bold text-amber-900">最大のメリット</h4>
              </div>
              <p className="text-gray-800 leading-relaxed">
                販売代理店エージェントが保有する
                <span className="text-3xl font-bold text-orange-600 mx-1">数千社</span>
                の取引先に対して、<br />
                貴社PR記事が掲載されたLPを紹介します。
              </p>
              <p className="text-xs text-gray-500 mt-2">
                ※ トライアル実績があることが条件
              </p>
            </div>

            {/* 期待できる効果 */}
            <div>
              <h4 className="font-bold text-gray-800 mb-3 text-lg">期待できる効果</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-orange-500 font-bold mt-0.5">⭐</span>
                  <span className="font-semibold">数千社のBtoB企業への直接リーチ</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="text-blue-500 mt-0.5">✔</span>
                  <span>貴社サービスの認知度向上</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="text-blue-500 mt-0.5">✔</span>
                  <span>被リンク獲得によるSEO効果</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="text-blue-500 mt-0.5">✔</span>
                  <span>先進的なAI導入企業としてのブランディング</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="text-blue-500 mt-0.5">✔</span>
                  <span>新規ビジネス機会の創出</span>
                </li>
              </ul>
            </div>
          </div>
        </>
      }
      right={
        <div className="flex items-center justify-center h-full">
          <div className="w-full max-w-lg">
            <Image
              src="/PR2.png"
              alt="PR記事ページのイメージ"
              width={800}
              height={600}
              className="w-full h-auto object-contain rounded-lg shadow-xl"
            />
            <p className="text-center text-sm text-gray-400 mt-3">※ イメージ</p>
          </div>
        </div>
      }
    />
  );
};
