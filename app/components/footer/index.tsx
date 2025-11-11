import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
          <div className="text-center md:text-left">
            <h3 className="mb-4 text-lg font-semibold">ライチョウテックパートナーズ株式会社</h3>
            <p className="text-sm text-muted-foreground">
              テクノロジーで、事業を次のステージへ。
            </p>
          </div>
          <div className="text-center md:text-left">
            <h4 className="mb-4 text-sm font-semibold">ナビゲーション</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#services" className="text-muted-foreground hover:text-foreground">
                  事業内容
                </Link>
              </li>
              <li>
                <Link href="/#mission" className="text-muted-foreground hover:text-foreground">
                  ミッション
                </Link>
              </li>
              <li>
                <Link href="/#company" className="text-muted-foreground hover:text-foreground">
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h4 className="mb-4 text-sm font-semibold">その他</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                  プライバシーポリシー
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 ライチョウテックパートナーズ株式会社. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

