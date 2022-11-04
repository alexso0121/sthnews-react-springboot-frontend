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




function Layout(props){
  const userStatus=localStorage.getItem('loginstatus')
  const userid=localStorage.getItem("userid")
  const historyhref="/history/"+userid+"/get"
  
 
 useEffect(()=>{
  localStorage.getItem('loginstatus')
 },[])

 function logout(){
  console.log("logout")
  localStorage.removeItem('loginstatus')
  localStorage.removeItem('name')  
  localStorage.removeItem('userid')
  localStorage.removeItem('userinfo')
 }
  
  
  console.log(userStatus)
  console.log("layout: "+userStatus)
  return (
    <Navbar style={{"backgroundColor":"rgb(146, 212, 246)"}} variant='dark'expand="lg">
      <Container className="container" fluid >
        <Navbar.Brand href="/"><strong>STH News</strong></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            navbarScroll
          >
            <Nav.Link style={{'color':"white"}} href="/">Home</Nav.Link>
           
             {userStatus === 'true' ?
             <><Nav.Link onClick={logout} style={{ 'color': "white" }} href='/' type='submit'>Logout</Nav.Link>{/* <Nav.Link onClick={handlelogout} style={{ 'color': "white" }} href='/' type='submit'>Logout</Nav.Link> */}<NavDropdown style={{ 'color': "white" }} title="Your account" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Stored News</NavDropdown.Item>
              <NavDropdown.Item href={historyhref}>
                History
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/info">
                Personal infomation
              </NavDropdown.Item>
            </NavDropdown></>:
            <><Nav.Link style={{ 'color': "white" }} href="/login">Login</Nav.Link>
            <Nav.Link style={{ 'color': "white" }} href="/register">New Register</Nav.Link></>
           }

            
            
           
          </Nav>
          
          {/* <Form onSubmit={handlesubmit} className="d-flex">
            <Form.Control
              ref={searchref}
              type="search"
              placeholder="Search News"
              className="me-2"
              aria-label="Search News"
            />
            <Button type='submit' variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  }

export default Layout;
