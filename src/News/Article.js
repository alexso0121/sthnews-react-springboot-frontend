import { useContext, useEffect, useState } from "react"
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
import { CatStateContext } from "../CatStateContext";

function Article () {
    const {id} =useParams();
    const username=localStorage.getItem("name")
    const token=localStorage.getItem('token')
    const navigate=useNavigate
    const [title,setTitle]=useState([])
    const [description,setDescription]=useState([])
    const [image,setImage]=useState([])
    const [content,setContent]=useState([])
    const [date,setDate]=useState([])
    const [url,setUrl]=useState([])
    const userid=localStorage.getItem("userid")
    const [show, setShow] = useState(false);
    const [isloading,setIsloading]=useState(true)
    const [showM, setShowM] = useState(false);
    const baseurl=useContext(CatStateContext);
   
    
    
    
    //https://sthbackend.com/

    //get the required articles from the backend
    useEffect(()=> {
        
        fetch(baseurl+"getnews/"+id).then
        (res=>{
            //if the news is outdated ,activate the component
            
            setIsloading(false)
            return res.json()})
        .then((jsonData)=>{
           
            //set the articles contents
            console.log(jsonData)
        setTitle(jsonData.title)
        setDescription(jsonData.description);
        setImage(jsonData.image);
        setContent(jsonData.content.split("/n/"));
        setDate(jsonData.date);
        setUrl(jsonData.url)
       } )
         }
       ,[])
       useEffect(()=>{
        console.log(title)
       },[isloading])
     
     
    function islive(){
        console.log("is live")
        if (content===Array.length(0)){
            navigate(url)
        }
     }
    
     //handle client click store news
    function handlestored(){

                //check if the client authenticate
                //if not, show the modal event
                if(!localStorage.getItem("loginstatus")){
                    setShowM(true);
                    console.log("havent login");

                }else{
                    //store the news to the backend
                const Stored={"user_id":userid,
                                "news_id":id,
                                "title":title,
                                "username":username
                            
                           };
                           //show the toast (notification)
                window.scrollTo({top:0,left:0,behaviour:'smooth'})
                console.log(Stored);
                setShow(true)
                
                fetch(baseurl+'addstore',{
                    method:'POST',
                    headers:{"Content-Type":"application/json","Authorization":"Bearer "+token},
                    body:JSON.stringify(Stored)
                }).then((res)=>{
                    console.log("Stored a news");
                    
                })
                   
                  }}
    
    
    return ( 
       
        
       <><> {
       isloading === true ? <div className='loading'><h1><strong>Loading News<br/><br/> 
       
       <Spinner animation="border" /></strong></h1></div> :title.length===0?<div className="loading" >
        <h1><strong>
            Oops! Your news may be expired !
            </strong></h1></div>:
       <><div className="article" >{islive}
        <div >
             <h2 style={{ "marginTop": "20px", "marginBottom": "20px" }}>
                <strong>{title}</strong></h2>

                <img className="picture"  src={image}></img></div>
                <div ><p className="contentth">{date}</p>
                <p><strong>{description}</strong></p>
                {content.map(block=>(<p className="contentth" style={{ "lineHeight": "200%" }}>{block}</p>))}</div>

                <div><Button onClick={handlestored} variant="warning">Stored as Favorite</Button>
                <br /><a href={url}>go to bbc news</a></div><br/>
                <a href="/">Back to home page</a></div><ToastContainer className="p-3" position="top-start" style={{ "width": "1000px", "color": "white", "margin-right": "0%" }}>

                    <Toast onClose={() => setShow(false)} show={show} delay={3000}  style={{ "marginTop": "25px" }} autohide>

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
        
          <Button variant="primary" onClick={()=>{setShowM(false);localStorage.setItem("storedbeforereg",id)}}>
            <a href='/login' style={{"color":"white","textDecoration":"none"}}>login Now !</a>
          </Button>
          <Button onClick={()=>setShowM(false)} variant="secondary" >
           login later
          </Button>
        </Modal.Footer>
      </Modal></>}</></>
     )}
    export default Article;