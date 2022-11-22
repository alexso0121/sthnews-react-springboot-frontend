import Axios  from "axios";
import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CatStateContext } from "../CatStateContext";
import "./info.css";


function Info() {
    const username=localStorage.getItem('name')
    const [userid,setUserid]=useState([])
    //const [name,setUsername]=useState([])
    const [userpw,setUserpw]=useState([])
    const [useremail,setUseremail]=useState([])
    const [userstatus,setUserstatus]=useState([])
    const navigate=useNavigate();
    const baseurl=useContext(CatStateContext)
    const token=localStorage.getItem("token")

    //showing the personal infomation of the user
    fetch(baseurl+"jpauser/"+username,{headers:{"Authorization":"Bearer "+token}}).then
        (res=>{return res.json()}).then((jsonData)=>{
            console.log(jsonData)
        setUserid(jsonData.id)
        
        setUseremail(jsonData.email)
        setUserstatus(jsonData.roles)} )
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
{/*             //<p className="infotext">Password :{userpw}</p> */}
            <p className="infotext">Email :{useremail}</p>
            <p className="infotext">Roles :{userstatus}</p>
        </div>
       {/*  <Button onClick={handleedit} variant="primary">Edit</Button>{' '} */}
    </div> </div>);
}

export default Info;