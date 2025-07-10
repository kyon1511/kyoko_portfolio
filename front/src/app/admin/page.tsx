'use client';

import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../lib/firebase';
import { notFound } from 'next/navigation';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
  const router = useRouter();
  const [checking, setChecking] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        // 認証されていない → 表示せず404へ
        setAuthorized(false);
      } else {
       
        setAuthorized(true);
      }
      setChecking(false); 
    });

    return () => unsubscribe();
  }, []);

  // 認証状態チェック中は何も表示しない
  if (checking) return <p>確認中...</p>;

  // 未認証なら 404 を表示
  if (!authorized) {
    notFound();
  }
  
  const handleLogout = async () => {
    await signOut(auth);
    router.push('/login');
  };
  
  return (
    <div>
      <h1>管理画面</h1>
      <p>ログイン中のユーザーだけが見られます。</p>
      <button onClick={handleLogout}>ログアウト</button> 
    </div>
  );
}
