import React from 'react';
import './about.css';
import { motion } from 'framer-motion';

export default function Navbar() {
    function scrollToComponent(id) {
        const component = document.getElementById(id);
        window.scrollTo({
            top:component.offsetTop,
            behavior: 'smooth'
        })
    }

    return (
        <motion.div 
            className='about' 
            id='about'
        >
            <motion.h1 
                className='about-name'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: -40 }}
                transition={{ duration: 0.8 }}
            >
                Hi, I'm Sehaj
            </motion.h1>

            <motion.h3
                className='about-title'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                Software Engineering Student
            </motion.h3>

            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className='about-p1'
            >
            I'm a third-year Software Engineering student 
            at Western University interested in areas of software engineering 
            like web development, iOS development, databases, cloud computing, 
            and building high-quality applications using different programming 
            languages. In my spare time, I enjoy playing the piano, 
            going to the gym, and playing tennis.
            </motion.p>

            <motion.button
                className='about-projects'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                onClick={() => scrollToComponent('projects-container-navbar')}
            >
                Projects 
                <img 
                    src={require("../../images/downArrow.png")} 
                    alt="downArrow" 
                    style={{ height: '18px', width: '18px', paddingLeft: '3px' }}
                />
            </motion.button>
        </motion.div>
    )
}