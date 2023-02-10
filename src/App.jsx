import React, { useEffect } from 'react';

import { easeOut, motion } from 'framer-motion';
import Aos from 'aos';
import 'aos/dist/aos.css';

import './app.css'
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Project from './components/Project/Project';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';

export default function App() {
    useEffect(() => {
        Aos.init({});
    }, []);

    const projectsArray = [
        {
            name: 'CapicConnect iOS App',
            description: `A personal iOS app project that offers users the capability to view upcoming seminars and conferences, registered programs, and speaker information, as well as the ability to participate in real-time messaging.`,
            skills: ['Swift', 'Xcode', 'ReST API', 'Firebase', 'UIKit', 'Storyboards', 'Spatial reasoning'],
            image: 'capicImage.png',
            width: '40vw',
            id: 1
        },
        {
            name: 'Music Web App',
            description: `A web application that provides users with the ability to interact with music metadata by performing actions such as saving and editing playlists, searching tracks, creating an account, adding ratings/comments, and more.`,
            skills: ['Javascript', 'Node.js', 'Express', 'REST API', 'AWS', 'Git', 'Postman', 'Firebase'],
            github: 'https://github.com/sehaj1408/se3316-sehaj1408-Hersh-SS-coopercunningham-lab4',
            image: 'musicImage.png',
            width: '40vw',
            id: 2
        },
        {
            name: 'Pokédex Web App',
            description: `A web application that enables users to search for Pokémon by name or number, displaying relevant results and their details.`,
            skills: ['Javascript', 'HTML', 'CSS', 'DOM', 'Git', 'VS Code', 'AWS'],
            github: 'https://github.com/sehaj1408/se3316-lab1-snaangal',
            image: 'pokedexImage.png',
            width: '45vw',
            id: 3
        },
        {
            name: 'Tenzies game',
            description: `A personal React project that provides a user-friendly, responsive interface for clicking and rolling dice until all numbers match.`,
            skills: ['React', 'Javascript', 'CSS', 'HTML', 'Git'],
            github: 'https://github.com/sehaj1408/tenzies-react',
            image: 'tenziesImage.png',
            width: '30vw',
            id: 4
        },
        {
            name: 'Manufacturing Database Project',
            description: `A database project utilizing various SQL query techniques, including DDL, DML, and DQL, to efficiently manage a manufacturing management system.`,
            skills: ['MySQL', 'MySQLWorkbench', 'Data modelling', 'Normalization', 'Git'],
            github: 'https://github.com/AlexandraLHeureuxECE/assignment-3-group-22',
            image: 'manufacturingImage.png',
            width: '35vw',
            id: 5
        },
    ]

    const projectsElements = projectsArray.map((project) => {
        return <Project 
            details = {project}
        />
    }) 

    const skillsArr = [
        {name: 'Javascript', padding: '0px', height: '5vw', width: '8vw', image: 'javascriptImage.png'},
        {name: 'HTML', padding: '0.02vw', height: '5vw', width: '5.3vw', image: 'htmlImage.png'},
        {name: 'CSS', padding: '0.05vw', height: '5vw', width: '4vw', image: 'cssImage.png'},
        {name: 'Swift', padding: '0.45vw', height: '4.2vw', width: '4.2vw', image: 'swiftImage.png'},
        {name: 'SQL', padding: '0.3vw', height: '4vw', width: '8.5vw', image: 'sqlImage.png'},
        {name: 'Java', padding: '0.12vw', height: '4.5vw', width: '3.5vw', image: 'javaImage.png'},
        {name: 'React', padding: '0.55vw', height: '3.6vw', width: '4.2vw', image: 'reactImage.png'},
        {name: 'Github', padding: '0.37vw', height: '4vw', width: '4vw', image: 'githubImage.png'},
        {name: 'Node.js', padding: '0.8vw', height: '3.5vw', width: '5.8vw', image: 'nodejsImage.png'},
        {name: 'Express', padding: '1.24vw', height: '2.7vw', width: '8.4vw', image: 'expressImage.png'},
        {name: 'REST API', padding: '0.7vw', height: '4vw', width: '4.6vw', image: 'restapiImage.png'},
        {name: 'AWS', padding: '1.1vw', height: '3vw', width: '4.7vw', image: 'awsImage.png'},
    ]

    const skillsElements = skillsArr.map((skill) => {
        return <Skills 
            name = {skill.name}
            padding = {skill.padding}
            image = {skill.image}
            height = {skill.height}
            width = {skill.width}
        />
    })

    const educationArr = [
        {
            westernImage: 'westernImage.png',
            degree: {name: 'Bachelor of Engineering Science in Software Engineering', location: 'London, ON', date: 'Sep 2020 - Apr 2024'},
            wdsImage: 'wdsImage.png',
            clubs: {name: 'Western Developers Society', role: 'Team Lead'},
        }
    ]

    const educationElements = educationArr.map((item) => {
        return <Education 
            westernImage = {item.westernImage}
            degree = {item.degree}
            wdsImage = {item.wdsImage}
            clubs = {item.clubs}
        />
    })

    return (
        <div>
            <Navbar />
            <About />
            <div className='projects-container-navbar' id='projects-container-navbar'></div>
            <motion.h2 
            className='projectsAndExperiences' 
            id='projectsAndExperiences'
            style={{marginBottom: '100px'}}
            data-aos='fade-down'
            data-aos-anchor-placement='bottom-bottom'
            >
                Projects I've worked on
            </motion.h2>
            {projectsElements}
            <div className='skills-education-container'>
                <div className='skills-tools-container'>
                    <div className='skills-container-navbar' id='skills-container-navbar'></div>
                    <h2 
                    data-aos='fade-down' 
                    style={{ marginBottom: '100px' }}
                    className='skills-tools' 
                    id='skills-tools'>
                        Tools and Technologies
                    </h2>
                    <div 
                    style={{ marginBottom: '100px' }}
                    className='skills-container' 
                    id='skills-container'
                    >
                        {skillsElements} 
                    </div>
                </div>
                <div className='education-container'>
                    <div className='education-container-navbar' id='education-container-navbar'></div>
                    <h2 data-aos='fade-down' className='education-header' id='education-header'>Education</h2>
                    {educationElements}
                </div>
            </div>
            <div className='contact-container' id='contact-container'>
                <div className='contact-container-navbar' id='contact-container-navbar'></div>
                <h2 data-aos='fade-down' data-aos-anchor-placement='center-bottom' className='contact-header'>Get in Touch</h2>
                <Contact 
                    name = 'Sehaj Naangal'
                    email = 'sehajnaangal@gmail.com'
                    number = '647-674-0529'
                    linkedInImage = 'linkedinImage.png'
                    githubImage = 'githubImage.png'
                />
            </div>
            <footer className='footer'>
                <p className='copyright-title'>Copyright</p>
                <img src={require('./images/copyrightImage.png')} alt="image" className='copyright-image'/>
                <p className='copyright-name'>2023 Sehaj Naangal</p>
            </footer>
        </div>
    )
}