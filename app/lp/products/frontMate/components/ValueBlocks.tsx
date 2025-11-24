import React from "react";
import Image from "next/image";

const blocks = [
  {
    title: "離脱率低下・コンバージョン率の上昇に直結するチャットボット",
    body: [
      "Front Mate は、単なる問い合わせ窓口ではなく「コンバージョンを生む接客担当」として設計されています。",
      "ページ内で探しきれなかった情報や、検討の最終一押しとなる疑問に即時回答し、離脱前のユーザーを資料請求や問い合わせへとスムーズに導きます。",
    ],
    image: "/conversion-image1.png",
  },
  {
    title: "チャットボット用の回答登録は不要。自社ナレッジから自動回答",
    body: [
      "FAQ やシナリオフローを一から作り込む必要はありません。Notion・Jira・Confluence・公式サイト・Google ドライブなどに既に存在するドキュメントをナレッジソースとして登録するだけで、AI が内容を読み取り回答します。",
      "更新も元ドキュメント側で行えばよく、同期ジョブによって最新情報が自動でチャットボットに反映されるため、運用コストを最小限に抑えられます。",
    ],
    image: "/knowledge.png",
  },
  {
    title: "HP・LPだけでは拾いきれない固有のペインにピンポイントで訴求",
    body: [
      "一般的な FAQ やプロダクトページだけでは、業種・規模・導入ステージごとに異なる細かな懸念点まではカバーしきれません。",
      "Front Mate は、ユーザーごとの質問内容からコンテクストを把握し、「自社のこのケースだとどうなるか？」といった固有のペインに対して、ナレッジソースを根拠とした具体的な回答を返します。",
    ],
    image: "/lp.png",
  },
  {
    title: "会話コンテクストを理解し、最適なタイミングで CV へ誘導",
    body: [
      "会話履歴をセッション単位で保持し、ユーザーが今どの検討フェーズにいるかをコンテクストから推定します。",
      "十分に疑問が解消されたタイミングで、資料請求・デモ予約・問い合わせフォームなど、設定されたコンバージョンアクションへ自然な流れで案内することで、押し付け感のないクロージングを実現します。",
    ],
    image: "/goal.png",
  },
];

export const ValueBlocks = () => {
  return (
    <section id="value-proposition" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            CV に直結する
            <br />
            <span className="text-blue-600">チャット体験をデザイン</span>
          </h2>
          <p className="text-lg text-gray-600">
            「ナレッジの活用」と「ユーザー行動データ」を組み合わせ、単なる Q&amp;A を超えた
            BtoB 向けコンバージョンエンジンとして機能します。
          </p>
        </div>
        <div className="space-y-10">
          {blocks.map((block, index) => {
            if (!block.image) return null;

            // 偶数番目（0, 2）は左が画像、奇数番目（1, 3）は右が画像
            const isReversed = index % 2 === 1;

            return (
              <div
                key={block.title}
                className="bg-gray-50 border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow"
              >
                <div
                  className={`grid md:grid-cols-2 gap-8 items-center ${
                    isReversed ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className={`relative h-64 md:h-80 lg:h-96 ${isReversed ? "md:order-2" : ""}`}>
                    <Image
                      src={block.image}
                      alt={block.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className={`p-8 ${isReversed ? "md:order-1" : ""}`}>
                    <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-3">
                      {block.title}
                    </h3>
                    <div className="space-y-3 text-gray-600 leading-relaxed">
                      {block.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


