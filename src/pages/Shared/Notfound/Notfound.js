import React from 'react';
import { useNavigate } from 'react-router-dom';
import NotFoundImg from '../../../Images/notfound.gif';
import { motion } from 'framer-motion';

const Notfound = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, width: 0 }}
      animate={{ opacity: 1, width: '100%' }}
      exit={{ opacity: 0, x: window?.innerWidth }}
      className="hero min-h-full"
    >
      <div className="hero-content text-center">
        <div className="max-w-md">
          <img src={NotFoundImg} alt="not found" />
          <h1
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: 'Headland One' }}
          >
            Page is not found!
          </h1>
          <button
            className="btn btn-xs sm:btn-sm md:btn-md btn-primary text-white uppercase font-bold cursor-pointer"
            onClick={() => navigate('/')}
          >
            Go to Home
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Notfound;
