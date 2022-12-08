import React from 'react';
import { Link } from 'react-router-dom';

const MyProjectsCard = ({ projectsDetail }) => {
  console.log(projectsDetail);
  const { name, img, details, liveLink } = projectsDetail;
  return (
    <div className="card bg-base-100 shadow-xl p-3 border rounded border-gray-300">
      <figure><img className='w-full h-56' src={img} alt="Shoes" /></figure>
      <div className="card-body p-3 pt-5">
        <h2 className="card-title">{name}</h2>
        <p>{details}</p>
        <div className="card-actions my-5">
          <a href={liveLink}><button className="btn btn-outline btn-sm rounded btn-primary font-medium normal-case text-base">Live Demo</button></a>
          <a href={liveLink}><button className="btn btn-outline btn-sm rounded btn-primary font-medium normal-case text-base">GitHub Client</button></a>
          <a href={liveLink}><button className="btn btn-outline btn-sm rounded btn-primary font-medium normal-case text-base">GitHub Server</button></a>
        </div>
      </div>
    </div>
  );
};

export default MyProjectsCard;