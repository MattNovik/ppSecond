import './index.scss';
import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const WorkProcess = ({ data }) => {
  return (
    <section className="work-process" id="process">
      <div className="work-process__container">
        <div className="work-process__image-wrapper">
          <StaticImage
            src="../../assets/images/process.png"
            alt="process"
            placeholder="blurred"
            width={481}
            height={543}
          />
        </div>
        <div className="work-process__info-wrapper">
          <p className="work-process__info-text">процесс</p>
          <h2 className="work-process__title">Как мы работаем?</h2>
          <ul className="work-process__list">
            {data && data.length
              ? data.map((item, index) => (
                  <li className="work-process__item" key={index}>
                    <p className="work-process__item-info-text">
                      {item.helpText}
                    </p>
                    <h3 className="work-process__item-title">{item.title}</h3>
                    <p className="work-process__item-text">{item.text}</p>
                  </li>
                ))
              : null}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
