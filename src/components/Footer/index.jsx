import './index.scss';
import * as React from 'react';
import Visa from '../../assets/svg/visa.svg';
import MasterCard from '../../assets/svg/ms.svg';
import Mir from '../../assets/svg/mir.svg';
import Tg from '../../assets/svg/tg.svg';
import Ok from '../../assets/svg/ok.svg';
import Vk from '../../assets/svg/vk.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__socials">
          <p className="footer__title">Мы в соцсетях:</p>
          <ul className="footer__social-list">
            <li className="footer__social-item tg">
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
        <span className="footer__copyright">
          © 2004 — 2023 Студсервис Все права защищены
        </span>
        <div className="footer__payment-wrapper">
          <span className="footer__payment-text">Мы принимаем:</span>
          <ul className="footer__payment-list">
            <li className="footer__payment-item">
              <Visa />
            </li>
            <li className="footer__payment-item">
              <MasterCard />
            </li>
            <li className="footer__payment-item">
              <MasterCard />
            </li>
            <li className="footer__payment-item">
              <Mir />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
