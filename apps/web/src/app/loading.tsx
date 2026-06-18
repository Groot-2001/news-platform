export default function Loading() {
    return (
      <main className="mx-auto max-w-7xl p-4">
        <div className="animate-pulse">
          <div className="mb-4 h-10 w-64 rounded bg-gray-200" />
  
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="rounded border p-4"
              >
                <div className="mb-4 h-48 rounded bg-gray-200" />
  
                <div className="mb-2 h-6 rounded bg-gray-200" />
  
                <div className="h-4 rounded bg-gray-200" />
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }