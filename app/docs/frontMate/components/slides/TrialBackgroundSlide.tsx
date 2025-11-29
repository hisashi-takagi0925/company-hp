import React from "react";
import { TwoColumnLayout } from "../layouts/TwoColumnLayout";

export const TrialBackgroundSlide = () => {
  return (
    <TwoColumnLayout
      left={
        <>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-blue-600 leading-tight">
            トライアル企業を
            <br />
            募集する理由
          </h2>

          <div className="space-y-7">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">🚀</span>{" "}
                リアルな運用データで製品を進化させたい
              </h3>
              <p className="text-gray-700 leading-relaxed pl-8">
                多様な業種・規模の企業様での実運用データを通じて、
                より幅広いニーズに対応できる製品へと進化させていきたいと考えています。
                貴社のフィードバックが、Front Mateの未来を作ります。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">✨</span>{" "}
                より多くの企業様に価値を届けたい
              </h3>
              <p className="text-gray-700 leading-relaxed pl-8">
                これまでトライアルで協力していただいた企業様の実績により、
                問い合わせ数の増加や商談機会の創出という価値が実証されています。
                この確かな成果を証明として、今後さらに多くのBtoB企業様に Front
                Mateの価値を実感していただくため、
                新たなトライアルパートナーを募集しています。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">🤝</span>{" "}
                成長を共に実現するパートナーを探しています
              </h3>
              <p className="text-gray-700 leading-relaxed pl-8">
                単なる顧客関係ではなく、共に成長していけるパートナー企業様との
                長期的な関係構築を目指しています。
              </p>
            </div>
          </div>
        </>
      }
      right={
        <div className="flex items-center justify-center h-full">
          <div className="space-y-8 p-10 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl shadow-xl w-full max-w-md">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-2">
                目指す製品価値
              </h3>
              <p className="text-sm text-gray-600">実績データに基づく信頼性</p>
            </div>

            <div className="text-center pb-6 border-b-2 border-blue-200">
              <div className="text-7xl font-bold text-blue-600 mb-3">100+</div>
              <p className="text-gray-700 font-semibold text-lg">導入企業数</p>
            </div>

            <div className="text-center pb-6 border-b-2 border-blue-200">
              <div className="text-7xl font-bold text-blue-600 mb-3">220%+</div>
              <p className="text-gray-700 font-semibold text-lg">
                平均問い合わせ増加率
              </p>
            </div>

            <div className="text-center">
              <div className="text-7xl font-bold text-blue-600 mb-3">30%+</div>
              <p className="text-gray-700 font-semibold text-base leading-relaxed">
                導入企業様の
                <br />
                継続的な収益UP
              </p>
            </div>
          </div>
        </div>
      }
    />
  );
};
