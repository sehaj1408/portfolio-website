import React from 'react';
import './app.css'
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Project from './components/Project/Project';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';

export default function App() {
    const projectsArray = [
        {
            name: 'CapicConnect iOS App',
            description: `A personal iOS app project that offers users the capability to view upcoming seminars and conferences, registered programs, and speaker information, as well as the ability to participate in real-time messaging.`,
            skills: ['Swift', 'Xcode', 'ReST API', 'Firebase', 'UIKit', 'Storyboards', 'Spatial reasoning'],
            image: 'capicImage.png',
            width: '45vw',
            id: 1
        },
        {
            name: 'Music Web App',
            description: `A web application that provides users with the ability to interact with music metadata by performing actions such as saving and editing playlists, searching tracks, creating an account, adding ratings/comments, and more.`,
            skills: ['Javascript', 'REST API', 'Node.js', 'Express', 'AWS', 'Git', 'Postman', 'Firebase'],
            github: 'https://github.com/sehaj1408/se3316-sehaj1408-Hersh-SS-coopercunningham-lab4',
            image: 'musicImage.png',
            width: '45vw',
            id: 2
        },
        {
            name: 'Pokédex Web App',
            description: `A web application that enables users to search for Pokémon by name or number, displaying relevant results and their details.`,
            skills: ['Javascript', 'HTML', 'CSS', 'DOM', 'Git', 'VS Code', 'AWS'],
            github: 'https://github.com/sehaj1408/se3316-lab1-snaangal',
            image: 'pokedexImage.png',
            width: '50vw',
            id: 3
        },
        {
            name: 'Manufacturing Database Project',
            description: `A database project utilizing various SQL query techniques, including DDL, DML, and DQL, to efficiently manage a manufacturing management system.`,
            skills: ['MySQL', 'MySQLWorkbench', 'Data modelling', 'Normalization', 'Git'],
            github: 'https://github.com/AlexandraLHeureuxECE/assignment-3-group-22',
            image: 'manufacturingImage.png',
            width: '40vw',
            id: 4
        },
        {
            name: 'Tenzies game',
            description: `A personal React project that provides a user-friendly, responsive interface for clicking and rolling dice until all numbers match.`,
            skills: ['React', 'Javascript', 'CSS', 'HTML', 'Git'],
            github: 'https://github.com/sehaj1408/tenzies-react',
            image: 'tenziesImage.png',
            width: '35vw',
            id: 5
        }
    ]

    const projectsElements = projectsArray.map((project) => {
        return <Project 
            details = {project}
        />
    }) 

    return (
        <div>
            <Navbar />
            <About />
            <h2 className='projectsAndExperiences' id='projectsAndExperiences'>Projects I've worked on</h2>
            {projectsElements}
            <Skills />
            <Education />
            <Experience />
            <Contact />
        </div>
    )
}