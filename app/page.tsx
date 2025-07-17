export default function Home() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br"
      style={{ backgroundImage: "url('/images/bg.jpg')" }}
    >
      <div className="max-w-2xl text-center bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-xl border border-gray-200">
        {/* 🔹 プロフィール画像を名前の上に表示 */}
        <div className="flex justify-center mb-6">
          <img
            src="/images/profile.jpg"
            alt="プロフィール画像"
            className="w-36 h-36 object-cover rounded-full border-4 border-gray-400 shadow-lg"
          />
        </div>

        {/* 🔹 名前と出身 */}
        <h1 className="text-4xl md:text-4xl font-bold mb-2 text-black-600">
          相川 帆乃香
        </h1>
        <p className="text-black-600 text-lg mb-4">2002年生まれ　北海道出身</p>
        <h2 className="text-black-600 text-lg mb-4">
          HAL東京 IT学部 高度情報処理学科 3年
        </h2>

        {/* 🔹 趣味・特技 */}
        <p className="text-gray-700 mb-8 text-left leading-relaxed">
          <span className="font-semibold text-black-600">趣味：</span>
          10年以上、チロルチョコのフィルムを集めています。
          <br />
          <span className="font-semibold text-black-600">特技：</span>
          コツコツ取り組むこと！円周率を100桁暗記しています。
        </p>

        {/* 🔹 ボタン */}
        <div className="flex justify-center gap-4 flex-wrap mb-6">
          <a
            href="/about"
            className="px-5 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition"
          >
            経歴を見る
          </a>
          <a
            href="/works"
            className="px-5 py-2 border border-purple-500 text-purple-600 rounded-full hover:bg-purple-50 transition"
          >
            作品を見る
          </a>
        </div>

        {/* 🔹 SNS */}
        <div className="flex justify-center gap-6 text-gray-500 text-sm">
          <a
            href="https://github.com/tnecslias"
            target="_blank"
            className="hover:text-indigo-500"
          >
            GitHub
          </a>
          <a
            href="https://x.com"
            target="_blank"
            className="hover:text-indigo-500"
          >
            X
          </a>
        </div>
      </div>
    </section>
  );
}
