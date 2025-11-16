"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

// 共通スキーマ
const baseSchema = z.object({
  name: z.string().min(1, "名前を入力してください"),
  company: z.string().optional(),
  email: z.string().email("有効なメールアドレスを入力してください"),
  phone: z
    .string()
    .max(50, "電話番号は50文字以内で入力してください")
    .optional(),
  message: z
    .string()
    .min(1, "メッセージを入力してください")
    .max(1200, "メッセージは1200字以内で入力してください"),
  agreePrivacy: z.boolean().refine((val) => val, {
    message: "プライバシーポリシーへの同意が必要です",
  }),
});

// 買収用の追加スキーマ
const buySchema = baseSchema.extend({
  subject: z.literal("buy"),
  buyPurpose: z.array(z.string()).min(1, "買収の目的を1つ以上選択してください"),
  buyBudget: z.string().min(1, "予算レンジを選択してください"),
  serviceType: z.string().optional(),
  buySchedule: z.string().optional(),
});

// 売却用の追加スキーマ
const sellSchema = baseSchema.extend({
  subject: z.literal("sell"),
  serviceUrl: z.string().optional(),
  revenueRange: z.string().optional(),
  userCount: z.string().optional(),
  operationType: z.string().optional(),
  sellSchedule: z.string().optional(),
  concerns: z.array(z.string()).optional(),
});

// 仲介用の追加スキーマ
const brokerageSchema = baseSchema.extend({
  subject: z.literal("brokerage"),
  brokerageRole: z.string().optional(),
  cooperationType: z.string().optional(),
  caseScale: z.string().optional(),
  hasCase: z.string().optional(),
});

// その他用のスキーマ
const otherSchema = baseSchema.extend({
  subject: z.literal("other"),
});

// 統合スキーマ（discriminated union）
const formSchema = z.discriminatedUnion("subject", [
  buySchema,
  sellSchema,
  brokerageSchema,
  otherSchema,
]);

type FormValues = z.infer<typeof formSchema>;

interface ContactFormProps {
  onSuccess?: () => void;
}

export function ContactForm({ onSuccess }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      subject: undefined,
      message: "",
      agreePrivacy: false,
    },
  });

  const subject = form.watch("subject");

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "送信に失敗しました");
      }

      form.reset();
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error("送信エラー:", error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "送信に失敗しました。しばらくしてから再度お試しください。"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="mx-auto max-w-2xl">
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>名前 *</FormLabel>
                  <FormControl>
                    <Input placeholder="山田 太郎" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>会社名</FormLabel>
                  <FormControl>
                    <Input placeholder="株式会社サンプル" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>メールアドレス *</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="example@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>電話番号</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="090-1234-5678" {...field} />
                  </FormControl>
                  <p className="text-xs text-muted-foreground">
                    急ぎのご連絡が必要な場合にのみ使用します。営業電話には利用しません。
                  </p>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ご相談内容 *</FormLabel>
                  <Select
                    onValueChange={(value) => {
                      field.onChange(value);
                      // 種別変更時に追加フィールドをリセット
                      form.resetField("message", { defaultValue: "" });
                    }}
                    value={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="ご相談の目的を選択してください" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="buy">
                        買収の相談（買いたい方）
                      </SelectItem>
                      <SelectItem value="sell">
                        売却の相談（売りたい方）
                      </SelectItem>
                      <SelectItem value="brokerage">
                        仲介・アドバイザリーの相談
                      </SelectItem>
                      <SelectItem value="other">その他のご相談</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* 買収（buy）用の追加フィールド */}
            {subject === "buy" && (
              <div className="space-y-4 rounded-lg border bg-muted/30 p-4">
                <h3 className="text-sm font-semibold">買収についての詳細</h3>
                <FormField
                  control={form.control}
                  name="buyPurpose"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>買収の目的 *</FormLabel>
                      <FormDescription className="text-xs">
                        該当するものをすべて選択してください
                      </FormDescription>
                      <div className="space-y-2">
                        {[
                          "既存事業の拡張",
                          "新規事業の立ち上げ",
                          "技術・チームの獲得",
                          "市場シェアの拡大",
                          "その他",
                        ].map((purpose) => {
                          const isChecked = field.value?.includes(purpose);
                          return (
                            <div
                              key={purpose}
                              className="flex items-center space-x-2"
                            >
                              <Checkbox
                                id={`buy-purpose-${purpose}`}
                                checked={isChecked}
                                onCheckedChange={(checked: boolean) => {
                                  const current = field.value || [];
                                  field.onChange(
                                    checked
                                      ? [...current, purpose]
                                      : current.filter((v) => v !== purpose)
                                  );
                                }}
                              />
                              <label
                                htmlFor={`buy-purpose-${purpose}`}
                                className="text-sm font-normal cursor-pointer hover:text-primary transition-colors"
                              >
                                {purpose}
                              </label>
                            </div>
                          );
                        })}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="buyBudget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>想定している予算レンジ *</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="予算レンジを選択してください" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="under-300">〜300万円</SelectItem>
                          <SelectItem value="300-1000">
                            300〜1,000万円
                          </SelectItem>
                          <SelectItem value="1000-3000">
                            1,000〜3,000万円
                          </SelectItem>
                          <SelectItem value="over-3000">
                            3,000万円以上
                          </SelectItem>
                          <SelectItem value="undecided">未定</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="serviceType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>希望するサービスのタイプ</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="選択してください（任意）" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="b2b">BtoB SaaS</SelectItem>
                          <SelectItem value="b2c">BtoC SaaS</SelectItem>
                          <SelectItem value="ad">広告モデル</SelectItem>
                          <SelectItem value="other">その他</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="buySchedule"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>希望する買収時期</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="選択してください（任意）" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="3months">3ヶ月以内</SelectItem>
                          <SelectItem value="6months">半年以内</SelectItem>
                          <SelectItem value="1year">1年以内</SelectItem>
                          <SelectItem value="undecided">未定</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            {/* 売却（sell）用の追加フィールド */}
            {subject === "sell" && (
              <div className="space-y-4 rounded-lg border bg-muted/30 p-4">
                <h3 className="text-sm font-semibold">売却についての詳細</h3>
                <FormField
                  control={form.control}
                  name="serviceUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>サービスURL</FormLabel>
                      <FormControl>
                        <Input
                          type="url"
                          placeholder="https://example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription className="text-xs">
                        可能であればご記入ください
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="revenueRange"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>月間売上規模（ARR）</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="選択してください（任意）" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="under-30">〜30万円</SelectItem>
                          <SelectItem value="30-100">30〜100万円</SelectItem>
                          <SelectItem value="100-300">100〜300万円</SelectItem>
                          <SelectItem value="over-300">300万円以上</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="userCount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>ユーザー数・課金ユーザー数</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="例：月間アクティブユーザー1,000名、有料ユーザー100名"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="operationType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>運用体制</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="選択してください（任意）" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="individual">個人開発</SelectItem>
                          <SelectItem value="small-team">
                            小チーム（〜3名）
                          </SelectItem>
                          <SelectItem value="team">チーム4名以上</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="sellSchedule"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>希望する売却時期</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="選択してください（任意）" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="3months">3ヶ月以内</SelectItem>
                          <SelectItem value="6months">半年以内</SelectItem>
                          <SelectItem value="1year">1年以内</SelectItem>
                          <SelectItem value="undecided">未定</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="concerns"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>特に不安・懸念していること</FormLabel>
                      <FormDescription className="text-xs">
                        該当するものをすべて選択してください（任意）
                      </FormDescription>
                      <div className="space-y-2">
                        {[
                          "価格",
                          "スピード",
                          "秘密保持",
                          "技術負債",
                          "ユーザー対応",
                        ].map((concern) => {
                          const isChecked = field.value?.includes(concern);
                          return (
                            <div
                              key={concern}
                              className="flex items-center space-x-2"
                            >
                              <Checkbox
                                id={`sell-concern-${concern}`}
                                checked={isChecked}
                                onCheckedChange={(checked: boolean) => {
                                  const current = field.value || [];
                                  field.onChange(
                                    checked
                                      ? [...current, concern]
                                      : current.filter((v) => v !== concern)
                                  );
                                }}
                              />
                              <label
                                htmlFor={`sell-concern-${concern}`}
                                className="text-sm font-normal cursor-pointer hover:text-primary transition-colors"
                              >
                                {concern}
                              </label>
                            </div>
                          );
                        })}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            {/* 仲介（brokerage）用の追加フィールド */}
            {subject === "brokerage" && (
              <div className="space-y-4 rounded-lg border bg-muted/30 p-4">
                <h3 className="text-sm font-semibold">
                  仲介・協業についての詳細
                </h3>
                <FormField
                  control={form.control}
                  name="brokerageRole"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>あなたの立場</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="選択してください（任意）" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="ma-company">
                            M&A仲介会社
                          </SelectItem>
                          <SelectItem value="fa">
                            FA（ファイナンシャルアドバイザー）
                          </SelectItem>
                          <SelectItem value="vc">VC</SelectItem>
                          <SelectItem value="company">事業会社</SelectItem>
                          <SelectItem value="other">その他</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="cooperationType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>想定している協業パターン</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="選択してください（任意）" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="tech-dd-only">
                            技術DDのみ
                          </SelectItem>
                          <SelectItem value="case-by-case">
                            案件ごとの共同アドバイザリー
                          </SelectItem>
                          <SelectItem value="ongoing">
                            継続的な技術パートナー
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="caseScale"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>想定案件の規模レンジ</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="選択してください（任意）" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="under-1000">
                            〜1,000万円
                          </SelectItem>
                          <SelectItem value="1000-5000">
                            1,000〜5,000万円
                          </SelectItem>
                          <SelectItem value="over-5000">
                            5,000万円以上
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="hasCase"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>具体案件の有無</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="選択してください（任意）" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="yes">
                            すでに具体案件がある
                          </SelectItem>
                          <SelectItem value="no">
                            まだ無い（スキーム相談から）
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>メッセージ本文 *</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="お問い合わせ内容をご記入ください"
                      className="min-h-[200px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                  <p className="text-xs text-muted-foreground">
                    {field.value?.length || 0} / 1200字
                  </p>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="agreePrivacy"
              render={({ field }) => (
                <FormItem className="flex items-start gap-2 space-y-0">
                  <FormControl>
                    <input
                      type="checkbox"
                      className="mt-1 h-4 w-4 rounded border border-input text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      checked={field.value}
                      onChange={(e) => field.onChange(e.target.checked)}
                    />
                  </FormControl>
                  <div className="space-y-1 text-sm">
                    <FormLabel className="font-normal">
                      プライバシーポリシーに同意します *
                    </FormLabel>
                    <p className="text-xs text-muted-foreground">
                      個人情報の取り扱いについては{" "}
                      <Link
                        href="/privacy"
                        className="text-primary underline-offset-2 hover:underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        プライバシーポリシー
                      </Link>
                      をご確認ください。
                    </p>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            {submitError && (
              <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800 dark:border-red-800 dark:bg-red-950 dark:text-red-200">
                {submitError}
              </div>
            )}
            <Button
              type="submit"
              className="w-full"
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? "送信中..." : "送信"}
            </Button>
          </form>
        </Form>
        <div className="mt-6 space-y-2 text-sm text-muted-foreground">
          <p>
            ※ 原則1営業日以内、遅くとも3営業日以内に担当者よりご連絡いたします。
          </p>
          <p>
            ※
            お問い合わせはメールでの対応となります（送信専用アドレスからの自動返信を含みます）。
          </p>
          <p>
            ※ 個人情報の取り扱いについては
            <Link
              href="/privacy"
              className="ml-1 text-primary underline-offset-2 hover:underline"
            >
              プライバシーポリシー
            </Link>
            をご確認ください。
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
