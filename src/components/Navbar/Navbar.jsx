import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';
import { motion } from 'framer-motion';

export default function MyNavbar() {
    function scrollToComponent(id) {
        const component = document.getElementById(id);
        window.scrollTo({
            top:component.offsetTop,
            behavior: 'smooth'
        })
    }
    
    return (
        <Navbar expand="lg" className='nav'>
            <Container className='nav-container'>
                <button onClick={() => scrollToComponent('about')} className='nav-brand'><img src={require('../../images/s-logo.png')} alt="" className='nav-image-logo'/> Sehaj</button>
                <Navbar.Toggle aria-controls="navbarSupportedContent" className='nav-hamburger-icon'/>
                <Navbar.Collapse id="basic-navbar-nav" className='nav-hamburger-menu'>
                    <Nav className='nav-buttons'>
                        <button onClick={() => scrollToComponent('about')}>ABOUT</button>
                        <button onClick={() => scrollToComponent('projects-container-navbar')}>PROJECTS</button>
                        <button onClick={() => scrollToComponent('skills-container-navbar')}>TECHNOLOGIES</button>
                        <button onClick={() => scrollToComponent('education-container-navbar')}>EDUCATION</button>
                        <button onClick={() => window.open('https://drive.google.com/file/d/1zc82GDtKw-6w2-fLYeU0FF52gVg-VVjC/view?usp=share_link', '_blank')}>RESUME</button>
                        <button onClick={() => scrollToComponent('contact-container-navbar')}>CONTACT</button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}




// import React, { useEffect } from 'react';
// import './navbar.css';
// import { motion } from 'framer-motion';
// import Aos from 'aos';
// import 'aos/dist/aos.css';
// import { FaBars, FaTimes } from 'react-icons/fa';

// export default function Navbar() {
//     useEffect(() => {
//         Aos.init({});
//     }, []);

//     function scrollToComponent(id) {
//         const component = document.getElementById(id);
//         window.scrollTo({
//             top:component.offsetTop,
//             behavior: 'smooth'
//         })
//     }

//     const [showNavbar, setShowNavbar] = React.useState(false);

//     function handleShowNavBar() {
//         setShowNavbar(prevState => {
//             return !prevState;
//         })
//     }

//     return (
//         <motion.nav 
//             style={{ top: '-100px' }}
//             animate={{ y: 100 }}
//             transition={{ type: "spring", stiffness: 30 }}
//             className='nav'
//         >
//             {/* {showNavbar && (
//                 <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
//                     <button className='nav-closeBtn'>
//                         <FaTimes />
//                     </button>
//                 </div>
//             )} */}
//             <motion.ul>
//                 <motion.li>
//                     <button onClick={() => scrollToComponent('about')}>ABOUT</button>
//                 </motion.li>
//                 <motion.li>
//                     <button onClick={() => scrollToComponent('projects-container-navbar')}>PROJECTS</button>
//                 </motion.li>
//                 <motion.li>
//                     <button onClick={() => scrollToComponent('skills-container-navbar')}>TECHNOLOGIES</button>
//                 </motion.li>
//                 <motion.li>
//                     <button onClick={() => scrollToComponent('education-container-navbar')}>EDUCATION</button>
//                 </motion.li>
//                 <motion.li>
//                     <button onClick={() => window.open('https://drive.google.com/file/d/1zc82GDtKw-6w2-fLYeU0FF52gVg-VVjC/view?usp=share_link', '_blank')}>RESUME</button>
//                 </motion.li>
//                 <motion.li>
//                     <button onClick={() => scrollToComponent('contact-container-navbar')}>CONTACT</button>
//                 </motion.li>
//             </motion.ul>
//             {/* <button onClick={handleShowNavBar} className='nav-openBtn'>
//                 <FaBars />
//             </button> */}

//         </motion.nav>
//     )
// }