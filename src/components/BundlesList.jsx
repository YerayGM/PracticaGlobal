import { useState, useEffect } from 'react';
import BundleCard from './BundleCard';

const BundlesList = () => {
  const [bundles, setBundles] = useState([]);

  useEffect(() => {
    fetch('https://valorant-api.com/v1/bundles')
      .then(response => response.json())
      .then(data => setBundles(data.data))
      .catch(error => console.error('Error fetching bundles', error));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {bundles.map(bundle => (
        <BundleCard key={bundle.uuid} bundle={bundle} />
      ))}
    </div>
  );
};

export default BundlesList;