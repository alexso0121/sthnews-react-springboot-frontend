
import Button from 'react-bootstrap/Button';
import './Auth.css'
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useEffect } from 'react';
import Axios  from 'axios';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';



 


 const Login=(props)=>  {
    const [password,setPassword]=useState("null");
    const [readytosubmit,setReadytosubmit]=useState(false)
    const [ablelogin,setAblelogin]=useState(false)

    const nameRef=useRef("");
    const navigate=useNavigate();
    //var name=nameRef.current.value;
    const passwordRef=useRef("hfs");
    console.log(nameRef.current.value)
    
/* 
    useEffect(()=>{ 
        const getArticles = async () => {
            
            const res = await Axios.get("http://localhost:8080/api/password/"+name);
             setPassword(res.data);
            //console.log(password); 
            console.log(res.data)};getArticles()} ,[password] )
            
            
          // getArticles()}} ,[readytosubmit]   
    
        
       
    console.log(password)
    function handlesubmit(e){
        //must need
        e.preventDefault();
        //setAblelogin(true)
       
       if(passwordRef.current.value.toString()===password.toString()){
        console.log("Ture Password")
        props.login();
        navigate("/")
    }else{
        console.log("false password")
    }
  }; */
  function handlesubmit(e){
    e.preventDefault();
    getArticles(e);
    //e.target.reset();
   
}

const getArticles = async (e) => {
        
    const res = await Axios.get("http://localhost:8080/api/password/"+nameRef.current.value);
    console.log(res.data)
    if(passwordRef.current.value===res.data){
        console.log("Ture Password")
        props.handleusername(nameRef.current.value)
        props.login();
        navigate('/');
    }else{
        console.log("false password")
        e.target.reset();
    }
};
        
        
    
   /*  useEffect(()=>{
        console.log(nameRef.current.value)
        console.log(password) 
        console.log(passwordRef.current.value)
        if(passwordRef.current.value.toString()===password.toString()&&setReadytosubmit!==false){
            console.log("Ture Password")
        props.login()
        //navigate('/');
        }else{
            console.log("false password")
        }
    },[setReadytosubmit,password]) */
    
    
    return (
        <><div className='Registerform'>
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
                </Button>
            </Form>
            </div>
            
            <Button onClick={props.login} variant="primary">Primary</Button> </>) }//<--- this works fine <Link
        //to={{pathname:'/layout',state:loginStatus}} />*/)}
    


 
export default Login ; 
/* export default class Login extends Component{
 
      handlesubmit=e=>{
        e.preventDefault();
        const data={
            firstname:this.firstname
        }
        localStorage.setItem('loginstatus',true)
        console.log(data)
      

    }
    
    render() {
    return(
        <form onSubmit={this.handlesubmit} action="">
        <div>
            
            <label>last name</label>
            <input type="firstname" placeholder="Firstname" onChange={e=>this.firstname=e.target.value}
             />
        </div>
        <Button type='submit'  variant="primary">Primary</Button>
        </form>
    ) /* (
        
        <><Button onClick={handlesubmit} variant="primary">Primary</Button>{/* <Link
        to=/*  {{pathname:'/layout',state:loginStatus}} />/* }</>) 
    


 

 */