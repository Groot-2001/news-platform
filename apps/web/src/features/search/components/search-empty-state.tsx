interface SearchEmptyStateProps {
  query: string;
}

export function SearchEmptyState({
  query,
}: SearchEmptyStateProps) {
  return (
    <div className="rounded-lg border p-8 text-center">
      <h2 className="mb-2 text-xl font-semibold">
        No results found
      </h2>

      <p className="text-muted-foreground">
        No articles matched "{query}".
      </p>
    </div>
  );
}
