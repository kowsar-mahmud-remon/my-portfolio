import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../../assets/project3.jpg';
import img2 from '../../../../assets/project33.jpg';
import img3 from '../../../../assets/project333.jpg';
import ProjectDetailsCard from './ProjectDetailsCard';

const ProjectsDetailsThree = () => {
  const projectsDetails =
    [
      {
        id: 11,
        name: "Mobile Planet",
        imgOne: `${img1}`,
        imgTwo: `${img2}`,
        imgThree: `${img3}`,
        details: "This is an E-learning platform website for programming languages courses. Email/password, Google, and GitHub Authentication using firebase. And Authorization using JWT. Only Verify users can buy courses. Implemented react-pdf package to easily download a pdf file.",
        liveLink: "https://mobile-planet-72baf.web.app/",
        githubClient: "https://github.com/creativerze/Programming-Learning-Platform",
        githubServer: "https://github.com/creativerze/Programming-Learning-Platform-Server"
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

export default ProjectsDetailsThree;