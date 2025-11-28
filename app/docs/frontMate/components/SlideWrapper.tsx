import React from "react";

const slideBase =
  "w-full max-w-[1000px] min-h-[650px] bg-white overflow-hidden mx-auto rounded-2xl shadow-md border border-gray-100 relative print-slide";

interface SlideWrapperProps {
  children: React.ReactNode;
}

export const SlideWrapper = ({ children }: SlideWrapperProps) => (
  <section className={`${slideBase} mb-12 slide-wrapper flex flex-col`}>
    {/* 社外秘ラベル */}
    <div className="confidential-label absolute top-4 right-4 z-10 bg-white border-2 border-red-600 rounded px-3 py-1.5 shadow-md whitespace-nowrap h-fit w-fit flex-shrink-0">
      <p className="text-red-600 font-bold text-sm leading-tight m-0">社外秘</p>
    </div>

    {/* メインコンテンツ */}
    <div className="flex-1">{children}</div>

    {/* フッター */}
    <div className="slide-footer w-full px-4 py-2 border-t border-gray-100 mt-auto h-fit flex-shrink-0">
      <p className="text-[10px] text-gray-400 text-center m-0 leading-tight">
        ライチョウテックパートナーズ株式会社
      </p>
    </div>
  </section>
);
