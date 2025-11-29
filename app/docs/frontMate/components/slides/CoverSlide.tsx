import React from "react";
import Image from "next/image";

export const CoverSlide = () => {
  const [date, setDate] = React.useState<string>("");

  React.useEffect(() => {
    const today = new Date();
    const formattedDate = `${today.getFullYear()}年${today.getMonth() + 1}月${today.getDate()}日`;
    setDate(formattedDate);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white">
      <div className="text-center space-y-8 px-8">
        {/* ロゴ/会社名 */}
        <div className="mb-12">
          <div className="flex justify-center mb-6">
            <Image
              src="/logo.svg"
              alt="ライチョウテックパートナーズ ロゴ"
              width={120}
              height={120}
              className="w-32 h-32 rounded-full object-cover"
            />
          </div>
          <p className="text-lg text-blue-100">ライチョウテックパートナーズ株式会社</p>
        </div>

        {/* タイトル */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Front Mate
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-blue-100">
            トライアル企業募集のご案内
          </h2>
        </div>

        {/* サブタイトル */}
        <div className="max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl leading-relaxed text-blue-50">
            共にビジネス成長を実現する<br />
            パートナー企業様を募集しています
          </p>
        </div>

        {/* 日付 */}
        <div className="mt-16 pt-8 border-t border-blue-400/30">
          <p className="text-blue-100 min-h-[1.5em]">
            {date}
          </p>
        </div>
      </div>
    </div>
  );
};
