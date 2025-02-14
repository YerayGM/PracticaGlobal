const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = Array.from({ length: Math.ceil(totalItems / itemsPerPage) }, (_, i) => i + 1);

  if (pageNumbers.length <= 1) return null;

  return (
    <nav className="mt-6 flex justify-center">
      <ul className="flex flex-wrap items-center justify-center gap-2 bg-gray-800 p-3 rounded-lg shadow-lg">
        <li>
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="py-2 px-3 rounded-md bg-gray-700 text-gray-300 hover:bg-blue-500 hover:text-white transition duration-300 disabled:opacity-50"
          >
            ◄
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className={`py-2 px-4 rounded-md transition duration-300 ${
                number === currentPage
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-700 text-gray-300 hover:bg-blue-500 hover:text-white'
              }`}
            >
              {number}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === pageNumbers.length}
            className="py-2 px-3 rounded-md bg-gray-700 text-gray-300 hover:bg-blue-500 hover:text-white transition duration-300 disabled:opacity-50"
          >
            ►
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;