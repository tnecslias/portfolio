type Props = {
  title: string;
  description: string;
  image: string;
  url: string;
};

export default function WorkCard({ title, description, image, url }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      className="block border rounded-lg overflow-hidden hover:shadow-lg transition"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </a>
  );
}
