// app/loading.js
export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-primary-500"></div>
    </div>
  );
}
