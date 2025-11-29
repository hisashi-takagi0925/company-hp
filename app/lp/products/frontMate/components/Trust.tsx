import React from "react";
import { Building2, MessageSquare, TrendingUp, Shield, Lock } from "lucide-react";

const stats = [
  {
    icon: <Building2 className="w-6 h-6 text-blue-600" />,
    value: "100+",
    label: "導入企業数",
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-blue-600" />,
    value: "50,000+",
    label: "月間会話数",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
    value: "3.2倍",
    label: "平均問い合わせ増加率",
  },
];

const securityBadges = [
  {
    icon: <Shield className="w-5 h-5 text-green-600" />,
    label: "エンタープライズセキュリティ",
  },
  {
    icon: <Lock className="w-5 h-5 text-green-600" />,
    label: "データ暗号化対応",
  },
];

export const Trust = () => {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-gray-50 to-blue-50/30">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
            多くの企業が導入し、成果を実感
          </h2>
          <p className="text-lg text-gray-600">
            実際の導入企業様からの声と実績データ
          </p>
        </div>
        
        {/* Stats Cards with Visual Elements */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 text-center relative overflow-hidden group hover:shadow-xl transition-shadow"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform"></div>
              
              <div className="relative z-10">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-5xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* ROI Example Box */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8 mb-16">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">投資回収の目安</h3>
            <p className="text-gray-600">導入企業の平均例</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-sm text-gray-600 mb-1">導入前</div>
              <div className="text-3xl font-bold text-gray-900">10件/月</div>
              <div className="text-sm text-gray-500">問い合わせ数</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-4xl text-green-600">→</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">導入後</div>
              <div className="text-3xl font-bold text-green-600">32件/月</div>
              <div className="text-sm text-gray-500">3.2倍に増加</div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">平均投資回収期間: <span className="font-bold text-green-600 text-lg">3ヶ月</span></p>
          </div>
        </div>
        
        {/* Testimonial with Image */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          {/* Left: Visual representation */}
          <div className="relative h-64 md:h-80 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 flex items-center justify-center">
            <div className="text-center">
              <div className="text-7xl font-bold text-blue-600 mb-2">3倍</div>
              <div className="text-xl text-gray-700">問い合わせ数増加</div>
              <div className="mt-6 flex justify-center gap-2">
                <div className="w-3 h-20 bg-blue-300 rounded"></div>
                <div className="w-3 h-32 bg-blue-400 rounded"></div>
                <div className="w-3 h-48 bg-blue-600 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
          
          {/* Right: Testimonial */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-200">
            <div className="mb-6">
              <svg className="w-10 h-10 text-blue-600 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="text-xl text-gray-900 mb-6 leading-relaxed">
              「Front Mateを導入してから、サイト訪問者からの問い合わせが<span className="font-bold text-blue-600">3倍</span>に増えました。特に営業時間外の問い合わせが増え、商談機会の取りこぼしがなくなりました。」
            </p>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">SaaS企業A社</div>
                <div className="text-sm text-gray-500">代表取締役</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Security Badges */}
        <div className="flex flex-wrap justify-center gap-6">
          {securityBadges.map((badge, index) => (
            <div key={index} className="flex items-center gap-2 bg-white px-6 py-3 rounded-full border border-green-200 shadow-sm">
              {badge.icon}
              <span className="text-sm font-medium text-gray-700">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


