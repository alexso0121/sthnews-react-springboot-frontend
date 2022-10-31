import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './News.css'

const NewsItem=({title,desciption,url,urlToImage,publishedAt,source})=>{
    return(
    <Card className="wholecard">
      <><Card.Img style={{"height":"500px"}} variant="top" src={urlToImage}/><Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
               {desciption}
            </Card.Text>
        </Card.Body><ListGroup className="list-group-flush">
                <ListGroup.Item></ListGroup.Item>
                <ListGroup.Item>Source: {source}</ListGroup.Item>
                <ListGroup.Item>Date: {publishedAt}</ListGroup.Item>
            </ListGroup><Card.Body>
                <Card.Link href={url}>Go to the news</Card.Link>
                <Card.Link href="#">Save news</Card.Link>
            </Card.Body></>
    </Card>)
 
}

export default NewsItem
 {/* <div>
        <img src={urlToImage} alt="New image"></img>
        <h3><a href={url}>{title}</a></h3>
        <p>{desciption}</p>
    </div> */}