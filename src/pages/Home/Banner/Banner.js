import React from 'react';
import me from '../../../Images/Jikum.png';

const Banner = () => {
  return (
    <div class="hero">
      <div class="hero-content flex-col items-center lg:flex-row-reverse min-h-screen">
        <img src={me} alt="" style={{ width: '300px' }} />
        <div>
          <h1 class="text-5xl font-bold">Hello there!</h1>
          <h1 class="text-5xl">I'm Muhammad Azizul Hoque jiku</h1>
          <h1 class="text-3xl">MERN Stack Web Developer</h1>
          <button class="btn btn-primary">Download Resume</button>
          <button class="btn btn-primary">About Me</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
