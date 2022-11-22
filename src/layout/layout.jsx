import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Layout.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import {loginStatus} from '../Authentication/login'
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { useContext } from 'react';
import { Usercontext } from '../Usercontext';




function Layout(){
  const userStatus=localStorage.getItem('loginstatus')
 
  const historyhref="/history/get"
  const storedhref="/stored/get"
  const searchref=useRef(null)
  const navigate=useNavigate()
  
  
//logout function
 function logout(){
  console.log("logout")
  //delete the data in localstorage
  localStorage.removeItem('loginstatus')
  localStorage.removeItem('name')  
  localStorage.removeItem('token')
  localStorage.removeItem('userinfo')
  localStorage.setItem("logout",true)
 }

 //search function
 function handlesubmit(e){
  e.preventDefault();
  console.log("search"+searchref.current.value);
  navigate("/"+searchref.current.value)
  window.location.reload()

 }
  
  
  console.log(userStatus)
  console.log("layout: "+userStatus)
  return (
    <><Navbar style={{ "backgroundColor": "rgb(14, 18, 30)", "fontFamily": "sans-serif" }} variant='dark' expand="lg">
      <Container className="container" fluid>
        <Navbar.Brand href="/"><strong style={{ "fontFamily": "Georgia ","fontSize":"25px" }}>STH News</strong></Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            navbarScroll
          >
            <Nav.Link style={{ "fontFamily": "Georgia ",'color': "white" }} href="/">Home</Nav.Link>
            
            {userStatus === 'true' ?
              <><Nav.Link onClick={logout} style={{ "fontFamily": "Georgia ",'color': "white" }} href='/' type='submit'>Logout</Nav.Link>
              <Nav.Link style={{ "fontFamily": "Georgia ",'color': "white" }} href="/weather">Weather Forecast</Nav.Link>
              
              <NavDropdown style={{ "fontFamily": "Georgia ",'color': "white" }} title="Your account" id="navbarScrollingDropdown">
                <NavDropdown.Item style={{"fontFamily": "Georgia "}} href={storedhref}>My News</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item style={{"fontFamily": "Georgia "}} href={historyhref}>
                  History
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item style={{"fontFamily": "Georgia "}} href="/info">
                  Personal infomation
                </NavDropdown.Item>
              </NavDropdown></> :
              
              <><Nav.Link style={{ "fontFamily": "Georgia ",'color': "white" }} href="/login">Login</Nav.Link>
                <Nav.Link style={{ "fontFamily": "Georgia ",'color': "white" }} href="/register">New Register</Nav.Link>
                <Nav.Link style={{ "fontFamily": "Georgia ",'color': "white" }} href="/weather">Weather Forecast</Nav.Link></>}


          </Nav>    
          <Form onSubmit={handlesubmit} className="d-flex">
            <Form.Control
              ref={searchref}
              type="search"
              placeholder="Search News (e.g Twitter )"
              className="me-2"
              aria-label="Search News"
            /> 
            <Button type='submit' variant="outline-light">Search</Button>
          
          </Form>

        </Navbar.Collapse>
      </Container>
    </Navbar></>
  );
  }

export default Layout;
