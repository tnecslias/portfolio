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
    <div className="mx-auto max-w-5xl space-y-8">
      <section className="border-l-4 border-cyan-500 bg-white px-5 py-6">
        <p className="mb-2 text-sm font-semibold text-cyan-700">CONTACT</p>
        <h1 className="text-3xl font-bold text-slate-950">お問い合わせ</h1>
        <p className="mt-4 leading-8 text-slate-700">
          制作物やポートフォリオについてのご連絡は、こちらのフォームからお願いいたします。
        </p>
      </section>

      <section className="border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-semibold text-slate-950"
            >
              お名前
            </label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="お名前"
              required
              className="w-full border border-slate-200 px-4 py-3 text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-cyan-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-slate-950"
            >
              メールアドレス
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="メールアドレス"
              required
              className="w-full border border-slate-200 px-4 py-3 text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-cyan-500"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-semibold text-slate-950"
            >
              メッセージ
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="メッセージ"
              required
              className="h-36 w-full resize-none border border-slate-200 px-4 py-3 text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-cyan-500"
            />
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="submit"
              className="border border-cyan-600 bg-cyan-600 px-6 py-3 font-semibold text-white transition hover:bg-cyan-700"
            >
              送信
            </button>
            {status && <p className="text-sm text-slate-700">{status}</p>}
          </div>
        </form>
      </section>
    </div>
  );
}
