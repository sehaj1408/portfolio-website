import React from 'react';
import './skills.css';

export default function Skills(props) {
    const skillName = props.name;
    const padding = props.padding;
    const imagePath = props.image;

    return (
        <div className='skills'>
            <div className='skills-imageAndName'>
                <img 
                className='skills-image'
                src={require(`../../images/${imagePath}`)} 
                alt="image" 
                style={{padding: padding}}
                />
                <h4 className='skills-name'>{skillName}</h4>
            </div>
        </div>
    )
}