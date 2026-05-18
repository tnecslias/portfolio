import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4">
        <h1 className="shrink-0 whitespace-nowrap text-base font-bold text-slate-950 sm:text-lg">
          Honoka&apos;s Portfolio
        </h1>
        <nav className="flex min-w-0 gap-4 overflow-x-auto whitespace-nowrap text-sm font-semibold text-slate-600 sm:gap-5">
          <Link href="/" className="transition hover:text-cyan-700">
            Home
          </Link>
          <Link href="/about" className="transition hover:text-cyan-700">
            About
          </Link>
          <Link href="/works" className="transition hover:text-cyan-700">
            Works
          </Link>
          <Link href="/contact" className="transition hover:text-cyan-700">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
