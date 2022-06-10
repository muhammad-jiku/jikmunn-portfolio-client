import React from 'react';
import me from '../../Images/me.jpg';

const About = () => {
  return (
    <div className="container mx-auto my-8">
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <img
            class="mask mask-diamond rounded-lg shadow-2xl md:h-96"
            src={me}
            alt=""
          />

          <div>
            <h1
              className="text-4xl md:text-5xl font-bold capitalize text-primary"
              style={{ fontFamily: 'Headland One' }}
            >
              Hello there!
            </h1>
            <p class="py-6">
              This is{' '}
              <span className="text-primary">Muhammad Azizul Hoque Jiku</span>.
              Welcome to my portfolio that I've designed to showcase my skills
              and expertise that I've accumulated over the year. I've also
              placed all my social links at the left side, feel free to connect
              with me. I'd love to be given the opportunity to hear from you.
            </p>

            <p class="py-6">
              I like to call myself "a passionate MERN Stack Web Developer". I
              always had a wish on my mind that I will do something for the
              computer science students that's why I made lots of videos on
              different subjects. My first priority is making the subject more
              interesting and clear so you can feel it and don't get bore.
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
