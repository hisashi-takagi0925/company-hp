import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-base font-bold sm:text-lg md:text-xl">
            <span className="hidden sm:inline">
              ライチョウテックパートナーズ株式会社
            </span>
            <span className="sm:hidden">ライチョウテック</span>
          </span>
        </Link>
        <nav className="flex items-center space-x-3 text-xs sm:space-x-4 sm:text-sm md:space-x-6">
          <Link
            href="/#services"
            className="font-medium transition-colors hover:text-primary"
          >
            事業内容
          </Link>
          <Link
            href="/#mission"
            className="font-medium transition-colors hover:text-primary"
          >
            ミッション
          </Link>
          <Link
            href="/#company"
            className="hidden font-medium transition-colors hover:text-primary sm:inline-block"
          >
            会社概要
          </Link>
          <Link
            href="/contact"
            className="font-medium transition-colors hover:text-primary"
          >
            お問い合わせ
          </Link>
        </nav>
      </div>
    </header>
  );
}
