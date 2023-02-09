import React from 'react';
import './education.css';

export default function Education(props) {
    return (
        <div className='education'>
            <div className='degree-logo-container'>
                <img 
                src={require(`../../images/${props.westernImage}`)} 
                alt="image" 
                className='education-image'
                />
                <div className='education-degree'>
                    <p>{props.degree.name}</p>
                    <p>{props.degree.location}</p>
                    <p>{props.degree.date}</p>
                </div>
            </div>
            <div className='clubs-image-container'>
                <img 
                className='wds-image'
                src={require(`../../images/${props.wdsImage}`)} 
                alt="image" 
                />
                <div className='education-clubs'>
                    <p>{props.clubs.name}</p>
                    <p>{props.clubs.role}</p>
                </div>
            </div>
            <p className='education-courses'>{props.courses}</p>
        </div> 
    )
}