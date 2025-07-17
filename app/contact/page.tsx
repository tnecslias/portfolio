export default function Contact() {
  return (
    <section>
      <h3 className="w-40 text-xl font-bold mb-3 bg-gray-100 border-l-4 border-blue-400 px-4 py-2 rounded shadow-sm">
        お問い合わせ
      </h3>
      <form className="space-y-4">
        <input type="text" placeholder="お名前" className="border p-2 w-full" />
        <input
          type="email"
          placeholder="メールアドレス"
          className="border p-2 w-full"
        />
        <textarea placeholder="メッセージ" className="border p-2 w-full h-32" />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          送信
        </button>
      </form>
    </section>
  );
}
