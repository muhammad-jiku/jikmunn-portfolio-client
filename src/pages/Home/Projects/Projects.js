import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCodeCompare } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch('projects.json')
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
      <div className="grid grid-cols-1 gap-5 my-6 md:grid-cols-3">
        {/* projects*/}
        {projects?.slice(0, 3)?.map((project) => (
          <div
            key={project?._id}
            class="card card-compact bg-secondary shadow-xl h-full"
          >
            <figure>
              <img
                src={project?.img}
                alt={project?.projectName}
                className="h-96 w-full object-cover"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">{project?.projectName}</h2>
              <p className="text-justify">{project?.details}</p>

              <div class="flex justify-between">
                <div className="justify-start">
                  <button
                    class="btn btn-primary btn-sm md:btn-md"
                    title="Client Side Code"
                  >
                    Read More
                  </button>
                </div>
                <div className="justify-end">
                  <button
                    class="btn btn-circle btn-primary btn-sm md:btn-md mr-2"
                    title="Client Side Code"
                  >
                    <a href={project?.clientSideCode}>
                      <FontAwesomeIcon icon={faCode} />
                    </a>
                  </button>
                  {project?.serverSideCode && (
                    <button
                      class="btn btn-circle btn-primary btn-sm md:btn-md"
                      title="Server Side Code"
                    >
                      <a href={project?.serverSideCode}>
                        <FontAwesomeIcon icon={faCodeCompare} />
                      </a>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
