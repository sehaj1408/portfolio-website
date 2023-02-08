import React from 'react';
import './project.css';

export default function Projects(props) {
    const imagePath = props.details.image;

    let skillsArr = props.details.skills.join('\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0');
    
    return (
        <div className='projects-container'>
                <img 
                src={require(`../../images/${imagePath}`)} 
                alt="Image" 
                className='projects-image'
                />
            <div className='projects' id='projects'>
                <h3 className='projects-title'>{props.details.name}</h3>
                <div className='project-details'>
                    <h3 className='details-description'>{props.details.description}</h3>
                    <p className='details-skills'>{skillsArr}</p>
                    <a 
                    href={props.details.github}
                    target='_blank'
                    className='details-github'
                    >
                    {props.details.github && 'Github'}
                    </a>
                </div>
            </div>
        </div>
    )
}