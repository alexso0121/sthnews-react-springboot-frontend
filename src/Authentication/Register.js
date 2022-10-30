import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import './Auth.css'

function Register() {

  return (
    <div className='Registerform' >
      <h3>Register Form</h3><br></br>
    <Form >
        <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="username" placeholder="Enter your name" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group><br></br>


      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        <Form.Text className="text-muted">
        Your password must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.
        </Form.Text>
      </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicPassword2">
        <Form.Label>Password Comfirm</Form.Label>
        <Form.Control type="password2" placeholder="Password" />
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