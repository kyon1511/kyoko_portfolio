export default function ContactPage() {
  return (
    <div className="p-10 text-[#2b0934] max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contact</h1>
      <p className="mb-4">
        ご連絡は以下のメールまたは GitHub リンクからお願いします。
      </p>

      <ul className="list-disc pl-6 space-y-3">
        <li>
          📧 メール:{' '}
          <a
            href="mailto:yourname@example.com"
            className="text-blue-600 underline"
          >
            kyoko.job2506@gmail.com
          </a>
        </li>
        <li>
          💻 GitHub:{' '}
          <a
            href="https://github.com/kyon1511"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            github.com/kyon1511
          </a>
        </li>
      </ul>
    </div>
  );
}
