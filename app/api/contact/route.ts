import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

// SendGridのAPIキーを設定
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, email, phone, subject, message } = body;

    // バリデーション
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "必須項目が入力されていません" },
        { status: 400 }
      );
    }

    // SendGridのAPIキーが設定されているか確認
    if (!process.env.SENDGRID_API_KEY) {
      console.error("SENDGRID_API_KEYが設定されていません");
      return NextResponse.json(
        { error: "メール送信の設定が完了していません" },
        { status: 500 }
      );
    }

    // 送信元情報を取得（スパム対策・送信元特定用）
    // IPアドレスの取得（複数のヘッダーを確認）
    const forwardedFor = request.headers.get("x-forwarded-for");
    const realIp = request.headers.get("x-real-ip");
    const cfConnectingIp = request.headers.get("cf-connecting-ip"); // Cloudflare経由の場合
    const vercelClientIp = request.headers.get("x-vercel-forwarded-for"); // Vercel経由の場合
    const clientIp = request.headers.get("x-client-ip");

    // デバッグ用：すべてのIP関連ヘッダーをログ出力
    console.log("IPアドレス取得デバッグ:", {
      "x-forwarded-for": forwardedFor,
      "x-real-ip": realIp,
      "cf-connecting-ip": cfConnectingIp,
      "x-vercel-forwarded-for": vercelClientIp,
      "x-client-ip": clientIp,
    });

    // IPアドレスの優先順位で取得
    let ipAddress = "取得不可";
    if (forwardedFor) {
      // x-forwarded-forはカンマ区切りで複数のIPが含まれる場合がある（最初がクライアントIP）
      ipAddress = forwardedFor.split(",")[0]?.trim() || "取得不可";
    } else if (vercelClientIp) {
      // Vercel経由の場合
      ipAddress = vercelClientIp.split(",")[0]?.trim() || "取得不可";
    } else if (realIp) {
      ipAddress = realIp;
    } else if (cfConnectingIp) {
      ipAddress = cfConnectingIp;
    } else if (clientIp) {
      ipAddress = clientIp;
    }

    const userAgent = request.headers.get("user-agent") || "取得不可";
    const referer = request.headers.get("referer") || "直接アクセス";
    const acceptLanguage = request.headers.get("accept-language") || "取得不可";
    const timestamp = new Date().toLocaleString("ja-JP", {
      timeZone: "Asia/Tokyo",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    // 送信先メールアドレス
    const recipientEmail = "info@raicho-tech.com";
    // 送信元メールアドレス（SendGridで認証済みのメールアドレスを使用）
    const fromEmail =
      process.env.SENDGRID_FROM_EMAIL || "noreply@raicho-tech.com";
    // ホームページのURL
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL ||
      process.env.BASE_URL ||
      "https://raicho-tech.jp";

    // メール本文の作成（テキスト形式）
    const emailBody = `
お問い合わせがありました。

【名前】
${name}

【会社名】
${company || "未入力"}

【メールアドレス】
${email}

【電話番号】
${phone || "未入力"}

【件名】
${subject}

【メッセージ】
${message}

---
【送信元情報】
送信日時: ${timestamp}
IPアドレス: ${ipAddress}
User-Agent: ${userAgent}
リファラー: ${referer}
言語設定: ${acceptLanguage}

---
このメールは、ライチョウテックパートナーズ株式会社の問い合わせフォームから送信されました。
`;

    // HTML形式のメール本文も作成
    const emailBodyHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #f4f4f4; padding: 20px; border-radius: 5px; margin-bottom: 20px; }
    .content { padding: 20px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #555; }
    .value { margin-top: 5px; padding: 10px; background-color: #f9f9f9; border-radius: 3px; }
    .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #777; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>お問い合わせがありました</h2>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">名前</div>
        <div class="value">${name}</div>
      </div>
      <div class="field">
        <div class="label">会社名</div>
        <div class="value">${company || "未入力"}</div>
      </div>
      <div class="field">
        <div class="label">メールアドレス</div>
        <div class="value">${email}</div>
      </div>
      <div class="field">
        <div class="label">電話番号</div>
        <div class="value">${phone || "未入力"}</div>
      </div>
      <div class="field">
        <div class="label">件名</div>
        <div class="value">${subject}</div>
      </div>
      <div class="field">
        <div class="label">メッセージ</div>
        <div class="value">${message.replace(/\n/g, "<br>")}</div>
      </div>
    </div>
    
    <div style="margin-top: 30px; padding: 15px; background-color: #f0f0f0; border-radius: 5px; border-left: 4px solid #666;">
      <div style="font-weight: bold; margin-bottom: 10px; color: #555;">【送信元情報】</div>
      <div style="font-size: 12px; line-height: 1.8;">
        <div><strong>送信日時:</strong> ${timestamp}</div>
        <div><strong>IPアドレス:</strong> ${ipAddress}</div>
        <div><strong>User-Agent:</strong> <span style="word-break: break-all;">${userAgent}</span></div>
        <div><strong>リファラー:</strong> <span style="word-break: break-all;">${referer}</span></div>
        <div><strong>言語設定:</strong> ${acceptLanguage}</div>
      </div>
    </div>
    
    <div class="footer">
      このメールは、ライチョウテックパートナーズ株式会社の問い合わせフォームから送信されました。
    </div>
  </div>
</body>
</html>
`;

    // 管理者宛てのメール（問い合わせ内容）
    const adminMsg = {
      to: recipientEmail,
      from: fromEmail,
      replyTo: email, // 返信先を問い合わせ者のメールアドレスに設定
      subject: `【お問い合わせ】${subject}`,
      text: emailBody,
      html: emailBodyHtml,
    };

    // 問い合わせ元への確認メール本文（テキスト形式）
    const confirmationEmailBody = `
${name} 様

この度は、ライチョウテックパートナーズ株式会社にお問い合わせいただき、誠にありがとうございます。

以下の内容でお問い合わせを受け付けいたしました。

【お問い合わせ内容】
件名: ${subject}
${company ? `会社名: ${company}` : ""}
メッセージ:
${message}

担当者より3営業日以内にご返信させていただきます。
今しばらくお待ちください。

何かご不明な点がございましたら、お気軽にお問い合わせください。

---
ライチョウテックパートナーズ株式会社
ホームページ: ${baseUrl}
メール: info@raicho-tech.com

※ このメールアドレス（${fromEmail}）は送信専用です。
   返信しても届きませんのでご注意ください。
   お問い合わせは info@raicho-tech.com までお願いいたします。
`;

    // 問い合わせ元への確認メール本文（HTML形式）
    const confirmationEmailBodyHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif; line-height: 1.8; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #f4f4f4; padding: 20px; border-radius: 5px; margin-bottom: 20px; text-align: center; }
    .content { padding: 20px; }
    .greeting { margin-bottom: 20px; }
    .info-box { background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0; }
    .info-item { margin-bottom: 10px; }
    .info-label { font-weight: bold; color: #555; }
    .message-box { background-color: #fff; border-left: 4px solid #007bff; padding: 15px; margin: 20px 0; }
    .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #777; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>お問い合わせありがとうございます</h2>
    </div>
    <div class="content">
      <div class="greeting">
        <p>${name} 様</p>
        <p>この度は、ライチョウテックパートナーズ株式会社にお問い合わせいただき、誠にありがとうございます。</p>
      </div>
      
      <p>以下の内容でお問い合わせを受け付けいたしました。</p>
      
      <div class="info-box">
        <div class="info-item">
          <span class="info-label">件名:</span> ${subject}
        </div>
        ${
          company
            ? `<div class="info-item"><span class="info-label">会社名:</span> ${company}</div>`
            : ""
        }
      </div>
      
      <div class="message-box">
        <div class="info-label">メッセージ:</div>
        <div style="margin-top: 10px; white-space: pre-wrap;">${message.replace(
          /\n/g,
          "<br>"
        )}</div>
      </div>
      
      <p>担当者より<strong>3営業日以内</strong>にご返信させていただきます。<br>
      今しばらくお待ちください。</p>
      
      <p>何かご不明な点がございましたら、お気軽にお問い合わせください。</p>
    </div>
    
    <div class="footer">
      <p>---</p>
      <p><strong>ライチョウテックパートナーズ株式会社</strong></p>
      <p>ホームページ: <a href="${baseUrl}" style="color: #007bff; text-decoration: none;">${baseUrl}</a></p>
      <p>メール: <a href="mailto:info@raicho-tech.com" style="color: #007bff; text-decoration: none;">info@raicho-tech.com</a></p>
      <div style="margin-top: 15px; padding: 10px; background-color: #fff3cd; border-left: 4px solid #ffc107; border-radius: 3px;">
        <p style="margin: 0; color: #856404; font-size: 11px;">
          <strong>※ ご注意</strong><br>
          このメールアドレス（${fromEmail}）は送信専用です。<br>
          返信しても届きませんのでご注意ください。<br>
          お問い合わせは <a href="mailto:info@raicho-tech.com" style="color: #856404;">info@raicho-tech.com</a> までお願いいたします。
        </p>
      </div>
    </div>
  </div>
</body>
</html>
`;

    // 問い合わせ元への確認メール
    const confirmationMsg = {
      to: email,
      from: fromEmail,
      subject: `【自動返信】お問い合わせを受け付けました - ${subject}`,
      text: confirmationEmailBody,
      html: confirmationEmailBodyHtml,
    };

    // 2つのメールを送信（並列実行）
    await Promise.all([sgMail.send(adminMsg), sgMail.send(confirmationMsg)]);

    console.log("お問い合わせメールを送信しました:", {
      管理者宛て: {
        to: recipientEmail,
        from: fromEmail,
        subject: adminMsg.subject,
      },
      確認メール: {
        to: email,
        from: fromEmail,
        subject: confirmationMsg.subject,
      },
      送信元情報: {
        ipAddress,
        userAgent,
        referer,
        timestamp,
      },
    });

    return NextResponse.json(
      { message: "お問い合わせを受け付けました" },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("問い合わせ送信エラー:", error);

    // SendGridのエラーレスポンスの詳細を確認
    if (
      error &&
      typeof error === "object" &&
      "response" in error &&
      error.response &&
      typeof error.response === "object"
    ) {
      const sendGridError = error as {
        code?: number;
        response?: {
          statusCode?: number;
          body?: {
            errors?: Array<{
              message?: string;
              field?: string;
              help?: string;
            }>;
          };
        };
      };

      const errorBody = sendGridError.response?.body;
      const errorCode =
        sendGridError.code || sendGridError.response?.statusCode;

      console.error("SendGridエラーレスポンス:", {
        statusCode: sendGridError.response?.statusCode,
        code: errorCode,
        body: errorBody,
      });

      // エラーメッセージの詳細を出力
      if (errorBody?.errors && Array.isArray(errorBody.errors)) {
        console.error("SendGridエラー詳細:");
        errorBody.errors.forEach((err, index: number) => {
          console.error(`  エラー ${index + 1}:`, {
            message: err.message,
            field: err.field,
            help: err.help,
          });
        });
      }

      // 403エラーの場合、よくある原因をログに出力
      if (errorCode === 403 || sendGridError.response?.statusCode === 403) {
        console.error("\n=== 403 Forbiddenエラーの原因 ===");
        console.error(
          "1. 送信元メールアドレス（from）がSendGridで認証されていない可能性があります"
        );
        console.error(
          `   現在の送信元: ${
            process.env.SENDGRID_FROM_EMAIL || "noreply@raicho-tech.com"
          }`
        );
        console.error(
          "2. SendGridのダッシュボードでメールアドレスを認証してください"
        );
        console.error(
          "   Settings > Sender Authentication > Single Sender Verification"
        );
        console.error(
          "3. または、認証済みのメールアドレスを.envのSENDGRID_FROM_EMAILに設定してください"
        );
      }
    }

    if (error instanceof Error) {
      console.error("エラー詳細:", error.message);
    }

    return NextResponse.json(
      { error: "送信に失敗しました。しばらくしてから再度お試しください。" },
      { status: 500 }
    );
  }
}
