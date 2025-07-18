import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ message: "全て入力してください" }), {
      status: 400,
    });
  }

  // SMTPサーバ設定（Gmailを例としています）
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER, // 自分に送信
    subject: "お問い合わせが届きました",
    text: `名前: ${name}\nメール: ${email}\n\nメッセージ:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: "お問い合わせ送信完了！" }), {
      status: 200,
    });
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ message: "メール送信に失敗しました。" }),
      {
        status: 500,
      }
    );
  }
}
