import React from 'react';
import CountUp from 'react-countup';
import ProgressBar from 'react-customizable-progressbar';
import { motion } from 'framer-motion';

const Skill = ({ s }) => {
  const { language, percentage, img } = s;
  return (
    <motion.div
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', duration: 6, bounce: 0.3 }} className="card text-neutral-content my-4">
      <div className="card-body items-center text-center">
        <img src={img} alt={language} className="h-10" />
        <h2 className="card-title">{language}</h2>
        <div className="card-actions justify-center">
          {/* <CountUp end={90} duration={5} />% */}
          <ProgressBar
            radius={100}
            progress={percentage}
            cut={120}
            rotate={-210}
            strokeWidth={10}
            strokeColor="#88594B"
            strokeLinecap="square"
            trackStrokeWidth={8}
            trackStrokeColor="#e6e6e6"
            trackStrokeLinecap="square"
            pointerRadius={0}
            initialAnimation={true}
            transition="5s ease 5s"
            trackTransition="0s ease"
            className="relative"
          >
            <span className="absolute top-16 right-24 left-24 text-2xl">
              <CountUp end={percentage} duration={10} />%
            </span>
          </ProgressBar>
        </div>
      </div>
    </motion.div>
  );
};

export default Skill;
