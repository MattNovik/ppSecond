import './index.scss';
import 'swiper/css';
import * as React from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Braces from '../../assets/svg/braces.svg';
import ArrowLong from '../../assets/svg/arrowLong.svg';
import { StaticImage } from 'gatsby-plugin-image';

const CustomSwiper = ({ data }) => {
  return (
    <section className="custom-swiper" id="reviews">
      <div className="custom-swiper__container">
        <p className="custom-swiper__help-text">Отзывы</p>
        <h2 className="custom-swiper__title">Что о нас говорят студенты?</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          autoHeight={true}
          grabCursor={true}
          loop={true}
          className="custom-swiper__wrapper"
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            type: 'bullets',
            clickable: true,
          }}
          onSlideChange={() => console.log('slide change')}
          /* onSwiper={(swiper) => console.log(swiper)} */
        >
          <button className="swiper-button-next" type="button">
            <ArrowLong />
          </button>
          <button className="swiper-button-prev" type="button">
            <ArrowLong />
          </button>
          {data && data.length
            ? data.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="custom-swiper__item-wrapper">
                    <p className="custom-swiper__item-text">
                      <Braces className="custom-swiper__item-braces" />
                      {item.text}
                    </p>
                    <div className="custom-swiper__avatar-wrapper">
                      {index === 0 ? (
                        <StaticImage
                          src={'../../assets/images/reviewFirst.jpg'}
                          className="custom-swiper__avatar-img"
                          alt="avatar"
                          width={72}
                          height={72}
                        />
                      ) : index === 1 ? (
                        <StaticImage
                          src={'../../assets/images/reviewSecond.jpg'}
                          className="custom-swiper__avatar-img"
                          alt="avatar"
                          width={72}
                          height={72}
                        />
                      ) : index === 2 ? (
                        <StaticImage
                          src={'../../assets/images/reviewThird.jpg'}
                          className="custom-swiper__avatar-img"
                          alt="avatar"
                          width={72}
                          height={72}
                        />
                      ) : index === 3 ? (
                        <StaticImage
                          src={'../../assets/images/reviewFourth.jpg'}
                          className="custom-swiper__avatar-img"
                          alt="avatar"
                          width={72}
                          height={72}
                        />
                      ) : index === 4 ? (
                        <StaticImage
                          src={'../../assets/images/reviewFirth.jpg'}
                          className="custom-swiper__avatar-img"
                          alt="avatar"
                          width={72}
                          height={72}
                        />
                      ) : (
                        <StaticImage
                          src={'../../assets/images/reviewFirst.jpg'}
                          className="custom-swiper__avatar-img"
                          alt="avatar"
                          width={72}
                          height={72}
                        />
                      )}

                      <div className="custom-swiper__avatar-text-wrapper">
                        <p className="custom-swiper__avatar-name">
                          {item.name}
                        </p>
                        <p className="custom-swiper__avatar-theme">
                          {item.theme}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            : null}
        </Swiper>
      </div>
    </section>
  );
};

export default CustomSwiper;
