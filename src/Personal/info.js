import Axios  from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Info() {
    const username=localStorage.getItem('name')
    const [userid,setUserid]=useState([])
    //const [name,setUsername]=useState([])
    const [userpw,setUserpw]=useState([])
    const [useremail,setUseremail]=useState([])
    const [userstatus,setUserstatus]=useState([])
    const navigate=useNavigate();
    

    fetch("https://newsweb.us-west-2.elasticbeanstalk.com/"+username).then
        (res=>{return res.json()}).then((jsonData)=>{
        setUserid(jsonData.id)
        setUserpw(jsonData.password);setUseremail(jsonData.email)
        setUserstatus(jsonData.status)} )
       console.log(userstatus)  
    
    function handleedit(){
        const info={"id":userid,"name":username,"pw":userpw,"email":useremail,"status":userstatus}
        localStorage.setItem("userinfo",JSON.stringify(info));
        navigate("/updateuser")

    }
    return ( <div>
       <h1>User info</h1> 
        <div>
             <h3>id :{userid}</h3> 
            <h3>Name :{username}</h3>
            <h3>Password :{userpw}</h3>
            <h3>Email :{useremail}</h3>
            <h3>Status :{userstatus}</h3>
        </div>
        <Button onClick={handleedit} variant="secondary">Edit</Button>{' '}
    </div> );
}

export default Info;