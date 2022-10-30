import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Layout.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {loginStatus} from '../Authentication/login'
import { useLocation } from 'react-router-dom';




function Layout(props){
  /* let loginStatus=localStorage.getItem('loginstatus');
  console.log(loginStatus)
  function handlelogout(){
  console.log('logout')
  return localStorage.setItem("loginstatus",false)}  */
  const loginStatus=props.loginstatus

  console.log("layout: "+loginStatus)
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
           
             {loginStatus ===true ?
             <><form onSubmit={props.logout}><Nav.Link style={{ 'color': "white" }} href='/' type='submit'>Logout</Nav.Link></form>{/* <Nav.Link onClick={handlelogout} style={{ 'color': "white" }} href='/' type='submit'>Logout</Nav.Link> */}<NavDropdown style={{ 'color': "white" }} title="Your account" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Stored News</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                History
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Personal infomation
              </NavDropdown.Item>
            </NavDropdown></>:
            <><Nav.Link style={{ 'color': "white" }} href="/login">Login</Nav.Link>
            <Nav.Link style={{ 'color': "white" }} href="/register">New Register</Nav.Link></>
           }

            
            
           
          </Nav>
          
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search News"
              className="me-2"
              aria-label="Search News"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  }

export default Layout;
/*  function Layout(props) {
    const loginstatus=props.loginstatus;
    function islogin(loginstatus){
      if(loginstatus) return
      <><NavDropdown style={{ 'color': "white" }} title="Your account" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3">Stored News</NavDropdown.Item>
        <NavDropdown.Item href="#action4">
          History
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">
          Personal infomation
        </NavDropdown.Item>
      </NavDropdown><Nav.Link style={{ 'color': "white" }} href="#">Logout</Nav.Link></>;
    return <Nav.Link style={{'color':"white"}} href="/login">Login</Nav.Link>
    } */