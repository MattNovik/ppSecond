import './index.scss';
import * as React from 'react';
import CustomForm from '../CustomForm';
import { StaticImage } from 'gatsby-plugin-image';

const MakeOrder = () => {
  return (
    <section className="make-order">
      <div className="make-order__container">
        <div className="make-order__form-wrapper">
          <StaticImage
            src="../../assets/images/order.png"
            alt="illFirst"
            placeholder="blurred"
            width={313}
            height={416}
            className="make-order__image"
          />
          <div className="make-order__text-wrapper">
            <h2 className="make-order__title">
              Дарим скидку <span>до 15%</span> на первый заказ при регистрации:
            </h2>
            <CustomForm classname={'second-form'} />
          </div>
        </div>
        {/* 
        <StaticImage
          src="../../assets/images/illustrationSecond.png"
          alt="illSecond"
          placeholder="blurred"
          width={166}
          height={286}
          className="make-order__image make-order__image--right"
        /> */}
      </div>
    </section>
  );
};

export default MakeOrder;
