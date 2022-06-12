import React from 'react';
import loading from '../../../Images/loading.gif';

const Spinner = () => {
  return (
    <div className="hero min-h-full">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <img src={loading} alt="loading" />
        </div>
      </div>
    </div>
  );
};

export default Spinner;
