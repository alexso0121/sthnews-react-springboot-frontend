import { useEffect, useState } from "react"
import { SplitButton } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import "./Article.css"
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';   
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import Modal from 'react-bootstrap/Modal';

function Article () {
    const { id }=useParams()
    //console.log(id)
    const navigate=useNavigate
    const [title,setTitle]=useState([])
    //const [name,setUsername]=useState([])
    const [description,setDescription]=useState([])
    const [image,setImage]=useState([])
    const [content,setContent]=useState([])
    const [date,setDate]=useState([])
    const [url,setUrl]=useState([])
    const userid=localStorage.getItem("userid")
    const [show, setShow] = useState(false);
    const [isloading,setIsloading]=useState(true)
    const [showM, setShowM] = useState(false);
    
    
    

    useEffect(()=> {fetch("https://sthbackend.com/getnews/"+id).then
        (res=>{return res.json()}).then((jsonData)=>{
        setTitle(jsonData.title)
        setDescription(jsonData.description);setImage(jsonData.image)
        setContent(jsonData.content.split("/n/"));setDate(jsonData.date);setUrl(jsonData.url)
        setIsloading(false)} )},[])
       
     
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

                if(!localStorage.getItem("loginstatus")){
                    setShowM(true);
                    console.log("havent login")

                }else{
                const Stored={"user_id":userid,
                                "news_id":id,
                                "title":title,
                            
                           };
                window.scrollTo({top:0,left:0,behaviour:'smooth'})
                console.log(Stored);
                setShow(true)
                //https://newsweb.us-west-2.elasticbeanstalk.com
                fetch('https://sthbackend.com/addstore',{
                    method:'POST',
                    headers:{"Content-Type":"application/json"},
                    body:JSON.stringify(Stored)
                }).then((res)=>{
                    console.log("Stored a news");
                    return res.json()
                    
                    
                }).then((result=>{
                   
                   //alert
                    
                }))}}
    
    
    return ( 
       
        
       <><> {isloading === true ? <div className='loading'><h1><strong>Loading News<br/><br/> 
       <Spinner animation="border" /></strong></h1></div> :
       <><div className="article" /* style={{ "padding": "5px" }} */>{islive}
        <div /* style={{"textAlign":"center","margin":"0%"}} */> <h2 style={{ "marginTop": "20px", "marginBottom": "20px" }}><strong>{title}</strong></h2>
               
                <img className="picture" /* style={{"width":"500px"}} */ src={image}></img></div>
                <div ><p className="contentth">{date}</p>
                <p><strong>{description}</strong></p>
                {content.map(block=>(<p className="contentth" style={{ "lineHeight": "200%" }}>{block}</p>))}</div>

                <div><Button onClick={handlestored} variant="warning">Stored as Favorite</Button></div>
                <br /><a href={url}>go to bbc news</a></div><ToastContainer className="p-3" position="top-start" style={{ "width": "1000px", "color": "white", "margin-right": "0%" }}>

                    <Toast onClose={() => setShow(false)} show={show} delay={3000} /* bg="success" */ style={{ "marginTop": "25px" }} autohide>

                        <Toast.Header>

                            <strong className="me-auto">You have stored the news !</strong>

                        </Toast.Header>
                    </Toast>
                </ToastContainer> 
                 <Modal className='LargeModal' show={showM} onHide={()=>setShowM(false)} 
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header >
          <Modal.Title>Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please login before using the store news function!
        

        </Modal.Body>
        <Modal.Footer>
        
          <Button variant="primary" onClick={()=>setShowM(false)}>
            <a href='/login' style={{"color":"white","textDecoration":"none"}}>login Now !</a>
          </Button>
          <Button onClick="#" variant="secondary" >
           login later
          </Button>
        </Modal.Footer>
      </Modal></>}</></>
     )}
    export default Article;