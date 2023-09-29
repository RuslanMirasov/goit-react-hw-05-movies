import { Link } from 'react-router-dom';

const Movies = () => {
  return (
    <>
      <h2>Movies</h2>
      <p>это страница фильмов</p>
      {['movie1', 'movie2', 'movie3', 'movie4', 'movie5', 'movie6'].map(
        movie => {
          return (
            <Link key={movie} to={`${movie}`}>
              <div>{movie}</div>
            </Link>
          );
        }
      )}
    </>
  );
};

export default Movies;
