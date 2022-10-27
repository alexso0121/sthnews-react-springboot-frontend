import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Layout.css'




function Layout() {
  return (
    <Navbar style={{"backgroundColor":"rgb(146, 212, 246)"}} variant='dark'expand="lg">
      <Container className="container" fluid >
        <Navbar.Brand href="/"><strong>STH News</strong></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ 'fontSize': '20px' }}
            navbarScroll
          >
            <Nav.Link style={{'color':"white"}} href="/">Home</Nav.Link>
            <Nav.Link style={{'color':"white"}} href="/login">Login</Nav.Link>
            
            
            <NavDropdown style={{'color':"white"}} title="New" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
          
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  }

export default Layout;