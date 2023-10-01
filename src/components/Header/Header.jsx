import css from './Header.module.scss';

const Header = ({ children }) => {
  return (
    <header className={css.Header}>
      <div className={css.HeaderContainer}>{children}</div>
    </header>
  );
};

export default Header;
