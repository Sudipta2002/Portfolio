import React from 'react'
import './Project.css';
export const ProjectCard = ({projectName,projectDescription,imageUrl,projectUrl}) => {
    return (
        <div className="project-card">
            <div className="image-container">
                <a target='_blank' rel='noreferrer' href={projectUrl} className="project-external-link">
                    <img src={imageUrl} alt="project" className="project-image"/>
                </a>
            </div>
            <div className="project-details-container">
                <h2 className="project-heading">{projectName}</h2>
                <p className="project-details">{projectDescription}</p>
            </div>
        </div>
    )
}
