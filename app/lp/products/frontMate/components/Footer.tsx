import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-4 block">
              Front Mate
            </span>
            <p className="text-gray-400 max-w-sm">
              WebサイトやCMSに簡単に埋め込める、コンテクストベースのAIチャットボット。
              あなたのビジネスの成長をサポートします。
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">プロダクト</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="#value-proposition"
                  className="hover:text-white transition-colors"
                >
                  導入のメリット
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="hover:text-white transition-colors"
                >
                  機能
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="hover:text-white transition-colors"
                >
                  導入方法
                </a>
              </li>
              <li>
                <a
                  href="#conversion"
                  className="hover:text-white transition-colors"
                >
                  分析レポート
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">サポート</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  ヘルプセンター
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  APIドキュメント
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  お問い合わせ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  ステータス
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Front Mate. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              プライバシーポリシー
            </a>
            <a href="#" className="hover:text-white transition-colors">
              利用規約
            </a>
            <a href="#" className="hover:text-white transition-colors">
              特定商取引法に基づく表記
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

