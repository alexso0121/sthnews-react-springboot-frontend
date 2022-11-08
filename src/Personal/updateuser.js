import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import '../Authentication/Auth.css'
import { useRef, useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { useNavigate } from 'react-router-dom';
import e from 'cors';

function Updateuser(props) {

  const infostring=localStorage.getItem('userinfo')
  const [name,setName]=useState(JSON.parse(infostring).name);
  const [password1,setPassword1]=useState(JSON.parse(infostring).pw);
  const [password2,setPassword2]=useState(JSON.parse(infostring).pw);
  const [email,setEmail]=useState(JSON.parse(infostring).email);
  const navigate=useNavigate()
  
  
  
  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  }
  

  async function putData(e) {
    
   
//current.check show boolean in tick form
    
      const putData = {
        "name": name,
        "password": password1,
        "email": email,
       
      };

      try {
        const res = await fetch("https://newsweb.us-west-2.elasticbeanstalk.com/api/update/"+name, {
          method: "put",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": "token-value",
          },
          body: JSON.stringify(putData),
        });

        if (!res.ok) {
          const message = `An error has occured: ${res.status} - ${res.statusText}`;
          throw new Error(message);
        }

        const data = await res.json();

        const result = {
          status: res.status + "-" + res.statusText,
          headers: { "Content-Type": res.headers.get("Content-Type") },
          data: data,
        };

        console.log(fortmatResponse(result));
      } catch (err) {
        console.log(err.message);
      
    }
  }

  function handlesubmit(e){
    console.log(e)
    e.preventDefault(); 
    //verify
    putData();
    navigate ('/info')
  }


 
  return (
    <div className='Registerform' >
      <h3>Update Personal Information</h3><br></br>
    <Form onSubmit={handlesubmit} >
        <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control value={name} onChange={(e)=>setName(e.target.value)} type="username" placeholder="Enter your name" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group><br></br>


      <Form.Group className="mb-3" controlId="formBasicPassword1">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={(e)=>setPassword1(e.target.value)} value={password1}  placeholder="Password" />
        <Form.Text className="text-muted">
        Your password must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.
        </Form.Text>
      </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicPassword2">
        <Form.Label>Password Comfirm</Form.Label>
        <Form.Control value={password2} onChange={(e)=>setPassword2(e.target.value)}  placeholder="Password" />
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


export default Updateuser;
