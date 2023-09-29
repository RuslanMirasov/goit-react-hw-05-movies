import { useParams, Link, Outlet } from 'react-router-dom';

const MovieSingle = () => {
  const { movieId } = useParams();
  return (
    <>
      <h2>{movieId}</h2>
      <p>описание фильма с ID: {movieId}</p>
      <ul>
        <li>
          <Link to="cast">Актёры</Link>
        </li>
        <li>
          <Link to="reviews">Отзывы</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieSingle;
