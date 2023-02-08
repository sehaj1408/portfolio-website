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
            width: '40vw',
            id: 1
        },
        {
            name: 'Music Web App',
            description: `A web application that provides users with the ability to interact with music metadata by performing actions such as saving and editing playlists, searching tracks, creating an account, adding ratings/comments, and more.`,
            skills: ['Javascript', 'REST API', 'Node.js', 'Express', 'AWS', 'Git', 'Postman', 'Firebase'],
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
        {name: 'Javascript', padding: '0px', image: 'javascriptImage.png'},
        {name: 'HTML', padding: '0px', image: 'htmlImage.png'},
        {name: 'CSS', padding: '0px', image: 'cssImage.png'},
        {name: 'Swift', padding: '0.4vw', image: 'swiftImage.png'},
        {name: 'SQL', padding: '0.6vw', image: 'sqlImage.png'},
        {name: 'Java', padding: '0px', image: 'javaImage.png'},
        {name: 'React', padding: '0.5vw', image: 'reactImage.png'},
        {name: 'Github', padding: '0.5vw', image: 'githubImage.png'},
        {name: 'Node.js', padding: '0.8vw', image: 'nodejsImage.png'},
        {name: 'Express', padding: '1.2vw', image: 'expressImage.png'},
        {name: 'REST API', padding: '0.3vw', image: 'restapiImage.png'},
        {name: 'AWS', padding: '1vw', image: 'awsImage.png'},
    ]

    const skillsElements = skillsArr.map((skill) => {
        return <Skills 
            name = {skill.name}
            padding = {skill.padding}
            image = {skill.image}
        />
    })

    return (
        <div>
            <Navbar />
            <About />
            <h2 className='projectsAndExperiences' id='projectsAndExperiences'>Projects I've worked on</h2>
            {projectsElements}
            <h2 className='skills-tools' id='skills-tools'>Tools and Technologies</h2>
            <div className='skills-container'>
                {skillsElements}
            </div>
            <Education />
            <Experience />
            <Contact />
        </div>
    )
}