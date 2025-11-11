import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden py-20">
      {/* 背景画像 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/top-img.webp"
          alt="背景画像"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>
      {/* 透過オーバーレイ */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-transparent to-background/80 dark:to-background/90" />

      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="mb-6 text-3xl font-bold tracking-tight text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.8),0_0_20px_rgba(0,0,0,0.5)] sm:text-4xl md:text-5xl lg:text-6xl">
          テクノロジーで、事業を次のステージへ
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.7),0_0_15px_rgba(0,0,0,0.4)] sm:text-xl">
          柔軟に、誠実に、確かな技術で支える。
          <br />
          ライチョウテックパートナーズは、企業の課題解決を共に歩むテクノロジーパートナーです。
        </p>
        <div className="flex justify-center">
          <Button asChild size="lg" className="text-lg">
            <Link href="/#contact">お問い合わせ</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
