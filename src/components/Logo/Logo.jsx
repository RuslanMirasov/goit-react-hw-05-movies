import { NavLink } from 'react-router-dom';
import css from './Logo.module.scss';

const Logo = () => {
  return (
    <NavLink to="/" className={css.Logo}>
      <img
        width="150"
        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
        alt="logo"
      />
    </NavLink>
  );
};

export default Logo;
