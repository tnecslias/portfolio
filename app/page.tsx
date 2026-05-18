export default function Home() {
  return (
    <section className="relative flex min-h-[calc(100vh-8rem)] items-center justify-center overflow-hidden bg-slate-50 px-4 py-12">
      <div className="relative flex w-full max-w-5xl justify-center border border-slate-200 bg-white shadow-xl">
        <div className="relative hidden w-24 shrink-0 border-r-2 border-cyan-300 bg-slate-50 sm:block">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 space-y-7">
            {Array.from({ length: 7 }).map((_, index) => (
              <span
                key={index}
                className="block h-6 w-6 rounded-full border-2 border-cyan-300 bg-white shadow-inner"
              />
            ))}
          </div>
        </div>

        <div className="relative flex min-h-[620px] flex-1 items-center justify-center bg-[linear-gradient(to_bottom,transparent_31px,#dbeafe_32px)] bg-[size:100%_32px] px-5 py-12">
          <div className="absolute bottom-0 left-0 top-0 hidden w-px bg-cyan-200 sm:block" />

          <div className="relative w-full max-w-2xl border border-cyan-200 bg-cyan-50 px-5 py-8 text-center shadow-xl sm:px-8 sm:py-10">
            <div className="absolute left-1/2 top-0 h-9 w-36 -translate-x-1/2 -translate-y-1/2 rotate-[-3deg] border-y border-amber-200 bg-amber-100/70 shadow-sm backdrop-blur-[1px]" />
            {/* 🔹 プロフィール画像を名前の上に表示 */}
            <div className="relative mb-6 flex justify-center">
              <img
                src="/images/profile-icon.PNG"
                alt="プロフィールアイコン"
                className="h-36 w-36 rounded-full border-4 border-cyan-500 object-cover object-top shadow-md"
              />
            </div>

            {/* 🔹 名前と出身 */}
            <p className="relative mb-3 text-sm font-semibold tracking-wide text-cyan-700">
              PORTFOLIO
            </p>
            <h1 className="relative mb-2 text-4xl font-bold text-slate-950 md:text-5xl">
              相川 帆乃香
            </h1>
            <p className="relative mb-3 text-lg text-slate-700">
              2002年生まれ　北海道出身
            </p>
            <h2 className="relative mb-6 text-lg text-slate-700">
              HAL東京 IT学部 高度情報学科 4年
            </h2>

            {/* 🔹 趣味・特技 */}
            <p className="relative mx-auto mb-8 max-w-lg text-left leading-relaxed text-slate-700">
              <span className="font-semibold text-slate-950">趣味：</span>
              10年以上、チロルチョコのフィルムを集めています。
              <br />
              <span className="font-semibold text-slate-950">特技：</span>
              コツコツ取り組むこと！円周率を100桁暗記しています。
            </p>

            {/* 🔹 ボタン */}
            <div className="relative mb-6 flex flex-wrap justify-center gap-4">
              <a
                href="/about"
                className="border border-cyan-600 bg-cyan-600 px-6 py-3 font-semibold text-white transition hover:bg-cyan-700"
              >
                経歴を見る
              </a>
              <a
                href="/works"
                className="border border-cyan-600 px-6 py-3 font-semibold text-cyan-700 transition hover:bg-cyan-50"
              >
                作品を見る
              </a>
            </div>

            {/* 🔹 SNS */}
            <div className="relative flex justify-center gap-6 text-sm text-slate-500">
              <a
                href="https://github.com/tnecslias"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-700"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
