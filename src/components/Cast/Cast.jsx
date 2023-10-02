import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieActors } from '../../api/api';
import Section from '../Section/Section';
import css from './Cast.module.scss';
import emptyImage from '../../images/no_image.jpg';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState('');

  useEffect(() => {
    const getCast = async () => {
      try {
        const response = await getMovieActors(movieId);
        setCast(response);
      } catch (error) {
        console.error(error);
      }
    };

    getCast();
  }, [movieId]);

  return (
    <Section>
      {cast.length !== 0 && (
        <ul className={css.Casts}>
          {cast.map(actor => (
            <li key={actor.id} className={css.Cast}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                    : `${emptyImage}`
                }
                alt={actor.original_name}
              />
              <p>{actor.name}</p>
            </li>
          ))}
        </ul>
      )}
      {cast.length === 0 && <h3>We don't have any cast for this movie.</h3>}
    </Section>
  );
};

export default Cast;
