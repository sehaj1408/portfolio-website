import React from 'react';
import './projects.css';

export default function Projects(props) {
    return (
        <div className='projects'>
            <button className='projects-button'>{props.details.name}</button>
        </div>
    )
}