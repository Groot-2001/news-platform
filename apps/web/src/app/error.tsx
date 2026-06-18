"use client";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({
  error,
  reset,
}: ErrorProps) {
  console.error(error);

  return (
    <main className="mx-auto max-w-3xl p-8 text-center">
      <h1 className="mb-4 text-4xl font-bold">
        Something went wrong
      </h1>

      <button
        onClick={() => reset()}
        className="rounded border px-4 py-2"
      >
        Try Again
      </button>
    </main>
  );
}