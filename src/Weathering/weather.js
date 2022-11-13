import { useEffect, useState } from "react";
import Axios from "axios";
import './weather.css'
import ListGroup from 'react-bootstrap/ListGroup'
import Weatheritem from './weatheritem'

function Weather() {
    const [data,setData]=useState([]);
    const [generalSituation,setGeneralSituation]=useState([]);
//ns-542.awsdns-03.net

    useEffect(()=>{
        Axios.get("https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=en").then((res)=>{
           console.log(res.data.generalSituation)
           setData(res.data.weatherForecast);
           console.log(res.data.weatherForecast)
           setGeneralSituation(res.data.generalSituation)
           //setIsloading(false);
           //console.log(data)
           
         
         /* setIsloading(false) */;
         
})},[])
    return ( <div className="weatherwhole">
        <div className="weathertitle">
            <h2><strong>Weather Report</strong></h2></div>
    <div className="generalSituation">
       <p><strong>General Situation of Hong Kong Weather:</strong><br/> {generalSituation}</p>
       <ListGroup >
        {data.map(({week,forecastWeather,forecastMaxtemp,forecastMintemp,forecastWind})=>(
        <Weatheritem
        week={week}
        forecastWeather={forecastWeather} 
        forecastMaxtemp={forecastMaxtemp}
        forecastMintemp={forecastMintemp}
        forecastWind={forecastWind} /> 
    ))}</ListGroup>
    </div></div> );
}

export default Weather;