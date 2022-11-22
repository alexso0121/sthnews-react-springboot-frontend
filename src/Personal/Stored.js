import { useState,useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import Historyitem from "./Historyitem";
import ListGroup from 'react-bootstrap/ListGroup'
import Storeditem from "./Storeditem";
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import './person.css'
import { CatStateContext } from "../CatStateContext";
import axios from "axios";

//show the client stored news
function Stored() {
    const username=localStorage.getItem("name")
    const token=localStorage.getItem('token')
    
    const [isloading,setIsloading]=useState(true)
    const [data,setData]=useState([])
    const [isedit,setIsedit]=useState(false);
    const [deleteresult,setDeleteResult]=useState(null);
    const baseurl=useContext(CatStateContext)
    
        //get the store news of the client form the backend
          useEffect(()=>{
         Axios.get(baseurl+"getstore/"+username,
         {headers:{"Authorization":"Bearer "+token}}).then((res)=>{
            
            setData(res.data);
            setIsloading(false);
            
            
          
          
          
}) .catch(err=>{console.log("is error")
localStorage.removeItem('loginstatus')
        localStorage.removeItem('name')  
        localStorage.removeItem('token')
        window.location.reload()
}) },[])
          
//function for deleting all stored news of the clientt
async function deleteDataByuser() {
        
        const res = await axios.delete(baseurl+"deleteallstore/"+username,{headers:{"Authorization":"Bearer "+token}});
    
        const data = await res.text();
    
        const result = {
            
              data: data,
        };
    
        setDeleteResult(result);
           
        console.log(deleteresult.data)  
        
      }
//handle event when client click on delete all news
function deleteall(){
    deleteDataByuser()
   window.location.reload();
    
}

//show the event of delete buttom
function edit(){
    if(isedit=== true ){
       
        setIsedit(false);
    }else{
    setIsedit(true);}
}      
        
     
     
    return (<>
    {isloading === true ? <div className='loading'>
        <h1><strong>Loading Stored News<br/><br/> 
    <Spinner animation="border" /></strong></h1></div> :
    <div className="wholebody" >
    <div className="wholelayout" >
        <h2 ><strong>{data.length} lines of stored News</strong></h2>
        </div><div className="editbuttom">
            { data.length!==0&&<Button  style={{"marginBottom":"5px"}}  onClick={()=>edit()} variant="warning">Edit</Button>}
            {isedit===true&&<Button onClick={deleteall} style={{"marginBottom":"5px","marginLeft":"5px"}} variant="warning">Delete all</Button>}
            </div>

    <ListGroup className="listgroup" >
        {data.map(({title,news_id,id,user_id})=>(
        <Storeditem
        edit={isedit}
        title={title} 
        id={id}
        news_id={news_id}
        user_id={user_id} /> 
    ))}</ListGroup></div>}</> )
}

export default Stored;