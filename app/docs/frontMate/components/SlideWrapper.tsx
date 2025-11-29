import React from "react";

interface SlideWrapperProps {
  children: React.ReactNode;
  variant?: "default" | "fullscreen";
}

export const SlideWrapper = ({ children, variant = "default" }: SlideWrapperProps) => {
  const isFullscreen = variant === "fullscreen";
  
  return (
    <div className="slide-wrapper w-screen h-screen flex flex-col bg-white relative">
      {/* 社外秘ラベル */}
      <div className="confidential-label absolute top-3 right-3 z-20 bg-white border border-red-500 rounded px-2 py-1 shadow-sm whitespace-nowrap">
        <p className="text-red-500 font-semibold text-xs leading-none m-0">社外秘</p>
      </div>

      {/* メインコンテンツ - プレゼンテーション最適化 */}
      {isFullscreen ? (
        <div className="flex-1 w-full h-full overflow-hidden">
          {children}
        </div>
      ) : (
        <div className="flex-1 w-full overflow-hidden flex items-center justify-center px-12 py-8">
          <div className="w-full h-full max-w-7xl mx-auto">
            {children}
          </div>
        </div>
      )}

      {/* フッター - fullscreenモードでは非表示 */}
      {!isFullscreen && (
        <div className="slide-footer w-full px-4 py-1.5 flex-shrink-0 bg-transparent">
          <p className="text-[9px] text-gray-300 text-center m-0 leading-none">
            ライチョウテックパートナーズ株式会社
          </p>
        </div>
      )}
    </div>
  );
};
