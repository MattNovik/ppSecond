import '../css/index.css';
import * as React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import Wrapper from '../components/Wrapper';

const IndexPage = () => {
  const wrapperRef = React.useRef(null);
  const menuRef = React.useRef(null);
  let html;

  if (typeof document !== 'undefined') {
    html = document.querySelector('html');
  }

  const handleOpenMenu = () => {
    wrapperRef.current.classList.add('open');
    menuRef.current.classList.add('open');
    html.classList.add('hidden');
  };

  const handleCloseMenu = () => {
    wrapperRef.current.classList.remove('open');
    menuRef.current.classList.remove('open');
    html.classList.remove('hidden');
  };

  return (
    <>
      <Header
        menuRef={menuRef}
        handleClose={handleCloseMenu}
        handleOpen={handleOpenMenu}
      />
      <Main />
      <Footer />
      <Wrapper
        wrapperRef={wrapperRef}
        menuRef={menuRef}
        handleClose={handleCloseMenu}
      />
    </>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>Home Page</title>
  </>
);
