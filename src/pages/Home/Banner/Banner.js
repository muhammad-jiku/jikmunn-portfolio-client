import React from 'react';
import me from '../../../Images/Jikum.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col items-center lg:flex-row-reverse min-h-screen">
        <img src={me} alt="" style={{ width: '300px' }} />
        <div>
          <h1
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: 'Newsreader' }}
          >
            I'm{' '}
            <span style={{ color: '#88594B' }}>Muhammad Azizul Hoque Jiku</span>
          </h1>
          <h1
            className="text-xl md:text-3xl"
            style={{ color: '#7C7C7C', fontFamily: 'Headland One' }}
          >
            MERN Stack Web Developer
          </h1>
          <p className=" py-4 text-justify">
            <span className="text-2xl">W</span>elcome to my personal website
            that I've designed to showcase my skills and expertise that I've
            accumulated over the year. I've also placed all my social links,
            feel free to connect with me.
          </p>
          <button className="btn glass">
            <a
              href="https://drive.google.com/file/d/1HscU66zuSmO4VHLfDiFxH-0ypFb0MR9J/view?usp=sharing"
              download
            >
              Download Resume{' '}
              <FontAwesomeIcon icon={faDownload} className="ml-2" size="lg" />
            </a>{' '}
          </button>
          <button class="btn active ml-2">Contact</button>
          {/* <button className="btn btn-primary ml-2"></button> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
