import './index.scss';
import * as React from 'react';
import CustomForm from '../CustomForm';
import { StaticImage } from 'gatsby-plugin-image';

const StartPage = () => {
  return (
    <div className="start-page">
      <div className="start-page__container">
        <div className="start-page__text-wrapper">
          <p className="start-page__help-text">Помогаем учиться</p>
          <h1 className="start-page__title">{`${
            'Заказать ' + 'учебную работу'
          }`}</h1>
          <p className="start-page__info-text">
            Сервис помощи студентам по всем типам студенческих работ. Более 300
            000 экспертов помогут разобраться в сложной теме.
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
