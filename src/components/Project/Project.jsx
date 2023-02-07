import React from 'react';
import './project.css';

export default function Projects(props) {
    return (
        <div className='projects' id='projects'>

            <button
            className='projects-button'
            onClick={() => props.handleClick(props.details.id)}
            >
                {props.details.name}
            </button>

            <div
            style={{display: props.showDetails ? 'block' : 'none'}}
            >

                <h3>{props.details.description}</h3>

                <p>{props.details.skills}</p>

                <a 
                href={props.details.github}
                target='_blank'
                >
                {props.details.github && 'Github'}
                </a>
                
            </div>
        </div>
    )
}