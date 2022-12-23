import './index.scss';
import * as React from 'react';
import StartPage from '../StartPage';
import CustomSwiper from '../CustomSwiper';
import WorkProcess from '../WorkProcess';
import MakeOrder from '../MakeOrder';
import { WORK_PROCESS_LIST, REVIEWS_LIST } from '../../data/data';

const Main = () => {
  return (
    <main className="main">
      <StartPage />
      <CustomSwiper data={REVIEWS_LIST} />
      <WorkProcess data={WORK_PROCESS_LIST} />
      <MakeOrder />
    </main>
  );
};

export default Main;
