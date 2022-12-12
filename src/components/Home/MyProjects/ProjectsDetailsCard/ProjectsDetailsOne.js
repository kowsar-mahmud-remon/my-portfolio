import React from 'react';
import ProjectDetailsCard from './ProjectDetailsCard';
import img1 from '../../../../assets/project1.jpg';
import img2 from '../../../../assets/project11.jpg';
import img3 from '../../../../assets/project111.jpg';

const ProjectsDetailsOne = () => {
  const projectsDetails =
    [
      {
        id: 11,
        name: "Mobile Planet",
        imgOne: `${img1}`,
        imgTwo: `${img2}`,
        imgThree: `${img3}`,
        details: "A dynamic website with a built-in admin, seller, and buyer role authorization system.The seller can resell their used mobile and the buyer can buy their Mobile. Admin can delete the buyers, seller, and also their products. Seller and buyer can manage their products and orders.",
        liveLink: "https://mobile-planet-72baf.web.app/",
        githubClient: "https://github.com/creativerze/mobile-planet-client",
        githubServer: "https://github.com/creativerze/mobile-planet-server"
      },
    ];
  return (
    <div className='mx-5 my-10'>
      {
        projectsDetails.map(projectDetails => <ProjectDetailsCard
          key={projectDetails.id}
          projectDetails={projectDetails}
        ></ProjectDetailsCard>)
      }
    </div>
  );
};

export default ProjectsDetailsOne;