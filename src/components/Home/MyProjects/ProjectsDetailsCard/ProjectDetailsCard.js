import React from 'react';

const ProjectDetailsCard = ({ projectDetails }) => {
  const { id, name, imgOne, imgTwo, imgThree, details, liveLink, githubClient, githubServer } = projectDetails;

  return (
    <div className="card bg-base-100 shadow-xl p-3 border rounded border-gray-300">
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <figure><img className='w-full h-56' src={imgOne} alt="Shoes" /></figure>
        <figure><img className='w-full h-56' src={imgTwo} alt="Shoes" /></figure>
        <figure><img className='w-full h-56' src={imgThree} alt="Shoes" /></figure>
      </div>
      <div className="card-body p-3 pt-5">
        <h2 className="card-title">{name}</h2>
        <p>{details}</p>
        <div className="card-actions my-5">
          <a href={liveLink}><button className="btn btn-outline btn-sm rounded btn-primary font-medium normal-case text-base">Live Demo</button></a>
          <a href={githubClient}><button className="btn btn-outline btn-sm rounded btn-primary font-medium normal-case text-base">GitHub Client</button></a>
          <a href={githubServer}><button className="btn btn-outline btn-sm rounded btn-primary font-medium normal-case text-base">GitHub Server</button></a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsCard;