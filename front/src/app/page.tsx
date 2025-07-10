export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      {/* 上1/3：タイトルとボタン */}
      <div className="h-1/3 flex flex-col items-center justify-end pb-6">
        <h1 className="text-6xl font-extrabold text-blue-800 drop-shadow-lg mb-6">
          Kyoko&apos;s Portfolio
        </h1>
        <div className="flex justify-center gap-6">
          <button className="bg-gray-200 text-lg px-6 py-3 rounded shadow hover:bg-gray-300 transition">
            Works
          </button>
          <button className="bg-gray-200 text-lg px-6 py-3 rounded shadow hover:bg-gray-300 transition">
            Skill
          </button>
          <button className="bg-gray-200 text-lg px-6 py-3 rounded shadow hover:bg-gray-300 transition">
            About
          </button>
          <button className="bg-gray-200 text-lg px-6 py-3 rounded shadow hover:bg-gray-300 transition">
            Contact
          </button>
        </div>
      </div>

      {/* 下2/3：背景画像 */}
      <div
        className="h-2/3 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/sky.JPG')" }}
      ></div>
    </div>
  );
}
