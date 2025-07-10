'use client';

import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import { notFound } from 'next/navigation';

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        // 認証されてない場合は 404 を表示
        notFound();
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h1>管理画面</h1>
      <p>ログイン中のユーザーだけが見られます。</p>
    </div>
  );
}
