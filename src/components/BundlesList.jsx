import { useState } from 'react';
import BundleCard from './BundleCard';
import Pagination from './Pagination';
import useFetch from '../Hooks/useFetch';

const BundlesList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const bundlesPerPage = 10;

  const { data, loading, error } = useFetch('https://valorant-api.com/v1/bundles');
  const bundles = data?.data || [];

  // Get current bundles
  const indexOfLastBundle = currentPage * bundlesPerPage;
  const indexOfFirstBundle = indexOfLastBundle - bundlesPerPage;
  const currentBundles = bundles.slice(indexOfFirstBundle, indexOfLastBundle);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-4">
      <h1>Paquetes</h1>
      {error && <p>Error: {error}</p>}
      {loading && <p>Cargando paquetes...</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentBundles.map((bundle) => (
          <BundleCard key={bundle.uuid} bundle={bundle} />
        ))}
      </div>
      <Pagination
        itemsPerPage={bundlesPerPage}
        totalItems={bundles.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default BundlesList;