"use client";

import React, { useState, useEffect } from "react";
import { SlideWrapper } from "./components/SlideWrapper";
import { CoverSlide } from "./components/slides/CoverSlide";
import { AgendaSlide } from "./components/slides/AgendaSlide";
import { CompanyIntroSlide } from "./components/slides/CompanyIntroSlide";
import { WhatIsFrontMateSlide } from "./components/slides/WhatIsFrontMateSlide";
import { TrialBackgroundSlide } from "./components/slides/TrialBackgroundSlide";
import { TrialProcessSlide } from "./components/slides/TrialProcessSlide";
import { TrialRequestsSlide } from "./components/slides/TrialRequestsSlide";
import { TrialBenefit1Slide } from "./components/slides/TrialBenefit1Slide";
import { TrialBenefit2Slide } from "./components/slides/TrialBenefit2Slide";
import { TrialClosingSlide } from "./components/slides/TrialClosingSlide";
import { QASlide } from "./components/slides/QASlide";
import { ChevronLeft, ChevronRight } from "lucide-react";

// 印刷用スタイル
const printStyles = `
  @media print {
    @page {
      size: A4 landscape;
      margin: 0;
    }
    
    * {
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
      color-adjust: exact !important;
    }
    
    html, body {
      margin: 0 !important;
      padding: 0 !important;
      overflow: visible !important;
    }
    
    /* ナビゲーション要素を非表示 */
    .print-hide {
      display: none !important;
    }
    
    /* 画面モードのメインコンテナ */
    .screen-mode {
      display: none !important;
    }
    
    /* 全スライドコンテナ */
    .all-slides-container {
      display: block !important;
    }
    
    /* 各スライド */
    .print-each-slide {
      display: block !important;
      page-break-after: always !important;
      page-break-inside: avoid !important;
      width: 297mm !important;
      height: 210mm !important;
      position: relative !important;
      overflow: hidden !important;
      background: white !important;
    }
    
    .print-each-slide:last-child {
      page-break-after: auto !important;
    }
    
    .print-each-slide .slide-wrapper {
      width: 297mm !important;
      height: 210mm !important;
      max-width: 297mm !important;
      max-height: 210mm !important;
    }
    
    /* 社外秘ラベル */
    .confidential-label {
      position: absolute !important;
      top: 8px !important;
      right: 8px !important;
      z-index: 1000 !important;
      font-size: 9px !important;
      padding: 2px 5px !important;
      background: white !important;
      border: 1px solid #ef4444 !important;
      border-radius: 2px !important;
    }
    
    .confidential-label p {
      margin: 0 !important;
      padding: 0 !important;
      font-size: 9px !important;
      line-height: 1.2 !important;
      color: #ef4444 !important;
    }
  }
  
  @media screen {
    .all-slides-container {
      display: none !important;
    }
  }
`;

export default function FrontMateSalesDeck() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      component: <CoverSlide />,
      title: "表紙",
      variant: "fullscreen" as const,
    },
    { component: <AgendaSlide />, title: "アジェンダ" },
    { component: <CompanyIntroSlide />, title: "会社紹介" },
    { component: <WhatIsFrontMateSlide />, title: "Front Mateとは" },
    { component: <TrialBackgroundSlide />, title: "トライアル募集の背景" },
    { component: <TrialProcessSlide />, title: "トライアルの内容" },
    { component: <TrialRequestsSlide />, title: "お願い事項" },
    { component: <TrialBenefit1Slide />, title: "トライアル特典①" },
    { component: <TrialBenefit2Slide />, title: "トライアル特典②" },
    { component: <QASlide />, title: "質疑応答・貴社ヒアリング" },
    { component: <TrialClosingSlide />, title: "クロージング" },
  ];

  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // キーボード操作
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  // 左右クリック用の領域
  const handleLeftClick = () => {
    if (currentSlide > 0) {
      prevSlide();
    }
  };

  const handleRightClick = () => {
    if (currentSlide < totalSlides - 1) {
      nextSlide();
    }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: printStyles }} />

      {/* 画面表示モード */}
      <div className="screen-mode relative w-screen h-screen overflow-hidden bg-white">
        {/* スライド表示エリア */}
        <div className="w-full h-full">
          <SlideWrapper variant={slides[currentSlide].variant}>
            {slides[currentSlide].component}
          </SlideWrapper>
        </div>

        {/* 左側クリック領域 */}
        <div
          onClick={handleLeftClick}
          className={`print-hide absolute left-0 top-0 bottom-0 w-1/3 cursor-pointer group z-10 ${
            currentSlide === 0 ? "cursor-not-allowed" : ""
          }`}
        >
          {currentSlide > 0 && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-black/50 backdrop-blur-sm rounded-full p-3">
                <ChevronLeft className="w-8 h-8 text-white" />
              </div>
            </div>
          )}
        </div>

        {/* 右側クリック領域 */}
        <div
          onClick={handleRightClick}
          className={`print-hide absolute right-0 top-0 bottom-0 w-1/3 cursor-pointer group z-10 ${
            currentSlide === totalSlides - 1 ? "cursor-not-allowed" : ""
          }`}
        >
          {currentSlide < totalSlides - 1 && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-black/50 backdrop-blur-sm rounded-full p-3">
                <ChevronRight className="w-8 h-8 text-white" />
              </div>
            </div>
          )}
        </div>

        {/* スライド番号インジケーター */}
        <div className="print-hide absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-50">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-blue-600 w-8"
                  : "bg-gray-400 hover:bg-gray-600"
              }`}
              aria-label={`スライド ${index + 1} へ移動`}
            />
          ))}
        </div>

        {/* スライド番号表示 */}
        <div className="print-hide absolute top-4 right-20 text-xs text-gray-400 bg-white/70 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm z-50">
          {currentSlide + 1} / {totalSlides}
        </div>
      </div>

      {/* 印刷用：全スライド */}
      <div className="all-slides-container">
        {slides.map((slide, index) => (
          <div key={index} className="print-each-slide">
            <SlideWrapper variant={slide.variant}>
              {slide.component}
            </SlideWrapper>
          </div>
        ))}
      </div>
    </>
  );
}
