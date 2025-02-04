import { useState, useEffect } from 'react';
import axios from 'axios';

const CompetitiveTiers = () => {
  const [tiers, setTiers] = useState([]);

  useEffect(() => {
    axios.get('https://valorant-api.com/v1/competitivetiers')
      .then(response => setTiers(response.data.data))
      .catch(error => console.error('Error fetching competitive tiers', error));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {tiers.map(tier => (
        <div key={tier.uuid} className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">{tier.tierName}</h2>
          <img className="w-full rounded-lg" src={tier.displayIcon} alt={tier.tierName} />
        </div>
      ))}
    </div>
  );
};

export default CompetitiveTiers;