import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCodeCompare } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Projects = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch('https://jikmunn-portfolio.herokuapp.com/projects')
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container mx-auto px-6 my-8">
      <h1
        className="text-2xl capitalize font-bold"
        style={{ fontFamily: 'Headland One' }}
      >
        <span className="text-primary">Recent</span> <span>Projects</span>
        <div className="bg-gradient-to-r from-primary to-secondary h-1 w-48"></div>
      </h1>
      <motion.div
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', duration: 8, bounce: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-4 lg:my-6"
      >
        {/* projects*/}
        {projects?.slice(0, 3)?.map((project) => (
          <div
            key={project?._id}
            className="card card-compact bg-neutral shadow-xl h-full"
          >
            <figure>
              <img
                src={project?.img1}
                alt={project?.projectName}
                className="h-72 w-full object-cover"
              />
            </figure>
            <div className="card-body" style={{ fontFamily: 'Headland One' }}>
              <h2
                className="card-title text-primary"
                style={{ fontFamily: 'Newsreader' }}
              >
                {project?.projectName}
              </h2>
              <p className="text-justify">{project?.details}</p>

              <div className="flex justify-between">
                <div
                  className="justify-start"
                  style={{ fontFamily: 'poppins' }}
                >
                  <button
                    className="btn btn-primary btn-xs sm:btn-sm md:btn-md mb-2 sm:mb-4 text-white"
                    onClick={() => navigate(`/projects/${project?._id}`)}
                  >
                    Read More
                  </button>
                </div>
                <div className="justify-end">
                  <a
                    href={project?.clientSideCode}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className="btn btn-circle btn-primary btn-sm md:btn-md mr-2 text-white"
                      title="Client Side Code"
                    >
                      <FontAwesomeIcon icon={faCode} />
                    </button>
                  </a>

                  {project?.serverSideCode && (
                    <a
                      href={project?.serverSideCode}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-circle btn-primary btn-sm md:btn-md text-white"
                        title="Server Side Code"
                      >
                        <FontAwesomeIcon icon={faCodeCompare} />
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
