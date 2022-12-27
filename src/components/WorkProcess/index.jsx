import './index.scss';
import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import IconStar from '../../assets/svg/star.svg';

const WorkProcess = ({ data }) => {
  return (
    <section className="work-process" id="process">
      <div className="work-process__container">
        <div className="work-process__info-wrapper">
          <h2 className="work-process__title">Почему мы?</h2>
          <ul className="work-process__list">
            {data && data.length
              ? data.map((item, index) => (
                  <li className="work-process__item" key={index}>
                    <IconStar />
                    <h3 className="work-process__item-title">{item.title}</h3>
                  </li>
                ))
              : null}
          </ul>
        </div>
        <div className="work-process__image-wrapper">
          <div className="work-process__inside-wrapper">
            <StaticImage
              className="work-process__image"
              src="../../assets/images/process.png"
              alt="process"
              width={320}
              height={486}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
