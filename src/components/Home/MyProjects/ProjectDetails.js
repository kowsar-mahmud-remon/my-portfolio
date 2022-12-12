import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const ProjectDetails = () => {
  const projectsDetails = useLoaderData();
  console.log('new data', projectsDetails);
  // useEffect(() => {
  //   fetch('../../../../public/details.json')
  //     .then(res => res.json())
  //     .then(data => console.log('new data', data));
  // }, []);
  return (
    <div>
      <h2>{projectsDetails.length}</h2>
    </div>
  );
};

export default ProjectDetails;