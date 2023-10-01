import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Loading from '../Loading/Loading';

export const Layout = () => {
  return (
    <>
      <Header>
        <Logo />
        <Navigation />
      </Header>
      <main>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};
