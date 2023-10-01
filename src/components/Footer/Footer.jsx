import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import css from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={css.Footer}>
      <div className={css.FooterContainer}>
        <Logo />
        <p>&copy;{new Date().getFullYear()} All rights reserved.</p>
        <Navigation />
      </div>
    </footer>
  );
};

export default Footer;
