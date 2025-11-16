"use client";

import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8">
            <Image
              src="/logo.svg"
              alt="ライチョウテックパートナーズ株式会社"
              width={32}
              height={32}
              className="h-full w-full object-contain"
              priority
            />
          </div>
          <span className="text-base font-bold sm:text-lg md:text-xl">
            <span className="hidden sm:inline">
              ライチョウテックパートナーズ株式会社
            </span>
            <span className="sm:hidden">ライチョウテック</span>
          </span>
        </Link>
        <NavigationMenu viewport={false}>
          <NavigationMenuList className="gap-3 text-xs sm:gap-4 sm:text-sm md:gap-6">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/"
                  className="font-medium transition-colors hover:text-primary"
                >
                  TOP
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-medium">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white">
                <ul className="grid min-w-[250px] gap-3 p-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/lp/ma/buy"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none whitespace-nowrap">
                          買いたい方
                        </div>
                        <p className="text-sm leading-snug text-muted-foreground whitespace-nowrap">
                          Webサービスの調達・評価支援
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/lp/ma/sell"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none whitespace-nowrap">
                          売りたい方
                        </div>
                        <p className="text-sm leading-snug text-muted-foreground whitespace-nowrap">
                          Webサービスの売却・買取
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/lp/ma/brokerage"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none whitespace-nowrap">
                          仲介希望の方
                        </div>
                        <p className="text-sm leading-snug text-muted-foreground whitespace-nowrap">
                          Webサービスの売買仲介
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-medium">
                Knowledge
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white">
                <ul className="grid min-w-[260px] gap-3 p-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/knowledge/saas-tech-dd"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none whitespace-nowrap">
                          SaaSの技術DDで見る5つのポイント
                        </div>
                        <p className="text-xs leading-snug text-muted-foreground">
                          ソースコードやインフラをどう評価するかの考え方
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/knowledge/saas-valuation-axes"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none whitespace-nowrap">
                          小規模SaaSの価格レンジを考える3つの軸
                        </div>
                        <p className="text-xs leading-snug text-muted-foreground">
                          ARR・解約率・技術負債をどう組み合わせて見るか
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/knowledge/tech-debt-and-ma"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none whitespace-nowrap">
                          技術負債と事業価値のバランスを取るフレームワーク
                        </div>
                        <p className="text-xs leading-snug text-muted-foreground">
                          「全部リプレイス」でも「放置」でもない現実的な打ち手
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/company"
                  className="font-medium transition-colors hover:text-primary"
                >
                  Company
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/contact"
                  className="font-medium transition-colors hover:text-primary"
                >
                  Contact
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
