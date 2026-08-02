export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-red-600">
        🦇 Dracula
      </h1>

      <p className="mt-4 text-gray-300 text-center max-w-md">
        Premium WhatsApp AI Bot Platform
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="/login"
          className="bg-red-700 px-6 py-3 rounded-lg hover:bg-red-800"
        >
          Login
        </a>

        <a
          href="/signup"
          className="border border-red-700 px-6 py-3 rounded-lg hover:bg-red-700"
        >
          Sign Up
        </a>
      </div>
    </main>
  );
}
