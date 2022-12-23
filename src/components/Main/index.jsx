import './index.scss';
import * as React from 'react';
import StartPage from '../StartPage';
import BenefitsList from '../BenefitsList';
import CustomSwiper from '../CustomSwiper';
import WorkProcess from '../WorkProcess';
import MakeOrder from '../MakeOrder';
import Contacts from '../Contacs';
import { WORK_PROCESS_LIST, REVIEWS_LIST } from '../../data/data';

const Main = () => {
  return (
    <main className="main">
      <StartPage />
      <BenefitsList />
      <CustomSwiper data={REVIEWS_LIST} />
      <WorkProcess data={WORK_PROCESS_LIST} />
      <MakeOrder />
      <Contacts />
    </main>
  );
};

export default Main;
