import React, { useEffect, useState } from 'react';
import Skill from './Skill';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    fetch('https://jikmunn-portfolio.herokuapp.com/skills')
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mx-auto px-6 my-6 lg:my-0">
      <h1
        className="text-2xl capitalize font-bold"
        style={{ fontFamily: 'Headland One' }}
      >
        <span className="text-primary">Skills</span>
        <div className="bg-gradient-to-r from-primary to-secondary h-1 w-16"></div>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {/* html5 */}
        {skills?.map((s, idx) => (
          <Skill key={idx} s={s} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
