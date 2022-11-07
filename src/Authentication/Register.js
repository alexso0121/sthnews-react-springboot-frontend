import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import './Auth.css'
import { useRef, useState } from 'react';
import axios from 'axios';
import qs from 'qs';
import { propTypes } from 'react-bootstrap/esm/Image';
import { useNavigate } from 'react-router-dom';

function Register(props) {
  const [name,setName]=useState('');
  const [password1,setPassword1]=useState('');
  const [password2,setPassword2]=useState('');
  const [email,setEmail]=useState('');
  const [success,setSuccess]=useState(null)
  const navigate=useNavigate()

  function handlesubmit(e){
    var success;
    //verify
    e.preventDefault();
        const user={"name":name,"password":password1,"email":email,"status":"member"};
        console.log(user);

        fetch('http://newsbackend.us-west-2.elasticbeanstalk.com/api/addUser',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(user)
        }).then((res)=>{return res.json()
            
        }).then((JsonData)=>{
          localStorage.setItem('loginstatus','true')
          localStorage.setItem('name',name)
          console.log(JsonData.id)
          localStorage.setItem('userid',JsonData.id)
            navigate('/')
            window.location.reload();
        })}
        /* console.log(success)
        if(success===true){
          console.log('success')
          
          
        } */
  
  

  /* const registerUser=async ()=>{
    let data={"name":nameRef.current.value,
              "email":emailRef.current.value,
              "password":password1Ref.current.value,
              "status":"member"}
              console.log(data)
              fetch('http://localhost:8080/api/User',{
                method:'POST',
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(data)
            }).then(()=>{
                console.log("new user added")
            })
     axios.post("http://localhost:8080/api/addUser",qs.stringify({data}))
            .then(res=>{console.log('res=>',res)}) 
  } */
 
  return (
    <div className='Registerform' >
      <h3>Register Form</h3><br></br>
    <Form onSubmit={handlesubmit} >
        <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control onChange={(e)=>setName(e.target.value)} type="username" placeholder="Enter your name" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group><br></br>


      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={(e)=>setPassword1(e.target.value)} type="password" placeholder="Password" />
        <Form.Text className="text-muted">
        Your password must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.
        </Form.Text>
      </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicPassword2">
        <Form.Label>Password Comfirm</Form.Label>
        <Form.Control onChange={(e)=>setPassword2(e.target.value)} type="password2" placeholder="Password" />
        <Form.Text className="text-muted">
        Please enter your enter your Password again
        </Form.Text>
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form></div>
  );
}


export default Register;