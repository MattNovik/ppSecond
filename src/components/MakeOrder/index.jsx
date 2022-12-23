import './index.scss';
import * as React from 'react';
import CustomForm from '../CustomForm';
import { StaticImage } from 'gatsby-plugin-image';

const MakeOrder = () => {
  return (
    <section className="make-order">
      <div className="make-order__container">
        <StaticImage
          src="../../assets/images/illustrationFirst.png"
          alt="illFirst"
          placeholder="blurred"
          width={154}
          height={272}
          className="make-order__image make-order__image--left"
        />
        <div className="make-order__form-wrapper">
          <p className="make-order__help-text">РАЗМЕСТИТЬ ЗАКАЗ</p>
          <h2 className="make-order__title">
            Оставь заявку и мы выберем лучшего автора
          </h2>
          <CustomForm classname={'second-form'} />
        </div>

        <StaticImage
          src="../../assets/images/illustrationSecond.png"
          alt="illSecond"
          placeholder="blurred"
          width={166}
          height={286}
          className="make-order__image make-order__image--right"
        />
      </div>
    </section>
  );
};

export default MakeOrder;
