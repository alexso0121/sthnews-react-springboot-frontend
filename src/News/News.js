

import Newsnavbar from './Newsnavbar.js';
import Layout from '../layout/layout.jsx';
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import Axios from 'axios';
import Toast  from 'react-bootstrap/Toast';

import ToastContainer from 'react-bootstrap/ToastContainer';
import Spinner from 'react-bootstrap/Spinner';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "./News.css"
import Buttom from '../layout/buttom.jsx';

import NewsItem from './Newsitem.js';
import { CatStateContext } from '../CatStateContext.js';

//Homepage of the website
const App=()=>{
  // id determine to show news in the main page
  // when id is numbers = category ; else = searched result
  let {id}=useParams()
  console.log(id)
  
  const [articles, setActicles] = useState([]);
  const [isloading,setIsloading]=useState(true)
  const username=localStorage.getItem("name")
  const [logouttoast,setLogouttoast]=useState(false)
  const [logintoast,setLogintoast]=useState(false)
  const [showM, setShowM] = useState(false);
  const baseurl=useContext(CatStateContext);
  const [nosearchnews,setNosearchnews]=useState(false);
 

  console.log("baseurl  : "+baseurl)

  //the disclaimer modal at the beginning, if offline with the website, show the modal 
  useEffect(()=>{
    if  (!localStorage.getItem("online")){
      setShowM(true)
    }
  },[])

  //the disclaimer modal at the beginning
  function handleClose() {setShowM(false);
    console.log("hide");
  localStorage.setItem("online",true);
window.location.reload()}

    
  

   //show the authentication notification
    useEffect( ()=>{
      if(localStorage.getItem("logout")){
        setLogouttoast(true)
        localStorage.removeItem("logout")
      }
      if(localStorage.getItem("greeting")){
        window.location.reload();
        setLogintoast(true);
        
        localStorage.removeItem("greeting")}},[])

        //determine the client is offline or not 
        //if so,clear the localstorage and show the modal next time
        useEffect( ()=>{
    
          window.addEventListener("offline",()=>{hasnetwork(false)});
          function hasnetwork(online){console.log(online);
            if(online==false){
            localStorage.clear()}
          }
          },[]) 
        
          //stop showing disclaimer modal once the client close the modal before 
         useEffect(()=>{ if(localStorage.getItem("online")=="true"){
            setShowM(false);}},[])
    
    // fetching today news
    useEffect(() => {
      //get the news base on the category
      let newsurl;
      if(id === undefined){
      newsurl="/0";}
      else if(id==="0"){
        newsurl="/0"
      }else if(id==="1"){
        newsurl="/1"
      }else if(id==="2"){
        newsurl="/2"
      }else if(id==="3"){
        newsurl="/3"
      }else if(id==="4"){
        newsurl="/4"
      }
      else{newsurl="/"+id}
      
      //main function for requesting a list of news
      const getArticles = async () => {
        //https://sthbackend.com/shownews
        const res = await Axios.get(baseurl+"shownews"+newsurl);
        console.log(res)
        setActicles(res.data);
        setIsloading(false);

        //will activate once the client search a news that show no result
        if(res.data.length==0){
          setNosearchnews(true);
          console.log("nonews")
        }
       
      };
      getArticles();
    }, [id]);
    
   
  
 
  return (<><><Newsnavbar />
  
  <Modal className='LargeModal' show={showM} onHide={handleClose} 
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header >
          <Modal.Title>@Disclaimer</Modal.Title>
        </Modal.Header>
        <Modal.Body>This website is only for learning purpose. All the News are web scrap from @BBC News.
          <br/>The news will automatically refresh at HKT 08:00 every day
        

        </Modal.Body>
        <Modal.Footer>
        
          <Button variant="primary" onClick={handleClose}>
            Continue
          </Button>
          <Button onClick="#" variant="secondary" >
           <a href='https://www.bbc.com/news' style={{"color":"white","textDecoration":"none"}}>Direct to BBC</a>
          </Button>
        </Modal.Footer>
      </Modal>

    {nosearchnews===true &&<div className='loading'><h1>
      <strong>No Search News found!</strong>
      </h1></div>}

    {isloading === true ? <div className='loading'><h1><strong>Loading News<br/><br/> 
      <Spinner animation="border" /></strong></h1></div> :
      <div className='newsitem'>

        {articles?.map(({ title, url, image, id, date,category }) => (
          <NewsItem
            title={title}
            id={id}
            date={date}
            url={url}
            image={image}
            category={category} />
        ))} </div>}<ToastContainer className="p-3" position="top-start" style={{ "width": "1000px", "color": "white", "margin-right": "0%" }}>

      <Toast onClose={() => setLogouttoast(false)} show={logouttoast} delay={3000}  style={{ "marginTop": "25px" }} autohide>

        <Toast.Header>

          <strong className="me-auto" >You have logout !</strong>

        </Toast.Header>
      </Toast>
    </ToastContainer>
  </><ToastContainer className="p-3" position="top-start" style={{ "width": "1000px", "color": "white", "margin-right": "0%" }}>

      <Toast onClose={() => setLogintoast(false)} show={logintoast} delay={3000}  style={{ "marginTop": "25px" }} autohide>

        <Toast.Header>

          <strong className="me-auto">Welcome {username}!You have successfully login to your account !</strong>

        </Toast.Header>
      </Toast>
    </ToastContainer></>


  )}


export default App;
