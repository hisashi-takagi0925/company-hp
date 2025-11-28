import React from "react";

export const Benefit3Visual = () => (
  <div className="flex flex-col items-center w-full max-w-md mx-auto">
    <div className="w-full bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gray-50 px-4 py-3 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-bold text-gray-500">Online</span>
        </div>
        <span className="text-xs text-gray-400">Front Mate AI</span>
      </div>

      {/* Chat Area */}
      <div className="p-4 bg-white flex flex-col gap-4">
        {/* User Question */}
        <div className="flex justify-end">
          <div className="bg-gray-100 text-gray-800 text-xs px-4 py-3 rounded-2xl rounded-tr-none max-w-[85%] shadow-sm">
            <p className="font-bold mb-1 text-gray-600 text-[10px]">Q. 導入について</p>
            <p>
              従業員50名の<span className="bg-yellow-100 font-bold px-1 rounded">製造業</span>ですが、
              現場への<span className="bg-yellow-100 font-bold px-1 rounded">導入研修</span>は必要ですか？
            </p>
          </div>
        </div>

        {/* AI Answer */}
        <div className="flex justify-start">
          <div className="bg-blue-600 text-white text-xs px-4 py-3 rounded-2xl rounded-tl-none max-w-[90%] shadow-md">
            <div className="flex items-center gap-2 mb-2 border-b border-blue-500 pb-2">
              <span className="text-lg">💡</span>
              <span className="font-bold">製造業向け回答</span>
            </div>
            <p className="leading-relaxed">
              はい、<span className="font-bold underline decoration-blue-300 decoration-2 underline-offset-2">御社のような規模の製造業様</span>では、
              現場リーダー向けの<span className="font-bold">1時間のオンライン説明会</span>のみで
              スムーズに運用開始されています。
            </p>
            <div className="mt-2 bg-blue-700/50 rounded p-2 text-[10px] text-blue-100">
              ※専用の「現場向け簡易マニュアル」もご用意しています。
            </div>
          </div>
        </div>
      </div>
    </div>

    <p className="mt-4 text-lg text-center font-medium text-gray-700">
      「自社の場合はどうなる？」<br/>
      個別の疑問にも、ズバリ回答
    </p>
  </div>
);
