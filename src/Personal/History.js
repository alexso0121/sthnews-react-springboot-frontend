import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import Historyitem from "./Historyitem";
import ListGroup from 'react-bootstrap/ListGroup'

function History() {
    let {id}=useParams()
    console.log('jkdf')
    const [isloading,setIsloading]=useState(true)
    const [data,setData]=useState([])
    const [newsid,setNewsid]=useState(null)
    
          useEffect(()=>{
         Axios.get("http://localhost:8080/gethistory/"+id).then((res)=>{
            console.log(res.data)
            setData(res.data);
          
          setIsloading(false);
          
})},[])
          
         
        
     
     
    return ( <div><ListGroup><ListGroup.Item>
        {data?.map(({title,user_id,id,url})=>(
        <Historyitem
        title={title} 
        user_id={user_id} 
        url={url} 
        id={id} /> 
    ))}</ListGroup.Item></ListGroup></div> )
}

export default History ;