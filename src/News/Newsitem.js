import React, { useContext } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { json, useNavigate } from "react-router-dom";
import { CatStateContext } from "../CatStateContext";
import './News.css'

//block of news in each newslist homepage
const NewsItem=({title,url,image,id,date,category})=>{
    
    const navigate=useNavigate();
    const username=localStorage.getItem("name")
    const baseurl=useContext(CatStateContext)
    const token=localStorage.getItem("token")

    //defining the category
        var cat;
        if(category==1){
            cat= "World"
        }else if(category==2){
            cat=  "Business"
        }else if(category==3){
            cat=  "Technology"
        }else if(category==4){
            cat=  "Entertainment"
        }
    
        //sending news history to the backend if authenticate
    function sendarticle(){
        //if not authenticate navigate to article.js to watch the news
            if(!localStorage.getItem("loginstatus")){
                
                navigate("/article/"+id +"/get")
                
        //if authenticate, send the news that the client click as history        
            }else{
        
            const user={"news_id":id,
                        "date":date,"username":username,
                        "title":title};
            console.log(user);
    
            fetch(baseurl+'clicknews',{
                method:'POST',
                headers:{"Authorization":"Bearer "+token,"Content-Type":"application/json"},
                body:JSON.stringify(user)
            }).then((res)=>{
                console.log("user clicked a news");
                return res.json()
                
                
            }).then((result=>{
               
                navigate('/article/'+id +'/get')
                
            }))}}
           
    return(
    <Card className="wholecard">
      <><Card.Img  variant="top" src={image}/><Card.Body>
            <a href="#" style={{"textDecoration":"none","color":"black"}} onClick={()=>sendarticle()}><h3>{title}</h3></a>
            
        </Card.Body><ListGroup className="list-group-flush">
                {category!==0&&<ListGroup.Item>category: {cat}</ListGroup.Item>}
                <ListGroup.Item>Date: {date}</ListGroup.Item>
            </ListGroup></>
    </Card>)
 
}

export default NewsItem
 