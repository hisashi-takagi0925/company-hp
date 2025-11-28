import React from "react";
import { SlideWrapper } from "./components/SlideWrapper";
import { HeroSlide } from "./components/slides/HeroSlide";
import { CaseHighlightsSlide } from "./components/slides/CaseHighlightsSlide";
import { ConceptSlide } from "./components/slides/ConceptSlide";
import { Benefit1Slide } from "./components/slides/Benefit1Slide";
import { Benefit2Slide } from "./components/slides/Benefit2Slide";
import { Benefit3Slide } from "./components/slides/Benefit3Slide";
import { Benefit4Slide } from "./components/slides/Benefit4Slide";
import { FeaturesSlide } from "./components/slides/FeaturesSlide";
import { CompetitiveSlide } from "./components/slides/CompetitiveSlide";
import { HowItWorksSlide } from "./components/slides/HowItWorksSlide";
import { ReportSlide } from "./components/slides/ReportSlide";
import { ContactSlide } from "./components/slides/ContactSlide";

export default function FrontMateSalesDeck() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @media print {
            @page {
              size: A4 landscape;
              margin: 0.5cm;
            }
            
            * {
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            
            body {
              background: white;
              margin: 0;
              padding: 0;
            }
            
            /* ヘッダーを非表示 */
            .print-header {
              display: none !important;
            }
            
            /* 外側のコンテナ */
            .min-h-screen {
              padding: 0 !important;
              background: white !important;
            }
            
            /* 各スライドを1ページに */
            .slide-wrapper {
              page-break-after: always;
              page-break-inside: avoid;
              break-after: page;
              break-inside: avoid;
              margin: 0 !important;
              padding: 0.4cm 0.4cm 0.3cm 0.4cm !important;
              box-shadow: none !important;
              border: 1px solid #e5e7eb !important;
              max-width: 100% !important;
              width: 100% !important;
              min-height: calc(100vh - 0.8cm) !important;
              height: calc(100vh - 0.8cm) !important;
              max-height: calc(100vh - 0.8cm) !important;
              display: flex !important;
              flex-direction: column !important;
              overflow: hidden !important;
              box-sizing: border-box !important;
            }
            
            /* 最後のスライドは改ページしない */
            .slide-wrapper:last-child {
              page-break-after: auto;
              break-after: auto;
            }
            
            /* スライド内のコンテンツを調整 */
            .print-slide > * {
              max-height: 100% !important;
              overflow: hidden !important;
              box-sizing: border-box !important;
            }
            
            /* メインコンテンツエリア */
            .slide-wrapper > div:nth-child(2) {
              flex: 1 1 auto !important;
              min-height: 0 !important;
              overflow: hidden !important;
              display: flex !important;
              flex-direction: column !important;
            }
            
            /* フォントサイズを調整 */
            .print-slide h1 {
              font-size: 2rem !important;
            }
            
            .print-slide h2 {
              font-size: 1.75rem !important;
            }
            
            .print-slide h3 {
              font-size: 1.5rem !important;
            }
            
            .print-slide p, .print-slide span, .print-slide div {
              font-size: 0.9rem !important;
            }
            
            /* 余白を調整 */
            .print-slide .pl-10, .print-slide .pr-8, .print-slide .py-12 {
              padding-left: 1rem !important;
              padding-right: 1rem !important;
              padding-top: 0.75rem !important;
              padding-bottom: 0.75rem !important;
            }
            
            .print-slide .pt-16, .print-slide .pb-8 {
              padding-top: 0.75rem !important;
              padding-bottom: 0.75rem !important;
            }
            
            .print-slide .mb-8, .print-slide .mb-6 {
              margin-bottom: 0.75rem !important;
            }
            
            .print-slide .mb-4 {
              margin-bottom: 0.5rem !important;
            }
            
            .print-slide .mb-2 {
              margin-bottom: 0.4rem !important;
            }
            
            /* 画像サイズを調整 */
            .print-slide img {
              max-height: 35vh !important;
              max-width: 100% !important;
              object-fit: contain !important;
              height: auto !important;
            }
            
            /* テキストの折り返しとオーバーフロー制御 */
            .print-slide p,
            .print-slide span,
            .print-slide div,
            .print-slide h1,
            .print-slide h2,
            .print-slide h3 {
              word-wrap: break-word !important;
              overflow-wrap: break-word !important;
              max-width: 100% !important;
            }
            
            /* フレックスコンテナの調整 */
            .print-slide .flex {
              flex-wrap: wrap !important;
              max-width: 100% !important;
            }
            
            /* グリッドレイアウトの調整 */
            .print-slide .grid {
              max-width: 100% !important;
              grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) !important;
            }
            
            /* 絶対配置要素の制御 */
            .print-slide .absolute {
              max-width: 100% !important;
              max-height: 100% !important;
            }
            
            /* 幅指定の統一 */
            .print-slide .w-full {
              max-width: 100% !important;
            }
            
            .print-slide .md\\:w-1\\/2,
            .print-slide .md\\:w-2\\/5,
            .print-slide .md\\:w-3\\/5 {
              max-width: 100% !important;
            }
            
            /* 社外秘ラベルの高さを固定 */
            .confidential-label {
              height: auto !important;
              min-height: auto !important;
              max-height: fit-content !important;
              flex-shrink: 0 !important;
              flex-grow: 0 !important;
              align-self: flex-start !important;
              position: absolute !important;
            }
            
            .confidential-label p {
              margin: 0 !important;
              padding: 0 !important;
              line-height: 1.2 !important;
              height: auto !important;
              display: inline-block !important;
            }
            
            /* フッターの高さを固定 */
            .slide-footer {
              height: auto !important;
              min-height: auto !important;
              max-height: fit-content !important;
              flex-shrink: 0 !important;
              flex-grow: 0 !important;
              padding-top: 0.2rem !important;
              padding-bottom: 0.2rem !important;
              margin-top: 0 !important;
            }
            
            .slide-footer p {
              margin: 0 !important;
              padding: 0 !important;
              line-height: 1.2 !important;
              height: auto !important;
            }
            
            /* レイアウトコンポーネントの調整 */
            .print-slide .flex-col,
            .print-slide .flex-row,
            .print-slide .md\\:flex-row {
              max-width: 100% !important;
              overflow: hidden !important;
            }
            
            /* カードやボックス要素の調整 */
            .print-slide .rounded-lg,
            .print-slide .rounded-xl,
            .print-slide .rounded-2xl {
              max-width: 100% !important;
              overflow: hidden !important;
            }
            
            /* スペース調整の統一 */
            .print-slide .space-y-2,
            .print-slide .space-y-3,
            .print-slide .space-y-4,
            .print-slide .space-y-6 {
              gap: 0.5rem !important;
            }
            
            /* パディングの統一 */
            .print-slide .p-4,
            .print-slide .p-5,
            .print-slide .p-6,
            .print-slide .p-8 {
              padding: 0.75rem !important;
            }
            
            /* マージンの統一 */
            .print-slide .mt-auto {
              margin-top: auto !important;
            }
            
            /* 高さ指定の調整 */
            .print-slide .h-full {
              height: auto !important;
              max-height: 100% !important;
            }
            
            .print-slide .h-64,
            .print-slide .h-56 {
              max-height: 40vh !important;
              height: auto !important;
            }
          }
        `,
        }}
      />
      <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-8">
        <div className="max-w-[1320px] mx-auto mb-8 print-header">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Front Mate 営業用資料
          </h1>
        </div>

        {/* スライド1：タイトル & ヒーロー */}
        <SlideWrapper>
          <HeroSlide />
        </SlideWrapper>

        {/* スライド2：課題・実績 */}
        <SlideWrapper>
          <CaseHighlightsSlide />
        </SlideWrapper>

        {/* スライド2：導入のメリット - 全体コンセプト */}
        <SlideWrapper>
          <ConceptSlide />
        </SlideWrapper>

        {/* スライド3：メリット① */}
        <SlideWrapper>
          <Benefit1Slide />
        </SlideWrapper>

        {/* スライド4：メリット② */}
        <SlideWrapper>
          <Benefit2Slide />
        </SlideWrapper>

        {/* スライド5：メリット③ */}
        <SlideWrapper>
          <Benefit3Slide />
        </SlideWrapper>

        {/* スライド6：メリット④ */}
        <SlideWrapper>
          <Benefit4Slide />
        </SlideWrapper>

        {/* スライド7：充実の機能 */}
        <SlideWrapper>
          <FeaturesSlide />
        </SlideWrapper>

        {/* スライド8：競合比較 */}
        <SlideWrapper>
          <CompetitiveSlide />
        </SlideWrapper>

        {/* スライド9：導入は驚くほど簡単 */}
        <SlideWrapper>
          <HowItWorksSlide />
        </SlideWrapper>

        {/* スライド10：分析レポート */}
        <SlideWrapper>
          <ReportSlide />
        </SlideWrapper>

        {/* スライド11：お問い合わせ */}
        <SlideWrapper>
          <ContactSlide />
        </SlideWrapper>
      </div>
    </>
  );
}
