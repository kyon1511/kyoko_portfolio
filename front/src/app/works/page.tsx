export default function WorksPage() {
  const works = [
    {
      title: 'BUD',
      description:
        '親子向け英語学習支援アプリ。子どもの挑戦を記録・サポートする仕組みを提供。',
      tech: [
        'フロントエンド: Next.js（App Router）／TypeScript／Tailwind CSS／shadcn/ui（V0）',
        '音声入力・文字起こし: MediaRecorder API＋Web Speech API',
        'AIフィードバック: OpenAI API（テキスト改善・代替表現・励まし）',
        'バックエンド／クラウド（予定）: Google Cloud（Cloud Run／Cloud Functions）、Firestore または Cloud SQL、Firebase Authentication（Googleログイン）',
        'API仕様: OpenAPI 3.0（Swagger UI）',
        '開発基盤: Docker、GitHub Actions（lint／test／build）、ブランチ戦略（main／develop／feature）、Conventional Commits、husky＋lint-staged',
        'デプロイ: フロント＝Vercel（稼働中）、バックエンド＝GCP予定',
      ],
      github: 'https://github.com/ms-engineer-bc25-06/Section9_TeamC',
    },
    {
      title: 'おつかれビーツ',
      description:
        'ユーザーの気分や出来事に合わせて、韻を踏んだラップで励ます LINE Bot アプリ。',
      tech: [
        'フロントエンド: Next.js（TypeScript）',
        'バックエンド: Next.js API Routes',
        'データベース: MySQL ＋ Prisma ORM',
        '外部API: OpenAI API、 Google TTS API、LINE Messaging API',
        'デプロイ: フロント＝Vercel、DB＝Railway／PlanetScale',
        'インフラ: Docker＋Docker Compose',
      ],
      github: 'https://github.com/kyon1511/LINEBot_Public',
    },
    {
      title: 'デイリーレポート管理アプリ',
      description:
        'デイリーレポートを作成・編集・一覧管理できる業務効率化アプリ。',
      tech: [
        'フロントエンド: Next.js（TypeScript, App Router, Chakra UI）',
        'バックエンド: FastAPI（Python）',
        'データベース: PostgreSQL（Dockerコンテナ, SQLAlchemy ORM）',
        '認証: Firebase Authentication（Googleログイン）',
        '開発基盤: Docker, GitHub Actions',
      ],
      github: '準備中',
    },
    {
      title: 'Kyoko Portfolio',
      description:
        '自身のスキル・実績・プロフィールを掲載するポートフォリオサイト。',
      tech: [
        'フロントエンド: Next.js（App Router, TypeScript, Tailwind CSS）',
        'UI: shadcn/ui、カスタムCSS',
        'デプロイ: Vercel',
      ],
      github: '準備中',
    },
  ];

  return (
    <div className="p-10 grid grid-cols-1 md:grid-cols-2 gap-6">
      {works.map((work, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
        >
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2 text-[#2b0934]">
              {work.title}
            </h2>
            <p className="mb-2 text-gray-700">{work.description}</p>
            <ul className="text-sm text-gray-500 list-disc pl-5 mb-2">
              {work.tech.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
            <p className="text-blue-600 text-sm">
              {work.github !== '準備中' ? (
                <a href={work.github} target="_blank" rel="noopener noreferrer">
                  GitHub リポジトリ
                </a>
              ) : (
                '準備中'
              )}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
