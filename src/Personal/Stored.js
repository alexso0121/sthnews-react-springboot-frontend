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

function Stored() {
    const username=localStorage.getItem("name")
    const token=localStorage.getItem('token')
    
    const [isloading,setIsloading]=useState(true)
    const [data,setData]=useState([])
    const [isedit,setIsedit]=useState(false);
    const [deleteresult,setDeleteResult]=useState(null);
    const baseurl=useContext(CatStateContext)
    
    
          useEffect(()=>{
         Axios.get(baseurl+"getstore/"+username,{headers:{"Authorization":"Bearer "+token}}).then((res)=>{
            console.log(res.data)
            setData(res.data);
            setIsloading(false);
            
            
          
          /* setIsloading(false) */;
          
})},[])
          

async function deleteDataByuser() {
        //get the id from input
       
    
   
          
        const res = await axios.delete(baseurl+"deleteallstore/"+username,{headers:{"Authorization":"Bearer "+token}});
    
        const data = await res.text();
    
        const result = {
            
              data: data,
        };
    
        setDeleteResult(result);
           
        console.log(deleteresult.data)  
        
      }
function deleteall(){
    deleteDataByuser()
   window.location.reload();
    
}

function edit(){
    if(isedit=== true ){
       
        setIsedit(false);
    }else{
    setIsedit(true);}
}      
        
     
     
    return (<>{isloading === true ? <div className='loading'><h1><strong>Loading Stored News<br/><br/> 
    <Spinner animation="border" /></strong></h1></div> :
    <div className="wholebody" /* style={{"height":"1000px"}} */>{/* {isloading===true&&<h1>Loading Stored News</h1>} */}
    <div className="wholelayout" /* style={{"display":"block","textAlign":"center","marginTop":"5%","marginBottom":"5%"}} */>
        <h2 ><strong>{data.length} lines of stored News</strong></h2>
        </div><div>
            { data.length!==0&&<Button  style={{"marginBottom":"5px","marginLeft":"3px"}}  onClick={()=>edit()} variant="warning">Edit</Button>}
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