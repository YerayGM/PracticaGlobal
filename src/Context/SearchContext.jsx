import { createContext, useReducer, useEffect } from 'react';

const SearchContext = createContext();

const initialState = {
  query: localStorage.getItem('searchQuery') || '',
  results: [],
};

const searchReducer = (state, action) => {
  switch (action.type) {
    case 'SET_QUERY':
      return { ...state, query: action.payload };
    case 'SET_RESULTS':
      return { ...state, results: action.payload };
    default:
      return state;
  }
};

const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(searchReducer, initialState);

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