
import Button from 'react-bootstrap/Button';
import './Auth.css'
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

import Axios  from 'axios';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

import { useContext } from 'react';
import { CatStateContext } from '../CatStateContext';



 //login 


 const Login=()=>  {
   
  const [pwtoast,setPwtoast]=useState(false)
    const [password,setPassword]=useState("null");
    const [readytosubmit,setReadytosubmit]=useState(false)
    const [ablelogin,setAblelogin]=useState(false)

    const nameRef=useRef("");
    const navigate=useNavigate();
    //var name=nameRef.current.value;
    const passwordRef=useRef("hfs");
    const storedbeforereg=localStorage.getItem("storedbeforereg")
    const baseurl=useContext(CatStateContext)
    console.log(nameRef.current.value)
    

    //submitting the form
  function handlesubmit(e){
    e.preventDefault();
    //if client with empty imput, raise the toast
    if(nameRef.current.value==''){
        setPwtoast(true)
    }else{
    getPassword(e);}
    
   
}

//authenticate the user by sending the info to backend and return json web token
const getPassword = async (e) => {
    
    const name=nameRef.current.value
    const password=passwordRef.current.value
   
    try{
    const res = await Axios.post(baseurl+"token",{},{
        auth:{
            username:name,
            password:password
        }
        
    });
    
        console.log("Ture Password");
        console.log(name)
        console.log(res.data)
        //store the data to the localstorage
        localStorage.setItem('token',res.data)
        localStorage.setItem('name',name)
        localStorage.setItem('loginstatus',true);
        localStorage.setItem("greeting",true);

        //if client click the store function before authentication , they will navigate to the register
        //In this event 'storedbeforereg' and the news_id is stored in the localstorage
        //After registration they will navigate to the news that they original are
        if(storedbeforereg){navigate('/article/'+storedbeforereg+"/get/");
        localStorage.removeItem("storedbeforereg");
        window.location.reload();
        }else{ 
        //navigate back to the main page
        navigate('/');
        window.location.reload();}
       
    //if wrong password or username, the form will reset with toast    
    }catch{
        console.log("error");
        e.target.reset();
        setPwtoast(true)
    }
};
        
    
    return (
            
        <><div style={{"height":"1000px"}}><div className='Registerform'>

          
            <h3>Login Form</h3><br></br>
            <Form onSubmit=/* {handlesubmit} */{handlesubmit} >
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Username</Form.Label>
                    <Form.Control ref={nameRef} type="username" placeholder="Enter your username" />

                </Form.Group><br></br>
                


                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                    
                </Form.Group><br></br>

               

                <Button variant="primary" type="submit">
                    Submit
                </Button><br/><br/>
                <a href='/register'>Don't have an account?</a>
            </Form>
            </div></div>
            <ToastContainer className="p-3" position="top-start" style={{ "width": "1000px", "color": "white", "margin-right": "0%" }}>

      <Toast onClose={() => setPwtoast(false)} show={pwtoast} delay={3000} bg="danger"  style={{ "marginTop": "25px"/* ,"marginRight":"20%","marginLeft":"20%","padding ":"0px" */ }} autohide>

        <Toast.Header>

          <strong className="me-auto">Wrong password or Username</strong>

        </Toast.Header>
      </Toast>
    </ToastContainer>
             </>) }
    


 
export default Login ; 
