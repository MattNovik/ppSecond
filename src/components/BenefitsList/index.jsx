import './index.scss';
import * as React from 'react';
import BenefitFirst from '../../assets/svg/benefitFirst.svg';
import BenefitSecond from '../../assets/svg/benefitSeconde.svg';
import BenefitThird from '../../assets/svg/benefitThird.svg';

const BenefitsList = () => {
  return (
    <div className="benefits-list">
      <ul className="benefits-list__list">
        <li className="benefits-list__item">
          <BenefitFirst className="benefits-list__img" />
          <p className="benefits-list__item-name">ГАРАНТИИ</p>
          <p className="benefits-list__item-text">
            С нашими экспертам мы сотрудничаем уж ного лет - они проверены
            временем.
          </p>
        </li>
        <li className="benefits-list__item">
          <BenefitSecond className="benefits-list__img" />
          <p className="benefits-list__item-name">НАДЕЖНОСТЬ</p>
          <p className="benefits-list__item-text">
            Официальный договор с гарантиями и кассовый чек. Сопровождаем вас до
            сдачи.
          </p>
        </li>
        <li className="benefits-list__item">
          <BenefitThird className="benefits-list__img" />
          <p className="benefits-list__item-name">БЕЗОПАСНОСТЬ</p>
          <p className="benefits-list__item-text">
            Все данные, которые Вы оставляете на нашем сайте, останутся в
            безопасности.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default BenefitsList;
