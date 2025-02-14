import { useContext } from 'react';
import { SearchContext } from '../Context/SearchContext';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const CompetitiveTiers = () => {
  const { state } = useContext(SearchContext);
  const { agents, loading, error } = state;

  const tiers = agents.filter(agent => agent.isCompetitiveTier);

  if (loading) {
    return <p>Cargando clasificaciones...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!tiers.length) {
    return (
      <DotLottieReact
        src="https://lottie.host/8656b581-5008-4ebe-a2b3-071aca81c547/GhOfE9NTvM.lottie"
        loop
        autoplay
      />
    );
  }

  return (
    <div className="p-4">
      <h1>Clasificaciones Competitivas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tiers.map((tier) => (
          <div key={tier.uuid} className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg object-cover w-full h-48" src={tier.displayIcon} alt={tier.tierName} />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{tier.tierName}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompetitiveTiers;