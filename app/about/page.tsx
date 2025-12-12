export default function About() {
  return (
    <section>
      {/* 上：資格・免許と賞罰 横並び */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 資格・免許 */}
        <div>
          <h3 className="text-xl font-bold mb-3 bg-gray-100 border-l-4 border-blue-400 px-4 py-2 rounded shadow-sm">
            資格・免許
          </h3>
          <p>2016年 2月　日本珠算連盟 珠算能力検定試験１級 合格</p>
          <p>2018年10月　日本習字 漢字部 初等師範免許 取得</p>
        </div>

        {/* 賞罰 */}
        <div>
          <h3 className="text-xl font-bold mb-3 bg-gray-100 border-l-4 border-blue-400 px-4 py-2 rounded shadow-sm">
            賞罰
          </h3>
          <p>2023年10月　HAL3校合同学内コンテスト 意欲賞受賞</p>
          <p>2025年3月　進級制作展(HAL EVENT WEEK) 銀賞受賞</p>
        </div>
      </div>

      {/* 下：スキル＋自己PR */}
      <ul className="mt-10">
        {/* スキル */}
        <li className="list-none mt-6">
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
              FlaskでWebサーバ構築（テンプレート継承・cookie/session 認証など）
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-4">Docker、Laravel</h2>
          <ul className="list-disc ml-6">
            <li>長期インターンでスキル管理システム開発時に使用</li>
          </ul>

          <h2 className="text-2xl font-bold mt-4">ソースコード管理</h2>
          <ul className="list-disc ml-6">
            <li>GitHubでソースコードを公開している</li>
            <li>GitHubを使ったブランチ運用やPRを用いたチーム開発が可能</li>
          </ul>

          <h2 className="text-2xl font-bold mt-4">その他</h2>
          <ul className="list-disc ml-6">
            <li>Raspberry Pi でスマートホーム構築</li>
            <li>普段 macOS を使って開発</li>
          </ul>
        </li>

        {/* 自己PR */}
        <li className="list-none mt-6">
          <h3 className="w-40 text-xl font-bold mb-3 bg-gray-100 border-l-4 border-blue-400 px-4 py-2 rounded shadow-sm">
            自己PR
          </h3>
          <p>
            私は大学時代、体育会の部活動に打ち込みながら、プログラミングを学び、「継続する力」を身につけました。
            体育会では特に、試合に出られない時期にも腐らず、裏方として部員を支えた経験から、「練習を苦にせず努力を続けられること」「負けず嫌いな性格」は自分の強みであることを自覚することができました。
            専門学校に進学後は、開発にも積極的に挑戦し、授業にも意欲的に取り組んでいます。その結果、8割以上の科目で「優」または「秀」の評価を得ることができ、学内コンペでは1年次に意欲賞、2年次に銀賞を受賞しました。
            また、GitHubを使ったチーム開発や、Render / GitHubPages
            を使ったデプロイも経験し、Web制作の流れを体系的に理解しました。
            デザイン面では Adobe Illustrator
            を活用し、素材作成なども行っています。
            そして、円周率100桁を覚えるほど記憶力に自信があり、高校時代には現代文でセンター試験96点を取るなど、文章読解力にも強みがあります。
            これまでの経験で培った継続力・技術力・記憶力を活かし、今後も楽しみながら成長していきたいと考えています。
          </p>
        </li>
      </ul>
    </section>
  );
}
