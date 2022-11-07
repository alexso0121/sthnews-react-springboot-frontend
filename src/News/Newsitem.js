import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { json, useNavigate } from "react-router-dom";
import './News.css'

const NewsItem=({title,desciption,url,urlToImage,publishedAt,source})=>{
    const date=publishedAt.substring(0,10)
    const navigate=useNavigate();
    const user_id=localStorage.getItem("userid")
    function sendarticle(){
        
        
        //verify
        
            const user={"title":title,
                        "description":desciption,
                        "url":url,"image":urlToImage,
                        "date":date,"user_id":user_id};
            console.log(user);
    
            fetch('http://newsbackend.us-west-2.elasticbeanstalk.com/clicknews',{
                method:'POST',
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(user)
            }).then((res)=>{
                console.log("user clicked a news");
                return res.json()
                
                
            }).then((result=>{
                var news_id=parseInt(result)
                navigate('/article/'+news_id +'/get')
                
            }))}
    return(
    <Card className="wholecard">
      <><Card.Img style={{"height":"500px"}} variant="top" src={urlToImage}/><Card.Body>
            <a href="#" style={{"textDecoration":"none"}} onClick={()=>sendarticle()}><h3>{title}</h3></a>
            <Card.Text>
               {desciption}
            </Card.Text>
        </Card.Body><ListGroup className="list-group-flush">
                <ListGroup.Item></ListGroup.Item>
                <ListGroup.Item>Source: {source}</ListGroup.Item>
                <ListGroup.Item>Date: {date}</ListGroup.Item>
            </ListGroup><Card.Body>
                <Card.Link href={()=>sendarticle}>Go to the news</Card.Link>
                
            </Card.Body></>
    </Card>)
 
}

export default NewsItem
 