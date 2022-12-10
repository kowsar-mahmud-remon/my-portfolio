import React from 'react';
import img1 from '../../../assets/project1.jpg';
import img2 from '../../../assets/project2.jpg';
import img3 from '../../../assets/project3.jpg';
import MyProjectsCard from './MyProjectsCard';

const MyProjects = () => {
  const projectsDetails = [
    {
      id: 1,
      name: 'Mobile Planet',
      img: `${img1}`,
      details: 'A dynamic website with a built-in admin, seller, and buyer role authorization system. The seller can resell their used mobile and the buyer can buy their Mobile.',
      liveLink: 'https://mobile-planet-72baf.web.app/'
    },
    {
      id: 2,
      name: 'Dream Architecture',
      img: `${img2}`,
      details: 'A complete website of Architects design services and authentication with JWT token. Users can add, delete, update a review, and add services.',
      liveLink: 'https://dream-architects.web.app/'
    },
    {
      id: 3,
      name: 'Pro Coder',
      img: `${img3}`,
      details: 'E-learning platform website for programming languages courses. Also has email/password, Google, and GitHub Authentication. Users can buy courses.',
      liveLink: 'https://programming-learning-pla-48beb.web.app/'
    },
  ];
  return (
    <div className='py-10 mx-5 bg-base-200'>
      <h2 className='text-primary text-center text-4xl font-bold mb-10'>My Projects</h2>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
          projectsDetails.map(projectsDetail => <MyProjectsCard
            key={projectsDetail.id}
            projectsDetail={projectsDetail}
          ></MyProjectsCard>)
        }
      </div>
    </div>
  );
};

export default MyProjects;