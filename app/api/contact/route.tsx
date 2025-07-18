// app/api/contact/route.ts

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ message: "全て入力してください" }), {
      status: 400,
    });
  }

  try {
    const data = await resend.emails.send({
      from: "お問い合わせフォーム <noreply@resend.dev>", // 認証不要な送信元
      to: "okome930@gmail.com",
      subject: "お問い合わせが届きました",
      text: `名前: ${name}\nメール: ${email}\n\nメッセージ:\n${message}`,
    });

    return new Response(JSON.stringify({ message: "送信成功", data }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "送信失敗" }), {
      status: 500,
    });
  }
}
