import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  return (
    <>
      <h5>
        Отзывы о фильме <b>{movieId}</b>:
      </h5>
      <ul>
        <li>Отзыв 1</li>
        <li>Отзыв 2</li>
        <li>Отзыв 3</li>
        <li>Отзыв 4</li>
      </ul>
    </>
  );
};

export default Reviews;
