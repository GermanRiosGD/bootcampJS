import { Link } from "react-router-dom";
import { AuthButton } from "./AuthButton";
import { Navbar, Nav } from "react-bootstrap";
export const NavbarComponent = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                    <Nav.Link><Link to="/about">About</Link></Nav.Link>
                    <Nav.Link><Link to="/users">Users</Link></Nav.Link>
                    <Nav.Link><Link to="/public">Public Page</Link></Nav.Link>
                    <Nav.Link><Link to="/protected">Protected Page</Link></Nav.Link>
                    <Nav.Link><AuthButton /></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}