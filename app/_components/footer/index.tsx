import Link from "next/link";
import { CATCH_COPY } from "@/app/_constants";

export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
          <div className="text-center md:text-left">
            <h3 className="mb-4 text-lg font-semibold text-white">
              ライチョウテックパートナーズ株式会社
            </h3>
            <p className="text-sm text-gray-300">
              {CATCH_COPY}
            </p>
          </div>
          <div className="text-center md:text-left">
            <h4 className="mb-4 text-sm font-semibold text-white">ナビゲーション</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/lp/ma"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  事業内容
                </Link>
              </li>
              <li>
                <Link
                  href="/company"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  会社概要
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h4 className="mb-4 text-sm font-semibold text-white">会社情報</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>〒380-0824</li>
              <li>長野県長野市南石堂町1423-4</li>
              <li className="pt-2">
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors"
                >
                  プライバシーポリシー
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-300">
          <p>
            © 2025 ライチョウテックパートナーズ株式会社. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
