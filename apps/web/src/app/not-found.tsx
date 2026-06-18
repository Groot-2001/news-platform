import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl p-8 text-center">
      <h1 className="mb-4 text-4xl font-bold">
        404
      </h1>

      <p className="mb-6">
        The page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="rounded border px-4 py-2"
      >
        Go Home
      </Link>
    </main>
  );
}