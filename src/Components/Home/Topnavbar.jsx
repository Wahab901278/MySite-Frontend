import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
const Topnavbar = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light" className="topNavbar1">
        <Container>
          <Navbar.Brand className="brand">Abdul Wahab</Navbar.Brand>
          <Nav className="me-auto9 ">
            <NavLink to="/" className="nav-link">
              ABOUT ME
            </NavLink>
            <NavLink to="/resume" className="nav-link">
              RESUME
            </NavLink>
            <NavLink to="/projects" className="nav-link">
              PROJECTS
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              CONTACT
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Topnavbar;
