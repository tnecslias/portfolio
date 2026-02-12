export default function About() {
  return (
    <section className="pl-5 space-y-10">
      {/* 経歴 */}
      <section>
        <h3 className="w-48 text-xl font-bold mb-3 bg-gray-100 border-l-4 border-blue-400 px-4 py-2 rounded shadow-sm">
          経歴
        </h3>
        <p>
          2017年4月 私立 函館白百合学園高等学校 普通科特別進学コース 入学
          <br />
          2020年3月 私立 函館白百合学園高等学校 普通科特別進学コース 卒業
          <br />
          2023年4月 HAL東京 IT学部 高度情報学科 入学
          <br />
          2027年3月 HAL東京 IT学部 高度情報学科 卒業予定
        </p>
      </section>

      {/* 賞罰 */}
      <section>
        <h3 className="w-48 text-xl font-bold mb-3 bg-gray-100 border-l-4 border-blue-400 px-4 py-2 rounded shadow-sm">
          実績
        </h3>
        <p>2023年10月　HAL3校合同学内コンテスト 意欲賞受賞</p>
        <p>2025年3月　進級制作展（HAL EVENT WEEK）銀賞受賞</p>
      </section>

      {/* スキル */}
      <section>
        <h3 className="w-48 text-xl font-bold mb-3 bg-gray-100 border-l-4 border-blue-400 px-4 py-2 rounded shadow-sm">
          スキル
        </h3>

        <h4 className="text-xl font-bold mt-4">MySQL</h4>
        <ul className="list-disc ml-6">
          <li>ER図作成</li>
          <li>テーブル設計</li>
          <li>一括ローディング</li>
        </ul>

        <h4 className="text-xl font-bold mt-4">JavaScript</h4>
        <ul className="list-disc ml-6">
          <li>Alpine.js：家賃シミュレータ、BMIシミュレータ</li>
          <li>Node.js：予定追加カレンダー</li>
          <li>useState：数字の抽選</li>
          <li>React / Next.js：メモアプリ、GeminiAPIリクエストフォーム</li>
          <li>jQuery：スライドショー作成</li>
        </ul>

        <h4 className="text-xl font-bold mt-4">PHP</h4>
        <ul className="list-disc ml-6">
          <li>オーダーシステム（会員情報、割引、ポイント算出）</li>
          <li>
            SNS (投稿、削除、いいね、プロフィール、ワード検索、投稿画像一覧表示)
          </li>
          <li>
            Laravel
            (ログイン・ログアウト、新規登録、検索機能、お気に入り登録、カート機能、注文処理機能、ユーザー情報編集)
          </li>
        </ul>

        <h4 className="text-xl font-bold mt-4">Python</h4>
        <ul className="list-disc ml-6">
          <li>
            FlaskでWebサーバ構築（テンプレート継承、cookie、sessionを使ったログインシステム、簡易メモ帳機能）
          </li>
        </ul>

        <h4 className="text-xl font-bold mt-4">Docker</h4>
        <ul className="list-disc ml-6">
          <li>長期インターンでスキル管理システム開発時に使用</li>
        </ul>

        <h4 className="text-xl font-bold mt-4">ソースコード管理</h4>
        <ul className="list-disc ml-6">
          <li>GitHubでソースコードを公開 https://github.com/tnecslias</li>
          <li>
            GitHubを活用した開発フローを理解しており、ブランチ運用やプルリクエストを用いたチーム開発が可能
          </li>
        </ul>

        <h4 className="text-xl font-bold mt-4">その他</h4>
        <ul className="list-disc ml-6">
          <li>
            Raspberry Piで温度センサーやランプを使用し、スマートホーム構築
          </li>
          <li>macOS環境で開発・授業を受講</li>
        </ul>
      </section>

      <section>
        <h3 className="w-48 text-xl font-bold mb-3 bg-gray-100 border-l-4 border-blue-400 px-4 py-2 rounded shadow-sm">
          インターン経験
        </h3>
        <li>GMOインターネット株式会社 (1Day)</li>
        <p>
          チームでひとつのサイトを作成し、あえて同じファイルを編集することでコンフリクトを発生させて解消する実習を行いました。
        </p>
        <br />
        <li>株式会社アイエンター (1month)</li>
        <p>
          6人チームで1ヶ月間、Webアプリユニットにて社員のスキル管理システムを開発しました。
          大まかなシステム依頼から質問確認書を作成し要件定義書を作成、具体的な内容を決定しました。
          デザインやページ遷移などもチームで検討し、Figmaを使用してデザインカンプを作成しました。
          私は主にフロントエンドを担当し、スキルの表示や情報変更機能を中心に、シンプルで見やすいデザインを意識して制作しました。
          また、日報作成や週次報告、コードレビュー、マージなどを通して、GitとGitHubを活用した実践的な開発フローを経験しました。
        </p>
      </section>

      {/* 自己PR */}
      <section>
        <h3 className="w-48 text-xl font-bold mb-3 bg-gray-100 border-l-4 border-blue-400 px-4 py-2 rounded shadow-sm">
          自己PR
        </h3>
        <p>
          私は大学時代、体育会の部活動に打ち込みながら、プログラミングを学び、「継続する力」を身につけました。
          体育会では、「練習を苦にせず努力を続けられること」「負けず嫌いな性格」は自分の強みであると自覚することができました。
          また、挨拶や礼儀、チーム運営など社会人としての基礎も多く学びました。
          専門学校に進学後は、開発にも積極的に挑戦し、授業にも意欲的に取り組んでいます。その結果、8割以上の科目で「優」または「秀」の評価を得ることができ、学内コンペでは1年次に意欲賞、2年次に銀賞を受賞し、現在3年次でも賞を目指し制作に励んでいます。
          学生時代に学んだ研究や制作内容として、GitやGitHubを使ったチーム開発も経験し、制作物をRenderとGitHubPagesにデプロイし、Webサイトを公開しました。
          また、AdobeIllustratorでデザイン素材の制作なども行い、デザインと開発の両面でスキルを磨きました。
          そして、円周率100桁を覚えているほど記憶力には自信があります。また、高校時代には現代文でセンター試験で96点を取った経験から、文章を読み解き、論理的に考える力にも強みがあります。
          これまでの経験で培った継続力・技術力・記憶力を活かし、今後も楽しみながら成長していきたいと考えています。
        </p>
      </section>
    </section>
  );
}
