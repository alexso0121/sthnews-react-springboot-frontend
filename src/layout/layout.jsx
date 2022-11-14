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
  const storedhref="/stored/"+userid+"/get"
  const [show,setShow]=useState(false)
  
 
 useEffect(()=>{
  localStorage.getItem('loginstatus')
 },[])

 function logout(){
  console.log("logout")
  
  localStorage.removeItem('loginstatus')
  localStorage.removeItem('name')  
  localStorage.removeItem('userid')
  localStorage.removeItem('userinfo')
  localStorage.setItem("logout",true)
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
              <NavDropdown style={{ "fontFamily": "Georgia ",'color': "white" }} title="Your account" id="navbarScrollingDropdown">
                <NavDropdown.Item style={{"fontFamily": "Georgia "}} href={storedhref}>Stored News</NavDropdown.Item>
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
                <Nav.Link style={{ "fontFamily": "Georgia ",'color': "white" }} href="/register">New Register</Nav.Link></>}
                <Nav.Link style={{ "fontFamily": "Georgia ",'color': "white" }} href="/weather">Weather Forecast</Nav.Link>




          </Nav>


        </Navbar.Collapse>
      </Container>
    </Navbar></>
  );
  }

export default Layout;
