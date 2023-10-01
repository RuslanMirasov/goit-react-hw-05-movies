import { NavLink } from 'react-router-dom';
import css from './Navigation.module.scss';

const Navigation = () => {
  return (
    <nav>
      <ul className={css.Navigation}>
        <li>
          <NavLink to="/" className={css.NavLink}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" className={css.NavLink}>
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
