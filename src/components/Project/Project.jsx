import React, { useEffect } from 'react';
import './project.css';
import { motion } from 'framer-motion';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Projects(props) {
    useEffect(() => {
        Aos.init({});
    }, []);

    const imagePath = props.details.image;
    let skillsArr = props.details.skills;
    const details = props.details;
    
    return (
        <div 
        className='projects-container-main'
        style={{ marginBottom: '50px' }}
        >
            <img 
            data-aos='fade-right'
            data-aos-anchor-placement='top-center'
            src={require(`../../images/${imagePath}`)} 
            style={{width: details.width}}
            alt="Image" 
            className='projects-image'
            />

            <div 
            data-aos='fade-left' 
            data-aos-anchor-placement='top-center' 
            className='projects' 
            id='projects'
            >
                <h3 className='projects-title'>{props.details.name}</h3>
                <div className='project-details'>
                    <h3 data-aos='flip-up' className='details-description'>{props.details.description}</h3>
                    <p data-aos='fade-left' className='details-skills'>{skillsArr.join("\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0")}</p>

                    <div data-aos='fade-left' className='github-link'>
                        <a 
                        href={props.details.github}
                        target='_blank'
                        className='details-github'
                        >
                            {props.details.github && (
                        <>
                            Github
                            <img 
                            src={require("../../images/githubImage.png")} alt="github image"
                            className='github-image' 
                            />
                        </>
                        )}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}