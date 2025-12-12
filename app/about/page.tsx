export default function About() {
  return (
    <section>
      <ul className="list-disc pl-5">
        <h3 className="w-40 text-xl font-bold mb-3 bg-gray-100 border-l-4 border-blue-400 px-4 py-2 rounded shadow-sm">
          資格・免許
        </h3>
        <p>2016年 2月　日本珠算連盟 珠算能力検定試験１級 合格</p>
        <p>2018年10月　日本習字 漢字部 初等師範免許 取得</p>
        <br />
        <h3 className="w-40 text-xl font-bold mb-3 bg-gray-100 border-l-4 border-blue-400 px-4 py-2 rounded shadow-sm">
          賞罰
        </h3>
        <p>2023年10月　HAL3校合同学内コンテスト 意欲賞受賞</p>
        <p>2025年3月　進級制作展(HAL EVENT WEEK) 銀賞受賞</p>
        <br />
        <h3 className="w-40 text-xl font-bold mb-3 bg-gray-100 border-l-4 border-blue-400 px-4 py-2 rounded shadow-sm">
          プログラミングスキル
        </h3>
        <h2>MySQL</h2>
        <ul>
          <li>ER図作成</li>
          <li>テーブル設計</li>
          <li>一括ローディング</li>
        </ul>
        <h2>JavaScript</h2>
        <ul>
          <li>Alpine.js：家賃シュミレータ、BMIシュミレータを作成</li>
          <li>Node.js：時間指定可の予定追加機能カレンダーを作成</li>
          <li>useState：数字の抽選</li>
          <li>React&Next.js：メモアプリ、GeminiAPIリクエストフォーム、オーダーシステム</li>
          <li>jQuery：映画サイトのスライドショーを作成</li>
        </ul>
        <h2>PHP</h2>
        <ul>
          <li>オーダーシステム（会員情報、割引、獲得ポイント算出可）</li>
          <li>SNS（投稿、削除、いいね、プロフィール、ワード検索、投稿画像一覧表示）</li>
        </ul>
        <h2>Python</h2>
        <ul>
          <li>Flaskを使ってWebサーバを構築<br>（テンプレート継承、cookie、sessionを使ったログインシステム、簡易メモ帳機能）</li>
        </ul>
        <h2>Docker</h2>
        <ul>
          <li>長期インターンでスキル管理システムを開発時に使用</li>
        </ul>
        <h2>ソースコード管理</h2>
        <ul>
          <li>GitHubでソースコードを公開している</li>
          <li>GitHubを活用した開発フローを理解しており、ブランチ運用やプルリクエストを用いたチーム開発が可能</li>
        </ul>
        <br />
        <h3 className="w-40 text-xl font-bold mb-3 bg-gray-100 border-l-4 border-blue-400 px-4 py-2 rounded shadow-sm">
          自己PR
        </h3>
        <p>
          私は大学時代、体育会の部活動に打ち込みながら、プログラミングを学び、「継続する力」を身につけました。
          体育会では特に、試合に出られない時期にも腐らず、裏方として部員を支えた経験から、「練習を苦にせず努力を続けられること」「負けず嫌いな性格」は自分の強みであることを自覚することができました。また、体育会では挨拶や礼儀、チーム運営など社会人としての基礎も多く学びました。
          専門学校に進学後は、開発にも積極的に挑戦し、授業にも意欲的に取り組んでいます。その結果、8割以上の科目で「優」または「秀」の評価を得ることができ、学内コンペでは1年次に意欲賞、2年次に銀賞を受賞し、現在3年次でも賞を目指し日々励んでいます。
          学生時代に学んだ研究や制作内容として、GitやGitHubを使ったチーム開発も経験し、制作物をRenderとGitHubPagesにデプロイし、Webサイトを公開しました。
          また、AdobeIllustratorでデザイン素材の制作なども行い、デザインと開発の両面でスキルを磨きました。
          そして、円周率100桁を覚えているほど記憶力には自信があり、高校時代には現代文でセンター試験で96点を取るなど、文章を読み解く力にも強みがあります。これまでの経験で培った継続力・技術力・記憶力を活かし、今後も楽しみながら成長していきたいと考えています。
        </p>
      </ul>
    </section>
  );
}
