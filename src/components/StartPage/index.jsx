import './index.scss';
import * as React from 'react';
import CustomForm from '../CustomForm';

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
        <CustomForm classname={'first-form'} id={'orders'} />
      </div>
    </div>
  );
};

export default StartPage;
