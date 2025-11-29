import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const CTA = () => {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 p-10 md:p-16 shadow-2xl">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          まずは気軽にご相談ください
        </h2>
        
        <p className="text-lg text-blue-100 mb-8">
          無料デモ・課題ヒアリング・導入相談を実施中
        </p>
        
        {/* CTA Button */}
        <div className="flex justify-center mb-10">
          <a href="#contact">
            <Button
              size="lg"
              className="text-lg h-16 px-12 bg-white text-blue-600 hover:bg-gray-100 shadow-xl hover:-translate-y-1 transition-all font-bold"
            >
              お問い合わせはこちら
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </a>
        </div>
        
        {/* Trust Elements */}
        <div className="grid sm:grid-cols-3 gap-6 text-blue-100">
          <div className="flex flex-col items-center gap-2">
            <CheckCircle2 size={24} className="text-green-300" />
            <span className="text-sm">ご相談は無料</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <CheckCircle2 size={24} className="text-green-300" />
            <span className="text-sm">オンラインで完結</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <CheckCircle2 size={24} className="text-green-300" />
            <span className="text-sm">無理な営業なし</span>
          </div>
        </div>
      </div>
    </div>
  );
};



