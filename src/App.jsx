import React from 'react';
import About from './components/About/About';
import Projects from './components/Projects/Projects';

export default function App() {
    const capicDetails = {
        name: 'CapicConnect iOS App',
        description: `iOS app personal project that allows users to view upcoming 
        seminars and conferences, registered programs, speakers and details 
        for each seminar, as well as participate in real-time messaging.`,
        skills: `Swift • Xcode • REST API • Firebase • UIKit • 
        Storyboards • Spatial reasoning`
    }

    const musicDetails = {
        name: 'Music Web App',
        description: `Web app that allows users to interact with music metadata 
        by saving and editing playlists, searching tracks, creating an account, 
        adding rating/comments, and more.`,
        skills: `Javascript • REST API • Node.js • HTML • CSS • Express • 
        Firebase • Git • VS Code • Amazon EC2 • Postman`
    }

    const pokedexDetails = {
        name: 'Pokédex Web App',
        description: `Web app that allows users to search Pokémon by name or 
        number and displays matches and their details.`,
        skills: `Javascript • HTML • CSS • DOM • Git • VS Code • Amazon EC2`
    }

    const manufacturingDetails = {
        name: 'Manufacturing Database Project',
        description: `Database project that uses different types of SQL 
        queries like DDL, DML, and DQL to manage a 
        manufacturing management system.`,
        skills: `MySQL • MySQLWorkbench • Data modelling • Normalization • Git`
    }

    const [projectClicked, setProjectClicked] = React.useState(false);

    function handleProjectDisplay() {
        console.log('Hello');
    }

    return (
        <div>
            <About />
            <Projects details={capicDetails} handleClick={handleProjectDisplay}/>
            <Projects details={musicDetails} handleClick={handleProjectDisplay}/>
        </div>
    )
}