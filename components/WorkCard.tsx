type Props = {
  title: string;
  description: string;
  image: string;
  url: string;
  featured?: boolean;
};

export default function WorkCard({
  title,
  description,
  image,
  url,
  featured,
}: Props) {
  return (
    <a
      href={url}
      className="group block overflow-hidden border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative">
        <img src={image} alt={title} className="h-48 w-full object-cover" />
        {featured && (
          <span className="absolute left-3 top-3 border border-cyan-200 bg-cyan-600 px-4 py-1.5 text-xs font-bold tracking-wide text-white shadow-md">
            PICK UP
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-slate-950">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-700">
          {description}
        </p>
        <p className="mt-4 inline-block border border-cyan-600 px-4 py-2 text-sm font-semibold text-cyan-700 transition group-hover:bg-cyan-50 group-hover:text-cyan-900">
          サイトを見る →
        </p>
      </div>
    </a>
  );
}
