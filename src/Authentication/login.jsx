
import Button from 'react-bootstrap/Button';
import './Auth.css'
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useEffect } from 'react';
import Axios  from 'axios';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Alert from 'react-bootstrap/Alert';
import { useAuth, Usercontext } from '../Usercontext';
import { useContext } from 'react';
import { CatStateContext } from '../CatStateContext';



 


 const Login=()=>  {
    /* const {userStatus, setUserStatus}=useContext(Usercontext)
    const [user,setUser]=useState('')
    const auth=useAuth()
  console.log(userStatus) */
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
    


  function handlesubmit(e){
    e.preventDefault();
    if(nameRef.current.value==''){
        setPwtoast(true)
    }else{
    getPassword(e);}
    //e.target.reset();
   
}

const getPassword = async (e) => {
    //https://sthbackend.com/
    const name=nameRef.current.value
    const password=passwordRef.current.value
    /* //const baseurl=useContext(CatStateContext) */
    try{
    const res = await Axios.post(baseurl+"token",{},{
        auth:{
            username:name,
            password:password//passwordRef.current.value
        }
        
    });
    
        console.log("Ture Password");
        console.log(name)
        console.log(res.data)
        localStorage.setItem('token',res.data)
        localStorage.setItem('name',name)
        localStorage.setItem('loginstatus',true);
        localStorage.setItem("greeting",true);
        if(storedbeforereg){navigate('/article/'+storedbeforereg+"/get/");
        localStorage.removeItem("storedbeforereg");
        window.location.reload();
        }else{ 
           
        navigate('/');
        window.location.reload();}
       
        
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