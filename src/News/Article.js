    import { useState } from "react"
import { SplitButton } from "react-bootstrap"
    import { useNavigate, useParams } from "react-router-dom"
    import Button from 'react-bootstrap/Button';
    
    function Article () {
    const { id }=useParams()
    console.log(id)
    const navigate=useNavigate
    const [title,setTitle]=useState([])
    //const [name,setUsername]=useState([])
    const [description,setDescription]=useState([])
    const [image,setImage]=useState([])
    const [content,setContent]=useState([])
    const [date,setDate]=useState([])
    const [url,setUrl]=useState([])
    const userid=localStorage.getItem("userid")
    
    
    

     fetch("http://localhost:8080/getnews/"+id).then
        (res=>{return res.json()}).then((jsonData)=>{
        setTitle(jsonData.title)
        setDescription(jsonData.description);setImage(jsonData.image)
        setContent(jsonData.content);setDate(jsonData.date);setUrl(jsonData.url)} )
       
     
    function islive(){
        console.log("is live")
        if (content===Array.length(0)){
            navigate(url)
        }
     }
    function nextline(content){
        content.split('/n/')
        
        for(let block in content){
            <p>{JSON.stringify(block)}</p>
        }
       
    }
    function handlestored(){


                const Stored={"user_id":userid,
                                "news_id":id,
                                "title":title,
                            
                           };
                console.log(Stored);
        
                fetch('https://newsweb.us-west-2.elasticbeanstalk.com/addstore',{
                    method:'POST',
                    headers:{"Content-Type":"application/json"},
                    body:JSON.stringify(Stored)
                }).then((res)=>{
                    console.log("Stored a news");
                    return res.json()
                    
                    
                }).then((result=>{
                   //alert
                    
                }))}
    
    
    return ( /*  */
        
       <><div style={{ "padding": "5px" }}>{islive}
            <h3>{title}</h3>
            <img style={{"width":"auto"}} src={image}></img>
            <p>{date}</p>
            <p><strong>{description}</strong></p>
            <p style={{ "lineHeight": "300%" }}>{content}</p>

            <a  href={url}>go bbc news</a></div><Button onClick={handlestored} variant="warning">Stored as Favorite</Button></>
     );}
    export default Article;