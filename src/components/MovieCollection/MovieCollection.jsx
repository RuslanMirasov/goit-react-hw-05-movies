import Section from '../Section/Section';
import { Link } from 'react-router-dom';
import css from '../MovieCollection/MovieCollection.module.scss';
import emptyImage from '../../images/no_image.jpg';

const MovieCollection = ({ title, collection, state }) => {
  if (collection.length === 0) {
    title = 'Nothing was found for your request.';
  }
  return (
    <Section title={title}>
      {collection.map(movie => {
        const { id, title, poster_path } = movie;
        return (
          <div key={id} className={css.MovieCollectionItem}>
            <Link to={`/movies/${id}`} state={state}>
              <div className={css.ImageWrapper}>
                <img
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500${poster_path}`
                      : `${emptyImage}`
                  }
                  alt={title}
                />
              </div>
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
