import './globals.css';
import Link from 'next/link';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-[#c2cdff]">
        {/* ナビゲーション（共通） */}
        <nav className="w-full flex justify-center gap-40 p-6">
          <Link
            href="/works"
            className="text-[#2b0934] font-bold hover:underline"
          >
            Works
          </Link>
          <Link
            href="/skills"
            className="text-[#2b0934] font-bold hover:underline"
          >
            Skill
          </Link>
          <Link
            href="/about"
            className="text-[#2b0934] font-bold hover:underline"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-[#2b0934] font-bold hover:underline"
          >
            Contact
          </Link>
        </nav>

        {/* ページごとの中身 */}
        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}
