import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <h2>Page not found!</h2>
      <NavLink to="/">Home</NavLink>
    </>
  );
};

export default NotFound;
