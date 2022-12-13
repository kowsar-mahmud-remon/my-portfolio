import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../../assets/project2.jpg';
import img2 from '../../../../assets/project22.jpg';
import img3 from '../../../../assets/project222.jpg';
import ProjectDetailsCard from './ProjectDetailsCard';

const ProjectsDetailsTwo = () => {
  const projectsDetails =
    [
      {
        id: 11,
        name: "Mobile Planet",
        imgOne: `${img1}`,
        imgTwo: `${img2}`,
        imgThree: `${img3}`,
        details: "A complete website of Architect's services. Users can add a service. Users can also add, delete, and update a review on the services. Password-based authentication and authorization are implemented using firebase and JWT.",
        liveLink: "https://dream-architects.web.app/",
        githubClient: "https://github.com/creativerze/dream-architects-client",
        githubServer: "https://github.com/creativerze/dream-architects-server"
      },
    ];
  return (
    <div className='mx-5 my-10'>
      <Link to='/'><button className='btn btn-primary btn-sm mt-5 mb-10'>Back to Home</button></Link>
      {
        projectsDetails.map(projectDetails => <ProjectDetailsCard
          key={projectDetails.id}
          projectDetails={projectDetails}
        ></ProjectDetailsCard>)
      }
    </div>
  );
};

export default ProjectsDetailsTwo;