import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl text-center font-bold">
          Honoka Aikawa portfolio.
        </h1>
        <nav className="space-x-4">
          <Link href="/portfolio">Home</Link>
          <Link href="/portfolio/about">About</Link>
          <Link href="/portfolio/works">Works</Link>
          <Link href="/portfolio/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
