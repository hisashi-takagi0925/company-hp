import { Settings, Handshake } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "システム導入・運用コンサルティング",
    href: "/lp/consulting",
    icon: Settings,
    description:
      "現場で戦うエンジニアによる実践的コンサル。既存業務の分析からDX推進まで、技術的な視点で伴走支援します。",
    bgColor: "bg-muted/30 dark:bg-muted/20",
    features: [
      "既存業務の分析、課題抽出",
      "システム選定、導入支援、要件定義の整理",
      "開発ベンダーとの調整・レビュー・品質監修",
      "DX推進、業務効率化の伴走支援",
    ],
  },
  {
    title: "Webサービス・SaaSのM&Aアドバイザリー",
    href: "/lp/ma",
    icon: Handshake,
    description:
      "技術に強いM&A仲介。エンジニア視点で小規模SaaS・個人開発サービスを評価し、適切なマッチングを実現します。",
    bgColor: "bg-muted/30 dark:bg-muted/20",
    features: [
      "小規模SaaS・個人開発サービスを対象とした仲介・技術評価",
      "売り手支援：事業・コード評価、譲渡準備、仲介先への接続",
      "買い手支援：技術デューデリ（コード品質・依存関係・保守リスク）",
      "エンジニア視点のM&A支援",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-500 dark:text-gray-400 sm:text-4xl">
          事業内容
        </h2>
        <p className="mx-auto max-w-2xl text-gray-500 dark:text-gray-500">
          信頼性と専門性で、お客様の課題解決をサポートします
        </p>
      </div>
      <div className="space-y-0">
        {services.map((service, index) => (
          <div
            key={index}
            className={`group relative flex flex-col ${service.bgColor} py-16 transition-all duration-300`}
          >
            <div className="container mx-auto px-4">
              <div className="relative flex-1">
                <div className="mb-8 flex flex-col items-center text-center sm:flex-row sm:text-left">
                  {/* アイコン */}
                  <div className="mb-6 flex-shrink-0 sm:mb-0 sm:mr-6">
                    <div className="relative rounded-2xl bg-muted p-5 shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <service.icon className="relative h-10 w-10 text-muted-foreground" />
                    </div>
                  </div>
                  
                  {/* タイトルと説明 */}
                  <div className="flex-1">
                    <h3 className="mb-3 text-2xl font-bold tracking-tight text-gray-500 dark:text-gray-400 sm:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mb-4 text-base leading-relaxed text-gray-500 dark:text-gray-500 sm:text-lg">
                      {service.description}
                    </p>
                    {/* 箇条書き */}
                    <ul className="mb-6 space-y-2 text-left text-sm text-gray-500 dark:text-gray-500 sm:text-base">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="mr-2 mt-1">・</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* ボタン */}
              <div className="mt-auto flex justify-center pt-6">
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-6 border border-border/50 bg-transparent hover:bg-muted/50 hover:border-border transition-all duration-200 rounded-lg shadow-sm hover:shadow-md"
                >
                  <Link href={service.href}>詳細はこちら</Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
