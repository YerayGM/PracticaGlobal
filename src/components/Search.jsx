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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-down">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-6">
            Buscar Agentes
          </h1>
          
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Escribe el nombre de un agente..."
              value={filter}
              onChange={handleChange}
              className="w-full px-6 py-4 text-lg bg-gray-800 border-2 border-red-500/30 rounded-xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-900 text-white placeholder-gray-400 transition-all"
            />
            <svg 
              className="absolute right-4 top-4 h-6 w-6 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
              />
            </svg>
          </div>
        </div>

        {state.loading && (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-red-500 border-t-transparent"></div>
            <p className="mt-4 text-gray-300">Cargando agentes...</p>
          </div>
        )}

        {state.error && (
          <div className="bg-red-900/30 border border-red-500/50 rounded-xl p-6 mb-8 text-red-300">
            <div className="flex items-center gap-3">
              <svg 
                className="w-6 h-6 flex-shrink-0" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
                />
              </svg>
              <p>Error: {state.error}</p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAgents.map((agent) => (
            <Link 
              key={agent.uuid} 
              to={`/agent/${agent.uuid}`} 
              className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-xl hover:shadow-red-900/30 transition-all duration-300 hover:-translate-y-1 border border-gray-700/50"
            >
              <div className="relative overflow-hidden rounded-lg h-48 mb-4">
                <img 
                  src={agent.fullPortrait} 
                  alt={agent.displayName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent" />
              </div>
              
              <h2 className="text-2xl font-bold text-white mb-2">
                {agent.displayName}
              </h2>
              <p className="text-gray-300 line-clamp-2 text-sm leading-relaxed">
                {agent.description}
              </p>
              
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-500/30 rounded-2xl transition-all duration-300 pointer-events-none" />
            </Link>
          ))}
        </div>

        {!state.loading && filteredAgents.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            <p>No se encontraron agentes con ese nombre</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;