import React from "react";
import Image from "next/image";
import { TwoColumnLayout } from "../layouts/TwoColumnLayout";

export const CompanyIntroSlide = () => {
  return (
    <TwoColumnLayout
      left={
        <>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-600">
            会社紹介
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                ライチョウテックパートナーズ株式会社
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Webサービス・SaaSのM&Aアドバイザリー
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">ミッション</h4>
              <p className="text-gray-600 leading-relaxed">
                良いWebサービスが、きちんと次の担い手につながる世界をつくる
              </p>
              <p className="text-gray-600 mt-2 leading-relaxed text-sm">
                技術負債やオーナーの事情によって価値のあるサービスが終了してしまうケースを減らし、
                作り手・送り手・受け手の三者が納得できる継承を実現します。
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">代表者プロフィール</h4>
              <p className="text-gray-700 font-medium mb-1">高木 悠（代表取締役）</p>
              <p className="text-gray-600 leading-relaxed text-sm">
                10年以上のWebエンジニア経験を持ち、スタートアップから上場企業まで
                SaaS・Webサービスの開発・グロースに従事。
                技術DD（ソースコード・アーキテクチャ）と事業DD（売上・KPI）を
                一体で行う支援を提供。
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Front Mate開発の背景</h4>
              <p className="text-gray-600 leading-relaxed text-sm">
                M&Aアドバイザリー事業で多くのWebサービス・SaaS企業と関わる中で、
                「Webサイトの訪問者を顧客に転換できない」という共通課題を発見。
                単なるFAQボットではなく、真のビジネス成果に貢献するAI営業アシスタントとして
                Front Mateを開発しました。
              </p>
            </div>
          </div>
        </>
      }
      right={
        <div className="flex items-center justify-center h-full">
          <div className="text-center space-y-8">
            <div className="mx-auto flex items-center justify-center">
              <Image
                src="/logo.svg"
                alt="ライチョウテックパートナーズ ロゴ"
                width={180}
                height={180}
                className="w-auto h-32"
              />
            </div>
            <div>
              <p className="text-gray-700 text-lg font-medium mb-2">
                ライチョウテックパートナーズ<br />株式会社
              </p>
              <p className="text-gray-500 text-sm">Raicho Tech Partners Inc.</p>
            </div>
            <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
              <p className="text-blue-900 font-semibold text-lg mb-2">
                SaaS M&A × AI営業支援
              </p>
              <p className="text-gray-600 text-sm">
                Webサービスの継承で<br />事業を次のステージへ
              </p>
            </div>
            <div className="text-xs text-gray-500 mt-4">
              〒380-0824<br />
              長野県長野市南石堂町1423-4
            </div>
            <div className="mt-4">
              <a 
                href="https://raicho-tech.jp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors underline"
              >
                🌐 https://raicho-tech.jp
              </a>
            </div>
          </div>
        </div>
      }
    />
  );
};
