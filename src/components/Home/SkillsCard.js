import React from 'react';

const SkillsCard = ({ skillsDetail }) => {
  const { img, name } = skillsDetail;
  return (
    <div className="card bg-base-300 shadow-xl">
      <figure><img className='pt-10 w-20' src={img} alt="Shoes" /></figure>
      <div className="card-body p-0">
        <h2 className="text-center font-bold text-xl pt-5 pb-10">{name}</h2>
      </div>
    </div>
  );
};

export default SkillsCard;