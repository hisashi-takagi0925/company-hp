import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          テクノロジーで、事業を次のステージへ。
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          柔軟に、誠実に、確かな技術で支える。
          <br />
          ライチョウテックパートナーズは、企業の課題解決を共に歩むテクノロジーパートナーです。
        </p>
        <div className="flex justify-center">
          <Button asChild size="lg" className="text-lg">
            <Link href="/contact">お問い合わせ</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
