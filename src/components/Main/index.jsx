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

      <link
        href="https://mattnovik.github.io/stud-test/docs/index.css"
        rel="stylesheet"
      />
      <script src="https://mattnovik.github.io/stud-test/docs/index.js"></script>
      <div
        id="root"
        data-subreddit="SUBREDDIT_HERE"
        style={{ width: '700px', height: '700px' }}
      ></div>
    </main>
  );
};

export default Main;
