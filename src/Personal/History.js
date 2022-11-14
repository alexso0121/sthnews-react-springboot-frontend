import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import Historyitem from "./Historyitem";
import ListGroup from 'react-bootstrap/ListGroup'
import './person.css'

function History() {
    let {id}=useParams()
    console.log('jkdf')
    const [isloading,setIsloading]=useState(true)
    const [data,setData]=useState([])
    const [newsid,setNewsid]=useState(null)
    //https://newsweb.us-west-2.elasticbeanstalk.com
          useEffect(()=>{
         Axios.get("https://sthbackend.com/gethistory/"+id).then((res)=>{
            console.log(res.data)
            setData(res.data);
          
          setIsloading(false);
          
})},[])
          
         
        
     
     
    return ( <div className="wholebody" /* style={{"height":"1000px"}} */>
        <div className="wholelayout" /* style={{"display":"block","text-align":"center","marginTop":"5%","marginBottom":"5%"}} */><h2 >
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