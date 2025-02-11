import { useState, useEffect } from 'react';

const CompetitiveTiers = () => {
  const [tiers, setTiers] = useState([]);

  useEffect(() => {
    fetch('https://valorant-api.com/v1/competitivetiers')
      .then(response => response.json())
      .then(data => setTiers(data.data))
      .catch(error => console.error('Error fetching competitive tiers', error));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {tiers.map(tier => (
        <div key={tier.uuid} className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <img className="rounded-t-lg object-cover w-full h-48" src={tier.displayIcon} alt={tier.tierName} />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{tier.tierName}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompetitiveTiers;