

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


const App=()=>{
  let {id}=useParams()
  console.log(id)
  /* const [newsurl,setNewsurl]=useState(()=>{
    const initialstate="https://newsapi.org/v2/top-headlines?country=us&apiKey=c75d8c8ba2f1470bb24817af1ed669ee"
    return initialstate;}) */
  //console.log(id);
  const [articles, setActicles] = useState([]);
  const [isloading,setIsloading]=useState(true)
  const username=localStorage.getItem("name")
  const [logouttoast,setLogouttoast]=useState(false)
  const [logintoast,setLogintoast]=useState(false)
  const [showM, setShowM] = useState(false);
  const baseurl=useContext(CatStateContext)
  console.log("baseurl  : "+baseurl)
    
  function handleClose() {setShowM(false);
    console.log("hide");
  localStorage.setItem("online",true);
window.location.reload()}

  //const online=localStorage.getItem("online")
    useEffect(()=>{
      if  (!localStorage.getItem("online")){
        setShowM(true)
      }
    },[])
  

   
    useEffect( ()=>{
      if(localStorage.getItem("logout")){
        setLogouttoast(true)
        localStorage.removeItem("logout")
      }
      if(localStorage.getItem("greeting")){
        window.location.reload();
        setLogintoast(true);
        
        localStorage.removeItem("greeting")}},[])
 useEffect( ()=>{
    
          window.addEventListener("offline",()=>{hasnetwork(false)});
          function hasnetwork(online){console.log(online);
            if(online==false){
            localStorage.clear()}
          }
          },[]) 
  
         useEffect(()=>{ if(localStorage.getItem("online")=="true"){
            setShowM(false);}},[])
    
    useEffect(() => {
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
      
      
      const getArticles = async () => {
        //https://sthbackend.com/shownews
        const res = await Axios.get(baseurl+"shownews"+newsurl);
        console.log(res)
        setActicles(res.data);
        setIsloading(false);
       
      };
      getArticles();
    }, [id]);
    useEffect(() => {
     // console.log(newsurl)
      // Whatever else we want to do after the state has been updated.
   }, [])
   
    //console.log(articles)
   

  
            //return "https://newsapi.org/v2/top-headlines?country=us&apiKey=c75d8c8ba2f1470bb24817af1ed669ee";}
 
  return (<><><Newsnavbar />
  
  <Modal className='LargeModal' show={showM} onHide={handleClose} 
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header >
          <Modal.Title>@Disclaimer</Modal.Title>
        </Modal.Header>
        <Modal.Body>This website is only for learning purpose. All the News are from @BBC News
        

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

          <strong className="me-auto" /* style={{"color":"white"}} */>You have logout !</strong>

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
