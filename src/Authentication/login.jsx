
import Button from 'react-bootstrap/Button';
import './Auth.css'
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useEffect } from 'react';
import Axios  from 'axios';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth, Usercontext } from '../Usercontext';
import { useContext } from 'react';



 


 const Login=(props)=>  {
    /* const {userStatus, setUserStatus}=useContext(Usercontext)
    const [user,setUser]=useState('')
    const auth=useAuth()
  console.log(userStatus) */
    const [password,setPassword]=useState("null");
    const [readytosubmit,setReadytosubmit]=useState(false)
    const [ablelogin,setAblelogin]=useState(false)

    const nameRef=useRef("");
    const navigate=useNavigate();
    //var name=nameRef.current.value;
    const passwordRef=useRef("hfs");
    console.log(nameRef.current.value)
    

  function handlesubmit(e){
    e.preventDefault();
    getPassword(e);
    //e.target.reset();
   
}

const getPassword = async (e) => {
        
    const res = await Axios.get("http://localhost:8080/api/User/"+nameRef.current.value);
    console.log(res.data.password)
    if(passwordRef.current.value===res.data.password){
        console.log("Ture Password");
        console.log(nameRef.current.value)
        console.log(res.data.id)
        localStorage.setItem('userid',res.data.id)
        localStorage.setItem('name',nameRef.current.value)
        localStorage.setItem('loginstatus',true);
        
        navigate('/');
        window.location.reload()

    }else{
        console.log("false password")
        e.target.reset();
    }
};
        
        
    
 
    
    
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
             </>) }//<--- this works fine <Link
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