"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("送信中...");

    try {
      const response = await fetch("https://formspree.io/f/xnnznvrr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("送信が完了しました！");
        setForm({ name: "", email: "", message: "" }); // フォーム初期化
      } else {
        setStatus("送信に失敗しました。");
      }
    } catch (error) {
      console.error(error);
      setStatus("エラーが発生しました。");
    }
  };

  return (
    <section>
      <h3 className="text-xl font-bold mb-3">お問い合わせ</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="お名前"
          value={form.name}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="メールアドレス"
          value={form.email}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
        <textarea
          name="message"
          placeholder="メッセージ"
          value={form.message}
          onChange={handleChange}
          className="border p-2 w-full h-32"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          送信
        </button>
        {status && <p className="text-sm text-gray-700">{status}</p>}
      </form>
    </section>
  );
}
