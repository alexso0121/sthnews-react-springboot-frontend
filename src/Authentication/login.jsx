
import Button from 'react-bootstrap/Button';
import './Auth.css'
import Form from 'react-bootstrap/Form';



 


 const Login=(props)=>  {
    
    
    return (
        <><div className='Registerform'>
            <h3>Login Form</h3><br></br>
            <Form onSubmit={props.login}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username" placeholder="Enter your username" />

                </Form.Group><br></br>
                


                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    
                </Form.Group><br></br>

               

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form></div><Button onClick={props.login} variant="primary">Primary</Button> </>/* <Link
        to={{pathname:'/layout',state:loginStatus}} />*/)}
    


 
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