import { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../images/1200px-Wrestling_pictogram.svg.png';
import { logOut } from "../services/authService";
import { getPositionsFromApi } from "../services/positionService";

const NavBar = ({props}) => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    getPositions();
  }, [])

  const getPositions = async () => {
    const response = await getPositionsFromApi();
    setPositions(response.data);
  }

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Brand href="/">Grapplepedia</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/addtechnique">Add Technique</Nav.Link>
              <Nav.Link href="/addposition">Add Position</Nav.Link>
              {/* List of positions */}
              <NavDropdown title="Positions" id="basic-nav-dropdown">
                <NavDropdown.Item href="/positions">All</NavDropdown.Item>
                {positions && positions.map(position => {
                  if (position.approved === 'true') {
                  return <NavDropdown.Item key={position._id} href={`/positions/${position._id}`}>
                    {position.name}
                  </NavDropdown.Item>
                  }
                })}
              </NavDropdown>
              <Nav.Link href="/techniques">
                All Techniques
              </Nav.Link>
              <NavDropdown title="Admin" id="basic-nav-dropdown">
                <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                <NavDropdown.Item href="/edittechniques">Edit Techniques</NavDropdown.Item>
                <NavDropdown.Item href="/editpositions">Edit Positions</NavDropdown.Item>
                <NavDropdown.Item onClick={logOut}>Log Out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
