import React from 'react';
import './project.css';
import { motion } from 'framer-motion';

export default function Projects(props) {
    const imagePath = props.details.image;
    let skillsArr = props.details.skills;
    const details = props.details;
    
    return (
        <div className='projects-container-main'>
                <img 
                src={require(`../../images/${imagePath}`)} 
                style={{width: details.width}}
                alt="Image" 
                className='projects-image'
                />
            <div className='projects' id='projects'>
                <h3 className='projects-title'>{props.details.name}</h3>
                <div className='project-details'>
                    <h3 className='details-description'>{props.details.description}</h3>
                    <p className='details-skills'>{skillsArr.join("\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0")}</p>

                    <div className='github-link'>
                        <a 
                        href={props.details.github}
                        target='_blank'
                        className='details-github'
                        >
                            {props.details.github && (
                        <>
                            Github
                            <img 
                            src={require("../../images/githubImage.png")} alt="github image"
                            className='github-image' 
                            />
                        </>
                        )}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}