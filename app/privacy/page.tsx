import { Header } from "@/app/_components/header";
import { Footer } from "@/app/_components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="py-20">
          <div className="container px-4">
            <Card className="mx-auto max-w-3xl">
              <CardHeader>
                <CardTitle className="text-3xl">プライバシーポリシー</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                <div className="space-y-4">
                  <p>
                    ライチョウテックパートナーズ株式会社（以下「当社」といいます）は、お客様の個人情報の保護について、以下のとおりプライバシーポリシーを定めます。
                  </p>
                  <h2 className="text-xl font-semibold">
                    個人情報の取得と利用目的
                  </h2>
                  <p>
                    当社は、お問い合わせ対応・業務連絡の目的にのみ個人情報を使用します。
                  </p>
                  <h2 className="text-xl font-semibold">
                    個人情報の第三者提供
                  </h2>
                  <p>
                    法令に基づく場合を除き、取得した個人情報を第三者に提供することはありません。
                  </p>
                  <h2 className="text-xl font-semibold">お問い合わせ</h2>
                  <p>
                    本プライバシーポリシーに関するお問い合わせは、以下のメールアドレスまでご連絡ください。
                  </p>
                  <p>メールアドレス: info@raicho-tech.jp</p>
                  <p className="text-sm text-muted-foreground">
                    制定日: 2025年10月1日
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
