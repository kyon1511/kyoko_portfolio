import Link from 'next/link';

export default function Home() {
  return (
    <div
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/kyoko.png')" }}
    >
      {/* ナビゲーション */}
      <nav className="absolute top-0 left-0 w-full flex justify-center gap-40 p-6">
        <Link
          href="/works"
          className="text-[#2b0934] font-bold text-lg hover:underline"
        >
          Works
        </Link>
        <Link
          href="/skills"
          className="text-[#2b0934] font-bold text-lg hover:underline"
        >
          Skill
        </Link>
        <Link
          href="/about"
          className="text-[#2b0934] font-bold text-lg hover:underline"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="text-[#2b0934] font-bold text-lg hover:underline"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
}
