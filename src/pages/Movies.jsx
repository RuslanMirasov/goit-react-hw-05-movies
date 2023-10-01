import { useState } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';

const Movies = () => {
  const [movies] = useState([
    'movie1',
    'movie2',
    'movie3',
    'movie4',
    'movie5',
    'movie6',
  ]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const location = useLocation();

  const updateQueryString = event => {
    const query = event.target.value;
    if (query === '') {
      setSearchParams({});
      return;
    }
    setSearchParams({ query: query });
  };

  return (
    <>
      <input type="text" value={query} onChange={updateQueryString} />
      <h2>Movies</h2>
      <p>это страница фильмов</p>
      {movies.map(movie => {
        return (
          <Link key={movie} to={`${movie}`} state={{ from: location }}>
            <div>{movie}</div>
          </Link>
        );
      })}
    </>
  );
};

export default Movies;
