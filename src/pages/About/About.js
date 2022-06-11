import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import me from '../../Images/me.jpg';
import resume from '../../assets/files/MUHAMMAD AZIZUL HOQUE JIKU.pdf';

const About = () => {
  return (
    <div className="container mx-auto my-8">
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <img
            class="mask mask-diamond rounded-lg shadow-2xl h-80"
            src={me}
            alt="Muhammad Azizul Hoque Jiku"
          />

          <div>
            <h1
              className="text-4xl md:text-5xl font-bold capitalize text-primary"
              style={{ fontFamily: 'Headland One' }}
            >
              Hello there!
            </h1>
            <p class="py-6 text-justify">
              I am{' '}
              <span className="text-primary">Muhammad Azizul Hoque Jiku</span>.
              Welcome to my portfolio. I've designed and developed web
              applications with HTML5, CSS3, JavaScript, Bootstrap, Tailwind
              CSS, ReactJS, NodeJS, ExpressJS, MongoDB for 3+ years. I am also
              accomplished in tools like Netlify, Heroku, Firebase, Git, Github,
              Figma, Canvas, and Chrome Dev Tools.
            </p>

            <p class="py-6 text-justify">
              I've also built web applications with StripeJS, React Stripe,
              React-firebase-hooks, React-router, React-bootstrap, and DaisyUI.
              I love to work with MERN Stack. I like to call myself "a
              passionate MERN Stack Web Developer". In my spare time, I watch
              Football, Movies.
            </p>
            <button class="btn btn-sm md:btn-md btn-primary">
              {' '}
              <a
                href={resume}
                target="_blank"
                rel="noreferrer"
                download="resume"
              >
                Download Resume{' '}
                <FontAwesomeIcon icon={faDownload} className="ml-2" size="lg" />
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
