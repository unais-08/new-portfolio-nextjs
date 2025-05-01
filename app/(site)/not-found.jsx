// app/not-found.js
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black text-center text-black dark:text-white px-4">
      <h1 className="text-4xl font-bold mb-2">404 - Page Not Found</h1>
      <p className="text-lg mb-6">
        Sorry, the page you are looking for does not exist.
      </p>
      <a
        href="/"
        className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition"
      >
        Go Home
      </a>
    </div>
  );
}
