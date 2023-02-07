import React from 'react';
import './project.css';

export default function Projects(props) {
    const imagePath = props.details.image;
 
    return ( 
        <div className='projects-container'>
            <div className='projects' id='projects'>
                <img 
                src={require(`../../images/${imagePath}`)} 
                alt="Image" 
                className='projects-image'
                />
                <button
                className='projects-button'
                onClick={() => props.handleClick(props.details.id)}
                >
                    {props.details.name}
                </button>

                <div
                style={{display: props.showDetails ? 'block' : 'none'}}
                className='project-details'
                >
                    <h3 className='details-description'>{props.details.description}</h3>
                    <p className='details-skills'>{props.details.skills}</p>
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