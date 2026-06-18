import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  createPageUrl: (
    page: number
  ) => string;
}

export function Pagination({
  currentPage,
  totalPages,
  createPageUrl
}: PaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav className="mt-8 flex items-center justify-center gap-2">
      {currentPage > 1 && (
        <Link
        href={createPageUrl(currentPage - 1)}
          className="rounded border px-4 py-2"
        >
          Previous
        </Link>
      )}

      <span>
        Page {currentPage} of {totalPages}
      </span>

      {currentPage < totalPages && (
        <Link
        href={createPageUrl(currentPage + 1)}
          className="rounded border px-4 py-2"
        >
          Next
        </Link>
      )}
    </nav>
  );
}
