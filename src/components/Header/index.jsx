import './index.scss';
import * as React from 'react';
import Logo from '../../assets/svg/logo.svg';
import Burger from '../../assets/svg/burger.svg';
import Menu from '../Menu';
import { MENU_LIST } from '../../data/data';

const Header = ({ menuRef, handleOpen, handleClose }) => {
  return (
    <header className="header">
      <div className="header__container">
        <Logo className="header__logo" />
        <Menu data={MENU_LIST} menuRef={menuRef} handleClose={handleClose} />

        <button
          className="header__burger"
          type="button"
          onClick={() => handleOpen()}
          aria-label="open-menu"
        >
          <Burger />
        </button>
      </div>
    </header>
  );
};

export default Header;
