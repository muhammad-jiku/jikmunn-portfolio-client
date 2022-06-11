import React from 'react';
import { useNavigate } from 'react-router-dom';
import NotFoundImg from '../../../Images/notfound.gif';

const Notfound = () => {
  const navigate = useNavigate();
  return (
    <div className="hero min-h-full">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <img src={NotFoundImg} alt="not found" />
          <h1 className="text-3xl font-bold mb-4">Page is not found!</h1>
          <button
            className="btn btn-xs sm:btn-sm md:btn-md btn-primary text-white uppercase font-bold cursor-pointer"
            onClick={() => navigate('/')}
          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notfound;
