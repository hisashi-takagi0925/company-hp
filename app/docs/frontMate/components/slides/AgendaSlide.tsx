import React from "react";
import { Check } from "lucide-react";

const agendaItems = [
  { number: "01", title: "会社紹介" },
  { number: "02", title: "Front Mateとは" },
  { number: "03", title: "トライアル募集の背景" },
  { number: "04", title: "トライアルの内容" },
  { number: "05", title: "お願い事項" },
  { number: "06", title: "トライアル特典①" },
  { number: "07", title: "トライアル特典②" },
  { number: "08", title: "質疑応答・貴社ヒアリング" },
  { number: "09", title: "まとめ" },
];

export const AgendaSlide = () => {
  return (
    <div className="flex flex-col h-full p-8 md:p-12 bg-white">
      {/* ヘッダー */}
      <div className="mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-3">
          アジェンダ
        </h2>
        <p className="text-lg text-gray-600">
          本日のご説明内容
        </p>
      </div>

      {/* アジェンダリスト - 2列レイアウト */}
      <div className="flex-1 flex justify-center items-center">
        <div className="grid md:grid-cols-2 gap-5 max-w-5xl w-full">
          {agendaItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center gap-5">
                {/* 番号 */}
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-md">
                  <span className="text-xl font-bold text-white">{item.number}</span>
                </div>
                
                {/* タイトル */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-gray-900 leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* フッター */}
      <div className="mt-8 flex items-center justify-center gap-2 text-gray-500">
        <Check className="w-5 h-5 text-blue-600" />
        <p className="text-sm">
          所要時間：約30分
        </p>
      </div>
    </div>
  );
};
