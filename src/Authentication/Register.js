import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import './Auth.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import qs from 'qs';
import { propTypes } from 'react-bootstrap/esm/Image';
import { useNavigate } from 'react-router-dom';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function Register(props) {
  const [name,setName]=useState('');
  const [password1,setPassword1]=useState('');
  const [password2,setPassword2]=useState('tyt');
  const [email,setEmail]=useState('');
  const [success,setSuccess]=useState(null)
  const navigate=useNavigate()
  //const [validity,setValidity]=useState(true)
  const [passwordsnot,setPasswordsnot]=useState(false)
  const [validpw,setValidpw]=useState(false)
  const [emptyinput,setEmptyinput]=useState(false)
  const [wrongclick,setWrongclick]=useState(false)
  const newsclicked=localStorage.getItem("clickregister")


  useEffect(()=>{
    
    if(localStorage.getItem("clickregister")){
      setWrongclick(true)
      

      //localStorage.removeItem("clickregister")
    }
  },[])
  function valid(e){
    if(name==''||email==''||password1==''){
      //setEmail('');setName('');setPassword1('');setPassword2('');
      e.target.reset()
     
      setEmptyinput(true);
      //window.location.reload();
      
      
      return false;
    }else if(password1!=password2){
      //setEmail('');setName('');setPassword1('');setPassword2('')
      e.target.reset()
      
      //window.location.reload();
      setPasswordsnot(true);
      
      return false;
    }else if(typeof(password1)=="number"){
      e.target.reset();
      //window.location.reload();

      setValidpw(true);
      return false;
    }else{return true}
    
  }

  function handlesubmit(e){
    var success;
    //verify
    e.preventDefault();
    window.scrollTo({top:0,left:0,behaviour:'smooth'})
     if(valid(e)==false){
       console.log("wrong")
        
    }else{ 
    
        const user={"name":name,"password":password1,"email":email,"status":"member"};
        console.log(user);
//https://newsweb.us-west-2.elasticbeanstalk.com/api/addUser
        fetch('https://sthbackend.com/api/addUser',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(user)
        }).then((res)=>{return res.json()
            
        }).then((JsonData)=>{
          console.log(JsonData.id)
          if(JsonData.id){
            localStorage.setItem('loginstatus','true')
          localStorage.setItem('name',name)
          console.log(JsonData.id)
          localStorage.setItem('userid',JsonData.id)
          localStorage.setItem("greeting",true)
          if(newsclicked){navigate('/article/'+newsclicked+"/get/");
          localStorage.removeItem("clickregister");}else{
            navigate('/')
            window.location.reload();}
          }else{e.target.reset();setValidpw(true)}
          /*  */
        })}}
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
    <><div style={{"height":"1000px"}}><div className='Registerform'>
      <h3>Register Form</h3><br></br>
      <Form onSubmit={handlesubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control onChange={(e) => setName(e.target.value)} type="username" placeholder="Enter your name" />

        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group><br></br>


        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={(e) => setPassword1(e.target.value)} type="password" placeholder="Password" />
         {/*  {passwordsnot===true&&<p style={{"fontSize":"10px","color":"red"}}>password not identical</p>} */}
          <Form.Text className="text-muted">
            Your password must be 8-20 characters long, contain letters and numbers,
            and must not contain spaces, special characters, or emoji.
          </Form.Text>
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
        </Button><br/><br/>
        <a href='/login'>already have an account?</a>
      </Form></div></div><ToastContainer className="p-3" position="top-start" style={{ "width": "1000px", "color": "white", "margin-right": "0%" }}>

<Toast onClose={() => setEmptyinput(false)} show={emptyinput} delay={3000} bg="danger" style={{ "marginTop": "25px" /* ,"marginRight":"20%","marginLeft":"20%","padding ":"0px" */ }} autohide>

  <Toast.Header>

    <strong className="me-auto">Incomplete inputs</strong>

  </Toast.Header>
</Toast>
</ToastContainer><ToastContainer className="p-3" position="top-start" style={{ "width": "1000px", "color": "white", "margin-right": "0%" }}>

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
</ToastContainer><ToastContainer className="p-3" position="top-start" style={{ "width": "1000px", "color": "white", "margin-right": "0%" }}>

<Toast onClose={() => setWrongclick(false)} show={wrongclick} delay={3000} bg="danger" style={{ "marginTop": "25px" /* ,"marginRight":"20%","marginLeft":"20%","padding ":"0px" */ }} autohide>

  <Toast.Header>

    <strong className="me-auto">Please Register before continue !</strong>

  </Toast.Header>
</Toast>
</ToastContainer></>
  );
}


export default Register;