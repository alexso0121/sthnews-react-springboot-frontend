    import { useState } from "react"
import { SplitButton } from "react-bootstrap"
    import { useNavigate, useParams } from "react-router-dom"
    
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
    
    return ( /*  */
        
       <div style={{"padding":"5px"}}>{islive}
            <h3>{title}</h3>
            <img src={image}></img>
            <p>{date}</p>
            <p><strong>{description}</strong></p>
           <p style={{"lineHeight":"300%"}}>{content}</p>
            
        <a href={url}>go bbc news</a></div>
     );}
    export default Article;