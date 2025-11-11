const services = [
  {
    title: "受託開発",
    description:
      "Webシステム・アプリケーションの設計、開発、保守をワンストップで対応。要件定義からリリース後の改善まで、効率的な開発体制を提供。",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    borderColor: "border-blue-500/30",
    layers: [
      {
        title: "要件定義・設計",
        description:
          "お客様のビジネス課題をヒアリングし、最適なシステム設計を提案。技術選定からアーキテクチャ設計まで、一貫してサポートします。",
      },
      {
        title: "開発・実装",
        description:
          "フロントエンド、バックエンド、インフラまで、最新技術を活用した高品質な開発を実施。アジャイル開発手法により、柔軟に対応します。",
      },
      {
        title: "テスト・品質保証",
        description:
          "単体テストから結合テスト、E2Eテストまで、徹底した品質管理を行い、安定したシステムを提供します。",
      },
      {
        title: "リリース・保守",
        description:
          "スムーズなリリース支援から、運用保守まで長期的にサポート。継続的な改善提案により、システムの価値を最大化します。",
      },
    ],
  },
  {
    title: "業務委託",
    description:
      "フロントエンド・バックエンド・インフラなど専門領域のプロフェッショナルが、クライアントのチームにジョインして支援。",
    bgColor: "bg-green-50 dark:bg-green-950/20",
    borderColor: "border-green-500/30",
    layers: [
      {
        title: "フロントエンド開発",
        description:
          "React、Vue、Next.jsなどのモダンフレームワークを活用したUI/UX開発。レスポンシブ対応やアクセシビリティにも配慮します。",
      },
      {
        title: "バックエンド開発",
        description:
          "API設計、データベース設計、サーバーサイドロジックの実装。スケーラブルで保守性の高いシステム構築を支援します。",
      },
      {
        title: "インフラ・DevOps",
        description:
          "クラウドインフラの構築・運用、CI/CDパイプラインの構築、モニタリング・ログ管理まで、DevOpsの全領域をカバーします。",
      },
      {
        title: "チーム連携",
        description:
          "お客様の開発チームにシームレスに統合し、既存の開発フローに合わせた柔軟な支援を提供します。",
      },
    ],
  },
  {
    title: "システム導入・運用コンサルティング",
    description:
      "業務効率化・DX推進を目的としたシステム選定・導入・運用のサポート。課題分析から改善提案、ベンダー調整まで一貫して対応。",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
    borderColor: "border-purple-500/30",
    layers: [
      {
        title: "現状分析・課題抽出",
        description:
          "業務フローの分析、システム現状の調査を行い、改善すべき課題を明確化。データに基づいた客観的な分析を提供します。",
      },
      {
        title: "システム選定",
        description:
          "お客様の要件に最適なシステム・ツールを選定。複数ベンダーとの比較検討を行い、コストパフォーマンスの高い提案を実施します。",
      },
      {
        title: "導入支援",
        description:
          "導入計画の策定から、データ移行、ユーザー教育まで、スムーズな導入をサポート。リスクを最小化しながら進めます。",
      },
      {
        title: "運用改善",
        description:
          "導入後の運用状況をモニタリングし、継続的な改善提案を実施。システムの効果を最大化するためのサポートを提供します。",
      },
    ],
  },
  {
    title: "WebサービスのM&A仲介",
    description:
      "中小規模のWebサービスやSaaSを中心に、「売りたい」と「買いたい」をつなぐM&A仲介・評価・交渉支援を実施。",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
    borderColor: "border-orange-500/30",
    layers: [
      {
        title: "企業価値評価",
        description:
          "技術資産、顧客基盤、収益性など多角的な観点から企業価値を評価。適正な売却価格の算定をサポートします。",
      },
      {
        title: "マッチング",
        description:
          "売り手と買い手のニーズを詳細にヒアリングし、最適なマッチングを実現。双方の利益を最大化する取引を提案します。",
      },
      {
        title: "交渉支援",
        description:
          "技術的な観点から適切なアドバイスを提供し、スムーズな交渉をサポート。契約条件の調整からクロージングまで支援します。",
      },
      {
        title: "移行支援",
        description:
          "M&A成立後の技術移行、データ移行、チーム統合まで、技術面での移行支援を実施。リスクを最小化しながら進めます。",
      },
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          事業内容
        </h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          お客様の課題解決をサポートする4つのサービス
        </p>
      </div>
      <div className="space-y-12">
        {services.map((service, index) => (
          <div
            key={index}
            className={`w-full rounded-lg ${service.bgColor} py-8 sm:py-12`}
          >
            <div className="mb-8 text-center">
              <h3 className="mb-2 text-2xl font-bold tracking-tight sm:text-3xl">
                {service.title}
              </h3>
              <p className="mx-auto max-w-3xl px-4 text-base text-muted-foreground sm:text-lg">
                {service.description}
              </p>
            </div>
            <div className="grid gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4 sm:px-8 lg:px-12">
              {service.layers.map((layer, layerIndex) => (
                <div
                  key={layerIndex}
                  className={`min-h-[160px] rounded-md border-l-2 ${service.borderColor} bg-background/50 p-5 backdrop-blur-sm`}
                >
                  <h4 className="mb-3 font-semibold text-foreground">
                    {layer.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {layer.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
