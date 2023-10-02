import { getMovieDetails } from '../api/api';
import { useRef, Suspense, useEffect, useState } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import Section from '../components/Section/Section';
import AdditionalNavigation from '../components/AdditionalNavigation/AdditionalNavigation';
import Loading from '../components/Loading/Loading';
import MovieInfo from '../components/MovieInfo/MovieInfo';
import GoBackLink from '../components/GoBackLink/GoBackLink';

const MovieSingle = () => {
  const [movie, setMovie] = useState('');
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    try {
      const getDetails = async () => {
        const movieDetails = await getMovieDetails(movieId);
        setMovie(movieDetails);
      };
      getDetails();
    } catch (error) {
      console.error(error);
    }
  }, [movieId]);

  return (
    <>
      <GoBackLink to={backLinkLocationRef.current} />
      <MovieInfo info={movie} />

      <Section title={`Additional information`}>
        <AdditionalNavigation />
      </Section>

      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieSingle;
