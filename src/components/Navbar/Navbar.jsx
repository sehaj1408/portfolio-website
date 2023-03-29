import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function MyNavbar() {
  return (
    <Navbar bg="dark" expand="lg" variant='dark' className='nav'>
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
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