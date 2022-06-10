import React from 'react';
import CountUp from 'react-countup';
import ProgressBar from 'react-customizable-progressbar';

const Skills = () => {
  //   const style = '--size:12rem, --thickness: 2px';
  return (
    <div className="container mx-auto px-6 my-8 lg:my-0">
      <h1
        className="text-2xl capitalize font-bold"
        style={{ fontFamily: 'Headland One' }}
      >
        <span className="text-primary">Skills</span>
        <div className="bg-gradient-to-r from-primary to-secondary h-1 w-16"></div>
      </h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {/* html5 */}
        <div className="card max-w-sm bg-secondary text-neutral-content my-4">
          <div className="card-body items-center text-center">
            <h2 className="card-title">HTML5</h2>
            <div className="card-actions justify-center">
              {/* <CountUp end={90} duration={5} />% */}
              <ProgressBar
                radius={100}
                progress={90}
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
                  <CountUp end={90} duration={10} />%
                </span>
              </ProgressBar>
            </div>
          </div>
        </div>
        {/* css3 */}
        <div className="card max-w-sm bg-secondary text-neutral-content my-4">
          <div className="card-body items-center text-center">
            <h2 className="card-title">CSS3</h2>
            <div className="card-actions justify-center">
              {/* <CountUp end={90} duration={5} />% */}
              <ProgressBar
                radius={100}
                progress={85}
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
                  <CountUp end={85} duration={10} />%
                </span>
              </ProgressBar>
            </div>
          </div>
        </div>
        {/* js */}
        <div className="card max-w-sm bg-secondary text-neutral-content my-4">
          <div className="card-body items-center text-center">
            <h2 className="card-title">JavaScript</h2>
            <div className="card-actions justify-center">
              {/* <CountUp end={90} duration={5} />% */}
              <ProgressBar
                radius={100}
                progress={83}
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
                  <CountUp end={83} duration={10} />%
                </span>
              </ProgressBar>
            </div>
          </div>
        </div>
        {/* bootstrap */}
        <div className="card max-w-sm bg-secondary text-neutral-content my-4">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Bootstrap</h2>
            <div className="card-actions justify-center">
              {/* <CountUp end={90} duration={5} />% */}
              <ProgressBar
                radius={100}
                progress={94}
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
                  <CountUp end={94} duration={10} />%
                </span>
              </ProgressBar>
            </div>
          </div>
        </div>
        {/* tailwind */}
        <div className="card max-w-sm bg-secondary text-neutral-content my-4">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Tailwind CSS</h2>
            <div className="card-actions justify-center">
              {/* <CountUp end={90} duration={5} />% */}
              <ProgressBar
                radius={100}
                progress={91}
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
                  <CountUp end={91} duration={10} />%
                </span>
              </ProgressBar>
            </div>
          </div>
        </div>
        {/* react */}
        <div className="card max-w-sm bg-secondary text-neutral-content my-4">
          <div className="card-body items-center text-center">
            <h2 className="card-title">ReactJS</h2>
            <div className="card-actions justify-center">
              {/* <CountUp end={90} duration={5} />% */}
              <ProgressBar
                radius={100}
                progress={87}
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
                  <CountUp end={87} duration={10} />%
                </span>
              </ProgressBar>
            </div>
          </div>
        </div>
        {/* react  bootstrap */}
        <div className="card max-w-sm bg-secondary text-neutral-content my-4">
          <div className="card-body items-center text-center">
            <h2 className="card-title">React Bootstrap</h2>
            <div className="card-actions justify-center">
              {/* <CountUp end={90} duration={5} />% */}
              <ProgressBar
                radius={100}
                progress={92}
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
                  <CountUp end={92} duration={10} />%
                </span>
              </ProgressBar>
            </div>
          </div>
        </div>
        {/* daisyui */}
        <div className="card max-w-sm bg-secondary text-neutral-content my-4">
          <div className="card-body items-center text-center">
            <h2 className="card-title">DaisyUI</h2>
            <div className="card-actions justify-center">
              {/* <CountUp end={90} duration={5} />% */}
              <ProgressBar
                radius={100}
                progress={94}
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
                  <CountUp end={94} duration={10} />%
                </span>
              </ProgressBar>
            </div>
          </div>
        </div>
        {/* nodejs */}
        <div className="card max-w-sm bg-secondary text-neutral-content my-4">
          <div className="card-body items-center text-center">
            <h2 className="card-title">NodeJS</h2>
            <div className="card-actions justify-center">
              {/* <CountUp end={90} duration={5} />% */}
              <ProgressBar
                radius={100}
                progress={82}
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
                  <CountUp end={82} duration={10} />%
                </span>
              </ProgressBar>
            </div>
          </div>
        </div>
        {/* expressjs */}
        <div className="card max-w-sm bg-secondary text-neutral-content my-4">
          <div className="card-body items-center text-center">
            <h2 className="card-title">ExpressJS</h2>
            <div className="card-actions justify-center">
              {/* <CountUp end={90} duration={5} />% */}
              <ProgressBar
                radius={100}
                progress={84}
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
                  <CountUp end={84} duration={10} />%
                </span>
              </ProgressBar>
            </div>
          </div>
        </div>
        {/* mongodb */}
        <div className="card max-w-sm bg-secondary text-neutral-content my-4">
          <div className="card-body items-center text-center">
            <h2 className="card-title">MongoDB</h2>
            <div className="card-actions justify-center">
              {/* <CountUp end={90} duration={5} />% */}
              <ProgressBar
                radius={100}
                progress={83}
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
                  <CountUp end={83} duration={10} />%
                </span>
              </ProgressBar>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
