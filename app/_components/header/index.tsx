"use client";

import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
              <NavigationMenuLink asChild>
                <Link
                  href="/lp/ma"
                  className="font-medium transition-colors hover:text-primary"
                >
                  Services
                </Link>
              </NavigationMenuLink>
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
