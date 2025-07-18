import WorkCard from "../../components/WorkCard";

const works = [
  {
    title: "お気に入りアイテム紹介サイト",
    description: "HTML/CSSで作成したワンカラムレイアウトサイト",
    image: "/images/item.png",
    url: "https://tnecslias.github.io/item-site/",
  },
  {
    title: "BMI診断",
    description: "JavaScriptを使ったBMI計算システム！",
    image: "/images/bmi.png",
    url: "https://tnecslias.github.io/BMI-simulate/",
  },
  {
    title: "カレンダー",
    description: "JavaScriptを使った予定追加機能付きカレンダー",
    image: "/images/calendar.png",
    url: "https://tnecslias.github.io/calender/",
  },
  {
    title: "勉強タイマー",
    description: "JavaScriptを使った20分↔︎5分のタイマー",
    image: "/images/study-timer.png",
    url: "https://tnecslias.github.io/study-timer/",
  },
  {
    title: "北海道紹介サイト",
    description: "UIにこだわった、地元の観光スポット紹介サイト。1年の集大成。",
    image: "/images/local.png",
    url: "https://tnecslias.github.io/local-site/",
  },
  {
    title: "ECサイト",
    description: "HTML/CSSで作成したECサイト",
    image: "/images/ec.png",
    url: "https://tnecslias.github.io/ec-site/",
  },
  {
    title: "アーティスト紹介サイト",
    description: "HTML/CSSで作成。1年次の学内コンペで意欲賞を受賞しました",
    image: "/images/artist.png",
    url: "https://tnecslias.github.io/artist-site/",
  },
  {
    title: "スポーツ選手紹介サイト",
    description: "HTML/CSSで作成したサイト",
    image: "/images/sports.png",
    url: "https://tnecslias.github.io/sports-site/",
  },
];
export default function Works() {
  return (
    <section>
      <h3 className="w-60 text-xl font-bold mb-3 bg-gray-100 border-l-4 border-blue-400 px-4 py-2 rounded shadow-sm">
        作品一覧 (新着順)
      </h3>
      <div className="grid gap-6 md:grid-cols-2">
        {works.map((work, index) => (
          <WorkCard key={index} {...work} />
        ))}
      </div>
    </section>
  );
}
