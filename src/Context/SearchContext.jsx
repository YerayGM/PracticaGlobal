import { createContext, useReducer, useEffect } from 'react';
import useFetch from '../Hooks/useFetch';

const SearchContext = createContext();

const initialState = {
  query: localStorage.getItem('searchQuery') || '',
  results: [],
  agents: [],
  loading: true,
  error: null,
};

const searchReducer = (state, action) => {
  switch (action.type) {
    case 'SET_QUERY':
      return { ...state, query: action.payload };
    case 'SET_RESULTS':
      return { ...state, results: action.payload };
    case 'SET_AGENTS':
      return { ...state, agents: action.payload, loading: false, error: null };
    case 'SET_ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(searchReducer, initialState);

  const { data, error } = useFetch('https://valorant-api.com/v1/agents?isPlayableCharacter=true');

  useEffect(() => {
    if (data) {
      const agents = data.data.map(agent => ({
        ...agent,
        isCompetitiveTier: agent.role && agent.role.displayName === 'Competitive Tier',
        isBundle: agent.role && agent.role.displayName === 'Bundle'
      }));
      dispatch({ type: 'SET_AGENTS', payload: agents });
    }
    if (error) {
      dispatch({ type: 'SET_ERROR', payload: error });
    }
  }, [data, error]);

  useEffect(() => {
    localStorage.setItem('searchQuery', state.query);
  }, [state.query]);

  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchProvider };