import React, { useEffect } from 'react';

import { motion } from 'framer-motion';
import Aos from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import './app.css'
import MyNavbar from './components/Navbar/Navbar';
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
            name: 'Course Outlines Manager Web App',
            description: `A web application designed to streamline the process of creating and managing course outlines with functionality for profesors, department chair, and other administrative staff.`,
            skills: ['Javascript', 'Node.js', 'Express', 'CSS', 'REST API', 'Google Cloud', 'Git', 'Firebase'],
            github: 'https://github.com/ShaimaaAliECE/se3350_groupproject-se3350-team-16',
            view: 'http://34.130.235.42:4000/index.html',
            image: 'courseOutlineImage.png',
            username: 'sehaj',
            password: 'sehaj',
            width: '40vw',
            id: 3
        },
        {
            name: 'Tenzies game',
            description: `A personal React project that provides a user-friendly, responsive interface for clicking and rolling dice until all numbers match.`,
            skills: ['React', 'Javascript', 'CSS', 'HTML', 'Git'],
            github: 'https://github.com/sehaj1408/tenzies-react',
            view: 'https://tenzies-react-sehaj.vercel.app/',
            image: 'tenziesImage.png',
            width: '30vw',
            id: 4
        },
        {
            name: 'Pokédex Web App',
            description: `A web application that enables users to search for Pokémon by name or number, displaying relevant results and their details.`,
            skills: ['Javascript', 'HTML', 'CSS', 'DOM', 'Git', 'VS Code', 'AWS'],
            github: 'https://github.com/sehaj1408/se3316-lab1-snaangal',
            image: 'pokedexImage.png',
            width: '45vw',
            id: 5
        },
        {
            name: 'Manufacturing Database Project',
            description: `A database project utilizing various SQL query techniques, including DDL, DML, and DQL, to efficiently manage a manufacturing management system.`,
            skills: ['MySQL', 'MySQLWorkbench', 'Data modelling', 'Normalization', 'Git'],
            github: 'https://github.com/AlexandraLHeureuxECE/assignment-3-group-22',
            image: 'manufacturingImage.png',
            width: '35vw',
            id: 6
        },
    ]

    const projectsElements = projectsArray.map((project, index) => {
        return <Project 
            key = {index}
            details = {project}
        />
    }) 

    const skillsArr = [
        {name: 'Javascript', padding: '2px', height: '60px', width: '105px', image: 'javascriptImage.png'},
        {name: 'HTML', padding: '2px', height: '60px', width: '63px', image: 'htmlImage.png'},
        {name: 'CSS', padding: '2px', height: '60px', width: '43px', image: 'cssImage.png'},
        {name: 'Swift', padding: '6px', height: '60px', width: '60px', image: 'swiftImage.png'},
        {name: 'SQL', padding: '7px', height: '50px', width: '85px', image: 'sqlImage.png'},
        {name: 'Java', padding: '3px', height: '52px', width: '40px', image: 'javaImage.png'},
        {name: 'React', padding: '8px', height: '52px', width: '58px', image: 'reactImage.png'},
        {name: 'Github', padding: '5px', height: '54px', width: '54px', image: 'githubImage.png'},
        {name: 'Node.js', padding: '9px', height: '50px', width: '70px', image: 'nodejsImage.png'},
        {name: 'Express', padding: '12px', height: '51px', width: '110px', image: 'expressImage.png'},
        {name: 'REST', padding: '8px', height: '53px', width: '55px', image: 'restapiImage.png'},
        {name: 'AWS', padding: '10px', height: '52px', width: '68px', image: 'awsImage.png'},
    ]

    const skillsElements = skillsArr.map((skill, index) => {
        return <Skills 
            key = {index}
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

    const educationElements = educationArr.map((item, index) => {
        return <Education 
            key = {index}
            westernImage = {item.westernImage}
            degree = {item.degree}
            wdsImage = {item.wdsImage}
            clubs = {item.clubs}
        />
    })

    return (
        <div className='app-container'>
            <MyNavbar />

            <About />

            <div className='projects-container-navbar' id='projects-container-navbar'></div>

            <motion.h2 
                className='projectsAndExperiences' 
                id='projectsAndExperiences'
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
                <h2 data-aos='fade-down' data-aos-anchor-placement='bottom-bottom' className='contact-header'>Get in Touch</h2>
                <Contact 
                    name = 'Sehaj Naangal'
                    email = 'sehajnaangal@gmail.com'
                    number = '647-674-0529'
                    linkedInImage = 'linkedinImage.png'
                    githubImage = 'githubImage.png'
                />
            </div>
            <footer className='footer'>
                <p className='copyright-details'>Created by</p>
                <p className='copyright-title'>SEHAJ NAANGAL</p>
            </footer>
        </div>
    )
}