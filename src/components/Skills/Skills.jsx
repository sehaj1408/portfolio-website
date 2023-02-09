import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './skills.css';

export default function Skills(props) {
    useEffect(() => {
        Aos.init({});
    }, []);

    const skillName = props.name;
    const padding = props.padding;
    const imagePath = props.image;

    return (
        <div className='skills'>
            <div data-aos='fade-up' className='skills-imageAndName'>
                <img 
                className='skills-image'
                src={require(`../../images/${imagePath}`)} 
                alt="image" 
                style={{padding: padding}}
                />
                <h4 data-aos='fade-up' className='skills-name'>{skillName}</h4>
            </div>
        </div>
    )
}