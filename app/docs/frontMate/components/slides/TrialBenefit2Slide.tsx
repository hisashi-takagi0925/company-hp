import React from "react";
import Image from "next/image";
import { TwoColumnLayout } from "../layouts/TwoColumnLayout";

export const TrialBenefit2Slide = () => {
  return (
    <TwoColumnLayout
      left={
        <>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-600">
            トライアル特典 ②
          </h2>
          
          <div className="space-y-8">
            <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-3xl shadow-md">
                  📰
                </div>
                <h3 className="text-3xl font-bold text-blue-900 leading-tight">
                  貴社PRページの<br />
                  無料作成・無料掲載
                </h3>
              </div>
              
              <div className="space-y-4">
                <p className="text-xl text-gray-800 leading-relaxed font-bold">
                  貴社の製品・サービスを<br />
                  弊社メディア（HP/製品LP）で紹介します。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <span className="font-bold text-blue-700 border-b-2 border-blue-400">導入事例としてのPR記事</span>
                  を<span className="font-bold text-red-500">無料</span>で作成・掲載させていただきます。
                </p>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-blue-700 min-w-[90px]">作成条件：</span>
                      <span className="text-gray-700">3ヶ月のトライアル期間終了</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-blue-700 min-w-[90px]">掲載条件：</span>
                      <span className="text-gray-700">Front Mateをご利用いただいている期間</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-gray-700 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
                期待できる効果
              </h4>
              <ul className="space-y-2 pl-4">
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-blue-500">✔</span>
                  <span>貴社サービスの認知度向上</span>
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-blue-500">✔</span>
                  <span>被リンク獲得によるSEO効果</span>
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-blue-500">✔</span>
                  <span>先進的なAI導入企業としてのブランディング</span>
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
