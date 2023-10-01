import { NavLink } from 'react-router-dom';
import css from './AdditionalNavigation.module.scss';

const AdditionalNavigation = () => {
  return (
    <ul className={css.AdditionalNavigation}>
      <li>
        <NavLink to="cast">cast</NavLink>
      </li>
      <li>
        <NavLink to="reviews">reviews</NavLink>
      </li>
    </ul>
  );
};

export default AdditionalNavigation;
