import React from 'react';
import './navbar.css';

export default function Navbar() {
    function scrollToComponent(id) {
        const component = document.getElementById(id);
        window.scrollTo({
            top:component.offsetTop,
            behavior: 'smooth'
        })
    }

    return (
        <nav className='nav'>
            <ul>
                <li>
                    <button onClick={() => scrollToComponent('about')}>ABOUT</button>
                </li>
                <li>
                    <button onClick={() => scrollToComponent('projectsAndExperiences')}>PROJECTS / EXPERIENCE</button>
                </li>
                <li>
                    <button onClick={() => scrollToComponent('skills')}>SKILLS</button>
                </li>
                <li>
                    <button onClick={() => scrollToComponent('education')}>EDUCATION</button>
                </li>
                <li>
                    <button onClick={() => window.open('', '_blank')}>RESUME</button>
                </li>
                <li>
                    <button onClick={() => scrollToComponent('contact')}>CONTACT</button>
                </li>
            </ul>
        </nav>
    )
}