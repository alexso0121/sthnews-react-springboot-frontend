import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import Historyitem from "./Historyitem";
import ListGroup from 'react-bootstrap/ListGroup'
import Storeditem from "./Storeditem";
import Button from 'react-bootstrap/Button';

function Stored() {
    let {id}=useParams()
    
    const [isloading,setIsloading]=useState(true)
    const [data,setData]=useState([])
    const [isedit,setIsedit]=useState(false);
    const [deleteresult,setDeleteResult]=useState(null);
    
    
          useEffect(()=>{
         Axios.get("http://localhost:8080/getstore/"+id).then((res)=>{
            console.log(res.data)
            setData(res.data);
            setIsloading(false);
            
            
          
          setIsloading(false);
          
})},[])
          

async function deleteDataByuser() {
        //get the id from input
       
    
    if (id){
          
        const res = await fetch("http://newsbackend.us-west-2.elasticbeanstalk.com/deleteallstore/"+id, { method: "DELETE" });
    
        const data = await res.text();
    
        const result = {
            
              data: data,
        };
    
        setDeleteResult(result);
           
        console.log(deleteresult.data)  
        }
      }
function deleteall(){
    deleteDataByuser()
    window.location.reload()
}

function edit(){
    if(isedit=== true ){
       
        setIsedit(false)
    }else{
    setIsedit(true);}
}      
        
     
     
    return (<div>{isloading===true&&<h1>Loading Stored News</h1>}
    <div style={{"display":"block","textAlign":"center","marginTop":"5%","marginBottom":"5%"}}>
        <h2 ><strong>{data.length} lines of stored News</strong></h2>
        </div><div>
            <Button  style={{"marginBottom":"5px"}}  onClick={()=>edit()} variant="warning">Edit</Button>
            {isedit===true&&<Button onClick={deleteall} style={{"marginBottom":"5px","marginLeft":"5px"}} variant="warning">Delete all</Button>}
            </div>
    <ListGroup >
        {data.map(({title,news_id,id,user_id})=>(
        <Storeditem
        edit={isedit}
        title={title} 
        id={id}
        news_id={news_id}
        user_id={user_id} /> 
    ))}</ListGroup></div> )
}

export default Stored;