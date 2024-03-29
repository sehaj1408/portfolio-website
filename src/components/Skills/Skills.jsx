import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './skills.css';

export default function Skills(props) {
    useEffect(() => {
        window.addEventListener('load', () => {
          Aos.init({});
        }); 
      }, []);

    const skillName = props.name;
    const padding = props.padding;
    const imagePath = props.image;

    const height = props.height;
    const width = props.width;

    return (
        <div className='skills'>
            <div data-aos='fade-up' data-aos-anchor-placement='bottom-bottom' className='skills-imageAndName'> 
                <img 
                className='skills-image'
                src={require(`../../images/${imagePath}`)} 
                alt="image" 
                style={{height: height, width: width, padding: padding}}
                />
                <h4 data-aos='fade-up' className='skills-name'>{skillName}</h4>
            </div>
        </div>
    )
}