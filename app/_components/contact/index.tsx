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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const formSchema = z.object({
  name: z.string().min(1, "名前を入力してください"),
  company: z.string().optional(),
  email: z.string().email("有効なメールアドレスを入力してください"),
  phone: z
    .string()
    .max(50, "電話番号は50文字以内で入力してください")
    .optional(),
  subject: z
    .string()
    .min(1, "ご相談内容を選択してください")
    .refine((val) => ["buy", "sell", "brokerage", "other"].includes(val), {
      message: "ご相談内容を選択してください",
    }),
  message: z
    .string()
    .min(1, "メッセージを入力してください")
    .max(1200, "メッセージは1200字以内で入力してください"),
  agreePrivacy: z.boolean().refine((val) => val, {
    message: "プライバシーポリシーへの同意が必要です",
  }),
});

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
                    onValueChange={field.onChange}
                    defaultValue={field.value}
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
                      プライバシーポリシーに同意します
                    </FormLabel>
                    <p className="text-xs text-muted-foreground">
                      個人情報の取り扱いについては{" "}
                      <a
                        href="/privacy"
                        className="text-primary underline-offset-2 hover:underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        プライバシーポリシー
                      </a>
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
            <a
              href="/privacy"
              className="ml-1 text-primary underline-offset-2 hover:underline"
            >
              プライバシーポリシー
            </a>
            をご確認ください。
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
