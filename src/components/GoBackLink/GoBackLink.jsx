import { Link } from 'react-router-dom';
import css from '../GoBackLink/GoBackLink.module.scss';

const GoBackLink = ({ to }) => {
  return (
    <div className={css.GoBackLink}>
      <Link to={to}>&larr; Go Back</Link>
    </div>
  );
};

export default GoBackLink;
