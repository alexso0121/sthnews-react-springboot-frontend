import React, { useContext } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { json, useNavigate } from "react-router-dom";
import { CatStateContext } from "../CatStateContext";
import './News.css'


const NewsItem=({title,url,image,id,date,category})=>{
    //const date=publishedAt.substring(0,10)
    const navigate=useNavigate();
    const username=localStorage.getItem("name")
    const baseurl=useContext(CatStateContext)
    const token=localStorage.getItem("token")
    
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
    
    function sendarticle(){
            if(!localStorage.getItem("loginstatus")){
                /* localStorage.setItem("clickregister",id) */
                navigate("/article/"+id +"/get")
                
                
            }else{
        
        
        //verify
        
            const user={"news_id":id,
                        "date":date,"username":username,
                        "title":title};
            console.log(user);
    //https://sthbackend.com/clicknews
            fetch(baseurl+'clicknews',{
                method:'POST',
                headers:{"Authorization":"Bearer "+token,"Content-Type":"application/json"},
                body:JSON.stringify(user)
            }).then((res)=>{
                console.log("user clicked a news");
                return res.json()
                
                
            }).then((result=>{
                //var news_id=parseInt(result)
                navigate('/article/'+id +'/get')
                
            }))}}
            //console.log(category_string)
    return(
    <Card className="wholecard">
      <><Card.Img /* style={{"height":"380px"}} */ variant="top" src={image}/><Card.Body>
            <a href="#" style={{"textDecoration":"none","color":"black"}} onClick={()=>sendarticle()}><h3>{title}</h3></a>
            
        </Card.Body><ListGroup className="list-group-flush">
                {category!==0&&<ListGroup.Item>category: {cat}</ListGroup.Item>}
                <ListGroup.Item>Date: {date}</ListGroup.Item>
            </ListGroup>{/* <Card.Body>
                <Card.Link href={url}>Go to the news</Card.Link>
                
            </Card.Body> */}</>
    </Card>)
 
}

export default NewsItem
 