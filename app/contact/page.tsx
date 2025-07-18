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

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setForm({ name: "", email: "", message: "" });
      setStatus("送信が完了しました！");
    } else {
      setStatus("送信に失敗しました。");
    }
  };

  return (
    <section>
      <h3 className="text-xl font-bold mb-3">お問い合わせ</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="お名前"
          required
          className="border p-2 w-full"
        />
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="メールアドレス"
          required
          className="border p-2 w-full"
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="メッセージ"
          required
          className="border p-2 w-full h-32"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          送信
        </button>
        {status && <p>{status}</p>}
      </form>
    </section>
  );
}
