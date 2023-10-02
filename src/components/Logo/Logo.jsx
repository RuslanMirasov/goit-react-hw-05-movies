import { NavLink } from 'react-router-dom';
import css from './Logo.module.scss';
import logo from '../../images/logo.svg';

const Logo = () => {
  return (
    <NavLink to="/" className={css.Logo}>
      <img width="150" src={logo} alt="logo" />
    </NavLink>
  );
};

export default Logo;
