import React from 'react';
import Services from '../Services/Services';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
