import React from 'react';
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
            description: `iOS app personal project that allows users to view upcoming 
            seminars and conferences, registered programs, speakers and details 
            for each seminar, as well as participate in real-time messaging.`,
            skills: `Swift • Xcode • REST API • Firebase • UIKit • 
            Storyboards • Spatial reasoning`,
            image: 'capicImage.png',
            id: 1
        },
        {
            name: 'Music Web App',
            description: `Web app that allows users to interact with music metadata 
            by saving and editing playlists, searching tracks, creating an account, 
            adding rating/comments, and more.`,
            skills: `Javascript • REST API • Node.js • HTML • CSS • Express • 
            Firebase • Git • VS Code • Amazon EC2 • Postman`,
            github: 'https://github.com/sehaj1408/se3316-sehaj1408-Hersh-SS-coopercunningham-lab4',
            image: 'capicImage.png',
            id: 2
        },
        {
            name: 'Pokédex Web App',
            description: `Web app that allows users to search Pokémon by name or 
            number and displays matches and their details.`,
            skills: `Javascript • HTML • CSS • DOM • Git • VS Code • Amazon EC2`,
            github: 'https://github.com/sehaj1408/se3316-lab1-snaangal',
            image: 'capicImage.png',
            id: 3
        },
        {
            name: 'Manufacturing Database Project',
            description: `Database project that uses different types of SQL 
            queries like DDL, DML, and DQL to manage a 
            manufacturing management system.`,
            skills: `MySQL • MySQLWorkbench • Data modelling • Normalization • Git`,
            github: 'https://github.com/AlexandraLHeureuxECE/assignment-3-group-22',
            image: 'capicImage.png',
            id: 4
        }
    ]

    const [capicState, setCapicState] = React.useState(false);
    const [musicState, setMusicState] = React.useState(false);
    const [pokedexState, setPokedexState] = React.useState(false);
    const [manufacturingState, setManufacturingState] = React.useState(false);

    const statesArray = [capicState, musicState, pokedexState, manufacturingState];

    const projectsElements = projectsArray.map((project, index) => {
        return <Project 
            details = {project}
            handleClick = {handleProjectDisplay}
            showDetails = {statesArray[index]} 
        />
    }) 

    function handleProjectDisplay(id) {
        switch (id) {
            case 1:
                setCapicState(prevState => {
                return !prevState;
                })
                break;
            case 2:
                setMusicState(prevState => {
                return !prevState;
                })
                break;
            case 3:
                setPokedexState(prevState => {
                return !prevState;
                })
                break;
            case 4:
                setManufacturingState(prevState => {
                return !prevState;
                })
                break;
        }
    }

    return (
        <div>
            <Navbar />
            <About />
            {projectsElements}
            <Skills />
            <Education />
            <Experience />
            <Contact />
        </div>
    )
}