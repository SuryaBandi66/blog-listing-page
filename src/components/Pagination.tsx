// components/Pagination.tsx
import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
  const visiblePages = 5; // Number of visible page numbers (excluding ellipsis)
  const halfVisible = Math.floor(visiblePages / 2);

  let startPage = Math.max(currentPage - halfVisible, 1);
  let endPage = Math.min(startPage + visiblePages - 1, totalPages);

  if (endPage - startPage + 1 < visiblePages) {
    startPage = Math.max(endPage - visiblePages + 1, 1);
  }

  const pages = [];

  if (startPage > 1) {
    pages.push(
      <Link
        key={1}
        href={`/?page=1`}
        className={`mx-1 px-3 py-1 rounded bg-gray-200`}
      >
        1
      </Link>
    );
    if (startPage > 2) {
      pages.push(
        <span key="ellipsis-start" className="mx-1">
          ...
        </span>
      );
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(
      <Link
        key={i}
        href={`/?page=${i}`}
        className={`mx-1 px-3 py-1 rounded ${
          currentPage === i ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        {i}
      </Link>
    );
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      pages.push(
        <span key="ellipsis-end" className="mx-1">
          ...
        </span>
      );
    }
    pages.push(
      <Link
        key={totalPages}
        href={`/?page=${totalPages}`}
        className={`mx-1 px-3 py-1 rounded bg-gray-200`}
      >
        {totalPages}
      </Link>
    );
  }

  return (
    <div className="mt-4 flex justify-center items-center">
      {pages}
      {currentPage < totalPages && (
        <Link
          href={`/?page=${currentPage + 1}`}
          className="mx-1 px-3 py-1 rounded bg-gray-200"
        >
          Next »
        </Link>
      )}
    </div>
  );
};

export default Pagination;
