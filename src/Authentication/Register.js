import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import './Auth.css'
import { useContext, useEffect, useState } from 'react';
import  axios  from 'axios';
import qs from 'qs';
import { propTypes } from 'react-bootstrap/esm/Image';
import { Await, useNavigate } from 'react-router-dom';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { CatStateContext } from '../CatStateContext';
import Spinner from 'react-bootstrap/Spinner';


//signup
function Register() {
  const [name,setName]=useState('');
  const [password1,setPassword1]=useState('');
  const [password2,setPassword2]=useState('tyt');
  const [emailx,setEmailx]=useState('');
  const [success,setSuccess]=useState(null)
  const navigate=useNavigate()
  //const [validity,setValidity]=useState(true)
  const [passwordsnot,setPasswordsnot]=useState(false)
  const [validpw,setValidpw]=useState(false)
  const [emptyinput,setEmptyinput]=useState(false)
  const [wrongclick,setWrongclick]=useState(false)
  const storedbeforereg=localStorage.getItem("storedbeforereg")
  const baseurl=useContext(CatStateContext);
  const [isregistering,setIsregistering]=useState(false)
  

//?
  /* useEffect(()=>{
    
    if(localStorage.getItem("clickregister")){
      setWrongclick(true)
      
    }
  },[]) */

  //check for input data valid ,if true, reset and have warning
  function valid(e){
    //if empty input 
    if(name==''||emailx==''||password1==''){
      
      e.target.reset()
     
      setEmptyinput(true);
     
      
      return false;
      //if not identicals password
    }else if(password1!=password2){
      
      e.target.reset()
      
      setPasswordsnot(true);
      
      return false;
      //ensure a valid gmail
    }else if(emailx.endsWith("@gmail.com")==false){
      
      e.target.reset()
      
      setWrongclick(true);
      
      return false;
    }else if(typeof(password1)=="number"){
      e.target.reset();
     

      setValidpw(true);
      return false;
    }else{return true}
    
  }
//when client submitting the form
const handlesubmit=async (e) => {
    
    //verify
    e.preventDefault();
    
    window.scrollTo({top:0,left:0,behaviour:'smooth'})
     if(valid(e)==false){
       console.log("wrong")
        
    }else{ 
      //activate the loading statment
      setIsregistering(true)

        const username=name;
        const password=password1;
        const email=emailx;
       
       //sending to data to the backend and return a json web taken
        try{
        const res=await axios({
          method:"post",
          url:baseurl+"signup"  ,
          data:{
            username:username,
            password:password,
            email:email,
            roles:"ROLE_USER"
          }        
        });
        console.log(res.data)
        
        //if username already exist, reset and show reminder
        if(res.data=="repeated"){
          console.log("have username existed already");
          e.target.reset();
          setValidpw(true)

        }else{
          //success register,store data to the localhost
          console.log("successful register");
          localStorage.setItem('loginstatus','true')
          localStorage.setItem('token',res.data)
          localStorage.setItem('name',name)
          localStorage.setItem("greeting",true)

        //if client click the store function before authentication , they will navigate to the register
        //In this event 'storedbeforereg' and the news_id is stored in the localstorage
        //After registration they will navigate to the news that they original are
           if(storedbeforereg){navigate('/article/'+storedbeforereg+"/get/");
           
          localStorage.removeItem("storedbeforereg");
          window.location.reload();
        }else{ 
          //navigate to the main page
            navigate('/')
            window.location.reload();}

        }
      }catch{
        console.log("error")
        }
}}
       
 
  return (
    <><div style={{"height":"1000px"}}><div className='Registerform'>
      <h3>Registration Form</h3><br></br>
      <Form onSubmit={handlesubmit}>
        
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control onChange={(e) => setName(e.target.value)} type="username" placeholder="Enter your name" />

        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={(e) => setEmailx(e.target.value)} type="email" placeholder="Enter email" />
          
          <Form.Text className="text-muted">
            Please type a vaild gmail which endswith '@gmail.com'.We will sent a email through this email address after successful registration
          </Form.Text>
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={(e) => setPassword1(e.target.value)} type="password" placeholder="Password" />
        
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword2">
          <Form.Label>Password Comfirm</Form.Label>
          <Form.Control onChange={(e) => setPassword2(e.target.value)} type="password2" placeholder="Password" />
          <Form.Text className="text-muted">
            Please enter your enter your Password again
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        {isregistering==true&&<div style={{"fontFamily":"Georgia","fontSize":"15px"}} ><br/><p>Loading ,may need some time  <Spinner animation="border" size="sm" /></p></div>}<br/><br/>
        
        <a href='/login'>already have an account?</a>
      </Form></div></div>
      
      <ToastContainer className="p-3" position="top-start" style={{ "width": "1000px", "color": "white", "margin-right": "0%" }}>

<Toast onClose={() => setEmptyinput(false)} show={emptyinput} delay={3000} bg="danger" style={{ "marginTop": "25px" /* ,"marginRight":"20%","marginLeft":"20%","padding ":"0px" */ }} autohide>

  <Toast.Header>

    <strong className="me-auto">Incomplete inputs</strong>

  </Toast.Header>
</Toast>
</ToastContainer>
<ToastContainer className="p-3" position="top-start" style={{ "width": "1000px", "color": "white", "margin-right": "0%" }}>

        <Toast onClose={() => setPasswordsnot(false)} show={passwordsnot} delay={3000} bg="danger" style={{ "marginTop": "25px" /* ,"marginRight":"20%","marginLeft":"20%","padding ":"0px" */ }} autohide>

          <Toast.Header>

            <strong className="me-auto">Passwords not identical</strong>

          </Toast.Header>
        </Toast>
      </ToastContainer><ToastContainer className="p-3" position="top-start" style={{ "width": "1000px", "color": "white", "margin-right": "0%" }}>

<Toast onClose={() => setValidpw(false)} show={validpw} delay={3000} bg="danger" style={{ "marginTop": "25px" /* ,"marginRight":"20%","marginLeft":"20%","padding ":"0px" */ }} autohide>

  <Toast.Header>

    <strong className="me-auto">The username has already in use</strong>

  </Toast.Header>
</Toast>
</ToastContainer>{ <ToastContainer className="p-3" position="top-start" style={{ "width": "1000px", "color": "white", "margin-right": "0%" }}>

<Toast onClose={() => setWrongclick(false)} show={wrongclick} delay={3000} bg="danger" style={{ "marginTop": "25px" }} autohide>

  <Toast.Header>

    <strong className="me-auto">invalid email address! Your email should end with '@gmail.com'</strong>

  </Toast.Header>
</Toast>
</ToastContainer> }</>
  );
}


export default Register;