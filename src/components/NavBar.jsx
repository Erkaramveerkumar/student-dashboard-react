import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';

function NavBar() {
  const location = useLocation();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* {location.pathname === '/' &&
             <Nav.Link >
              <Link to="/">LOG-IN</Link>
            </Nav.Link>} */}

            {/* <Nav.Link >
                <Link to="/register">REGISTER</Link>
            </Nav.Link> */}
            {/* <Nav.Link >
              <Link to="/dashboard">DASHBOARD</Link>
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;