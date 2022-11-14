import { useState } from 'react';
import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
function Weatheritem ({week,forecastWeather,forecastMaxtemp,forecastMintemp,forecastWind}) {
   /*  const [weatherimage,setweatherimage]=useState(null); */
    
       function matchimage(){
        let weatherimage;
        if (forecastWeather=="Mainly cloudy with one or two rain patches. Bright periods during the day."){
            weatherimage='https://www.hko.gov.hk/en/wxinfo/worldwx/images/pic04.png'
        }
        return weatherimage;}

   
    return ( <><ListGroup.Item><Container><Row>
        <Col /* style={{"marginLeft":"100%"}} */>{week}</Col>
        <Col /* style={{"marginRight":"100%"}} */>{()=>matchimage()}</Col>
        </Row>
        </Container>
        <Row><Col style={{"marginLeft":"12px"}}>  {forecastWeather}</Col></Row>
        <Row><Col style={{"marginLeft":"12px"}}>
              Estimated temperature: {forecastMintemp.value}{forecastMintemp.unit} - {forecastMaxtemp.value}{forecastMaxtemp.unit}</Col></Row>
    </ListGroup.Item></> );
}

export default Weatheritem;