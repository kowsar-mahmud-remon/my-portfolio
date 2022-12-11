import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className=''>
      <footer className="footer footer-center p-10 bg-base-300 text-base-content rounded">
        <div>
          <p className='text-base'>Copyright © 2022 - All right reserved</p>
        </div>
        <div>
          <div className="grid grid-flow-col gap-10 text-primary">
            <a href="https://www.facebook.com/remon.rox.58/" className='text-3xl bg-white rounded p-2'><FaFacebook></FaFacebook></a>
            <a href="https://twitter.com/creativerze" className='text-3xl bg-white rounded p-2'><FaTwitter></FaTwitter></a>
            <a href="https://www.linkedin.com/in/kowsar-mahmud-remon/" className='text-3xl bg-white rounded p-2'><FaLinkedin></FaLinkedin></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;