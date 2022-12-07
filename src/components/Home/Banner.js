import React from 'react';
import remon from '../../assets/remon.jpg';
import './Banner.css';

const Banner = () => {
  return (
    <div className="hero bannerImg py-20 green">
      <div className="hero-content grid gap-10 gird-cols-1 md:grid-cols-2 lg:grid-cols-2 flex-col lg:flex-row">
        <div className="">
          <img src={remon} className="rounded-full mx-auto md:mr-0 lg:mr-0 w-80" alt='' />
        </div>
        <div>
          <h4>Hello I'm</h4>
          <h1 className="text-4xl font-bold">WEB DEVELOPER</h1>
          <h3 className='text-xl'>Kowsar Mahmud Remon</h3>
          <p className="py-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore quos ea recusandae. Corrupti at doloribus vitae dolorem atque aliquid similique.</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;