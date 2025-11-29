import React from "react";
import Image from "next/image";
import { TwoColumnLayout } from "../layouts/TwoColumnLayout";
import { Badge } from "../ui/Badge";

export const WhatIsFrontMateSlide = () => {
  return (
    <TwoColumnLayout
      left={
        <>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-blue-600 leading-tight">
            Front Mateとは
          </h2>
          
          <div className="space-y-8">
            <p className="text-2xl text-gray-900 font-bold leading-relaxed">
              サイト訪問を「商談」へつなげる<br />
              AI営業アシスタント
            </p>

            <div className="space-y-5 pt-4">
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-3 flex-shrink-0"></div>
                <div>
                  <p className="text-gray-900 font-semibold text-lg mb-1">
                    単なるFAQボットではない
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    コンバージョンを生み出す営業パートナー
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-3 flex-shrink-0"></div>
                <div>
                  <p className="text-gray-900 font-semibold text-lg mb-1">
                    既存ナレッジから自動学習
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Notion・Googleドライブ等を登録するだけ
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-3 flex-shrink-0"></div>
                <div>
                  <p className="text-gray-900 font-semibold text-lg mb-1">
                    最適なタイミングでCV誘導
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    会話履歴から検討フェーズを推定し、自然にクロージング
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-8 pt-4">
              <Badge>問い合わせ220%増</Badge>
              <Badge>最短3日で導入</Badge>
              <Badge>自動ナレッジ同期</Badge>
            </div>
          </div>
        </>
      }
      right={
        <div className="flex items-center justify-center h-full">
          <Image
            src="/frontMateTop2.png"
            alt="Front Mate製品イメージ"
            width={800}
            height={500}
            className="w-full max-h-[500px] object-contain rounded-lg shadow-lg"
          />
        </div>
      }
    />
  );
};
