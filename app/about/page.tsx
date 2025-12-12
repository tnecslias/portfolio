export default function About() {
  return (
    <section className="mt-10">
      <div className="flex flex-col md:flex-row gap-10">
        {/* 左：プロフィール内容 */}
        <div className="flex-1">
          <ul className="pl-5">
            {/* 資格・免許 */}
            <li className="list-none">
              <h3 className="w-40 text-xl font-bold mb-3 bg-gray-100 border-l-4 border-blue-400 px-4 py-2 rounded shadow-sm">
                資格・免許
              </h3>
              <p>2016年 2月　日本珠算連盟 珠算能力検定試験１級 合格</p>
              <p>2018年10月　日本習字 漢字部 初等師範免許 取得</p>
            </li>

            {/* 賞罰 */}
            <li className="list-none mt-8">
              <h3 className="w-40 text-xl font-bold mb-3 bg-gray-100 border-l-4 border-blue-400 px-4 py-2 rounded shadow-sm">
                賞罰
              </h3>
              <p>2023年10月　HAL3校合同学内コンテスト 意欲賞受賞</p>
              <p>2025年3月　進級制作展(HAL EVENT WEEK) 銀賞受賞</p>
            </li>

            {/* スキル */}
            <li className="list-none mt-8">
              <h3 className="w-40 text-xl font-bold mb-3 bg-gray-100 border-l-4 border-blue-400 px-4 py-2 rounded shadow-sm">
                スキル
              </h3>

              <h2 className="text-2xl font-bold mt-4">MySQL</h2>
              <ul className="list-disc ml-6">
                <li>ER図作成</li>
                <li>テーブル設計</li>
                <li>一括ローディング</li>
              </ul>

              <h2 className="text-2xl font-bold mt-4">JavaScript</h2>
              <ul className="list-disc ml-6">
                <li>Alpine.js：家賃シミュレータ等</li>
                <li>Node.js：予定追加カレンダー</li>
                <li>useState：数字の抽選</li>
                <li>React&Next.js：メモアプリなど</li>
                <li>jQuery：スライドショー</li>
              </ul>

              <h2 className="text-2xl font-bold mt-4">PHP</h2>
              <ul className="list-disc ml-6">
                <li>オーダーシステム（会員情報、割引、獲得ポイント算出可）</li>
                <li>
                  SNS（投稿、削除、いいね、プロフィール、ワード検索、投稿画像一覧表示）
                </li>
              </ul>

              <h2 className="text-2xl font-bold mt-4">Python</h2>
              <ul className="list-disc ml-6">
                <li>
                  FlaskでWebサーバ構築（テンプレート継承・cookie/session 認証）
                </li>
              </ul>

              <h2 className="text-2xl font-bold mt-4">Docker</h2>
              <ul className="list-disc ml-6">
                <li>長期インターンでスキル管理システム開発時に使用</li>
              </ul>

              <h2 className="text-2xl font-bold mt-4">ソースコード管理</h2>
              <ul className="list-disc ml-6">
                <li>GitHubでソースコード公開</li>
                <li>GitHubフロー・PR を用いたチーム開発が可能</li>
              </ul>

              <h2 className="text-2xl font-bold mt-4">その他</h2>
              <ul className="list-disc ml-6">
                <li>
                  Raspberry Piで温度センサーやランプを使用したスマートホーム構築
                </li>
                <li>普段macOSを使って授業や開発を行っている</li>
              </ul>
            </li>

            {/* 自己PR */}
            <li className="list-none mt-8 w-full md:w-full px-0">
              <h3 className="w-40 text-xl font-bold mb-3 bg-gray-100 border-l-4 border-blue-400 px-4 py-2 rounded shadow-sm">
                自己PR
              </h3>

              <p className="leading-8 md:pr-12">
                私は大学時代、体育会の部活動に打ち込みながらプログラミングを学び、
                「継続する力」を身につけました。特に、試合に出られない時期にも腐らず、
                裏方として仲間を支えた経験から、努力を続けられる点と負けず嫌いな性格は
                自分の強みです。また体育会では、挨拶や礼儀、チーム運営など社会人としての
                基礎も多く学びました。
                専門学校に進学後は開発にも積極的に挑戦し、8割以上の科目で「優」または
                「秀」の評価を取得しました。学内コンテストでは1年次に意欲賞、
                2年次に銀賞を受賞し、現在も賞を目指し日々励んでいます。 Git や
                GitHub を使ったチーム開発や Render / GitHub Pages へのデプロイ、
                AdobeIllustrator を使ったデザイン制作など幅広く学んできました。
                また、円周率100桁を覚えているほど記憶力に自信があり、文章読解力にも強みがあります。
                これまでの経験で培った継続力・技術力・記憶力を活かし、成長し続けたいと考えています。
              </p>
            </li>
          </ul>
        </div>

        {/* 右：自己紹介動画 */}
        <div
          className="w-full md:w-[500px] flex-shrink-0
                        md:-ml-24
                        md:mt-24"
        >
          <iframe
            className="rounded-lg shadow w-full h-[240px] md:h-[300px]"
            src="https://www.youtube.com/embed/【動画IDを入れてください】"
            title="自己紹介動画"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
