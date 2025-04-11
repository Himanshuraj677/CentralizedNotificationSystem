import React from "react";

const getPaginationRange = (current, total) => {
  const delta = 2;
  const range = [];
  range.push(1);
  const left = Math.max(2, current - delta);
  const right = Math.min(total - 1, current + delta);
  if (left > 2) range.push("...");
  for (let i = left; i <= right; i++) range.push(i);
  if (right < total - 1) range.push("...");
  if (right < total) range.push(total);
  return range;
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageRange = getPaginationRange(currentPage, totalPages);
  return (
    <div className="flex flex-row justify-center gap-2">
      <button
        className="px-3 py-1 rounded disabled:opacity-50 bg-primaryColor text-white"
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
      >
        prev
      </button>
      {pageRange.map((page, ind) => (
        <button 
          className={`px-3 py-1 rounded border text-sm ${
            page === currentPage ? "bg-primaryColor text-white" : "bg-white"
          }`}
          key={ind}
          disabled={page === '...'}
          onClick={() => typeof page === 'number' && onPageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        className="px-3 py-1 rounded disabled:opacity-50 bg-primaryColor text-white"
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
