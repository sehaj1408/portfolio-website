import React from 'react';
import './navbar.css';
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
        <motion.nav 
        style={{ top: '-20px' }}
        animate={{ y: 20 }}
        transition={{ type: "spring", stiffness: 40 }}
        className='nav'
        >
            <motion.ul animate={{  }}>
                <motion.li>
                    <button onClick={() => scrollToComponent('about')}>ABOUT</button>
                </motion.li>
                <motion.li>
                    <button onClick={() => scrollToComponent('projects-container-navbar')}>PROJECTS</button>
                </motion.li>
                <motion.li>
                    <button onClick={() => scrollToComponent('skills-container-navbar')}>TECHNOLOGIES</button>
                </motion.li>
                <motion.li>
                    <button onClick={() => scrollToComponent('education-container-navbar')}>EDUCATION</button>
                </motion.li>
                <motion.li>
                    <button onClick={() => window.open('', '_blank')}>RESUME</button>
                </motion.li>
                <motion.li>
                    <button onClick={() => scrollToComponent('contact-container-navbar')}>CONTACT</button>
                </motion.li>
            </motion.ul>
        </motion.nav>
    )
}