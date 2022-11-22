import { useState,useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import Historyitem from "./Historyitem";
import ListGroup from 'react-bootstrap/ListGroup'
import './person.css'
import { CatStateContext } from "../CatStateContext";

//showing the watch news history of the user
function History() {
   
    console.log('jkdf')
    const [isloading,setIsloading]=useState(true)
    const [data,setData]=useState([])
    const baseurl=useContext(CatStateContext)
    const [newsid,setNewsid]=useState(null)
    const Username=localStorage.getItem("name")
    const token=localStorage.getItem("token")
    //https://newsweb.us-west-2.elasticbeanstalk.com
    
    //get the history of the user
          useEffect(()=>{
           
         Axios.get(baseurl+"gethistory/"+Username,{headers:{"Authorization":"Bearer "+token}}).then((res)=>{
            console.log(res.data)
            setData(res.data);
          
          setIsloading(false);
          
}) .catch(err=>{console.log("is error")
localStorage.removeItem('loginstatus')
        localStorage.removeItem('name')  
        localStorage.removeItem('token')
        window.location.reload()
}) },[])
          
         
        
     
     
    return ( <div className="wholebody">
        
        <div className="wholelayout" ><h2 >
            <strong>Search History</strong></h2></div><ListGroup className="listgroup"> 
        {data?.map(({title,user_id,news_id,url})=>(
        <Historyitem 
        title={title} 
        user_id={user_id} 
        url={url} 
        news_id={news_id} /> 
    ))}</ListGroup></div> )
}

export default History ;