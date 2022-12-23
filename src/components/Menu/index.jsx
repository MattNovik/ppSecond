import './index.scss';
import * as React from 'react';
import Arrow from '../../assets/svg/arrow.svg';
import Close from '../../assets/svg/close.svg';
import Tg from '../../assets/svg/tg.svg';
import Ok from '../../assets/svg/ok.svg';
import Vk from '../../assets/svg/vk.svg';
import Phone from '../../assets/svg/phone.svg';
import Email from '../../assets/svg/email.svg';

const Menu = ({ data, menuRef, handleClose }) => {
  return (
    <nav className="menu" ref={menuRef}>
      <button
        className="menu__close"
        type="button"
        onClick={() => handleClose()}
        aria-label="close-menu"
      >
        <Close />
      </button>
      <ul className="menu__list">
        {data && data.length
          ? data.map((item, index) => (
              <li className="menu__item" key={index}>
                <a
                  href={item.to}
                  className="menu__link"
                  onClick={() => handleClose()}
                >
                  {item.name}
                </a>
              </li>
            ))
          : null}
      </ul>
      <div className="menu__enters">
        <a
          href="https://studservis-lk.ru/"
          className="menu__enter"
          type="button"
          target="_blank"
          rel="noreferrer"
        >
          Вход
        </a>
        <a href="#orders" className="menu__reg-button" type="button">
          Регистрация
          <Arrow />
        </a>
      </div>
      <div className="menu__wrapper-tel-email">
        <p className="menu__title">Контакты:</p>
        <a href="tel:+78124093163" className="menu__tel">
          <Phone /> +7 (812) 409-31-63
        </a>
        <a href="mailto:studservis@yandex.ru" className="menu__email">
          <Email /> studservis@yandex.ru
        </a>
      </div>
      <div className="menu__socials">
        <ul className="menu__social-list">
          <li className="menu__social-item tg">
            <a
              href="https://t.me/StudSHelp_Bot"
              aria-label="tg link"
              target="_blank"
              rel="noreferrer"
            >
              <Tg />
            </a>
          </li>
          <li className="menu__social-item ok">
            <a
              href="https://vk.com/referat"
              aria-label="ok link"
              target="_blank"
              rel="noreferrer"
            >
              <Ok />
            </a>
          </li>
          <li className="menu__social-item vk">
            <a
              href="https://vk.com/referat"
              aria-label="vk link"
              target="_blank"
              rel="noreferrer"
            >
              <Vk />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
