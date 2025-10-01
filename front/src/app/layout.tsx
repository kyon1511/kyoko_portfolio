import './globals.css';
import { ReactNode } from 'react';
import Navigation from '@/components/Navigation'; // ← ここで追加

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-[#c2cdff]">
        {/* 共通ナビ */}
        <Navigation />

        {/* ページごとの中身 */}
        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}
