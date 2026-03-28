import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-stone-950 px-4 text-center">
      <h1 className="mb-4 text-9xl font-bold text-amber-500/20">404</h1>
      <h2 className="mb-8 text-2xl font-semibold text-stone-100">Page not found</h2>
      <p className="mb-12 max-w-md text-stone-400">
        The page you are looking for doesn&apos;t exist or has been moved to a new location.
      </p>
      <Link
        href="/"
        className="flex items-center gap-2 rounded-lg bg-stone-100 px-6 py-3 font-medium text-stone-900 transition-colors hover:bg-stone-200"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </Link>
    </div>
  );
}
