import { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SearchContext } from '../Context/SearchContext';

const AgentDetails = () => {
  const { uuid } = useParams();
  const { state } = useContext(SearchContext);
  const agent = state.agents.find((agent) => agent.uuid === uuid);

  if (state.loading) {
    return <p>Cargando agente...</p>;
  }

  if (state.error) {
    return <p>Error: {state.error}</p>;
  }

  if (!agent) {
    return <p>No se encontraron datos del agente.</p>;
  }

  return (
    <div className="p-4">
      <Link to="/search" className="text-blue-600 underline">Volver a la búsqueda</Link>
      <h1 className="text-2xl font-bold">{agent.displayName}</h1>
      <img className="w-full rounded-lg mb-4" src={agent.fullPortrait} alt={agent.displayName} />
      <p className="text-gray-700 mb-4">{agent.description}</p>
      <h3 className="text-xl font-semibold mb-2">Habilidades:</h3>
      <ul className="list-disc list-inside mb-4">
        {agent.abilities.map((ability) => (
          <li key={ability.slot}>
            <strong>{ability.displayName}:</strong> {ability.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AgentDetails;