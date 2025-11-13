"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
  subject: z
    .string()
    .min(1, "件名を選択してください")
    .refine(
      (val) => ["M&A相談", "その他"].includes(val),
      {
        message: "件名を選択してください",
      }
    ),
  message: z
    .string()
    .min(1, "メッセージを入力してください")
    .max(1200, "メッセージは1200字以内で入力してください"),
});

type FormValues = z.infer<typeof formSchema>;

interface ContactFormProps {
  onSuccess?: () => void;
}

export function ContactForm({ onSuccess }: ContactFormProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      subject: undefined,
      message: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    // TODO: 実際の送信処理を実装
    console.log(values);
    form.reset();
    if (onSuccess) {
      onSuccess();
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
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>件名 *</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="件名を選択してください" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="M&A相談">M&A相談</SelectItem>
                      <SelectItem value="その他">その他</SelectItem>
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
                  <FormLabel>メッセージ本文 *（400〜1200字推奨）</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="お問い合わせ内容をご記入ください（400〜1200字推奨）"
                      className="min-h-[200px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                  <p className={`text-xs ${(field.value?.length || 0) < 400 && field.value ? "text-orange-600 dark:text-orange-400" : "text-muted-foreground"}`}>
                    {field.value?.length || 0} / 1200字
                    {(field.value?.length || 0) > 0 && (field.value?.length || 0) < 400 && (
                      <span className="ml-2">（400字以上推奨）</span>
                    )}
                  </p>
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" size="lg">
              送信
            </Button>
          </form>
        </Form>
        <div className="mt-6 text-sm text-muted-foreground">
          <p>※ お問い合わせはメールでの対応となります。</p>
          <p>※ お問い合わせ先: info@raicho-tech.jp</p>
        </div>
      </CardContent>
    </Card>
  );
}
