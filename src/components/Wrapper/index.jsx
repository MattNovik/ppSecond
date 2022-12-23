import './index.scss';
import * as React from 'react';

const Wrapper = ({ wrapperRef, handleClose }) => {
  return (
    <div
      className="wrapper"
      ref={wrapperRef}
      onClick={() => handleClose()}
    ></div>
  );
};

export default Wrapper;
