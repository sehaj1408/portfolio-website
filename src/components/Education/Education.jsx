import React, { useEffect } from 'react';
import './education.css';
import { easeOut, motion } from 'framer-motion';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Education(props) {
    useEffect(() => {
        Aos.init({});
    }, []);

    return (
        <div data-aos='fade-left' data-aos-anchor-placement='bottom-bottom' className='education'>
            <div className='degree-logo-container'>
                <img 
                src={require(`../../images/${props.westernImage}`)} 
                alt="image" 
                className='education-image'
                />
                <div className='education-degree'>
                    <p style={{ fontWeight: '500' }}>{props.degree.name}</p>
                    <p style={{ fontWeight: '300' }}>{props.degree.location}</p>
                    <p style={{ fontWeight: '300' }}>{props.degree.date}</p>
                </div>
            </div> 
            <div className='clubs-image-container'>
                <img 
                className='wds-image'
                src={require(`../../images/${props.wdsImage}`)} 
                alt="image" 
                />
                <div className='education-clubs'>
                    <p style={{ fontWeight: '500' }}>{props.clubs.name}</p>
                    <p style={{ fontWeight: '300' }}>{props.clubs.role}</p>
                </div>
            </div>
            <p className='education-courses'>{props.courses}</p>
        </div> 
    )
}