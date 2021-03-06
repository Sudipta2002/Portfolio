import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Skills.css';
import { skillList } from '../../assets/skillsData';
import skillsVector from './../../assets/skills_vector.png';
import { SkillCard } from './SkillCard';
const Skills=()=>{
    return(
        <div className="section-container">
            <Header heading="My Skills" details="Passionate about technologies and burning developer"/>
            <div className="skill-card-container">
                {
                skillList.map(skill =>{
                return <SkillCard skillName={skill.skillName} skillUrl={skill.skillUrl}/>;
                })
                }
            </div>
            <Footer phrase='Get in 'link="touch." toAdress="/contact"/>

            <div className="skills-vector-frame">
                <img src={skillsVector} alt='skills'className='skills-vector'/>
            </div>
        </div>
    )
}
export default Skills;