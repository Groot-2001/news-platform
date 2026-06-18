"use client";

import {useState} from "react";
import {useRouter} from "next/navigation";

interface SearchFormProps {
  initialQuery?: string;
}

export function SearchForm({
  initialQuery = "",
}: SearchFormProps) {
  const router = useRouter();

  const [query, setQuery] = useState(initialQuery);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!query.trim()) {
      return;
    }

    router.push(`/search?q=${encodeURIComponent(query)}`);
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search articles..."
        className="
          flex-1
          rounded-lg
          border
          px-3
          py-2
        "
      />

      <button
        type="submit"
        className="
          rounded-lg
          border
          px-4
          py-2
        "
      >
        Search
      </button>
    </form>
  );
}
