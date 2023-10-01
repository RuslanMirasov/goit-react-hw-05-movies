import Section from '../Section/Section';
import { Link } from 'react-router-dom';
import css from '../MovieCollection/MovieCollection.module.scss';

const MovieCollection = ({ title, collection, state }) => {
  return (
    <Section title={title}>
      {collection.map(movie => {
        const { id, title, poster_path } = movie;
        return (
          <div key={id} className={css.MovieCollectionItem}>
            <Link to={`/movies/${id}`} state={state}>
              <img
                src={
                  poster_path && `https://image.tmdb.org/t/p/w500${poster_path}`
                }
                alt={title}
              />
              <p>
                <span>{title}</span>
              </p>
            </Link>
          </div>
        );
      })}
    </Section>
  );
};

export default MovieCollection;
