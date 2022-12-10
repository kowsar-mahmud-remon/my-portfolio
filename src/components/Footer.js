import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className=''>
      <footer className="footer footer-center p-10 bg-base-300 text-base-content rounded">
        <div>
          <p className='text-base'>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
        </div>
        <div>
          <div className="grid grid-flow-col gap-10 text-primary">
            <a href="" className='text-3xl'><FaFacebook></FaFacebook></a>
            <a href="" className='text-3xl'><FaTwitter></FaTwitter></a>
            <a href="" className='text-3xl'><FaLinkedin></FaLinkedin></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;