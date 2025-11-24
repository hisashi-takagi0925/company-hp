import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export const CTA = () => {
  return (
    <div className="flex flex-col gap-8 items-center text-center max-w-4xl mx-auto">
      <div className="flex items-center gap-2">
        <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Front Mate
        </span>
      </div>
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium w-fit">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
        次世代のカスタマーサポートAI
      </div>
      <div className="flex flex-col sm:flex-row gap-4 pt-2">
        <a href="#contact" className="inline-block">
          <Button
            size="lg"
            className="text-base h-12 px-8 bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20 hover:-translate-y-0.5 transition-all"
          >
            お問い合わせ・資料請求
          </Button>
        </a>
      </div>
      <div className="flex flex-wrap justify-center gap-6 pt-2 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <CheckCircle2 size={16} className="text-blue-600" />
          <span>初期費用0円</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 size={16} className="text-blue-600" />
          <span>即日導入可能</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 size={16} className="text-blue-600" />
          <span>14日間無料トライアル</span>
        </div>
      </div>
    </div>
  );
};

