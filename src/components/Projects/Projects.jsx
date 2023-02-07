import React from 'react';
import './projects.css';

export default function Projects(props) {
    return (
        <div className='projects'>
            <button
            className='projects-button'
            onClick={() => props.handleClick()}
            >
                {props.details.name}
            </button>
        </div>
    )
}