import React from 'react';
import './about.css';
import { motion } from 'framer-motion';

export default function Navbar() {
    return (
        <motion.div 
        className='about' 
        id='about'
        >
            <motion.h1 
            className='about-name'
            animate={{ y: -40 }}
            transition={{ duration: 1 }}
            >
                Hi, I'm Sehaj
            </motion.h1>
            <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className='about-p1'
            >
                I'm a third-year Software Engineering student 
            at Western University interested in areas of software engineering 
            like web development, iOS development, databases, cloud computing, 
            and building high-quality applications using different programming 
            languages. In my spare time, I enjoy playing the piano, 
            going to the gym, and playing tennis.
            </motion.p>
        </motion.div>
    )
}