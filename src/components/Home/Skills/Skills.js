import React from "react";
import html from "../../../images/html-5.png";
import bootstrap from "../../../images/bootstrap.png";
import javascript from "../../../images/javascript.png";
import react from "../../../images/reactjs.png";
import node from "../../../images/nodejs.png";
import mongo from "../../../images/mongodb.png";
import firebase from "../../../images/database-storage.png";
import scss from "../../../images/scss.png";
import hosting from "../../../images/hosting.png";
import SkillCard from "../SkillCard/SkillCard";

const Skills = () => {
  const skillData = [
    {
      name: "HTML/HTML5",
      icon: html,
      experience: "more then 1 year experience on HTML/HTML5",
      progress: 90,
      bgColor:'#f29d57'
    },
    {
      name: "CSS/Bootstarp",
      icon: bootstrap,
      experience: "more then 1 year experience on CSS/Bootstarp",
      progress: 90,
      bgColor:'#38aacc'
    },
    {
      name: "JavaScript",
      icon: javascript,
      experience: "more then 1 year experience on JavaScript",
      progress: 80,
      bgColor:'#9A38CC'
    },
    {
      name: "React JS",
      icon: react,
      experience: "more then 1 year experience on React JS",
      progress: 75,
      bgColor:'#E52BBB'
    },
    {
      name: "Node JS",
      icon: node,
      experience: "more then 1 year experience on Node JS",
      progress: 75,
      bgColor:'#2BE59F'
    },
    {
      name: "MongoDB",
      icon: mongo,
      experience: "more then 1 year experience on MongoDB",
      progress: 75,
      bgColor:'#E5E12B'
    },
    {
      name: "Firebase",
      icon: firebase,
      experience: "more then 1 year experience on Firebase",
      progress: 75,
      bgColor:'#E5722B'
    },
    {
      name: "React Native",
      icon: react,
      experience: "more then 2 month experience on React Native",
      progress: 30,
      bgColor:'#5E2BE5'
    },
    {
      name: "VPS Hosting",
      icon: hosting,
      experience: "more then 6 month experience on VPS Hosting",
      progress: 60,
      bgColor:'#E52B9B'
    },
    {
        name: "SCSS",
        icon: scss,
        experience: "more then 2 month experience on SCSS",
        progress: 30,
        bgColor:'#E5DA2B'
      },
  ];
  return (
    <div>
      <div>
        <h2 className='text-center mt-5'>Work Expertise</h2>
        <h5 className='text-center text-secondary mt-3 mb-4'>
          Obviously I'm a Web Developer. Experienced with all stages <br/> of the
          development cycle for dynamic web projects.
        </h5>
      </div>
      <div className='container'>
        <div className='row'>
          {skillData.map((skill) => (
            <SkillCard skill={skill}></SkillCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
