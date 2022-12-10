import React from 'react';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import tailwind from '../../assets/tailwindcss.png';
import bootstrap from '../../assets/bootstrap.png';
import github from '../../assets/github.png';
import javascript from '../../assets/javascript.png';
import react from '../../assets/react.png';
import express from '../../assets/express.png';
import mongodb from '../../assets/mongodb.png';
import firebase from '../../assets/firebase.svg';
import SkillsCard from './SkillsCard';

const Skills = () => {
  const skillsDetails = [
    {
      id: 1,
      img: `${html}`,
      name: 'HTML'
    },
    {
      id: 2,
      img: `${css}`,
      name: 'CSS'
    },
    {
      id: 3,
      img: `${bootstrap}`,
      name: 'Bootstrap'
    },
    {
      id: 4,
      img: `${tailwind}`,
      name: 'TailwindCSS'
    },
    {
      id: 5,
      img: `${github}`,
      name: 'GitHub'
    },
    {
      id: 6,
      img: `${javascript}`,
      name: 'JavaScript'
    },
    {
      id: 7,
      img: `${react}`,
      name: 'React Js'
    },
    {
      id: 8,
      img: `${express}`,
      name: 'ExpressJs'
    },
    {
      id: 9,
      img: `${mongodb}`,
      name: 'MongoDB'
    },
    {
      id: 10,
      img: `${firebase}`,
      name: 'Firebase'
    },
  ];
  return (
    <div className='mx-5 my-10'>
      <h2 className='text-center text-4xl text-primary font-bold'>My Skills</h2>
      <div className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 my-10">
        {
          skillsDetails.map(skillsDetail => <SkillsCard
            key={skillsDetail.id}
            skillsDetail={skillsDetail}
          ></SkillsCard>)
        }
      </div>
    </div>
  );
};

export default Skills;