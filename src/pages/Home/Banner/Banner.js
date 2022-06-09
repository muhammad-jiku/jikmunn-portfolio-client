import React from 'react';
import me from '../../../Images/Jikum.png';

const Banner = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col items-center lg:flex-row-reverse min-h-screen">
        <img src={me} alt="" style={{ width: '300px' }} />
        <div>
          <h1 className="text-5xl font-bold">Hello there!</h1>
          <h1 className="text-5xl">I'm Muhammad Azizul Hoque jiku</h1>
          <h1 className="text-3xl">MERN Stack Web Developer</h1>
          <button className="btn btn-primary">Download Resume</button>
          <button className="btn btn-primary">About Me</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
