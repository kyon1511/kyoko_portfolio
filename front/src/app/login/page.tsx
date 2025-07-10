'use client';

import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/admin'); 
    } catch (error) {
      alert('ログインに失敗しました');
    }
  };

  return (
  <div style={{ padding: '2rem' }}>
    <h1>ログイン画面</h1>
    <input
      type="email"
      placeholder="メールアドレス"
      onChange={(e) => setEmail(e.target.value)}
      style={{ display: 'block', marginBottom: '1rem', padding: '0.5rem' }}
    />
    <input
      type="password"
      placeholder="パスワード"
      onChange={(e) => setPassword(e.target.value)}
      style={{ display: 'block', marginBottom: '1rem', padding: '0.5rem' }}
    />
    <button
      onClick={handleLogin}
      style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}
    >
      ログイン
    </button>
  </div>
)};
