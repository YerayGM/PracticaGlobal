import { useContext } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SearchContext } from '../Context/SearchContext';

const Search = () => {
  const { state, dispatch } = useContext(SearchContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('filter') || '';

  const handleChange = (e) => {
    setSearchParams({ filter: e.target.value });
    dispatch({ type: 'SET_QUERY', payload: e.target.value });
  };

  const filteredAgents = state.agents.filter((agent) =>
    agent.displayName.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1>Buscar Agentes</h1>
      <input
        type="text"
        placeholder="Buscar agentes"
        value={filter}
        onChange={handleChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
      />
      {state.error && <p>Error: {state.error}</p>}
      {state.loading && <p>Cargando agentes...</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredAgents.map((agent) => (
          <Link key={agent.uuid} to={`/agent/${agent.uuid}`} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-4">
            <h2 className="text-xl font-bold">{agent.displayName}</h2>
            <p>{agent.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Search;