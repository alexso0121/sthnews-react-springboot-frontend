import Axios from 'axios';

import Layout from '../layout/layout.jsx';
import { useEffect, useState } from 'react';
import NewsItem from './Newsitem.js';


const Newslist=(props)=>{

    const [articles,setActicles]=useState([]);
    const Id=props.id
    const [newsurl,setNewsurl]=useState("https://newsapi.org/v2/top-headlines?country=us&apiKey=c75d8c8ba2f1470bb24817af1ed669ee");
   
    useEffect(() => {
      const string="https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=c75d8c8ba2f1470bb24817af1ed669ee";
      if(Id===2)
      
        setNewsurl(string);
        console.log("condition")
      
      console.log(Id)
        console.log(newsurl)
      const getArticles = async ()=>{
        const res= await Axios.get(
            newsurl);
        setActicles(res.data.articles)
        console.log(res)
      };
      getArticles();
    },[])
    
    
    
    

    return (
    <div >
        {articles?.map(({title,description,url,urlToImage,publishedAt,source})=>(
            <NewsItem 
            title={title} 
            desciption={description} 
            url={url} 
            urlToImage={urlToImage}
            publishedAt={publishedAt}
            source={source.name} /> 
        ))  }
    </div>
  
    )
  }
  
  export default Newslist;
  