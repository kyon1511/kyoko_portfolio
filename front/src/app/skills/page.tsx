export default function SkillsPage() {
  return (
    <div className="p-10 text-[#2b0934]">
      <h1 className="text-3xl font-bold mb-4">Skills</h1>
      <h2 className="text-xl font-semibold mt-6 mb-2">Frontend</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Next.js (TypeScript, App Router)</li>
        <li>Tailwind CSS / shadcn/ui</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Backend</h2>
      <ul className="list-disc list-inside mb-4">
        <li>FastAPI (Python)</li>
        <li>Express.js (TypeScript)</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Database / Infra</h2>
      <ul className="list-disc list-inside mb-4">
        <li>PostgreSQL / MySQL (Prisma, SQLAlchemy)</li>
        <li>Docker / Docker Compose</li>
        <li>Firebase Authentication</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Others</h2>
      <ul className="list-disc list-inside">
        <li>GitHub Flow / GitHub Actions</li>
        <li>ESLint, Prettier</li>
      </ul>
    </div>
  );
}
