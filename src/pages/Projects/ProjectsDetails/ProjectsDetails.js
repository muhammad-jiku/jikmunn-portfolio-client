import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faCodeCompare,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';

const ProjectsDetails = () => {
  const { projectId } = useParams();
  const [projectDetails, setProjectDetails] = useState({});
  const [selectedImage, setSelectedImage] = useState('');
  const {
    projectName,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    details,
    technologies,
    siteLink,
    clientSideCode,
    serverSideCode,
  } = projectDetails;

  useEffect(() => {
    fetch(`https://jikmunn-portfolio.herokuapp.com/projects/${projectId}`)
      .then((res) => res.json())
      .then((data) => setProjectDetails(data))
      .catch((err) => console.log(err));
  }, [projectId]);

  useEffect(() => {
    fetch(`https://jikmunn-portfolio.herokuapp.com/projects/${projectId}`)
      .then((res) => res.json())
      .then((data) => setSelectedImage(data?.img1))
      .catch((err) => console.log(err));
  }, [projectId]);

  return (
    <div className="container mx-auto my-8">
      {console.log(projectDetails)}
      <div class="hero">
        <div class="hero-content flex-col lg:flex-row">
          <img
            src={selectedImage}
            class="w-full lg:w-1/2 rounded-lg shadow-2xl object-cover border-2 border-primary h-80 lg:h-96"
            // style={{ height: '400px' }}
            alt={projectName}
          />
          <div>
            <h1
              className="text-4xl md:text-5xl font-bold text-primary"
              style={{ fontFamily: 'Newsreader' }}
            >
              {projectName}
            </h1>
            <p class="py-2 text-justify">{details}</p>
            <p class="text-justify my-4">
              <FontAwesomeIcon icon={faGlobe} />{' '}
              <a
                href={siteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3"
              >
                {' '}
                Live Site{' '}
              </a>
            </p>
            <p class="text-justify my-4">
              <FontAwesomeIcon icon={faCode} />{' '}
              <a
                href={clientSideCode}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2"
              >
                {' '}
                Client Side Code{' '}
              </a>
            </p>
            {serverSideCode && (
              <p class="text-justify mt-4 mb-8">
                <FontAwesomeIcon icon={faCodeCompare} />{' '}
                <a
                  href={serverSideCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-3"
                >
                  {' '}
                  Server Side Code{' '}
                </a>
              </p>
            )}
            <p class="text-justify my-4">Technology</p>
            <div className="flex flex-row flex-wrap justify-between">
              {technologies?.split(',')?.map((tech, idx) => (
                <button
                  key={idx}
                  class="btn btn-xs sm:btn-sm btn-active btn-primary m-2 rounded cursor-text"
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="my-12">
        <h1
          className="text-2xl md:text-3xl font-bold text-primary text-center my-8"
          style={{ fontFamily: 'Newsreader' }}
        >
          {projectName}'s previews
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8 place-items-center">
          <img
            src={img1}
            // class="h-60 lg:h-64 rounded-lg shadow-2xl object-cover border-2 border-primary"
            class="w-96 rounded-lg shadow-2xl object-contain border-2 border-primary h-56 cursor-pointer"
            title="Click image to change cover photo"
            alt={projectName}
            onClick={() => setSelectedImage(img1)}
          />
          <img
            src={img2}
            // class="h-60 lg:h-64 rounded-lg shadow-2xl object-cover border-2 border-primary"
            class="w-96 rounded-lg shadow-2xl object-contain border-2 border-primary h-56 cursor-pointer"
            title="Click image to change cover photo"
            alt={projectName}
            onClick={() => setSelectedImage(img2)}
          />
          <img
            src={img3}
            // class="h-60 lg:h-64 rounded-lg shadow-2xl object-cover border-2 border-primary"
            class="w-96 rounded-lg shadow-2xl object-contain border-2 border-primary h-56 cursor-pointer"
            title="Click image to change cover photo"
            alt={projectName}
            onClick={() => setSelectedImage(img3)}
          />
          {img4 && (
            <img
              src={img4}
              // class="h-60 lg:h-64 rounded-lg shadow-2xl object-cover border-2 border-primary"
              class="w-96 rounded-lg shadow-2xl object-contain border-2 border-primary h-56 cursor-pointer"
              title="Click image to change cover photo"
              alt={projectName}
              onClick={() => setSelectedImage(img4)}
            />
          )}
          {img5 && (
            <img
              src={img5}
              // class="h-60 lg:h-64 rounded-lg shadow-2xl object-cover border-2 border-primary"
              class="w-96 rounded-lg shadow-2xl object-contain border-2 border-primary h-56 cursor-pointer"
              title="Click image to change cover photo"
              alt={projectName}
              onClick={() => setSelectedImage(img5)}
            />
          )}
          {img6 && (
            <img
              src={img6}
              // class="h-60 lg:h-64 rounded-lg shadow-2xl object-cover border-2 border-primary"
              class="w-96 rounded-lg shadow-2xl object-contain border-2 border-primary h-56 cursor-pointer"
              title="Click image to change cover photo"
              alt={projectName}
              onClick={() => setSelectedImage(img6)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsDetails;