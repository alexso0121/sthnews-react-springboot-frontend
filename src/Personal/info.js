import Axios  from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./info.css"

function Info() {
    const username=localStorage.getItem('name')
    const [userid,setUserid]=useState([])
    //const [name,setUsername]=useState([])
    const [userpw,setUserpw]=useState([])
    const [useremail,setUseremail]=useState([])
    const [userstatus,setUserstatus]=useState([])
    const navigate=useNavigate();
    /* https://newsweb.us-west-2.elasticbeanstalk.com/ */

    fetch("https://sthbackend.com/api/User/"+username).then
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
    return ( <div style={{"height":"1000px"}}><div className='whole_info' >
       <h1 className="header">User info</h1><br/>
        <div>
            <img className="info_pict" src="https://icon-library.com/images/profile01-roundedblack-512.png"/>
             <p className="infotext">id :{userid}</p> 
            <p className="infotext">Name :{username}</p>
            <p className="infotext">Password :{userpw}</p>
            <p className="infotext">Email :{useremail}</p>
            <p className="infotext">Status :{userstatus}</p>
        </div>
       {/*  <Button onClick={handleedit} variant="primary">Edit</Button>{' '} */}
    </div> </div>);
}

export default Info;