export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">
          Hello World! 👋
        </h1>
        <p className="text-xl text-gray-600 max-w-md mx-auto">
          Welcome to your first Next.js application. This is a simple Hello World page built with Tailwind CSS.
        </p>
        <div className="mt-8 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
          <p className="text-gray-700">
            🎉 <strong>Success!</strong> Your Next.js app is running perfectly.
          </p>
        </div>
      </div>
    </div>
  );
}