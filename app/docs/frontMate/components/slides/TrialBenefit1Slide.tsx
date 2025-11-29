import React from "react";
import Image from "next/image";
import { TwoColumnLayout } from "../layouts/TwoColumnLayout";

export const TrialBenefit1Slide = () => {
  return (
    <TwoColumnLayout
      left={
        <>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-600">
            トライアル特典 ①
          </h2>
          
          <div className="space-y-8">
            <div className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center text-3xl shadow-md">
                  🎁
                </div>
                <h3 className="text-3xl font-bold text-green-900">
                  Front Mateを<br />
                  <span className="text-4xl">さらに3ヶ月無料</span>で延長
                </h3>
              </div>
              
              <div className="space-y-4">
                <p className="text-xl text-gray-800 leading-relaxed font-bold">
                  トライアル3ヶ月に加えて、<br />
                  さらに3ヶ月無料で延長いたします。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  通常プラン（月額 ¥30,000〜）と同等の全機能を、
                  <span className="font-bold text-green-700 border-b-2 border-green-400">合計6ヶ月間・無料</span>
                  でご利用いただけます。
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-gray-500 text-sm">
              <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold">!</span>
              <span>※6ヶ月の無料期間終了後は、通常プランへの移行または継続利用のご検討をお願いいたします</span>
            </div>
          </div>
        </>
      }
      right={
        <div className="flex items-center justify-center h-full">
          <div className="w-full max-w-lg">
            <Image
              src="/PR1.png"
              alt="3ヶ月無料延長のイメージ"
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
