import React from "react";

export const Benefit1Visual = () => (
  <div className="flex flex-col items-center w-full max-w-md mx-auto">
    {/* Browser Window Frame */}
    <div className="w-full bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden relative h-64">
      {/* Browser Header */}
      <div className="bg-gray-100 px-3 py-2 border-b border-gray-200 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 bg-white h-6 rounded border border-gray-200 mx-2" />
      </div>

      {/* Browser Content (Abstract Page) */}
      <div className="p-4 bg-gray-50 h-full relative">
        <div className="w-3/4 h-4 bg-gray-200 rounded mb-3" />
        <div className="w-full h-32 bg-white border border-gray-200 rounded mb-3" />
        
        {/* Mouse Cursor moving to close */}
        <div className="absolute top-2 left-4 text-2xl drop-shadow-md animate-bounce">
          👆
        </div>

        {/* Chat Pop-up */}
        <div className="absolute bottom-4 right-4 w-64 bg-white rounded-xl shadow-xl border border-blue-100 p-3 animate-pulse">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0">
              🤖
            </div>
            <div>
              <p className="text-xs font-bold text-blue-600 mb-1">お困りですか？</p>
              <p className="text-xs text-gray-700 leading-relaxed">
                ちょっと待ってください！<br/>
                その課題、解決できるかもしれません。
              </p>
              <button className="mt-2 text-[10px] bg-blue-600 text-white px-2 py-1 rounded-full">
                話を聞く
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <p className="mt-4 text-lg text-center font-medium text-gray-700">
      離脱しようとしたその瞬間、<br/>
      AIが「接客」して引き留めます
    </p>
  </div>
);
