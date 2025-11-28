import React from "react";
import Image from "next/image";
import { TwoColumnLayout } from "../layouts/TwoColumnLayout";
import { Badge } from "../ui/Badge";

export const HeroSlide = () => {
  return (
    <TwoColumnLayout
      left={
        <>
          <div className="mb-3">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-blue-600">
              Front Mate
            </h2>
            <h3 className="text-xl md:text-2xl font-medium text-gray-700 mb-6">
              「ただのQ&A」で終わらせない。売上をつくるAIパートナー
            </h3>
          </div>

          <div className="mb-6 flex flex-wrap gap-2">
            <Badge>初期費用0円</Badge>
            <Badge>即日導入可能</Badge>
            <Badge>14日間無料トライアル</Badge>
          </div>
        </>
      }
      right={
        <div className="w-full h-full flex items-center justify-center">
          <Image
            src="/docs_top.png"
            alt="Front Mate ドキュメントトップイメージ"
            width={800}
            height={500}
            className="w-full max-h-[500px] object-contain rounded-lg shadow-lg"
          />
        </div>
      }
    />
  );
};
