const developmentSkills = [
  {
    title: "要件整理・画面設計",
    items: [
      "インターンで質問確認書を作成し、依頼内容を要件定義書に整理",
      "Figmaで画面遷移と、チームが納得できるデザインカンプを作成",
      "ユーザーが情報を探しやすい表示順やレイアウトを検討",
    ],
  },
  {
    title: "フロントエンド実装",
    items: [
      "React&Next.js：メモアプリ、GeminiAPIリクエストフォーム、オーダーシステムなどを制作",
      "Node.jsで時間指定ができる予定追加機能付きカレンダーを制作",
    ],
  },
  {
    title: "バックエンド・DB",
    items: [
      "Laravelで認証、検索、お気に入り、カート、注文処理を実装",
      "MySQLでER図作成、テーブル設計、一括ローディングを経験",
      "FlaskでCookie / Sessionを使ったログイン機能とメモ機能を制作",
    ],
  },
  {
    title: "チーム開発",
    items: [
      "GitHubでブランチ運用、プルリクエスト、レビュー修正、マージを経験",
      "日報と週次報告で進捗、課題、次の作業を共有",
      "Docker環境でチーム開発用の環境構築に触れる",
    ],
  },
];

const strengths = [
  {
    title: "納得するまで完成度を上げる力",
    text: "制作物を作って終わりにせず、気になる点を見直しながら、納得できる形になるまで修正を重ねます。",
  },
  {
    title: "利用者目線のUI改善",
    text: "実際に使ってもらい、操作に迷いそうな部分を見直し、ボタンの配置や色など細かな見せ方まで調整します。",
  },
  {
    title: "チームで形にする力",
    text: "インターンでは見やすさを意識したデザイン案を提案し、採用された案をもとに担当画面を実装しました。",
  },
];

const achievements = [
  "2023年10月 HAL3校合同学内コンテスト 意欲賞受賞",
  "2025年3月 進級制作展（HAL EVENT WEEK）銀賞受賞",
];

export default function About() {
  return (
    <div className="mx-auto max-w-5xl space-y-12">
      <section className="border-l-4 border-cyan-500 bg-slate-50 px-5 py-6">
        <p className="mb-2 text-sm font-semibold text-cyan-700">ABOUT</p>
        <h1 className="text-3xl font-bold text-slate-950">
          HAL東京 IT学部 高度情報学科でWebアプリ開発を学んでいます。
        </h1>
        <p className="mt-4 leading-8 text-slate-700">
          LaravelのECサイト制作、Miseba、インターンでの開発体験を中心に、画面設計、フロント実装、DB設計、GitHubを使ったレビュー対応を経験しました。
          継続して作るだけでなく、周りからの意見を取り入れながら、利用者が迷わず使えるUIへ改善することを大切にしています。
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-bold text-slate-950">私の強み</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {strengths.map((strength) => (
            <article
              key={strength.title}
              className="border border-slate-200 p-5"
            >
              <h3 className="text-lg font-bold text-slate-950">
                {strength.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                {strength.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-bold text-slate-950">主な開発経験</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <article className="border border-slate-200 p-5">
            <p className="text-sm font-semibold text-cyan-700">
              Laravel / MySQL
            </p>
            <h3 className="mt-2 text-xl font-bold text-slate-950">
              ECサイト「ぴったりくん」
            </h3>
            <p className="mt-3 leading-7 text-slate-700">
              Laravelで制作したECサイトです。ログイン、新規登録、商品検索、お気に入り、カート、注文処理、ユーザー情報編集など、ECサイトとして必要な基本機能を実装しました。購入までの流れで迷わないよう、周りに見てもらいながらボタンの配置や色を見直し、使いやすさを改善しました。
            </p>
            <a
              href="https://pittarikun.onrender.com/"
              className="mt-3 inline-block text-sm font-semibold text-cyan-700 hover:text-cyan-900"
            >
              サイトを見る
            </a>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
              <li>個人開発</li>
              <li>技術：Laravel、PHP、MySQL、HTML / CSS</li>
              <li>工夫：購入までの流れとボタンの見つけやすさを改善</li>
            </ul>
          </article>

          <article className="border border-slate-200 p-5">
            <p className="text-sm font-semibold text-cyan-700">
              Next.js / Hono / MySQL
            </p>
            <h3 className="mt-2 text-xl font-bold text-slate-950">Miseba</h3>
            <p className="mt-3 leading-7 text-slate-700">
              SNSの拡散力とECの販売機能を組み合わせ、クリエイターが作品や商品を広く届けられるプラットフォームをチーム開発で制作しました。フロントエンド担当として、作品を見つけた人が興味を持ったタイミングで購入まで進めるよう、発見から購買までの流れを意識して制作しています。
            </p>
            <a
              href="https://miseba.syntck.com/"
              className="mt-3 inline-block text-sm font-semibold text-cyan-700 hover:text-cyan-900"
            >
              サイトを見る
            </a>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
              <li>チーム開発 / フロントエンド担当</li>
              <li>
                技術：TypeScript、Bun、Hono、Prisma、MySQL、Next.js、React
              </li>
              <li>
                Figmaでフォロー、フォロワー、おすすめ、新規ポスト画面を作成
              </li>
              <li>
                工夫：星と評価値をまとめたコンポーネントを作成し、評価値を星の中央に揃えて表示
              </li>
            </ul>
          </article>

          <article className="border border-slate-200 p-5 md:col-span-2">
            <p className="text-sm font-semibold text-cyan-700">Internship</p>
            <h3 className="mt-2 text-xl font-bold text-slate-950">
              インターン経験
            </h3>
            <div className="mt-3 grid gap-5 md:grid-cols-2">
              <section>
                <p className="font-semibold text-slate-950">
                  株式会社アイエンター / 1ヶ月
                </p>
                <p className="mt-2 leading-7 text-slate-700">
                  6人チームのWebアプリユニットとして、社員スキル管理システムの開発に参加しました。大まかな依頼から質問確認書と要件定義書を作成し、画面遷移やデザインをチームで検討。見やすさを意識した配色や見た目のデザイン案を提案し、採用された案をもとに担当画面を実装しました。
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                  <li>担当：要件整理、Figma画面設計、フロント実装</li>
                  <li>
                    経験：GitHub運用、進捗共有、コードレビュー、レビュー修正
                  </li>
                  <li>
                    工夫：メンバーが納得できる、社員情報を確認しやすい画面提案
                  </li>
                </ul>
              </section>

              <section>
                <p className="font-semibold text-slate-950">
                  GMOインターネット / 1日
                </p>
                <p className="mt-2 leading-7 text-slate-700">
                  企業から与えられた課題として、ニュース情報を取得し、自分でデザインしたサイトに埋め込む制作に取り組みました。短時間の中で、情報量の多いニュースを読みやすく配置し、画面として分かりやすく見せることを意識しました。コンフリクトを解消する実習も経験しました。
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                  <li>内容：ニュース情報を取得してサイトに表示</li>
                  <li>担当：デザイン、情報配置、画面実装</li>
                  <li>工夫：読みやすい配置と情報の見せ方を検討</li>
                </ul>
              </section>
            </div>
          </article>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-bold text-slate-950">スキル</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {developmentSkills.map((skill) => (
            <section key={skill.title} className="border border-slate-200 p-5">
              <h3 className="text-lg font-bold text-slate-950">
                {skill.title}
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                {skill.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-bold text-slate-950">受賞歴</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {achievements.map((achievement) => (
            <article key={achievement} className="border border-slate-200 p-5">
              <p className="border-l-2 border-cyan-500 pl-3 text-sm leading-6 text-slate-700">
                {achievement}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div>
          <h2 className="mb-4 text-2xl font-bold text-slate-950">自己PR</h2>
          <p className="leading-8 text-slate-700">
            私の強みは、納得するまで修正を重ね、成果物の完成度を上げられることです。授業課題だけで終わらせず、制作物をGitHub
            PagesやRenderで公開し、画面の見やすさや機能の使いやすさを確認しながら改善してきました。
            制作中は周りに見てもらい、指摘や気づきをすぐ反映することで、利用者が迷わない画面に近づけることを意識しています。
            学内で行われた就活イベントでは、学科内で最も多くの企業からお声がけをいただき、自分の制作への取り組みを評価していただく経験ができました。
            今後はフロントエンドの基礎をさらに固め、チームの中で任された機能を着実に形にしながら、見やすく使いやすいUIを提案できるエンジニアを目指します。
          </p>
        </div>
      </section>
    </div>
  );
}
