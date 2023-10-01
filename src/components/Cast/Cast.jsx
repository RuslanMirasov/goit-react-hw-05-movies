import { useParams } from 'react-router-dom';
import { getMovieActors } from '../../api/api';
import { useEffect, useState } from 'react';
import CastCollection from '../CastCollection/CastCollection';
import Section from '../Section/Section';

const Cast = () => {
  const [cast, setCast] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    try {
      const getCast = async () => {
        const cast = await getMovieActors(movieId);
        setCast(cast);
      };
      getCast();
    } catch (error) {
      console.error(error);
    }
  }, [movieId]);

  return (
    <Section>
      <CastCollection actors={cast} />
    </Section>
  );
};

export default Cast;
