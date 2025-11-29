import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              コンバージョンを生む接客担当
            </div>
            
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                サイト訪問を
                <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  「商談」へつなげる
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 font-medium">
                AI営業アシスタント Front Mate
              </p>
              
              <p className="text-base text-gray-600 max-w-xl mx-auto lg:mx-0">
                離脱前のユーザーを資料請求や問い合わせへスムーズに導く、<br className="hidden sm:block" />
                BtoB向けコンバージョンエンジン
              </p>
            </div>
            
            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact">
                <Button
                  size="lg"
                  className="text-base h-14 px-10 bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/30 hover:-translate-y-0.5 transition-all w-full sm:w-auto font-semibold"
                >
                  無料で試す
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="#contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base h-14 px-10 border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all w-full sm:w-auto"
                >
                  資料請求
                </Button>
              </a>
            </div>
            
            {/* Trust Indicators - Simplified */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-500 pt-2">
              <span>✓ 初期費用0円</span>
              <span>✓ 即日導入可能</span>
              <span>✓ 14日間無料</span>
            </div>
          </div>
          
          {/* Right: Visual */}
          <div className="relative lg:block">
            <div className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-white p-8">
              <Image
                src="/frontMateLogo5.png"
                alt="Front Mate"
                fill
                className="object-contain"
                priority
              />
            </div>
            {/* Decorative blur */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#problem" className="flex flex-col items-center gap-2 text-gray-400 hover:text-blue-600 transition-colors">
          <span className="text-xs font-medium">スクロール</span>
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};
