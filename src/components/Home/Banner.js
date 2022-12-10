import { FaDownload } from 'react-icons/fa';
// import { FaDownload } from "@react-icons/all-files/fa/BsDownload";


import React from 'react';
import remon from '../../assets/remon.jpg';
import './Banner.css';

const Banner = () => {

  return (
    <div className="hero bannerImg pt-20 pb-24">
      <div className="hero-content grid gap-10 gird-cols-1 md:grid-cols-2 lg:grid-cols-2 flex-col lg:flex-row">
        <div className="">
          <img src={remon} className="rounded-full mx-auto md:mr-10 lg:mr-10 w-96" alt='' />
        </div>
        <div>
          <h4 className=' text-gray-600 my-1'>Hello I'm</h4>
          <h1 className="text-4xl font-bold text-primary mb-2">WEB DEVELOPER</h1>
          <h3 className='text-2xl'>Kowsar Mahmud Remon</h3>
          <p className="py-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore quos ea recusandae. Corrupti at doloribus vitae dolorem atque aliquid similique.</p>
          <button className='btn btn-sm rounded btn-primary font-medium normal-case text-lg mr-5'><FaDownload></FaDownload> Download CV</button>

          <button className='btn btn-sm rounded btn-outline btn-primary font-medium normal-case text-lg mr-5'>Contact Me</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;