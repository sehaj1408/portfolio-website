import React, { useEffect } from 'react';
import './navbar.css';
import { motion } from 'framer-motion';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Navbar() {
    useEffect(() => {
        Aos.init({});
    }, []);

    function scrollToComponent(id) {
        const component = document.getElementById(id);
        window.scrollTo({
            top:component.offsetTop,
            behavior: 'smooth'
        })
    }

    return (
        <motion.nav 
        style={{ top: '-100px' }}
        animate={{ y: 100 }}
        transition={{ type: "spring", stiffness: 30 }}
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