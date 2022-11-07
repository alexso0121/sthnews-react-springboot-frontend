

import Newsnavbar from './Newsnavbar.js';
import Layout from '../layout/layout.jsx';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import "./News.css"



import NewsItem from './Newsitem.js';


const App=()=>{
  let {id}=useParams()
  console.log(id)
  /* const [newsurl,setNewsurl]=useState(()=>{
    const initialstate="https://newsapi.org/v2/top-headlines?country=us&apiKey=c75d8c8ba2f1470bb24817af1ed669ee"
    return initialstate;}) */
  //console.log(id);
  const [articles, setActicles] = useState([]);
  const [isloading,setIsloading]=useState(true)
  const local="sources=bbc-news&category=finance"
  const initialstate="sources=bbc-news"

  
  useEffect( ()=>{
    
    },[])  
   
    useEffect(() => {
      let newsurl=initialstate;
      
      
      const getArticles = async () => {
        
        const res = await Axios.get("https://newsapi.org/v2/top-headlines?"+newsurl+"&apiKey=c75d8c8ba2f1470bb24817af1ed669ee");
        setActicles(res.data.articles);
        setIsloading(false);
       
      };
      getArticles();
    }, [id]);
    useEffect(() => {
     // console.log(newsurl)
      // Whatever else we want to do after the state has been updated.
   }, [])
   /* function result(){
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
        
    } */
    //console.log(articles)
   

  
            //return "https://newsapi.org/v2/top-headlines?country=us&apiKey=c75d8c8ba2f1470bb24817af1ed669ee";}
 
  return (<>{/* <Newsnavbar /> */}
  {isloading===true?<div className='loading'><h1><strong>Loading News</strong></h1></div>:
  <div className='newsitem'>
   
    {articles?.map(({title,description,url,urlToImage,publishedAt,source})=>(
    <NewsItem
    title={title} 
    desciption={description} 
    url={url} 
    urlToImage={urlToImage}
    publishedAt={publishedAt}
    source={source.name} /> 
))} </div>}</>

  )}


export default App;
