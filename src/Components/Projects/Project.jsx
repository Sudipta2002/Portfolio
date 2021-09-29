import React from 'react';
import Header from '../Header/Header';
import { projectsData } from '../../assets/projectData';
import Footer from '../Footer/Footer';
import { ProjectCard } from './ProjectCard';
const Project=()=>{
    return(
        <div className="section-container">
            <Header heading="My Super Cool Projects" details="Here are some of my projects hope you like it!!"/>
            {/* <h1>This is Project page</h1> */}
            <div className="project-cards-container">
                {
                    projectsData.map(({projectName,projectDescription,imageUrl,projectUrl})=>{
                        return <ProjectCard projectName={projectName} projectDescription={projectDescription} imageUrl={imageUrl} projectUrl={projectUrl} />
                    })
                }
            </div>
            <Footer phrase='Look at my 'link="Skills" toAdress="/skills"/>
        </div>
    )
}
export default Project;