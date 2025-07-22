import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-center px-4">
      <h1 className="text-6xl font-bold text-amber-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-navy-900 dark:text-white mb-2">Page Not Found</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link href="/">
        <span className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-lg transition">Go to Home</span>
      </Link>
    </div>
  );
} 