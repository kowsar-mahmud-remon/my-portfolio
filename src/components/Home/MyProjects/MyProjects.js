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
      details: 'Used Mobile Resale website',
      liveLink: "https://mobile-planet-72baf.web.app/",
      githubClient: "https://github.com/creativerze/mobile-planet-client",
      githubServer: "https://github.com/creativerze/mobile-planet-server"
    },
    {
      id: 2,
      name: 'Dream Architecture',
      img: `${img2}`,
      details: 'Architect design services website',
      liveLink: "https://dream-architects.web.app/",
      githubClient: "https://github.com/creativerze/dream-architects-client",
      githubServer: "https://github.com/creativerze/dream-architects-server"
    },
    {
      id: 3,
      name: 'Pro Coder',
      img: `${img3}`,
      details: 'Programming Learning Platform',
      liveLink: 'https://programming-learning-pla-48beb.web.app/',
      githubClient: 'https://github.com/creativerze/Programming-Learning-Platform',
      githubServer: 'https://github.com/creativerze/Programming-Learning-Platform-Server'
    },
  ];
  return (
    <div className='py-20 bg-base-200' id='projects'>
      <h2 className='text-primary text-center text-4xl font-bold mb-10'>My Projects</h2>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5">
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