import React from 'react';
import Banner from './Banner';
import ContactForm from './ContactForm';
import MyProjects from './MyProjects/MyProjects';
import Skills from './Skills';

const Home = () => {
  return (
    <div className=''>
      <Banner></Banner>
      <Skills></Skills>
      <MyProjects></MyProjects>
      <ContactForm></ContactForm>
    </div>
  );
};

export default Home;