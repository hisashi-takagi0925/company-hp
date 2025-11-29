"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ContactForm() {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    requestType: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // エラーをクリア
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, requestType: value }));
    if (errors.requestType) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.requestType;
        return newErrors;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "氏名を入力してください";
    }
    if (!formData.email.trim()) {
      newErrors.email = "メールアドレスを入力してください";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "有効なメールアドレスを入力してください";
    }
    if (!formData.requestType) {
      newErrors.requestType = "ご希望の内容を選択してください";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const requestTypeLabel = {
        demo: "無料デモ希望",
        hearing: "課題ヒアリング希望",
        consultation: "導入相談希望",
        other: "その他",
      }[formData.requestType] || formData.requestType;

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company || undefined,
          email: formData.email,
          phone: formData.phone || undefined,
          subject: "other",
          message: `【${requestTypeLabel}】\n\n${formData.message || "（内容の記入なし）"}`,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "送信に失敗しました");
      }

      setIsSubmitted(true);
      setFormData({
        company: "",
        name: "",
        email: "",
        phone: "",
        requestType: "",
        message: "",
      });
    } catch (error) {
      console.error("送信エラー:", error);
      setErrors({
        submit:
          error instanceof Error
            ? error.message
            : "送信に失敗しました。しばらくしてから再度お試しください。",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="mx-auto max-w-2xl rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mb-4 text-2xl font-bold text-gray-900">
          お問い合わせありがとうございます
        </h3>
        <p className="mb-2 text-gray-600">
          <span className="font-bold text-blue-600">24時間以内</span>に担当者よりご連絡いたします。
        </p>
        <p className="text-gray-600">
          無料デモや導入相談の日程調整をさせていただきます。
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* ご希望の内容 */}
        <div>
          <Label htmlFor="requestType" className="text-sm font-bold text-gray-900">
            ご希望の内容 <span className="text-red-500">*</span>
          </Label>
          <Select value={formData.requestType} onValueChange={handleSelectChange}>
            <SelectTrigger className="mt-2 border-gray-200 focus:border-blue-600 focus:ring-blue-600">
              <SelectValue placeholder="選択してください" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="demo">無料デモを見てみたい</SelectItem>
              <SelectItem value="hearing">課題をヒアリングしてほしい</SelectItem>
              <SelectItem value="consultation">導入について相談したい</SelectItem>
              <SelectItem value="other">その他</SelectItem>
            </SelectContent>
          </Select>
          {errors.requestType && (
            <p className="mt-1 text-sm text-red-500">{errors.requestType}</p>
          )}
        </div>

        {/* 会社名 */}
        <div>
          <Label htmlFor="company" className="text-sm font-bold text-gray-900">
            会社名
          </Label>
          <Input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            placeholder="株式会社サンプル"
            className="mt-2 border-gray-200 focus:border-blue-600 focus:ring-blue-600"
          />
        </div>

        {/* 氏名 */}
        <div>
          <Label htmlFor="name" className="text-sm font-bold text-gray-900">
            氏名 <span className="text-red-500">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="山田 太郎"
            className="mt-2 border-gray-200 focus:border-blue-600 focus:ring-blue-600"
            required
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name}</p>
          )}
        </div>

        {/* メールアドレス */}
        <div>
          <Label htmlFor="email" className="text-sm font-bold text-gray-900">
            メールアドレス <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@example.com"
            className="mt-2 border-gray-200 focus:border-blue-600 focus:ring-blue-600"
            required
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        {/* 電話番号 */}
        <div>
          <Label htmlFor="phone" className="text-sm font-bold text-gray-900">
            電話番号
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="090-1234-5678"
            className="mt-2 border-gray-200 focus:border-blue-600 focus:ring-blue-600"
          />
        </div>

        {/* 詳細・ご要望（任意） */}
        <div>
          <Label htmlFor="message" className="text-sm font-bold text-gray-900">
            詳細・ご要望（任意）
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="具体的なご要望や質問があればご記入ください"
            className="mt-2 min-h-[100px] border-gray-200 focus:border-blue-600 focus:ring-blue-600"
          />
        </div>

        {/* エラーメッセージ */}
        {errors.submit && (
          <div className="rounded-lg bg-red-50 border border-red-200 p-4">
            <p className="text-sm text-red-600">{errors.submit}</p>
          </div>
        )}

        {/* 送信ボタン */}
        <Button
          type="submit"
          className="w-full bg-blue-600 text-white hover:bg-blue-700 font-bold py-4 text-base shadow-lg shadow-blue-600/20 hover:-translate-y-0.5 transition-all h-14"
          disabled={isSubmitting}
        >
          {isSubmitting ? "送信中..." : "送信する"}
        </Button>
      </form>
    </div>
  );
}
