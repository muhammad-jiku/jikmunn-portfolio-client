import React from 'react';
import Services from '../Services/Services';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, width: 0 }}
      animate={{ opacity: 1, width: '100%' }}
      exit={{ opacity: 0, x: window?.innerWidth }}
    >
      <Banner />
      <Services />
      <Skills />
      <Projects />
      <Contact />
    </motion.div>
  );
};

export default Home;
