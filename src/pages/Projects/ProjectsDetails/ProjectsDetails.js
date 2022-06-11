import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectsDetails = () => {
  const { projectId } = useParams();
  const [projectDetails, setProjectDetails] = useState({});

  useEffect(() => {
    fetch(`https://jikmunn-portfolio.herokuapp.com/projects/${projectId}`)
      .then((res) => res.json())
      .then((data) => setProjectDetails(data))
      .catch((err) => console.log(err));
  }, [projectId]);
  return <div>{console.log(projectId, projectDetails)}</div>;
};

export default ProjectsDetails;
