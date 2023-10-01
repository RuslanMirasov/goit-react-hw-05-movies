import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrendingMovies } from '../api/api';
import MovieCollection from '../components/MovieCollection/MovieCollection';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const getData = async () => {
      try {
        const movies = await getTrendingMovies();
        setTrendMovies(movies);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <MovieCollection
      title="Trending today"
      collection={trendMovies}
      state={{ from: location }}
    />
  );
};

export default Home;
