import { ChevronLeft, ChevronRight } from "react-feather";

const Pagination = ({ handlePageChange, totalPages, currentPage }) => {
  return (
    <div className="flex justify-center items-center gap-2">
      <button
        role="button"
        tabIndex={0}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="h-8 w-8 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 disabled:opacity-50"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      {[...Array(totalPages)].map((_, index) => (
        <button
          role="button"
          tabIndex={0}
          key={index}
          onClick={() => handlePageChange(index + 1)}
          className={`h-8 w-8 rounded-md text-sm cursor-pointer font-medium ${
            currentPage === index + 1
              ? "bg-blue-600 text-white"
              : "border border-gray-300 text-gray-700 hover:bg-gray-100"
          }`}
        >
          {index + 1}
        </button>
      ))}

      <button
        role="button"
        tabIndex={0}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="h-8 w-8 border border-gray-300 rounded-md text-gray-700 cursor-pointer hover:bg-gray-100 disabled:opacity-50"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
};

export default Pagination;
