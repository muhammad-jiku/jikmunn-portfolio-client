import React from 'react';
import { motion } from 'framer-motion';

const Blogs = () => {
  return (
    <motion.div
      initial={{ opacity: 0, width: 0 }}
      animate={{ opacity: 1, width: '100%' }}
      exit={{ opacity: 0, x: window?.innerWidth }}
      className="container mx-auto my-6"
    >
      <h1
        className="text-4xl md:text-5xl font-bold text-center capitalize text-primary"
        style={{ fontFamily: 'Newsreader' }}
      >
        Blogs coming soon
      </h1>
    </motion.div>
  );
};

export default Blogs;
