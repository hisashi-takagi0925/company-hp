"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Front Mate
          </span>
        </div>
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
          >
            機能
          </a>
          <a
            href="#how-it-works"
            className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
          >
            仕組み
          </a>
          <a
            href="#conversion"
            className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
          >
            分析レポート
          </a>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" className="text-gray-600">
            ログイン
          </Button>
          <a href="#contact" className="inline-block">
            <Button className="bg-blue-600 text-white hover:bg-blue-700">
              お問い合わせ、利用請求はこちら
            </Button>
          </a>
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-100 p-4 flex flex-col gap-4 shadow-lg">
          <a
            href="#features"
            className="text-sm font-medium text-gray-600 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            機能
          </a>
          <a
            href="#how-it-works"
            className="text-sm font-medium text-gray-600 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            仕組み
          </a>
          <a
            href="#conversion"
            className="text-sm font-medium text-gray-600 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            分析レポート
          </a>
          <div className="flex flex-col gap-2 pt-4 border-t border-gray-100">
            <Button variant="ghost" className="w-full justify-start">
              ログイン
            </Button>
            <a
              href="#contact"
              className="w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                お問い合わせ、利用請求はこちら
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

