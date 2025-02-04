import { useContext, useEffect, useMemo, useCallback } from 'react';
import { SearchContext } from '../Context/SearchContext';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

const Search = () => {
  const { state, dispatch } = useContext(SearchContext);
  const [searchParams, setSearchParams] = useSearchParams();

  const fetchResults = useCallback((query) => {
    axios.get(`https://valorant-api.com/v1/agents?isPlayableCharacter=true&displayName=${query}`)
      .then(response => dispatch({ type: 'SET_RESULTS', payload: response.data.data }))
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
      <div key={agent.uuid} className="bg-white shadow-md rounded-lg p-4 mb-4">
        <h2 className="text-xl font-semibold">{agent.displayName}</h2>
      </div>
    ));
  }, [state.results]);

  return (
    <div className="p-4">
      <input
        type="text"
        value={state.query}
        onChange={e => {
          const query = e.target.value;
          dispatch({ type: 'SET_QUERY', payload: query });
          setSearchParams({ query });
        }}
        className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
        placeholder="Search for agents..."
      />
      <div>
        {results}
      </div>
    </div>
  );
};

export default Search;