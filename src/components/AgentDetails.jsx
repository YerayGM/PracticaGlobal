import { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SearchContext } from '../Context/SearchContext';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const AgentDetails = () => {
  const { uuid } = useParams();
  const { state } = useContext(SearchContext);
  const agent = state.agents.find((agent) => agent.uuid === uuid);

  if (state.loading) {
    return <div className="text-center text-lg font-semibold">Cargando agente...</div>;
  }

  if (state.error) {
    return <div className="text-center text-red-500 font-semibold">Error: {state.error}</div>;
  }

  if (!agent) {
    return <div className="text-center text-gray-500 font-semibold">No se encontraron datos del agente.</div>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto bg-gray-900 text-white rounded-lg shadow-lg">
      <Link to="/search" className="text-blue-400 hover:text-blue-300 transition duration-300">&larr; Volver a la búsqueda</Link>
      <h1 className="text-3xl font-extrabold mt-4 mb-2">{agent.displayName}</h1>
      <img className="w-full rounded-lg mb-6 shadow-md" src={agent.fullPortrait} alt={agent.displayName} />
      <h3 className="text-xl font-semibold mb-3">Habilidades:</h3>
      <ul className="space-y-2">
        {agent.abilities.map((ability) => (
          <li key={ability.slot} className="bg-gray-800 p-3 rounded-md shadow">
            <strong className="text-blue-300">{ability.displayName}:</strong> {ability.description}
          </li>
        ))}
      </ul>
      <DotLottieReact
      src="https://lottie.host/effe11d4-744a-40a6-8388-a7828ad7aaa3/qv597NRo8t.lottie"
      loop
      autoplay
    />
    </div>
  );
};

export default AgentDetails;