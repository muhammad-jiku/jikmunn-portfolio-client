import { faCode, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-6 my-8 lg:my-0">
      <h1
        className="text-2xl capitalize font-bold"
        style={{ fontFamily: 'Headland One' }}
      >
        <span className="text-primary">what</span> <span>i do</span>
        <div className="bg-gradient-to-r from-primary to-secondary h-1 w-32"></div>
      </h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="my-4">
          <h1 className="text-primary text-xl">
            <FontAwesomeIcon icon={faCode} className="mr-2" size="lg" />{' '}
            <span style={{ fontFamily: 'Newsreader' }}>Website Design</span>
          </h1>
          <h1 className="text-justify text-lg my-2 px-6 py-4">
            Basically, to make the website nicer to users I work with ReactJS,
            CSS3, Tailwind CSS and DaisyUI. I've designed some projects with
            Bootstrap, React-bootstrap. And for icons, I love to use
            font-awesome and hero-icons. And I also use some node packages to
            make the website look nicer. I can also build website with HTML5,
            CSS3 and Javascript.
          </h1>
        </div>
        <div className="my-4">
          <h1 className="text-primary text-xl">
            <FontAwesomeIcon icon={faLaptopCode} className="mr-2" size="lg" />{' '}
            <span style={{ fontFamily: 'Newsreader' }}>
              Website Development
            </span>
          </h1>
          <h1 className="text-justify text-lg my-2 px-6 py-4">
            I always feel Confident and Passionate to develop website. I develop
            websites with MongoDB, ExpressJS, NodeJS, ReactJS. I like to call
            myself "a MERN Stack Web Developer". I always had a wish on my mind
            that I will do good in MERN Stack Projects. For Development Purposes
            i have used CORS, Stripe.js, JWT, React Stripe.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
