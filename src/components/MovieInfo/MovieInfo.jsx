import Section from '../Section/Section';
import css from '../MovieInfo/MovieInfo.module.scss';
import emptyImage from '../../images/no_image.jpg';

const MovieInfo = ({ info }) => {
  const {
    poster_path,
    backdrop_path,
    title,
    release_date,
    vote_average,
    overview,
    genres,
  } = info;

  return (
    <>
      <div className={css.MovieBackground}>
        <img
          src={
            backdrop_path
              ? `https://image.tmdb.org/t/p/original${backdrop_path}`
              : `${emptyImage}`
          }
          className={css.MovieBackgroundImage}
          alt={`${title} poster`}
        />
      </div>
      <Section>
        <article className={css.MovieInfo}>
          <div className={css.MovieTitle}>
            <h1>{`${title} (${release_date?.slice(0, 4)})`}</h1>
            {vote_average !== 0 && (
              <p>{`User score: ${Math.ceil(vote_average * 10)}%`}</p>
            )}
          </div>
          <div className={css.MoviePoster}>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : `${emptyImage}`
              }
              alt={`${title} poster`}
              width="500"
            />
          </div>
          <div className={css.MovieDescription}>
            {overview && (
              <>
                <h3>Overview</h3>
                <p>{overview}</p>
              </>
            )}
            <h3>Genres:</h3>
            <ul>
              {genres?.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </article>
      </Section>
    </>
  );
};

export default MovieInfo;
