import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  return (
    <>
      <h5>
        В ролях (актёры из фильмы <b>{movieId}</b>)
      </h5>
      <ul>
        <li>Чувак 1</li>
        <li>Чувак 2</li>
        <li>Чувак 3</li>
        <li>Чувак 4</li>
      </ul>
    </>
  );
};

export default Cast;
