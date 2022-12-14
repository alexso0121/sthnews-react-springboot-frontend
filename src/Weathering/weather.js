import { useEffect, useState } from "react";
import Axios from "axios";
import './weather.css'
import ListGroup from 'react-bootstrap/ListGroup'
import Weatheritem from './weatheritem'
import Spinner from 'react-bootstrap/Spinner';

//showing weather
function Weather() {
    const [data,setData]=useState([]);
    const [generalSituation,setGeneralSituation]=useState([]);
    const [isloading,setIsloading]=useState(true)
   

    //fetching the api of the hk observatory
    useEffect(()=>{
        Axios.get("https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=en").then((res)=>{
           console.log(res.data.generalSituation)
           setData(res.data.weatherForecast);
           console.log(res.data.weatherForecast)
           setGeneralSituation(res.data.generalSituation)
           setIsloading(false)
         
        })},[])

        //specilizing  get only 8 days 
    return ( 
    <div className="weatherbody" >   
     {isloading === true ?
      <div className='loading'><h1><strong>Loading Weathering Forecast<br/><br/> 
    <Spinner animation="border" /></strong></h1></div> :
        <div className="weatherwhole">
       
       <ListGroup  style={{"marginTop":"20px","textAlign":"start","padding":"8px"}} >
        {data.map(({week,forecastWeather,forecastMaxtemp,forecastMintemp,ForecastIcon,forecastDate},idx)=>(
        idx<8&&(<Weatheritem
        forecastDate={forecastDate}
        week={week}
        forecastWeather={forecastWeather} 
        forecastMaxtemp={forecastMaxtemp}
        forecastMintemp={forecastMintemp}
        ForecastIcon={ForecastIcon} /> )
    ))}</ListGroup><div style={{"marginTop":"10px","font-size":"5px"}}>@data are from <a style={{"color":"black"}} href="https://www.hko.gov.hk/">https://www.hko.gov.hk/</a></div>
    </div>}</div> );
}

export default Weather;