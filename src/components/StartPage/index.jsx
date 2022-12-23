import './index.scss';
import * as React from 'react';
import CustomForm from '../CustomForm';
import { StaticImage } from 'gatsby-plugin-image';

const StartPage = () => {
  return (
    <div className="start-page">
      <div className="start-page__container">
        <div className="start-page__text-wrapper">
          <h1 className="start-page__title">{`${'Закажи студенческую работу без посредников'}`}</h1>
          <p className="start-page__info-text">
            Студсервис — организация помощи студентам, официально работает с
            2004 года.
          </p>
        </div>
        <StaticImage
          className="start-page__main-image"
          src="../../assets/images/startImage.png"
          width={542}
          height={713}
          alt="stud-first"
        />
        <CustomForm classname={'first-form'} id={'orders'} />
      </div>
    </div>
  );
};

export default StartPage;
