import React from "react";

export const Benefit2Visual = () => (
  <div className="flex flex-col items-center w-full max-w-md mx-auto">
    <div className="flex items-center justify-between w-full mb-6 px-4">
      {/* Left: Documents */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2 bg-white p-2 rounded shadow-sm border border-gray-100 w-32 animate-pulse">
          <div className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center text-xs">N</div>
          <span className="text-xs font-medium text-gray-600">Notion</span>
        </div>
        <div className="flex items-center gap-2 bg-white p-2 rounded shadow-sm border border-gray-100 w-32 animate-pulse delay-75">
          <div className="w-6 h-6 rounded bg-blue-50 flex items-center justify-center text-xs text-blue-600">W</div>
          <span className="text-xs font-medium text-gray-600">Word</span>
        </div>
        <div className="flex items-center gap-2 bg-white p-2 rounded shadow-sm border border-gray-100 w-32 animate-pulse delay-150">
          <div className="w-6 h-6 rounded bg-red-50 flex items-center justify-center text-xs text-red-600">P</div>
          <span className="text-xs font-medium text-gray-600">PDF</span>
        </div>
      </div>

      {/* Center: Flow Arrow */}
      <div className="flex-1 flex flex-col items-center justify-center px-2">
        <div className="w-full h-1 bg-gradient-to-r from-gray-200 to-blue-500 rounded-full relative">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-500 rotate-45 transform translate-x-[-2px] -mt-[1px] border-t-2 border-r-2 border-blue-500"></div>
        </div>
        <p className="text-[10px] text-blue-600 font-bold mt-1">自動同期</p>
      </div>

      {/* Right: AI Brain */}
      <div className="relative">
        <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200">
          <span className="text-4xl">🧠</span>
        </div>
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">
          ✓
        </div>
      </div>
    </div>

    <p className="mt-2 text-lg text-center font-medium text-gray-700">
      面倒なQ&A作成はゼロ。<br/>
      社内ドキュメントを渡すだけ
    </p>
  </div>
);
