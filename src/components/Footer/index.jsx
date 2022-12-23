import './index.scss';
import * as React from 'react';
import Visa from '../../assets/svg/visa.svg';
import MasterCard from '../../assets/svg/ms.svg';
import Mir from '../../assets/svg/mir.svg';
import Tg from '../../assets/svg/tg.svg';
import Vk from '../../assets/svg/vk.svg';
import Phone from '../../assets/svg/phone.svg';
import Email from '../../assets/svg/email.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__wrapper-addres">
          <p className="footer__title">
            Работаем по будням с 10:00 до 20:00 по Мск
          </p>
          <a href="#adress" className="footer__addres">
            ООО&nbsp;"Студсервис", ИНН&nbsp;7820312056, ОГРН&nbsp;1077847598795
            от 21 сентября 2007 г
          </a>
          <a href="#pol" className="footer__politic">
            Политика конфиденциальности
          </a>
        </div>
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
        <div className="footer__wrapper-tel-email">
          <p className="footer__title">Контакты:</p>
          <div className="footer__tel-socials">
            <a href="tel:+78124093163" className="footer__tel">
              +7 (812) 409-31-63
            </a>
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
          <a href="mailto:studservis@yandex.ru" className="footer__email">
            studservis@yandex.ru
          </a>
          <span className="footer__copyright">
            © Студсервис 2023 Все права защищены
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
