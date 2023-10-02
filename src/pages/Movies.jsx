import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { handleSearch } from '../api/api';
import MovieCollection from '../components/MovieCollection/MovieCollection';
import Loading from '../components/Loading/Loading';
import SearchForm from '../components/SearchForm/SearchForm';

const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const query = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    const search = async () => {
      try {
        setLoading(true);
        const movies = await handleSearch(query);
        setSearchResults(movies);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    search();
  }, [query]);

  const updateQueryString = event => {
    event.preventDefault();
    const query = event.target.search.value;
    if (query === '') {
      setSearchParams({});
      return;
    }
    setSearchParams({ query: query });
  };

  return (
    <>
      <SearchForm onsubmit={updateQueryString} />
      {loading === true && <Loading />}
      {query !== '' && loading === false && (
        <MovieCollection
          title={`Results for the query "${query}"`}
          collection={searchResults}
          state={{ from: location }}
        />
      )}
    </>
  );
};

export default Movies;
