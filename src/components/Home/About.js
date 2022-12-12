import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/about.jpg';

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200 my-5" id='about'>
      <div className="hero-content gap-10 grid md:grid-cols-2 flex-col lg:flex-row">
        <img src={img} className="w-3/4 mx-auto rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold text-primary">About Me</h1>
          <p className="py-6 text-lg">I am a Front-End Developer. I am a quick learner, passionate and creative. I always like to learn new technology and ensure my skills are kept up to date within this rapidly changing industry. I am passionate about learning and sharing my knowledge with others as publicly as possible. I love to solve real-world problems.</p>
          <a href="#contact"><button className="btn  btn-outline btn-primary">Contact Me</button></a>
        </div>
      </div>
    </div>
  );
};

export default About;