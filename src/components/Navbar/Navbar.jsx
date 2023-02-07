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
                    <button onClick={() => scrollToComponent('about')}>About</button>
                </li>
                <li>
                    <button onClick={() => scrollToComponent('projects')}>Projects/Experience</button>
                </li>
                <li>
                    <button onClick={() => scrollToComponent('skills')}>Skills</button>
                </li>
                <li>
                    <button onClick={() => scrollToComponent('education')}>Education</button>
                </li>
                <li>
                    <button onClick={() => scrollToComponent('contact')}>Contact</button>
                </li>
            </ul>
        </nav>
    )
}