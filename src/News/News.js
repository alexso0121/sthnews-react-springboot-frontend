

import Newsnavbar from './Newsnavbar.js';
import Layout from '../layout/layout.jsx';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import "./News.css"



import NewsItem from './Newsitem.js';


const App=()=>{
  let {id}=useParams()
  /* const [newsurl,setNewsurl]=useState(()=>{
    const initialstate="https://newsapi.org/v2/top-headlines?country=us&apiKey=c75d8c8ba2f1470bb24817af1ed669ee"
    return initialstate;}) */
  //console.log(id);
  const [articles, setActicles] = useState([]);
  /* const initialstate="https://newsapi.org/v2/top-headlines?country=us&apiKey=c75d8c8ba2f1470bb24817af1ed669ee"
  const business="https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=c75d8c8ba2f1470bb24817af1ed669ee" */
  const local="country=hk"
  const initialstate="country=us"
  const business="country=us&category=business"
  const sports="country=us&category=sports"
  const tech="country=us&category=technology"
  const search="q="+id
  
  useEffect( ()=>{
    
    },[])  
   
    useEffect(() => {
      let newsurl;
      if(id === undefined){
      newsurl=initialstate;}
      else if(id==="1"){
        newsurl=initialstate
      }else if(id==="2"){
        newsurl=local
      }else if(id==="3"){
        newsurl=business
      }else if(id==="4"){
        newsurl=tech
      }else if(id==="5"){
        newsurl=sports
      }
      else{newsurl=search}
      
      const getArticles = async () => {
        
        const res = await Axios.get("https://newsapi.org/v2/top-headlines?"+newsurl+"&apiKey=c75d8c8ba2f1470bb24817af1ed669ee");
        setActicles(res.data.articles);
        console.log(res);
      };
      getArticles();
    }, [id]);
    useEffect(() => {
     // console.log(newsurl)
      // Whatever else we want to do after the state has been updated.
   }, [])
   function result(){
    if(articles){
      return <div className='newsitem'>
   
      {articles?.map(({title,description,url,urlToImage,publishedAt,source})=>(
      <NewsItem
      title={title} 
      desciption={description} 
      url={url} 
      urlToImage={urlToImage}
      publishedAt={publishedAt}
      source={source.name} /> 
  ))} </div>;}else{
    return <h1>No related News found</h1>
  }
        
    }
   

  
            //return "https://newsapi.org/v2/top-headlines?country=us&apiKey=c75d8c8ba2f1470bb24817af1ed669ee";}
 
  return (<><Newsnavbar />
  {articles===false&&<h2>No related news found</h2>}
  <div className='newsitem'>
   
    {articles?.map(({title,description,url,urlToImage,publishedAt,source})=>(
    <NewsItem
    title={title} 
    desciption={description} 
    url={url} 
    urlToImage={urlToImage}
    publishedAt={publishedAt}
    source={source.name} /> 
))} </div></>

  )
}

export default App;
