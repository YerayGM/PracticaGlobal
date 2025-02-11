import { useContext, useEffect, useMemo, useCallback } from 'react';
import { SearchContext } from '../Context/SearchContext';
import { useSearchParams } from 'react-router-dom';

const Search = () => {
  const { state, dispatch } = useContext(SearchContext);
  const [searchParams, setSearchParams] = useSearchParams();

  const fetchResults = useCallback((query) => {
    fetch(`https://valorant-api.com/v1/agents?isPlayableCharacter=true&displayName=${query}`)
      .then(response => response.json())
      .then(data => dispatch({ type: 'SET_RESULTS', payload: data.data }))
      .catch(error => console.error('Error fetching search results', error));
  }, [dispatch]);

  useEffect(() => {
    const query = searchParams.get('query');
    if (query) {
      dispatch({ type: 'SET_QUERY', payload: query });
      fetchResults(query);
    }
  }, [searchParams, dispatch, fetchResults]);

  const results = useMemo(() => {
    return state.results.map(agent => (
      <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" key={agent.uuid}>
        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={agent.fullPortrait} alt={agent.displayName} />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{agent.displayName}</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{agent.description}</p>
        </div>
      </a>
    ));
  }, [state.results]);

  const handleInputChange = (e) => {
    const query = e.target.value;
    dispatch({ type: 'SET_QUERY', payload: query });
    setSearchParams({ query });
    fetchResults(query);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={state.query}
        onChange={handleInputChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
        placeholder="Buscar agentes..."
      />
      <div>
        {results}
      </div>
    </div>
  );
};

export default Search;