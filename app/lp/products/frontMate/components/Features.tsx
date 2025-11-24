import React from "react";
import {
  Bot,
  Globe,
  LayoutDashboard,
  Database,
  Zap,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: <Bot className="w-6 h-6 text-blue-600" />,
    title: "コンテクストベース回答",
    description:
      "Notion、Jira、Confluence、Google Driveなどの社内ドキュメントや公式サイトを学習し、文脈を理解した高精度な回答を生成します。",
  },
  {
    icon: <Globe className="w-6 h-6 text-blue-600" />,
    title: "マルチCMS対応",
    description:
      "WordPress、Wix、Studio、Next.jsなど、あらゆるWebサイトにiframeタグを1行追加するだけで簡単に埋め込み可能です。",
  },
  {
    icon: <LayoutDashboard className="w-6 h-6 text-blue-600" />,
    title: "高度な管理・分析",
    description:
      "問い合わせ履歴の確認、回答精度のチューニング、利用統計の分析まで、直感的な管理画面ですべて完結します。",
  },
  {
    icon: <Database className="w-6 h-6 text-blue-600" />,
    title: "RAGアーキテクチャ",
    description:
      "最新のRAG（検索拡張生成）技術を採用。ハルシネーション（嘘の回答）を抑制し、事実に基づいた信頼性の高い回答を提供します。",
  },
  {
    icon: <Zap className="w-6 h-6 text-blue-600" />,
    title: "リアルタイム同期",
    description:
      "ナレッジソースが更新されると、チャットボットの知識も自動的に同期。常に最新の情報に基づいて顧客対応を行います。",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
    title: "エンタープライズセキュリティ",
    description:
      "テナントごとの厳格なデータ分離、通信の暗号化、アクセス制御により、企業の大切な情報を安全に守ります。",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            あらゆるビジネスに対応する
            <br />
            <span className="text-blue-600">充実の機能</span>
          </h2>
          <p className="text-lg text-gray-600">
            導入は簡単でも、機能は本格的。カスタマーサポートの効率化に必要なすべての機能が揃っています。
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

